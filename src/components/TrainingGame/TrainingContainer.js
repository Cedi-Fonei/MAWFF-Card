import { useState, useEffect, useMemo } from 'react';

import { TrainingEffectEnums } from '../../utility/enums';

import TrainingActivityPanel from './TrainingActivityPanel'
import MAWFFCard from "../PlayerCard/MAWFFCard";
import TipsPanel from './TipsPanel';

function TrainingContainer({ name, pronouns, image, finalizeTraining }) {

    const [characterSheet, setCharacterSheet] = useState(null);

    const [stamina, setStamina] = useState(null);
    const [pollen, setPollen] = useState(null);
    const [turnsLeft, setTurnsLeft] = useState(null);
    
    const maxStamina = 100;
    const baseStamina = 100;
    const basePollen = 0;
    const baseTurnsLeft = 20;


    const reset = () => {
        setCharacterSheet({
            Might: 50,
            Acuity: 50,
            Willpower: 50,
            Fluorescence: 50,
            Fluffiness: 50,
            SkillPoints: 0,

            skills: []
        });

        setStamina(baseStamina);
        setPollen(basePollen);
        setTurnsLeft(baseTurnsLeft);
    };

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

    const nullifyCharsheet = () => {
        setCharacterSheet(null);
        setStamina(null);
        setPollen(null);
        setTurnsLeft(null);
    };

    useEffect(() => {
        if (!name?.length || !pronouns?.length || !image?.length)
            nullifyCharsheet();
        else
            reset();
    }, [name, pronouns, image]);

    useEffect(() => {
        if (turnsLeft <= 0) {
            finalizeTraining(characterSheet);
        }
    }, [turnsLeft, characterSheet, finalizeTraining]);

    const attemptTraining = (trainingFacility) => {

        let isSuccess = true;

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
        else {
            console.log("waoh nooo");
        }

        return isSuccess;
    };

    const endTurn = () => {
        setTurnsLeft(turnsLeft - 1);
    }


    //<p>TODO add Quota panel...</p>
    //<p>TODO add Tips panel...</p>
    //<p>TODO add Lamps panel...</p>

    return (<>

        <h2>Training Container Placeholder</h2>

        {(characterSheet && turnsLeft > 0) ? <div className="row">

            <div className="col-lg-12 my-3">
                Turns Left: <span className="kh-gummi">{turnsLeft}</span>
            </div>

            <div className="col-lg-1">
                <TipsPanel />
            </div>

            <div className="col-lg-7 my-3" >
                <TrainingActivityPanel
                    attemptTraining={attemptTraining}
                    isOpen={characterSheet !== null}
                    endTurn={endTurn}
                />
            </div>

            <div className="col-lg-3 my-3" >
                <MAWFFCard
                    name={name}
                    pronouns={pronouns}
                    image={image}
                    mawffStats={characterSheet}
                />
            </div>

            

            
        </div> : "Please wait a bit..."}

        


    </>);
}

export default TrainingContainer;