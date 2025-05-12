import { useState, useEffect, useMemo, useCallback } from 'react';

import { TrainingEffectEnums } from '../../utility/enums';
import { makeStartingCharacterSheet } from '../../utility/characterSheets';
import { NewJobTurns, makeQuotas, makeJobs } from '../../utility/scenarioMechanics';
import { calculateUnrandomizedTrainingEffects } from '../../utility/trainingModifiers';
import { defaultLamps, defaultSparks } from '../../utility/lamps';
import { defaultFacilitiesExercise, defaultFacilitiesStudies, defaultFacilitiesMarathon, defaultFacilitiesPhotomeditation, defaultFacilitiesPreening } from '../../utility/trainingActivities';

import TrainingActivityPanel from './TrainingActivityPanel'
import MAWFFCard from "../PlayerCard/MAWFFCard";
import TipsPanel from './TipsPanel';
import QuotaPanel from './QuotaPanel';
import MidturnModal from './BetweenTurnsModal/MidturnModal';

function TrainingContainer({ name, pronouns, image, finalizeTraining }) {

    const [characterSheet, setCharacterSheet] = useState(null);

    const [stamina, setStamina] = useState(null);
    const [pollen, setPollen] = useState(null);

    const [currentTurn, setCurrentTurn] = useState(null);
    const [quotas, setQuotas] = useState(null);
    const [currentQuota, setCurrentQuota] = useState(null);

    const [trainingFacilities, setTrainingFacilities] = useState([]);

    const [allJobsList, setAllJobsList] = useState(null);
    const [activeJobsList, setActiveJobsList] = useState(null);
    const [offeredJobsList, setOfferedJobsList] = useState(null);

    const [acquiredLamps, setAcquiredLamps] = useState(null);

    const [hoveringItem, setHoveringItem] = useState(null);
    const [hoveringJob, setHoveringJob] = useState(null);
    const [hoveringEffects, setHoveringEffects] = useState(null);

    const [midturnOverlayOpen, setMidturnOverlayOpen] = useState(false);
    const [nextTurnIsReady, setNextTurnIsReady] = useState(false);
    const [midturnMessages, setMidturnMessages] = useState([]);
    const [midturnLampsOffered, setMidturnLampsOffered] = useState([]);

    
    const maxStamina = 100;
    const baseStamina = 100;
    const basePollen = 0;

    const baseExpGain = 10;


    const reset = useCallback(() => {
        setCharacterSheet(makeStartingCharacterSheet(name, pronouns, image));

        setStamina(baseStamina);
        setPollen(basePollen);

        setCurrentTurn(1);
        setQuotas(makeQuotas());

        setAllJobsList(makeJobs());
        setActiveJobsList([null, null, null]);
        setOfferedJobsList([]);

        //setAcquiredLamps([defaultLamps[0], defaultLamps[0], defaultLamps[1], defaultLamps[6], defaultLamps[8]]);
        //setAcquiredLamps([defaultLamps[0], defaultLamps[0], defaultLamps[1], defaultLamps[6], defaultLamps[8],
        //    defaultLamps[3], defaultLamps[4], defaultLamps[5], defaultLamps[7], defaultLamps[9], defaultLamps[2]
        //]); // TESTING LAMP BEHAVIOR
        setAcquiredLamps([]);

        setHoveringItem(null);
        setHoveringJob(null);

        setTrainingFacilities([
            defaultFacilitiesExercise,
            defaultFacilitiesStudies,
            defaultFacilitiesMarathon,
            defaultFacilitiesPhotomeditation,
            defaultFacilitiesPreening
        ]);

        setMidturnOverlayOpen(false);
        setNextTurnIsReady(true);
    }, [name, pronouns, image]);


    const pushTurnMessage = useCallback((message) => {
        setMidturnMessages(oldMessages => [...oldMessages, message]);
    }, []);

    const unacquiredLamps = useMemo(() => {
        if (acquiredLamps) {
            return defaultLamps.filter(dl => !acquiredLamps?.some(al => dl.id === al.id));
        }
        else
            return [];
    }, [acquiredLamps]);

    const assignLampOffers = useCallback(() => {
        pushTurnMessage("You get to pick a NEW LAMP!");
        let lampsYetToOffer = [...unacquiredLamps];

        let lampsPicked = [];

        for (let i = 0; i < 3; i++) {
            // TODO; alter this below algorithm based on the rarity weights of every Lamp
            let totalRandomnessWeight = lampsYetToOffer.length * 10;


            let randomNumber = Math.floor(Math.random() * totalRandomnessWeight);
            let chosenIndex = -1;
            while (randomNumber >= 0) {
                randomNumber -= 10;
                chosenIndex++;
            }
            // TODO; alter this above algorithm based on the rarity weights of every Lamp

            lampsPicked.push(lampsYetToOffer[chosenIndex]);
            lampsYetToOffer.splice(chosenIndex, 1);
        }

        setMidturnLampsOffered(lampsPicked);
    }, [unacquiredLamps, pushTurnMessage]);


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

    const updateStamina = useCallback((staminaChange) => {
        if (staminaChange + stamina > maxStamina) {
            setStamina(maxStamina);
        }
        else if (staminaChange + stamina < 0) {
            setStamina(0);
        }
        else {
            setStamina(stamina + staminaChange);
        }
    }, [stamina]);

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

    const relevantSparks = useMemo(() => {

        if (acquiredLamps) {
            return defaultSparks.filter(ds =>
                acquiredLamps.some(al =>
                    al.sparksGenerated?.some(sg => sg.spark.id === ds.id)
                )
            );
        }
        else {
            return [];
        }
        
    }, [acquiredLamps]);

    

    const applyListOfEffects = useCallback((effectList) => {
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
    }, [characterSheet, pollen, updateStamina])

    const attemptTraining = useCallback((trainingFacility) => {
        let failRate = trainingFacility.getFailureChance(stamina);
        // Returns a random integer from 1 to 100:
        let succcessRoll = Math.floor(Math.random() * 100) + 1;

        let isSuccess = failRate < succcessRoll;

        if (isSuccess) {
            // TODO add Spark effects instead of that blank array!!!
            let unrandomizedEffects = calculateUnrandomizedTrainingEffects(trainingFacility.checkCurrentLevelEffects(), []);

            // TODO also add random effect modifiers... once they are implemented on facilities.

            applyListOfEffects(unrandomizedEffects);
        }

        return isSuccess;
    }, [applyListOfEffects, stamina]);

    const attemptRest = () => {
        let restVariableRoll = 30 + Math.floor(Math.random() * 21);
        pushTurnMessage("You got a good eep and healed " + restVariableRoll + " stamina.");
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
            // TODO - rework job deletion logic so that Jobs expire after X days, to reduce cheese tactics.
            clonedActivejobs[clonedJobIndex] = (clonedJobIndex + 1 <= clonedActivejobs.length) ? clonedActivejobs[clonedJobIndex + 1] : null
            clonedJobIndex++;
        }

        setActiveJobsList(clonedActivejobs);
    };




    const decaySparksOnFacilities = useCallback(() => {
        let clonedFacilities = [...trainingFacilities];

        clonedFacilities.forEach((facility) => {
            if (facility.sparks.length) {
                let randomSparkIndex = Math.floor(Math.random() * facility.sparks.length);

                facility.sparks.splice(randomSparkIndex, 1);
            }

        });

        setTrainingFacilities(clonedFacilities);
    }, [trainingFacilities]);

    const generateNewSparkPool = useCallback(() => {
        let ret = [];

        trainingFacilities.forEach((facility) => ret = ret.concat(facility.sparks));

        acquiredLamps.forEach((lamp) => {
            // TODO! Add conditional proc check to all lamps before iterating through them or allowing them to add sparks!

            lamp.sparksGenerated.forEach((sg) => {
                for (let i = 0; i < sg.quantity; i++)
                    ret.push(sg.spark);
            });
        });

        return ret;
    }, [acquiredLamps, trainingFacilities]);

    const redistributeSparks = useCallback(() => {
        let totalSparkPool = generateNewSparkPool();

        let clonedFacilities = [...trainingFacilities];
        clonedFacilities.forEach((cf) => cf.sparks = []);

        totalSparkPool.forEach((spark) => {
            let randomFacilityIndex = Math.floor(Math.random() * clonedFacilities.length);
            clonedFacilities[randomFacilityIndex].sparks.push(spark);
        });

        setTrainingFacilities(clonedFacilities);
    }, [generateNewSparkPool, trainingFacilities])

    const updateSparksForNextTurn = useCallback(() => {
        decaySparksOnFacilities();
        redistributeSparks();
    }, [decaySparksOnFacilities, redistributeSparks]);

    

    const endTurn = useCallback(() => {
        let allowNextTurn = true;
        if (currentQuota.turnDeadline === currentTurn + 1) {
            allowNextTurn = checkQuota(currentQuota);
            if (allowNextTurn) {
                pushTurnMessage("You met your Pollen quota this season!");

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
                pushTurnMessage("Oh DAMG you didn't get the quota I guess your training ends today I'm sowwy");
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

            let TESTLAMPGETTURNS = [2, 7, 21, 30, 41, 46, 50];
            if (TESTLAMPGETTURNS.some(x => x === currentTurn)) {
                assignLampOffers();
            }

            setHoveringItem(null);

            updateSparksForNextTurn(); // NOTE; can we relocate spark updates to AFTER we acquire a new lamp for the turn, so that the new lamp immediately activates?

            setCurrentTurn(currentTurn + 1);

            setNextTurnIsReady(true);
        }

        else {
            setHoveringItem(null);
            finalizeTraining(characterSheet);

            setNextTurnIsReady(true);
        }

    }, [currentQuota, currentTurn, checkQuota, pushTurnMessage, characterSheet, updateSparksForNextTurn, allJobsList, offeredJobsList, activeJobsList, assignLampOffers, finalizeTraining])

    const beginTurnAction = useCallback((selectedItem, performAction) => {
        setNextTurnIsReady(false);
        setMidturnOverlayOpen(true);

        performAction(selectedItem);

        endTurn();
    }, [endTurn]);

    const renderSparksHints = (sparks) => { 


        return (<div className="container vstack gap-1 sparks-glossary">
            <h5>Sparks Glossary</h5>
            {sparks?.map((s, sIndex) => <div key={sIndex} className="gameplay-tip tooltip-container">
                <div className="gameplay-icon" alt={s.name} style={{ backgroundImage: ("url(" + s.icon + ")") }} />
                
                <span>{s.name}</span>
                <div className="tip" style={{ left: "90%", top: "0"}}>
                    {s.description}
                </div>
            </div>)}
            {!sparks?.length && <span>If only you had a Lamp...</span> }
        </div>)
    }

    

    function addNewLamp(newLamp) {
        setAcquiredLamps(oldLamps => [...oldLamps, newLamp]);
        setMidturnLampsOffered([]);
    }

    const applyTraining = useCallback(({ trainingFacility, index }) => {

        var trainingSuccess = attemptTraining(trainingFacility);

        if (trainingSuccess) {
            pushTurnMessage("The training was a success!");

            let facilityOldLevel = trainingFacility.level;


            trainingFacility.giveTrainingExp(baseExpGain);
            trainingFacility.checkTrainingLevelup();
            trainingFacility.sparks = [];

            let facilitiesForSet = [...trainingFacilities];

            if (facilitiesForSet[index].level > facilityOldLevel) {
                pushTurnMessage("The facility leveled up!");
            }
            facilitiesForSet[index] = trainingFacility;
            setTrainingFacilities(facilitiesForSet);
        }
        else {
            pushTurnMessage("Oh ouchie you got a booboo D:");
        }

    }, [attemptTraining, trainingFacilities, pushTurnMessage]);

    // TODO; set turnActionTitle!

    return (<>

        <MidturnModal
            show={midturnOverlayOpen}
            setShow={setMidturnOverlayOpen}
            isLoadingNextTurn={!nextTurnIsReady}
            turnActionTitle={null}

            messages={midturnMessages}
            setMessages={setMidturnMessages}
            characterImage={characterSheet?.Image}

            offeredLamps={midturnLampsOffered}
            addSelectedLamp={addNewLamp}
        />

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
                    acquiredLamps={acquiredLamps}
                />
            </div>

            <div className="col-lg-1">
                <TipsPanel />

                {renderSparksHints(relevantSparks)}
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
                    beginTurnAction={beginTurnAction}
                    pushTurnMessage={pushTurnMessage}

                    trainingFacilities={trainingFacilities}
                    applyTraining={applyTraining}
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