import { AttributeEnums, TrainingEffectEnums } from './enums';

const calculateQuotaRewards = (rewardModifiers) => {
    return this.quotaReward;
} 

const quotaDifficulties = [6, 12, 24];

const checkJobSuccessRate = (characterSheet) => {
    let baseDifficulty = quotaDifficulties[this.quotaNumber - 1];

    //let rankNumber = 
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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



export const makeQuotas = () => {  // FUTURE DEV NOTES Implement modifiers that increase the
    return baseQuotas;
}