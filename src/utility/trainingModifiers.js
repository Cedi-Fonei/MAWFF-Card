import { SparkEffectScaling } from './enums';

export function calculateUnrandomizedTrainingEffects(baseEffectsList, modifiersList) {
    let clonedEffectsList = structuredClone(baseEffectsList);
    let modifiedEffectList = [];

    if (modifiersList?.length) {
        modifiersList?.filter(mod => mod.effectScaling === SparkEffectScaling.Flat)?.forEach((mod) => {

            let thisEffect = mod.effectType;

            let relevantBaseEffectIndex = clonedEffectsList.findIndex(ce => ce.effect === thisEffect);
            if (relevantBaseEffectIndex >= 0) {
                let relevantBaseEffect = clonedEffectsList[relevantBaseEffectIndex];
                relevantBaseEffect.value += mod.effectValue;
            }
            else {
                clonedEffectsList.push({ effect: mod.effectType, value: mod.effectValue });
            }

        });
    }

    if (clonedEffectsList?.length) {
        clonedEffectsList.forEach((e) => {
            let relevantPercentageEffects = modifiersList.filter(mod => mod.effectScaling === SparkEffectScaling.Percentage && mod.effectType === e.effect);

            if (relevantPercentageEffects?.length) {
                let percentageTotal = 0;

                relevantPercentageEffects?.forEach((mod) => {
                    percentageTotal += mod.effectValue;
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
}

export function calculateRandomizedTrainingEffects(baseEffectsList, modifiersList) {
    // TODO in the future, this will be used
    return baseEffectsList;
}