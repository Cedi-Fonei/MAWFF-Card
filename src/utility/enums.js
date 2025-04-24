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
    ExtraExperience: 8
    // TODO consider additional effects, for Sparks
}

export const SparkDecayPriority = {
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
    Random: 0,
    

    Training_Exercise: 1,
    Training_Acuity: 2,
    Training_Willpower: 3,
    Training_Fluorescence: 4,
    Training_Fluffiness: 5
}