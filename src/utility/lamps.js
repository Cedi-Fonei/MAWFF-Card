import { TrainingEffectEnums, SparkDecayPriority, SparkEffectScaling, SparkPlacementLogic, LampRarity, LampProcTiming, LampProcCondition } from './enums';

import {
    candle_light_blue, candle_light_green, candle_light_purple, candle_light_red, candle_light_yellow,
    light_bulb_blue, light_bulb_green, light_bulb_purple, light_bulb_red, light_bulb_yellow
} from '../images/Lamps';

import {
    candlebright_blue, candlebright_green, candlebright_purple, candlebright_red, candlebright_yellow,
    laser_burst_blue, laser_burst_green, laser_burst_purple, laser_burst_red, laser_burst_yellow

} from '../images/Sparks';


const sparks_mightGlimmer = {
    id: 1,
    name: "Might Glimmer",
    icon: laser_burst_red,
    description: "Gain +2 Might",

    effect: 2,
    effectType: TrainingEffectEnums.Might,
    effectScaling: SparkEffectScaling.Flat,

    decayPriority: SparkDecayPriority.Standard,
    placementLogic: SparkPlacementLogic.Random
}
const sparks_mightEmber = {
    id: 2,
    name: "Might Ember",
    icon: candlebright_red,
    description: "Increase this turn's Might growth by 15%",

    effect: 15,
    effectType: TrainingEffectEnums.Might,
    effectScaling: SparkEffectScaling.Percentage,

    decayPriority: SparkDecayPriority.Standard,
    placementLogic: SparkPlacementLogic.Random
}
const sparks_sightGlimmer = {
    id: 3,
    name: "Sight Glimmer",
    icon: laser_burst_blue,
    description: "Gain +2 Acuity",

    effect: 2,
    effectType: TrainingEffectEnums.Acuity,
    effectScaling: SparkEffectScaling.Flat,

    decayPriority: SparkDecayPriority.Standard,
    placementLogic: SparkPlacementLogic.Random
}
const sparks_sightEmber = {
    id: 4,
    name: "Sight Ember",
    icon: candlebright_blue,
    description: "Increase this turn's Acuity growth by 15%",

    effect: 15,
    effectType: TrainingEffectEnums.Acuity,
    effectScaling: SparkEffectScaling.Percentage,

    decayPriority: SparkDecayPriority.Standard,
    placementLogic: SparkPlacementLogic.Random
}
const sparks_wightGlimmer = {
    id: 5,
    name: "Wight Glimmer",
    icon: laser_burst_green,
    description: "Gain +2 Willpower",

    effect: 2,
    effectType: TrainingEffectEnums.Willpower,
    effectScaling: SparkEffectScaling.Flat,

    decayPriority: SparkDecayPriority.Standard,
    placementLogic: SparkPlacementLogic.Random
}
const sparks_wightEmber = {
    id: 6,
    name: "Wight Ember",
    icon: candlebright_green,
    description: "Increase this turn's Willpower growth by 15%",

    effect: 15,
    effectType: TrainingEffectEnums.Willpower,
    effectScaling: SparkEffectScaling.Percentage,

    decayPriority: SparkDecayPriority.Standard,
    placementLogic: SparkPlacementLogic.Random
}
const sparks_lightGlimmer = {
    id: 7,
    name: "Light Glimmer",
    icon: laser_burst_yellow,
    description: "Gain +2 Fluorescence",

    effect: 2,
    effectType: TrainingEffectEnums.Fluorescence,
    effectScaling: SparkEffectScaling.Flat,

    decayPriority: SparkDecayPriority.Standard,
    placementLogic: SparkPlacementLogic.Random
}
const sparks_lightEmber = {
    id: 8,
    name: "Light Ember",
    icon: candlebright_yellow,
    description: "Increase this turn's Fluorescence growth by 15%",

    effect: 15,
    effectType: TrainingEffectEnums.Fluorescence,
    effectScaling: SparkEffectScaling.Percentage,

    decayPriority: SparkDecayPriority.Standard,
    placementLogic: SparkPlacementLogic.Random
}
const sparks_dightGlimmer = {
    id: 9,
    name: "Dight Glimmer",
    icon: laser_burst_purple,
    description: "Gain +2 Fluffiness",

    effect: 2,
    effectType: TrainingEffectEnums.Fluffiness,
    effectScaling: SparkEffectScaling.Flat,

    decayPriority: SparkDecayPriority.Standard,
    placementLogic: SparkPlacementLogic.Random
}
const sparks_dightEmber = {
    id: 10,
    name: "Dight Ember",
    icon: candlebright_purple,
    description: "Increase this turn's Fluffiness growth by 15%",

    effect: 15,
    effectType: TrainingEffectEnums.Fluffiness,
    effectScaling: SparkEffectScaling.Percentage,

    decayPriority: SparkDecayPriority.Standard,
    placementLogic: SparkPlacementLogic.Random
}



