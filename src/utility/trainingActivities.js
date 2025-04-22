import { TrainingEffectEnums } from './enums';

function checkTrainingLevelup() {
    if (this.level < 5 && this.exp >= this.expToLevel) {

        this.level = this.level + 1;
        this.exp = this.level === 5 ? 1 : 0;
        this.expToLevel = this.level === 5 ? 1 : ((this.level + 1) * 10);

    }
};

function giveTrainingExp(expGain) {
    if (this.level < 5) {
        this.exp += expGain;
    }
    
};

function checkCurrentLevelEffects() {
    return this.trainingChanges.find(tc => tc.level === this.level).effects;
};

function getFailureChance(stamina) {
    let thisStaminaChangeValue = this.checkCurrentLevelEffects().find(e => e.effect === TrainingEffectEnums.StaminaChange).value;

    if (thisStaminaChangeValue >= 0) {
        return 0;
    }

    let afterSpendStamina = stamina + thisStaminaChangeValue;

    let staminaMidpoint = (stamina + afterSpendStamina) / 2;

    let calculatedRisk = (50 - staminaMidpoint) * 2;

    return calculatedRisk > 0 ? calculatedRisk : 0;
};

export const defaultFacilitiesExercise = {
    name: "Exercise",

    trainingChanges: [
        {
            level: 1,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -15 },
                { effect: TrainingEffectEnums.Might, value: 11 },
                { effect: TrainingEffectEnums.Willpower, value: 2 },
                { effect: TrainingEffectEnums.Fluffiness, value: 2 },
                { effect: TrainingEffectEnums.SkillPoints, value: 0 }
            ]
        },
        {
            level: 2,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -17 },
                { effect: TrainingEffectEnums.Might, value: 13 },
                { effect: TrainingEffectEnums.Willpower, value: 3 },
                { effect: TrainingEffectEnums.Fluffiness, value: 3 },
                { effect: TrainingEffectEnums.SkillPoints, value: 0 }
            ]
        },
        {
            level: 3,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -19 },
                { effect: TrainingEffectEnums.Might, value: 14 },
                { effect: TrainingEffectEnums.Willpower, value: 4 },
                { effect: TrainingEffectEnums.Fluffiness, value: 3 },
                { effect: TrainingEffectEnums.SkillPoints, value: 2 }
            ]
        },
        {
            level: 4,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -21 },
                { effect: TrainingEffectEnums.Might, value: 15 },
                { effect: TrainingEffectEnums.Willpower, value: 5 },
                { effect: TrainingEffectEnums.Fluffiness, value: 4 },
                { effect: TrainingEffectEnums.SkillPoints, value: 3 }
            ]
        },
        {
            level: 5,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -23 },
                { effect: TrainingEffectEnums.Might, value: 18 },
                { effect: TrainingEffectEnums.Willpower, value: 6 },
                { effect: TrainingEffectEnums.Fluffiness, value: 5 },
                { effect: TrainingEffectEnums.SkillPoints, value: 3 }
            ]
        }
    ],

    level: 1,
    expToLevel: 20,
    exp: 0,

    checkTrainingLevelup: checkTrainingLevelup,
    giveTrainingExp: giveTrainingExp,
    checkCurrentLevelEffects,
    getFailureChance: getFailureChance
}

