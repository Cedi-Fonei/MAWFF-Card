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
        <div className="card-att-row-rank">{findAttributeRank(attributeValue)}</div>
        <div className="card-att-row-bar">
            {attributeValue}
            TODO add an actual bar
        </div>
    </div>);
};

const renderOverallTitle = (mawffStats) => {
    let overallScore = mawffStats.Might + mawffStats.Acuity + mawffStats.Willpower + mawffStats.Fluorescence + mawffStats.Fluffiness;
    // TODO does not account for skills, any other modifiers
    return (<div className="kh-gummi">
        <div className="tiny-title">Trainee Rank</div>
        {findOverallRank(overallScore)}
    </div>)
};

export default function MAWFFCard({ mawffStats }) {

    if (mawffStats) {
        return (
            <div className="mawff-card">

                <div className="card-nouns">
                    {renderOverallTitle(mawffStats)}
                    {mawffStats.Name}
                    {mawffStats.Pronouns}
                </div>

                <img className="card-image" src={mawffStats.Image} alt="Your avatar!" />

                {formatAttributeRow("Might", mawffStats.Might)}
                {formatAttributeRow("Acuity", mawffStats.Acuity)}
                {formatAttributeRow("Willpower", mawffStats.Willpower)}
                {formatAttributeRow("Fluorescence", mawffStats.Fluorescence)}
                {formatAttributeRow("Fluffiness", mawffStats.Fluffiness)}


            </div>
        );
    }
    else {
        return "Loading..."
    }
}