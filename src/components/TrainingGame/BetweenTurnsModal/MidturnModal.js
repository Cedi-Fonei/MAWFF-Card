import { useEffect, useCallback, useMemo, useState } from "react";


function MidturnModal({ show, setShow, isLoadingNextTurn, turnActionTitle, messages, setMessages, thisTurnChanges, characterImage, offeredLamps, addSelectedLamp }) {

    const [selectedLamp, setSelectedLamp] = useState(null);

    const allowCloseModal = useMemo(() => {
        if (isLoadingNextTurn)
            return false;

        if (offeredLamps?.length && !selectedLamp)
            return false;


        return true;
    }, [isLoadingNextTurn, offeredLamps, selectedLamp]);

    function proceedToNextTurn() {
        if (selectedLamp) {
            if (!selectedLamp)
                return;

            addSelectedLamp(selectedLamp);
            setSelectedLamp(null);
        }

        setShow(false);

        setMessages([]);
    };

    return (show &&
        <div className="midturn-modal-dimbackground" onClick={() => { if (allowCloseModal) proceedToNextTurn(); }}>
            <div className="midturn-modal" onClick={(e) => e.stopPropagation()}>

                <div className="midturn-modal-contents">
                    {turnActionTitle ? <h3>{turnActionTitle}</h3> : <h3>Turn Results</h3>}

                    <div className="row">
                        <div className="col-lg-3 vstack gap-2">
                            {messages.map((message, index) => <span key={index}>{message}</span>)}
                        </div>

                        <div className="col-lg-9">

                            <div className="lamp-selector">
                                {(offeredLamps?.length !== 0) && offeredLamps.map((lamp, lampIndex) =>
                                    <div
                                        key={lampIndex} onClick={() => setSelectedLamp(lamp)}
                                        className={"lamp-choice tooltip-container" + (lamp === selectedLamp ? ' selected-lamp' : '')} alt={lamp.name} style={{ backgroundImage: ("url(" + lamp.icon + ")") }}
                                    >
                                    <span className="tip">
                                        {lamp.description}
                                    </span>
                                </div>)}
                            </div>

                            <div className="position-relative absolute-bottom">
                                <img className="card-image justify-content-center" src={characterImage} alt="Your avatar!" />
                            </div>

                            
                        </div>
                    </div>
                

                    
                    
                </div>


                <div className="position-absolute absolute-bottom justify-content-center">
                    <button onClick={() => proceedToNextTurn()} disabled={!allowCloseModal}
                        style={{margin: "1rem"}}>
                        Continue
                    </button>
                </div>

        </div>
    </div>
    );
}

export default MidturnModal