export const defaultFacilitiesStudies = {
    name: "Studies",

    trainingChanges: [
        {
            level: 1,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: 5 },
                { effect: TrainingEffectEnums.Might, value: 1 },
                { effect: TrainingEffectEnums.Acuity, value: 8 },
                { effect: TrainingEffectEnums.Fluorescence, value: 1 },
                { effect: TrainingEffectEnums.SkillPoints, value: 1 }
            ]
        },
        {
            level: 2,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: 5 },
                { effect: TrainingEffectEnums.Might, value: 1 },
                { effect: TrainingEffectEnums.Acuity, value: 10 },
                { effect: TrainingEffectEnums.Fluorescence, value: 1 },
                { effect: TrainingEffectEnums.SkillPoints, value: 2 }
            ]
        },
        {
            level: 3,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: 5 },
                { effect: TrainingEffectEnums.Might, value: 1 },
                { effect: TrainingEffectEnums.Acuity, value: 11 },
                { effect: TrainingEffectEnums.Fluorescence, value: 2 },
                { effect: TrainingEffectEnums.SkillPoints, value: 4 }
            ]
        },
        {
            level: 4,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: 5 },
                { effect: TrainingEffectEnums.Might, value: 1 },
                { effect: TrainingEffectEnums.Acuity, value: 13 },
                { effect: TrainingEffectEnums.Fluorescence, value: 2 },
                { effect: TrainingEffectEnums.SkillPoints, value: 6 }
            ]
        },
        {
            level: 5,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: 5 },
                { effect: TrainingEffectEnums.Might, value: 2 },
                { effect: TrainingEffectEnums.Acuity, value: 15 },
                { effect: TrainingEffectEnums.Fluorescence, value: 3 },
                { effect: TrainingEffectEnums.SkillPoints, value: 8 }
            ]
        }
    ],

    level: 1,
    expToLevel: 20,
    exp: 0,

    checkTrainingLevelup: checkTrainingLevelup,
    giveTrainingExp: giveTrainingExp,
    checkCurrentLevelEffects,
    getFailureChance: getFailureChance
}

export const defaultFacilitiesMarathon = {
    name: "Marathon",

    trainingChanges: [
        {
            level: 1,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -15 },
                { effect: TrainingEffectEnums.Might, value: 3 },
                { effect: TrainingEffectEnums.Acuity, value: 2 },
                { effect: TrainingEffectEnums.Willpower, value: 9 },
                { effect: TrainingEffectEnums.SkillPoints, value: 1 }
            ]
        },
        {
            level: 2,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -17 },
                { effect: TrainingEffectEnums.Might, value: 4 },
                { effect: TrainingEffectEnums.Acuity, value: 2 },
                { effect: TrainingEffectEnums.Willpower, value: 12 },
                { effect: TrainingEffectEnums.SkillPoints, value: 1 }
            ]
        },
        {
            level: 3,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -19 },
                { effect: TrainingEffectEnums.Might, value: 5 },
                { effect: TrainingEffectEnums.Acuity, value: 3 },
                { effect: TrainingEffectEnums.Willpower, value: 14 },
                { effect: TrainingEffectEnums.SkillPoints, value: 1 }
            ]
        },
        {
            level: 4,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -21 },
                { effect: TrainingEffectEnums.Might, value: 5 },
                { effect: TrainingEffectEnums.Acuity, value: 3 },
                { effect: TrainingEffectEnums.Willpower, value: 17 },
                { effect: TrainingEffectEnums.SkillPoints, value: 3 }
            ]
        },
        {
            level: 5,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -23 },
                { effect: TrainingEffectEnums.Might, value: 6 },
                { effect: TrainingEffectEnums.Acuity, value: 4 },
                { effect: TrainingEffectEnums.Willpower, value: 20 },
                { effect: TrainingEffectEnums.SkillPoints, value: 3 }
            ]
        }
    ],

    level: 1,
    expToLevel: 20,
    exp: 0,

    checkTrainingLevelup: checkTrainingLevelup,
    giveTrainingExp: giveTrainingExp,
    checkCurrentLevelEffects,
    getFailureChance: getFailureChance
}

