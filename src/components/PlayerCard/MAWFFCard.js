// IMPORTS FOR FORMATTING
import { findAttributeRank, findOverallRank } from '../../utility/ranks';

const formatAttributeRow = (attributeName, attributeValue) => {

    let labelSize = "";

    if (attributeName.length > 10) {
        labelSize = " card-label-smaller";
    }
    else if (attributeName.length > 8) {
        labelSize = " card-label-small";
    }

    return (<div className="card-attribute-row">
        <div className={"card-att-row-label" + labelSize}>{attributeName}</div>
        <div className="card-att-row-rank">{findAttributeRank(attributeValue).rank}</div>
        <div className="card-att-row-bar row">
            <span className="col-sm-4">{attributeValue}</span>
            
            <progress className="col-sm-8" value={attributeValue} max={1000} />
        </div>
    </div>);
};

const renderOverallTitle = (mawffStats) => {
    let overallScore = mawffStats.Might + mawffStats.Acuity + mawffStats.Willpower + mawffStats.Fluorescence + mawffStats.Fluffiness;
    // TODO does not account for skills, any other modifiers
    return (<div className="kh-gummi position-relative">
        <div className="tiny-title">Trainee Rank</div>
        <div>{findOverallRank(overallScore).rank}</div>
    </div>)
};

const formatSkillBlock = (skillPoints, skills) => {
    return (<div>
        <span>SP: {skillPoints}</span>
        <div className="row">
            {skills?.forEach((skill) => <div className="col-sm-6">
                {skill.name}
            </div>)}
        </div>
    </div>)
}

export default function MAWFFCard({ mawffStats }) {

    if (mawffStats) {
        return (
            <div className="mawff-card">

                <div className="card-nouns">
                    {renderOverallTitle(mawffStats)}
                    <div className="position-relative">
                        <div>{mawffStats.Name}</div>
                        <div>{mawffStats.Pronouns}</div>
                    </div>
                    
                </div>

                <img className="card-image" src={mawffStats.Image} alt="Your avatar!" />

                {formatAttributeRow("Might", mawffStats.Might)}
                {formatAttributeRow("Acuity", mawffStats.Acuity)}
                {formatAttributeRow("Willpower", mawffStats.Willpower)}
                {formatAttributeRow("Fluorescence", mawffStats.Fluorescence)}
                {formatAttributeRow("Fluffiness", mawffStats.Fluffiness)}

                {formatSkillBlock(mawffStats.SkillPoints, mawffStats.skills)}

            </div>
        );
    }
    else {
        return "Loading..."
    }
}