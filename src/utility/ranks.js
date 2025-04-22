const attributeRanks = [
    { rank: "F", jobValue: 0, threshold: 0 },
    { rank: "E", jobValue: 1, threshold: 50 },
    { rank: "E+", jobValue: 2, threshold: 100 },
    { rank: "D", jobValue: 3, threshold: 150 },
    { rank: "D+", jobValue: 4, threshold: 200 },
    { rank: "C", jobValue: 5, threshold: 250 },
    { rank: "C+", jobValue: 6, threshold: 300 },
    { rank: "B", jobValue: 7, threshold: 400 },
    { rank: "B+", jobValue: 8, threshold: 500 },
    { rank: "A", jobValue: 9, threshold: 600 },
    { rank: "A+", jobValue: 10, threshold: 700 },
    { rank: "M", jobValue: 11, threshold: 800 },
    { rank: "M+", jobValue: 12, threshold: 900 },
    { rank: "MF", jobValue: 13, threshold: 1000 }
];

export const findAttributeRank = (attValue) => {
    const withinRange = attributeRanks.filter(ar => ar.threshold <= attValue);
    return withinRange[withinRange.length - 1];
};

const overallRanks = [
    { rank: "Rough Salt", jobValue: 0, threshold: 0 },
    { rank: "Chiseled Salt", jobValue: 1, threshold: 250 },

    { rank: "Rough Quartz", jobValue: 2, threshold: 500 },
    { rank: "Polished Quartz", jobValue: 3, threshold: 750 },

    { rank: "Rough Bismoth", jobValue: 4, threshold: 1000 },
    { rank: "Polished Bismoth", jobValue: 5, threshold: 1250 },
    { rank: "Embellished Bismoth", jobValue: 6, threshold: 1500 },

    { rank: "Rough Opal", jobValue: 7, threshold: 1750 },
    { rank: "Polished Opal", jobValue: 8, threshold: 2000 },
    { rank: "Embellished Opal", jobValue: 9, threshold: 2500 },

    { rank: "Rough Meteor", jobValue: 10, threshold: 3000 },
    { rank: "Polished Meteor", jobValue: 11, threshold: 3500 },
    { rank: "Embellished Meteor", jobValue: 12, threshold: 4000 },
    { rank: "Ascendant Meteor", jobValue: 13, threshold: 5000 },

    { rank: "Worldly Ascendant", jobValue: 14, threshold: 6000 },
    { rank: "Stellar Ascendant", jobValue: 15, threshold: 7000 },
    { rank: "Galactic Ascendant", jobValue: 16, threshold: 8000 },
    { rank: "Apmotheotic Ascendant", jobValue: 17, threshold: 10000 }
];

export const findOverallRank = (totalValue) => {
    const withinRange = overallRanks.filter(ar => ar.threshold <= totalValue);

    return withinRange[withinRange.length - 1];

};

// Salt, Quartz
// Bismoth (intentionally moth'd),
// Opal, Meteor, Ascendant