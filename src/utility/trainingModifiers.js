import { SparkDecayPriority, SparkEffectScaling, SparkPlacementLogic, TrainingEffectEnums } from './enums';

// TODO this new file is my current priority. I want to refactor the processes for calculating training effects in a way that reliably and 

//function getModifiedValue(originalValue, modifiersList, effectEnum) {
//    //const flatModifiersGrouping =
//}

export function calculateUnrandomizedTrainingEffects(baseEffectsList, modifiersList) {
    let clonedEffectsList = [...baseEffectsList];
    let modifiedEffectList = [];

    // TODO is this kind of sorting meaningful at all with my below algorithm?
    //const flatModifiersGrouping = Object.groupBy(modifiersList.filter(mod => mod.scaling === SparkEffectScaling.Flat), ({ mod }) => mod.effect);

    if (modifiersList?.length) {
        modifiersList?.filter(mod => mod.scaling === SparkEffectScaling.Flat)?.forEach((mod) => {

            let thisEffect = mod.effect;

            let relevantBaseEffectIndex = clonedEffectsList.findIndex(ce => ce.effect === thisEffect);
            if (relevantBaseEffectIndex) {
                let relevantBaseEffect = clonedEffectsList[relevantBaseEffectIndex];
                relevantBaseEffect.value += mod.value;
                clonedEffectsList[relevantBaseEffectIndex] = relevantBaseEffect
            }
            else {
                clonedEffectsList.push({ effect: mod.effect, value: mod.value });
            }

        });
    }


    //console.log("Cloned effects: " + JSON.stringify(clonedEffectsList));
    //console.log("Modifiers: " + JSON.stringify(modifiersList));


    if (clonedEffectsList?.length) {
        clonedEffectsList.forEach((e) => {
            //console.log("This effect: " + JSON.stringify(e)); // TODO why is e undefined?
            let relevantPercentageEffects = modifiersList.filter(mod => mod.scaling === SparkEffectScaling.Percentage && mod.effect === e.effect);

            if (relevantPercentageEffects?.length) {
                let percentageTotal = 0;

                relevantPercentageEffects?.forEach(({ mod }) => {
                    percentageTotal += mod.value;
                });

                let percentageBasedIncrease = Math.floor(e.value * (percentageTotal / 100));

                modifiedEffectList.push({ effect: e.effect, value: e.value + percentageBasedIncrease });
            }
            else {
                modifiedEffectList.push({ effect: e.effect, value: e.value });
            }
            
        });
    }

    
    


    //baseEffectsList.forEach((e) => { // TODO is this a good 
    //    let newValue = e.value;
    //    switch (e.effect) {
    //        case TrainingEffectEnums.StaminaChange:
                
    //            break;
    //        case TrainingEffectEnums.Might:

    //            break;
    //        case TrainingEffectEnums.Acuity:

    //            break;
    //        case TrainingEffectEnums.Willpower:

    //            break;
    //        case TrainingEffectEnums.Fluorescence:

    //            break;
    //        case TrainingEffectEnums.Fluffiness:

    //            break;
    //        case TrainingEffectEnums.SkillPoints:

    //            break;
    //        case TrainingEffectEnums.Pollen:
                
    //            break;
    //        default:
    //            throw Error("Invalid TrainingEffectEnum");
    //    }

    //    modifiedEffectList.push({ effect: e.effect, value: newValue });
    //});

    return modifiedEffectList;
}