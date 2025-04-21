import { useState, useEffect, useMemo, useCallback } from 'react';

import { TrainingEffectEnums } from '../../utility/enums';
import { makeStartingCharacterSheet } from '../../utility/characterSheets';
import { makeQuotas } from '../../utility/scenarioMechanics';

import TrainingActivityPanel from './TrainingActivityPanel'
import MAWFFCard from "../PlayerCard/MAWFFCard";
import TipsPanel from './TipsPanel';
import QuotaPanel from './QuotaPanel';

function TrainingContainer({ name, pronouns, image, finalizeTraining }) {

    const [characterSheet, setCharacterSheet] = useState(null);

    const [stamina, setStamina] = useState(null);
    const [pollen, setPollen] = useState(null);
    //const [turnsLeft, setTurnsLeft] = useState(null);

    const [currentTurn, setCurrentTurn] = useState(null);
    const [quotas, setQuotas] = useState(null);
    
    const maxStamina = 100;
    const baseStamina = 100;
    const basePollen = 0;
    //const baseTurnsLeft = 20;

    const reset = useCallback(() => {
        setCharacterSheet(makeStartingCharacterSheet(name, pronouns, image));

        setStamina(baseStamina);
        setPollen(basePollen);
        //setTurnsLeft(baseTurnsLeft);

        setCurrentTurn(1);
        setQuotas(makeQuotas());
    }, [name, pronouns, image]);

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
        //setTurnsLeft(null);
        setCurrentTurn(null);
        setQuotas(null);
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

    const attemptTraining = (trainingFacility) => {

        let failRate = trainingFacility.getFailureChance(stamina);
        // Returns a random integer from 1 to 100:
        let succcessRoll = Math.floor(Math.random() * 100) + 1;

        let isSuccess = failRate < succcessRoll; // TODO Show fail rates when selecting training!

        if (isSuccess) {
            let clonedSheet = { ...characterSheet };

            trainingFacility.trainingChanges.find(tc => tc.level === trainingFacility.level).effects.forEach((e) => {
                
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

        return isSuccess;
    };

    const attemptRest = () => {
        let restVariableRoll = 30 + Math.floor(Math.random() * 21);
        updateStamina(restVariableRoll);
    }


    const checkQuota = useCallback(() => {
        if (quotas && currentTurn && finalizeTraining) {
            let quotaDueNow = quotas.find(q => q.turnDeadline);

            if (quotaDueNow) {
                if (pollen >= quotaDueNow.quotaScore) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }, [pollen, quotas, currentTurn, finalizeTraining]);


    const processTurnAction = (doTurnAction) => { // TODO implement this process for cleaner turn actions/presentation
        // TODO set action-blocking/animation overlay

        doTurnAction();

        endTurn();

        // TODO unset action-blocking/animation overlay
    }

    const endTurn = () => {
        let nextTurnQuota = quotas.find(q => q.turnDeadline === currentTurn + 1);
        let allowNextTurn = true;
        if (nextTurnQuota) {
            allowNextTurn = checkQuota();
            if (allowNextTurn) {
                let clonedSheet = { ...characterSheet };

                clonedSheet.Might += nextTurnQuota.quotaReward.Might;
                clonedSheet.Acuity += nextTurnQuota.quotaReward.Acuity;
                clonedSheet.Willpower += nextTurnQuota.quotaReward.Willpower;
                clonedSheet.Fluorescence += nextTurnQuota.quotaReward.Fluorescence;
                clonedSheet.Fluffiness += nextTurnQuota.quotaReward.Fluffiness;
                clonedSheet.SkillPoints += nextTurnQuota.quotaReward.SkillPoints;

                setCharacterSheet(clonedSheet);
            }
            else {
                console.log("Oh DAMG you didn't get the quota I guess your training ends today I'm sowwy");
            }
        }

        if (allowNextTurn)
            setCurrentTurn(currentTurn + 1);
        else
            finalizeTraining(characterSheet);
        
    }


    //<p>TODO add Lamps panel...</p>

    return (<>

        <h2>Training Container Placeholder</h2>

        {(characterSheet && turnsLeft > 0) ? <div className="row">

            <div className="col-lg-12 my-3">
                <QuotaPanel
                    pollen={pollen}
                    currentTurn={currentTurn}
                    quotas={quotas}
                    stamina={stamina}
                    maxStamina={maxStamina}
                />
            </div>

            <div className="col-lg-1">
                <TipsPanel />
            </div>

            <div className="col-lg-7 my-3" >
                <TrainingActivityPanel
                    attemptTraining={attemptTraining}
                    attemptRest={attemptRest}
                    isOpen={characterSheet !== null}
                    endTurn={endTurn}
                />
            </div>

            <div className="col-lg-3 my-3" >
                <MAWFFCard
                    mawffStats={characterSheet}
                />
            </div>

            

            
        </div> : "Please wait a bit..."}

        


    </>);
}

export default TrainingContainer;