import { useState } from 'react';

function TipsPanel() {

    const [tipIndex, setTipIndex] = useState(0);

    const tipList = [
        /*0*/ "If you want a card with big stat numbers, you gotta make your mawff WORK FOR IT!",
        /*1*/ "Click the Training Facilities to make your mawff train! Different facilities grow different stats!",
        /*2*/ "Training facilties level up as you keep using them! They have a max level of 5!",
        /*3*/ "You only have 20 turns to build your stats!",
        // ^ Latest real mechanics explanation. None currently out of date.
        /*4*/ "Other training mechanics will be added in future updates!"
    ];

    const newIndex = 4;

    return (<div className="container tips-panel position-relative vstack gap-1">
        <span>{tipList[tipIndex]}</span>

        <div className="vstack position-absolute absolute-bottom">
            <span>{(tipIndex + 1)} of {tipList.length}</span>

            <div className="row d-flex justify-content-center">
                <button className="tips-button" onClick={() => setTipIndex(tipIndex - 1)} disabled={tipIndex === 0}>Prev</button>
                <button className="tips-button" onClick={() => setTipIndex(tipIndex + 1)} disabled={tipIndex === (tipList.length - 1)}>Next</button>
                <button className="tips-button" onClick={() => setTipIndex(newIndex)} disabled={tipIndex >= newIndex}>New!</button>
            </div>
        </div>

        
    </div>)
};

export default TipsPanel;