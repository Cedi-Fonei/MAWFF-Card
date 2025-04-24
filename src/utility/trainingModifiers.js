import { SparkDecayPriority, SparkEffectScaling, SparkPlacementLogic, TrainingEffectEnums } from './enums';

// TODO this new file is my current priority. I want to refactor the processes for calculating training effects in a way that reliably and 

export function calculateUnrandomizedTrainingEffects(baseEffectsList, modifiersList) {
    let clonedEffectsList = [...baseEffectsList];
    let modifiedEffectList = [];

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

    if (clonedEffectsList?.length) {
        clonedEffectsList.forEach((e) => {
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

    return modifiedEffectList;
};

export function calculateRandomizedTrainingEffects(baseEffectsList, modifiersList) {
    // TODO in the future, this will be used
    return baseEffectsList;
}