export const defaultFacilitiesPhotomeditation = {
    name: "Photomeditation",

    trainingChanges: [
        {
            level: 1,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -11 },
                { effect: TrainingEffectEnums.Acuity, value: 1 },
                { effect: TrainingEffectEnums.Willpower, value: 1 },
                { effect: TrainingEffectEnums.Fluorescence, value: 12 },
                { effect: TrainingEffectEnums.SkillPoints, value: 0 }
            ]
        },
        {
            level: 2,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -13 },
                { effect: TrainingEffectEnums.Acuity, value: 2 },
                { effect: TrainingEffectEnums.Willpower, value: 2 },
                { effect: TrainingEffectEnums.Fluorescence, value: 13 },
                { effect: TrainingEffectEnums.SkillPoints, value: 1 }
            ]
        },
        {
            level: 3,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -15 },
                { effect: TrainingEffectEnums.Acuity, value: 2 },
                { effect: TrainingEffectEnums.Willpower, value: 3 },
                { effect: TrainingEffectEnums.Fluorescence, value: 15 },
                { effect: TrainingEffectEnums.SkillPoints, value: 2 }
            ]
        },
        {
            level: 4,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -17 },
                { effect: TrainingEffectEnums.Acuity, value: 3 },
                { effect: TrainingEffectEnums.Willpower, value: 4 },
                { effect: TrainingEffectEnums.Fluorescence, value: 16 },
                { effect: TrainingEffectEnums.SkillPoints, value: 3 }
            ]
        },
        {
            level: 5,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -19 },
                { effect: TrainingEffectEnums.Acuity, value: 4 },
                { effect: TrainingEffectEnums.Willpower, value: 4 },
                { effect: TrainingEffectEnums.Fluorescence, value: 18 },
                { effect: TrainingEffectEnums.SkillPoints, value: 4 }
            ]
        }
    ],

    level: 1,
    expToLevel: 20,
    exp: 0,

    checkTrainingLevelup: checkTrainingLevelup,
    giveTrainingExp: giveTrainingExp,
    checkCurrentLevelEffects,
    getFailureChance: getFailureChance
}

export const defaultFacilitiesPreening = {
    name: "Preening",

    trainingChanges: [
        {
            level: 1,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -16 },
                { effect: TrainingEffectEnums.Fluorescence, value: 2 },
                { effect: TrainingEffectEnums.Fluffiness, value: 12 },
                { effect: TrainingEffectEnums.SkillPoints, value: 2 },
                { effect: TrainingEffectEnums.Pollen, value: 200 }
            ]
        },
        {
            level: 2,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -18 },
                { effect: TrainingEffectEnums.Fluorescence, value: 2 },
                { effect: TrainingEffectEnums.Fluffiness, value: 12 },
                { effect: TrainingEffectEnums.SkillPoints, value: 2 },
                { effect: TrainingEffectEnums.Pollen, value: 200 }
            ]
        },
        {
            level: 3,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -20 },
                { effect: TrainingEffectEnums.Fluorescence, value: 2 },
                { effect: TrainingEffectEnums.Fluffiness, value: 14 },
                { effect: TrainingEffectEnums.SkillPoints, value: 3 },
                { effect: TrainingEffectEnums.Pollen, value: 300 }
            ]
        },
        {
            level: 4,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -22 },
                { effect: TrainingEffectEnums.Fluorescence, value: 2 },
                { effect: TrainingEffectEnums.Fluffiness, value: 17 },
                { effect: TrainingEffectEnums.SkillPoints, value: 3 },
                { effect: TrainingEffectEnums.Pollen, value: 400 }
            ]
        },
        {
            level: 5,
            effects: [
                { effect: TrainingEffectEnums.StaminaChange, value: -24 },
                { effect: TrainingEffectEnums.Fluorescence, value: 3 },
                { effect: TrainingEffectEnums.Fluffiness, value: 19 },
                { effect: TrainingEffectEnums.SkillPoints, value: 4 },
                { effect: TrainingEffectEnums.Pollen, value: 500 }
            ]
        }
    ],

    level: 1,
    expToLevel: 20,
    exp: 0,

    checkTrainingLevelup: checkTrainingLevelup,
    giveTrainingExp: giveTrainingExp,
    checkCurrentLevelEffects,
    getFailureChance: getFailureChance
}