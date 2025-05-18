import { useState } from 'react';

function TipsPanel() {

    const [tipIndex, setTipIndex] = useState(0);

    const tipList = [
        /*0*/ "Click the Training Facilities to make your mawff train! Different facilities grow different stats!",
        /*1*/ "Training facilties level up as you keep using them! They have a max level of 5!",
        /*2*/ "Most training costs Stamina! The more you tire yourself out, the higher the chances your training fails!",
        /*3*/ "If you make your Pollen quota every 20 turns, you get a bunch of bonus stats! But if you fail the quota, your training ends!",
        /*4*/ "You can work jobs for lots of Pollen and some stats to boot, but they're hard! You'll need a good stat and trainee rank to handle them...",
        // ^ Latest real mechanics explanation.
        // v New mechanics below!
        /*5*/ "Every so often, you'll get Lamps. Lamps create Sparks that buff your training!",
        /*6*/ "Every turn, 1 random Spark on every training will decay away. When you use a training, you consume ALL sparks on it.",
        /*7*/ "More training mechanics will be added in future updates!"
    ];

    const newIndex = 5; 

    return (<div className="container tips-panel position-relative vstack gap-1">
        <span>{tipList[tipIndex]}</span>

        <div className="vstack position-absolute absolute-bottom">
            <span>{(tipIndex + 1)} of {tipList.length}</span>

            <div className="row d-flex justify-content-center">
                <button className="tips-button" onClick={() => setTipIndex(tipIndex - 1)} disabled={tipIndex === 0}>Prev</button>
                <button className="tips-button" onClick={() => setTipIndex(tipIndex + 1)} disabled={tipIndex === (tipList.length - 1)}>Next</button>
                <button className="tips-button" onClick={() => setTipIndex(newIndex)} disabled={tipIndex >= newIndex || newIndex >= tipList.length}>New!</button>
            </div>
        </div>

        
    </div>)
};

export default TipsPanel;