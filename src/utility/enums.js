export const AttributeEnums = {
    Might: 1,
    Acuity: 2,
    Willpower: 3,
    Fluorescence: 4,
    Fluffiness: 5
};

export const TrainingEffectEnums = {
    StaminaChange: 0,
    Might: 1,
    Acuity: 2,
    Willpower: 3,
    Fluorescence: 4,
    Fluffiness: 5,
    SkillPoints: 6,
    Pollen: 7,
    ExtraExperience: 8,
    JobSuccessRateBonus: 9,
    TrainingSuccessRateBonus: 10
    // TODO consider additional effects, for Sparks
}

export const SparkDecayPriority = {
    // BELOW THIS LINE - not implemented yet!
    Never: -1,
    Minimum: 0,
    Low: 1,
    Standard: 2,
    High: 3,
    Maximum: 4,
    Guarantee: 5
}

export const SparkEffectScaling = {
    Flat: 0,
    Percentage: 1
}

export const SparkPlacementLogic = {
    // BELOW THIS LINE - not implemented yet!
    Random: 0,
    

    Training_Exercise: 1,
    Training_Acuity: 2,
    Training_Willpower: 3,
    Training_Fluorescence: 4,
    Training_Fluffiness: 5
}

export const LampRarity = {
    Common: 0,

    // BELOW THIS LINE - not implemented yet!
    Rare: 1,
    Epic: 2,
    Legendary: 3
}

export const LampProcTiming = {
    // BELOW THIS LINE - not implemented yet!
    Every_Turn: 0,

    After_Specific_Training_Facility: 1,
    After_Rest: 2,
    After_Job: 3,
}

export const LampProcCondition = {
    // BELOW THIS LINE - not implemented yet!
    No_Condition: 0,

    Training_Facility_Has_Level: 1,
    Has_Low_Stamina: 2,
    Has_High_Stamina: 3
}