import { useState, useEffect, useMemo, useCallback } from 'react';

import { TrainingEffectEnums } from '../../utility/enums';
import { makeStartingCharacterSheet } from '../../utility/characterSheets';
import { NewJobTurns, makeQuotas, makeJobs } from '../../utility/scenarioMechanics';
import { calculateUnrandomizedTrainingEffects } from '../../utility/trainingModifiers';

import TrainingActivityPanel from './TrainingActivityPanel'
import MAWFFCard from "../PlayerCard/MAWFFCard";
import TipsPanel from './TipsPanel';
import QuotaPanel from './QuotaPanel';

function TrainingContainer({ name, pronouns, image, finalizeTraining }) {

    const [characterSheet, setCharacterSheet] = useState(null);

    const [stamina, setStamina] = useState(null);
    const [pollen, setPollen] = useState(null);

    const [currentTurn, setCurrentTurn] = useState(null);
    const [quotas, setQuotas] = useState(null);
    const [currentQuota, setCurrentQuota] = useState(null);

    const [allJobsList, setAllJobsList] = useState(null);
    const [activeJobsList, setActiveJobsList] = useState(null);
    const [offeredJobsList, setOfferedJobsList] = useState(null);

    const [hoveringItem, setHoveringItem] = useState(null);
    const [hoveringJob, setHoveringJob] = useState(null);
    const [hoveringEffects, setHoveringEffects] = useState(null);

    
    const maxStamina = 100;
    const baseStamina = 100;
    const basePollen = 0;

    const reset = useCallback(() => {
        setCharacterSheet(makeStartingCharacterSheet(name, pronouns, image));

        setStamina(baseStamina);
        setPollen(basePollen);

        setCurrentTurn(1);
        setQuotas(makeQuotas());

        setAllJobsList(makeJobs());
        setActiveJobsList([null, null, null]);
        setOfferedJobsList([]);

        setHoveringItem(null);
        setHoveringJob(null);
    }, [name, pronouns, image]);

    useEffect(() => {
        if (quotas && currentTurn) {
            if (currentQuota) {
                let nextQuota = quotas.filter(q => q.turnDeadline >= currentTurn)?.at(0);

                if (nextQuota && nextQuota !== currentQuota)
                    setCurrentQuota(nextQuota);
            }
            else {
                setCurrentQuota(quotas[0]);
            }
        }
        else {
            if (currentQuota)
                setCurrentQuota(null);
        }
    }, [currentTurn, quotas, currentQuota]);

    useEffect(() => {
        if (hoveringItem)
            setHoveringEffects(calculateUnrandomizedTrainingEffects(hoveringItem.checkCurrentLevelEffects(), []));
        else if (hoveringJob)
            setHoveringEffects(calculateUnrandomizedTrainingEffects(hoveringJob.successRewards, []));
        else
            setHoveringEffects(null);
    }, [hoveringItem, hoveringJob]);

    const updateStamina = (staminaChange) => {
        if (staminaChange + stamina > maxStamina) {
            setStamina(maxStamina);
        }
        else if (staminaChange + stamina < 0) {
            setStamina(0);
        }
        else {
            setStamina(stamina + staminaChange);
        }
    };

    const nullifyTrainingScenario = () => {
        setCharacterSheet(null);
        setStamina(null);
        setPollen(null);
        setCurrentTurn(null);
        setQuotas(null);

        setAllJobsList(null);
        setActiveJobsList(null);
        setOfferedJobsList(null);
    };

    const turnsLeft = useMemo(() => {
        if (quotas && currentTurn) {
            return quotas[quotas.length - 1].turnDeadline - currentTurn;
        } 
    }, [quotas, currentTurn]);

    useEffect(() => {
        if (!name?.length || !pronouns?.length || !image?.length)
            nullifyTrainingScenario();
        else
            reset();
    }, [name, pronouns, image, reset]);

    useEffect(() => {
        if (turnsLeft <= 0) {
            finalizeTraining(characterSheet);
        }
    }, [turnsLeft, characterSheet, finalizeTraining]);

    const applyListOfEffects = (effectList) => {
        let clonedSheet = { ...characterSheet };

        effectList.forEach((e) => {
            switch (e.effect) {
                case TrainingEffectEnums.StaminaChange:
                    updateStamina(e.value);
                    break;
                case TrainingEffectEnums.Might:
                    clonedSheet.Might += e.value;
                    break;
                case TrainingEffectEnums.Acuity:
                    clonedSheet.Acuity += e.value;
                    break;
                case TrainingEffectEnums.Willpower:
                    clonedSheet.Willpower += e.value;
                    break;
                case TrainingEffectEnums.Fluorescence:
                    clonedSheet.Fluorescence += e.value;
                    break;
                case TrainingEffectEnums.Fluffiness:
                    clonedSheet.Fluffiness += e.value;
                    break;
                case TrainingEffectEnums.SkillPoints:
                    clonedSheet.SkillPoints += e.value;
                    break;
                case TrainingEffectEnums.Pollen:
                    setPollen(pollen + e.value);
                    break;
                default:
                    throw Error("Invalid TrainingEffectEnum");
            }
        });

        setCharacterSheet(clonedSheet);
    }

    const attemptTraining = (trainingFacility) => {

        let failRate = trainingFacility.getFailureChance(stamina);
        // Returns a random integer from 1 to 100:
        let succcessRoll = Math.floor(Math.random() * 100) + 1;

        let isSuccess = failRate < succcessRoll; // TODO Show fail rates when selecting training!

        if (isSuccess) {
            applyListOfEffects(trainingFacility.trainingChanges.find(tc => tc.level === trainingFacility.level).effects);
        }

        return isSuccess;
    };

    const attemptRest = () => {
        let restVariableRoll = 30 + Math.floor(Math.random() * 21);
        updateStamina(restVariableRoll);
    }

    const checkQuota = useCallback((quotaDueNow) => {
        if (pollen && finalizeTraining) {
            if (pollen >= quotaDueNow.quotaScore) {
                return true;
            }
            else {
                return false;
            }
        }
    }, [pollen, finalizeTraining]);

    const giveJobReward = (job, jobIndex) => {

        applyListOfEffects(job.successRewards);

        let clonedJobIndex = jobIndex;
        let clonedActivejobs = [...activeJobsList];

        while (clonedJobIndex < clonedActivejobs.length) { // Move all jobs one space up the list, deleting the job that was successful. The last slot will be empty.
            clonedActivejobs[clonedJobIndex] = (clonedJobIndex + 1 <= clonedActivejobs.length) ? clonedActivejobs[clonedJobIndex + 1] : null
            clonedJobIndex++;
        }

        setActiveJobsList(clonedActivejobs);
    };


    //const processTurnAction = (doTurnAction) => { // TODO implement this process for cleaner turn actions/presentation
    //    // TODO set action-blocking/animation overlay

    //    doTurnAction();

    //    endTurn();

    //    // TODO unset action-blocking/animation overlay
    //}

    const endTurn = () => {
        let allowNextTurn = true;
        if (currentQuota.turnDeadline === currentTurn + 1) {
            allowNextTurn = checkQuota(currentQuota);
            if (allowNextTurn) {
                let clonedSheet = { ...characterSheet };

                clonedSheet.Might += currentQuota.quotaReward.Might;
                clonedSheet.Acuity += currentQuota.quotaReward.Acuity;
                clonedSheet.Willpower += currentQuota.quotaReward.Willpower;
                clonedSheet.Fluorescence += currentQuota.quotaReward.Fluorescence;
                clonedSheet.Fluffiness += currentQuota.quotaReward.Fluffiness;
                clonedSheet.SkillPoints += currentQuota.quotaReward.SkillPoints;

                setCharacterSheet(clonedSheet);
            }
            else {
                console.log("Oh DAMG you didn't get the quota I guess your training ends today I'm sowwy");
            }
        }

        if (allowNextTurn) {
            let turnForNewJob = NewJobTurns.some(jt => jt === currentTurn + 1);
            if (turnForNewJob) {

                let validNewJobs = allJobsList.filter(j => j.quotaNumber === currentQuota.quotaNumber && !offeredJobsList.some(oj => oj.id === j.id));

                if (validNewJobs.length) {
                    let randomNumber = Math.floor(Math.random() * validNewJobs.length);
                    let chosenJob = validNewJobs[randomNumber];

                    let clonedActiveJobs = [...activeJobsList];
                    clonedActiveJobs[2] = clonedActiveJobs[1];
                    clonedActiveJobs[1] = clonedActiveJobs[0];
                    clonedActiveJobs[0] = chosenJob;

                    setActiveJobsList(clonedActiveJobs);

                    let clonedOffers = [...offeredJobsList];
                    clonedOffers.push(chosenJob);
                    setOfferedJobsList(clonedOffers);
                }


            }

            setHoveringItem(null);
            setCurrentTurn(currentTurn + 1);
        }

        else {
            setHoveringItem(null);
            finalizeTraining(characterSheet);
        }
        
    }


    //<p>TODO add Lamps panel...</p>

    return (<>

        <h2>How cool are you?</h2>

        {(characterSheet && turnsLeft > 0) ? <div className="row">

            <div className="col-lg-12 my-3">
                <QuotaPanel
                    pollen={pollen}
                    currentTurn={currentTurn}
                    quotas={quotas}
                    stamina={stamina}
                    maxStamina={maxStamina}
                    tooltipItem={hoveringEffects}
                />
            </div>

            <div className="col-lg-1">
                <TipsPanel />
            </div>

            <div className="col-lg-7 my-3" >
                <TrainingActivityPanel
                    attemptTraining={attemptTraining}
                    attemptRest={attemptRest}
                    giveJobReward={giveJobReward}
                    isOpen={characterSheet !== null}
                    jobs={activeJobsList}
                    endTurn={endTurn}
                    characterSheet={characterSheet}
                    characterStamina={stamina}
                    setHoveringItem={setHoveringItem}
                    setHoveringJob={setHoveringJob}
                />
            </div>

            <div className="col-lg-3 my-3" >
                <MAWFFCard
                    mawffStats={characterSheet}
                    tooltipItem={hoveringEffects}
                />
            </div>

            

            
        </div> : "Please wait a bit..."}

        


    </>);
}

export default TrainingContainer;