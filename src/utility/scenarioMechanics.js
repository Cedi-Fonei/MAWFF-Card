import { TrainingEffectEnums } from './enums';

const calculateQuotaRewards = (rewardModifiers) => {
    return this.quotaReward;
} 

const baseQuotas = [
    {
        turnDeadline: 20,
        quotaScore: 1000,
        quotaReward: {
            Might: 10, Acuity: 10, Willpower: 10, Fluorescence: 10, Fluffiness: 10, SkillPoints: 15
        },

        calculateQuotaRewards: calculateQuotaRewards
    },
    {
        turnDeadline: 40,
        quotaScore: 6000,
        quotaReward: {
            Might: 25, Acuity: 25, Willpower: 25, Fluorescence: 25, Fluffiness: 25, SkillPoints: 40
        },

        calculateQuotaRewards: calculateQuotaRewards
    },
    {
        turnDeadline: 60,
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