export const defaultSparks = [
    sparks_mightGlimmer,
    sparks_mightEmber,

    sparks_sightGlimmer,
    sparks_sightEmber,

    sparks_wightGlimmer,
    sparks_wightEmber,

    sparks_lightGlimmer,
    sparks_lightEmber,

    sparks_dightGlimmer,
    sparks_dightEmber
]


function timingProcCheck() { 
    if (this.timing === LampProcTiming.Every_Turn || null || undefined) {
        return true;
    }

    return false;
}

function conditionProcCheck() {
    if (this.condition === LampProcCondition.No_Condition || null || undefined) {
        return true;
    }

    return false;
}

function mayThisLampProc() {
    return (timingProcCheck() && conditionProcCheck());
}



export const defaultLamps = [

    {
        id: 1,
        name: "Might Bulb",
        icon: light_bulb_red,
        description: "Every turn, generates 2 Might Glimmers",

        rarity: LampRarity.Common,
        timing: LampProcTiming.Every_Turn,
        condition: LampProcCondition.No_Condition,

        sparksGenerated: [
            {
                quantity: 2,
                spark: sparks_mightGlimmer
            }
        ]
    },
    {
        id: 2,
        name: "Red Candle",
        icon: candle_light_red,
        description: "Every turn, generates 1 Might Ember",

        rarity: LampRarity.Common,
        timing: LampProcTiming.Every_Turn,
        condition: LampProcCondition.No_Condition,

        sparksGenerated: [
            {
                quantity: 1,
                spark: sparks_mightEmber
            }
        ]
    },
    {
        id: 3,
        name: "Sight Bulb",
        icon: light_bulb_blue,
        description: "Every turn, generates 2 Sight Glimmers",

        rarity: LampRarity.Common,
        timing: LampProcTiming.Every_Turn,
        condition: LampProcCondition.No_Condition,

        sparksGenerated: [
            {
                quantity: 2,
                spark: sparks_sightGlimmer
            }
        ]
    },
    {
        id: 4,
        name: "Blue Candle",
        icon: candle_light_blue,
        description: "Every turn, generates 1 Sight Ember",

        rarity: LampRarity.Common,
        timing: LampProcTiming.Every_Turn,
        condition: LampProcCondition.No_Condition,

        sparksGenerated: [
            {
                quantity: 1,
                spark: sparks_sightEmber
            }
        ]
    },
    {
        id: 5,
        name: "Wight Bulb",
        icon: light_bulb_green,
        description: "Every turn, generates 2 Wight Glimmers",

        rarity: LampRarity.Common,
        timing: LampProcTiming.Every_Turn,
        condition: LampProcCondition.No_Condition,

        sparksGenerated: [
            {
                quantity: 2,
                spark: sparks_wightGlimmer
            }
        ]
    },
    {
        id: 6,
        name: "Green Candle",
        icon: candle_light_green,
        description: "Every turn, generates 1 Wight Ember",

        rarity: LampRarity.Common,
        timing: LampProcTiming.Every_Turn,
        condition: LampProcCondition.No_Condition,

        sparksGenerated: [
            {
                quantity: 1,
                spark: sparks_wightEmber
            }
        ]
    },
    {
        id: 7,
        name: "Light Bulb",
        icon: light_bulb_yellow,
        description: "Every turn, generates 2 Light Glimmers",

        rarity: LampRarity.Common,
        timing: LampProcTiming.Every_Turn,
        condition: LampProcCondition.No_Condition,

        sparksGenerated: [
            {
                quantity: 2,
                spark: sparks_lightGlimmer
            }
        ]
    },
    {
        id: 8,
        name: "Yellow Candle",
        icon: candle_light_yellow,
        description: "Every turn, generates 1 Light Ember",

        rarity: LampRarity.Common,
        timing: LampProcTiming.Every_Turn,
        condition: LampProcCondition.No_Condition,

        sparksGenerated: [
            {
                quantity: 1,
                spark: sparks_lightEmber
            }
        ]
    },
    {
        id: 9,
        name: "Dight Bulb",
        icon: light_bulb_purple,
        description: "Every turn, generates 2 Dight Glimmers",

        rarity: LampRarity.Common,
        timing: LampProcTiming.Every_Turn,
        condition: LampProcCondition.No_Condition,

        sparksGenerated: [
            {
                quantity: 2,
                spark: sparks_dightGlimmer
            }
        ]
    },
    {
        id: 10,
        name: "Purple Candle",
        icon: candle_light_purple,
        description: "Every turn, generates 1 Dight Ember",

        rarity: LampRarity.Common,
        timing: LampProcTiming.Every_Turn,
        condition: LampProcCondition.No_Condition,

        sparksGenerated: [
            {
                quantity: 1,
                spark: sparks_dightEmber
            }
        ]
    }



];