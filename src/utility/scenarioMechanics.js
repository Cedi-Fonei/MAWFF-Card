import { AttributeEnums, TrainingEffectEnums } from './enums';

const calculateQuotaRewards = (rewardModifiers) => {
    return this.quotaReward;
} 

export const NewJobTurns = [2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57];

const quotaDifficulties = [6, 12, 24];

function checkJobSuccessRate(characterSheet) {
    console.log(JSON.stringify(this));
    let baseDifficulty = quotaDifficulties[this.quotaNumber - 1];

    //let rankNumber = 
    // TODO calculate a number for percentage chance
    return "TODO";
}

const attemptJob = () => {

}

const allJobs = [
    {
        name: "Harvest Watermelon Orchard",
        id: 1,
        quotaNumber: 1,
        mainAttribute: TrainingEffectEnums.Might,
        successRewards: [
            { effect: TrainingEffectEnums.Might, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 20 },
            { effect: TrainingEffectEnums.Pollen, value: 400 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Tutor Baby Grubs",
        id: 2,
        quotaNumber: 1,
        mainAttribute: TrainingEffectEnums.Acuity,
        successRewards: [
            { effect: TrainingEffectEnums.Acuity, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 20 },
            { effect: TrainingEffectEnums.Pollen, value: 400 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Public Speaking",
        id: 3,
        quotaNumber: 1,
        mainAttribute: TrainingEffectEnums.Willpower,
        successRewards: [
            { effect: TrainingEffectEnums.Willpower, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 20 },
            { effect: TrainingEffectEnums.Pollen, value: 400 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Charge Your Phone",
        id: 4,
        quotaNumber: 1,
        mainAttribute: TrainingEffectEnums.Fluorescence,
        successRewards: [
            { effect: TrainingEffectEnums.Fluorescence, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 20 },
            { effect: TrainingEffectEnums.Pollen, value: 400 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Pollenate A Field",
        id: 5,
        quotaNumber: 1,
        mainAttribute: TrainingEffectEnums.Fluffiness,
        successRewards: [
            { effect: TrainingEffectEnums.Fluffiness, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 20 },
            { effect: TrainingEffectEnums.Pollen, value: 400 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Substitute for a Bulldozer",
        id: 6,
        quotaNumber: 2,
        mainAttribute: TrainingEffectEnums.Might,
        successRewards: [
            { effect: TrainingEffectEnums.Might, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 30 },
            { effect: TrainingEffectEnums.Pollen, value: 1000 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Fact-check a Fan Wiki",
        id: 7,
        quotaNumber: 2,
        mainAttribute: TrainingEffectEnums.Acuity,
        successRewards: [
            { effect: TrainingEffectEnums.Acuity, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 30 },
            { effect: TrainingEffectEnums.Pollen, value: 1000 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Deliver a Parcel Across the Country",
        id: 8,
        quotaNumber: 2,
        mainAttribute: TrainingEffectEnums.Willpower,
        successRewards: [
            { effect: TrainingEffectEnums.Willpower, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 30 },
            { effect: TrainingEffectEnums.Pollen, value: 1000 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Explode an Evil Tree",
        id: 9,
        quotaNumber: 2,
        mainAttribute: TrainingEffectEnums.Fluorescence,
        successRewards: [
            { effect: TrainingEffectEnums.Fluorescence, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 30 },
            { effect: TrainingEffectEnums.Pollen, value: 1000 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Win a Beauty Contest",
        id: 10,
        quotaNumber: 2,
        mainAttribute: TrainingEffectEnums.Fluffiness,
        successRewards: [
            { effect: TrainingEffectEnums.Fluffiness, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 30 },
            { effect: TrainingEffectEnums.Pollen, value: 1000 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Punch a Falling Meteor",
        id: 11,
        quotaNumber: 3,
        mainAttribute: TrainingEffectEnums.Might,
        successRewards: [
            { effect: TrainingEffectEnums.Might, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 50 },
            { effect: TrainingEffectEnums.Pollen, value: 3000 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Solve World Hunger",
        id: 12,
        quotaNumber: 3,
        mainAttribute: TrainingEffectEnums.Acuity,
        successRewards: [
            { effect: TrainingEffectEnums.Acuity, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 50 },
            { effect: TrainingEffectEnums.Pollen, value: 3000 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Skydive Into a Black Hole (and live)",
        id: 13,
        quotaNumber: 3,
        mainAttribute: TrainingEffectEnums.Willpower,
        successRewards: [
            { effect: TrainingEffectEnums.Willpower, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 50 },
            { effect: TrainingEffectEnums.Pollen, value: 3000 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Replace the Sun",
        id: 14,
        quotaNumber: 3,
        mainAttribute: TrainingEffectEnums.Fluorescence,
        successRewards: [
            { effect: TrainingEffectEnums.Fluorescence, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 50 },
            { effect: TrainingEffectEnums.Pollen, value: 3000 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
    {
        name: "Date the Broodmonarch",
        id: 15,
        quotaNumber: 3,
        mainAttribute: TrainingEffectEnums.Fluffiness,
        successRewards: [
            { effect: TrainingEffectEnums.Fluffiness, value: 20 },
            { effect: TrainingEffectEnums.SkillPoints, value: 50 },
            { effect: TrainingEffectEnums.Pollen, value: 3000 }
        ],
        checkJobSuccessRate: checkJobSuccessRate
    },
]

const baseQuotas = [
    {
        turnDeadline: 20,
        quotaNumber: 1,
        quotaScore: 1000,
        quotaReward: {
            Might: 10, Acuity: 10, Willpower: 10, Fluorescence: 10, Fluffiness: 10, SkillPoints: 15
        },

        calculateQuotaRewards: calculateQuotaRewards
    },
    {
        turnDeadline: 40,
        quotaNumber: 2,
        quotaScore: 6000,
        quotaReward: {
            Might: 25, Acuity: 25, Willpower: 25, Fluorescence: 25, Fluffiness: 25, SkillPoints: 40
        },

        calculateQuotaRewards: calculateQuotaRewards
    },
    {
        turnDeadline: 60,
        quotaNumber: 3,
        quotaScore: 22000,
        quotaReward: {
            Might: 40, Acuity: 40, Willpower: 40, Fluorescence: 40, Fluffiness: 40, SkillPoints: 70
        },

        calculateQuotaRewards: calculateQuotaRewards
    },
];

export const makeJobs = () => {
    return allJobs;
}



export const makeQuotas = () => {  // FUTURE DEV NOTES Implement modifiers that increase the
    return baseQuotas;
}