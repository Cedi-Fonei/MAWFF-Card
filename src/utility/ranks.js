const attributeRanks = [
    { rank: "F", threshold: 0 },
    { rank: "E", threshold: 50 },
    { rank: "E+", threshold: 100 },
    { rank: "D", threshold: 150 },
    { rank: "D+", threshold: 200 },
    { rank: "C", threshold: 250 },
    { rank: "C+", threshold: 300 },
    { rank: "B", threshold: 400 },
    { rank: "B+", threshold: 500 },
    { rank: "A", threshold: 600 },
    { rank: "A+", threshold: 700 },
    { rank: "M", threshold: 800 },
    { rank: "M+", threshold: 900 },
    { rank: "MF", threshold: 1000 }
];

export const findAttributeRank = (attValue) => {
    const withinRange = attributeRanks.filter(ar => ar.threshold <= attValue);
    return withinRange[withinRange.length - 1].rank;
};

const overallRanks = [
    { rank: "Rough Salt", threshold: 0 },
    { rank: "Chiseled Salt", threshold: 250 },

    { rank: "Rough Quartz", threshold: 500 },
    { rank: "Polished Quartz", threshold: 750 },

    { rank: "Rough Bismoth", threshold: 1000 },
    { rank: "Polished Bismoth", threshold: 1250 },
    { rank: "Embellished Bismoth", threshold: 1500 },

    { rank: "Rough Opal", threshold: 1750 },
    { rank: "Polished Opal", threshold: 2000 },
    { rank: "Embellished Opal", threshold: 2500 },

    { rank: "Rough Meteor", threshold: 3000 },
    { rank: "Polished Meteor", threshold: 3500 },
    { rank: "Embellished Meteor", threshold: 4000 },
    { rank: "Ascendant Meteor", threshold: 5000 },

    { rank: "Worldly Ascendant", threshold: 6000 },
    { rank: "Stellar Ascendant", threshold: 7000 },
    { rank: "Galactic Ascendant", threshold: 8000 },
    { rank: "Allmothy Ascendant", threshold: 10000 }
];

export const findOverallRank = (totalValue) => {
    const withinRange = overallRanks.filter(ar => ar.threshold <= totalValue);
    return withinRange[withinRange.length - 1].rank;

};

// Quartz, Topaz,
// Bismoth (intentionally moth'd), 
// Emerald, Opal, Diamond