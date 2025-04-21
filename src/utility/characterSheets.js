import { useState, useEffect, useMemo } from 'react';



export const makeStartingCharacterSheet = (name, pronouns, image) => { 

    //console.log("Name: " + name);

    return {
        Name: name,
        Pronouns: pronouns,
        Image: image,

        Might: 50,
        Acuity: 50,
        Willpower: 50,
        Fluorescence: 50,
        Fluffiness: 50,
        SkillPoints: 0,

        skills: []
    };
} 