import { useEffect, useCallback } from "react";


function MidturnModal({ show, setShow, isLoadingNextTurn, turnActionTitle, messages, setMessages, thisTurnChanges, characterImage, offeredLamps }) {

    function proceedToNextTurn() {
        setShow(false);
        setMessages([]);
    }

    return (show &&
    <div className="midturn-modal-dimbackground" onClick={() => { if (!isLoadingNextTurn) proceedToNextTurn(); } }>
        <div className="midturn-modal">
                <div className="midturn-modal-contents">
                    {turnActionTitle ? <h3>Woah a test modal wowwww</h3> : <h3>Turn Results</h3>}

                    <div className="row">
                        <div className="col-lg-3 vstack gap-2">
                            {messages.map((message, index) => <span key={index}>{message}</span>)}
                        </div>

                        <div className="col-lg-9">

                            <div className="lamp-selector">
                                
                            </div>

                            <div className="position-relative absolute-bottom">
                                <img className="card-image justify-content-center" src={characterImage} alt="Your avatar!" />
                            </div>

                            
                        </div>
                    </div>
                

                    
                    
                </div>
                <div className="position-absolute absolute-bottom justify-content-center">
                    <button onClick={() => proceedToNextTurn()} disabled={isLoadingNextTurn}
                        style={{margin: "1rem"}}>
                        Continue
                    </button>
                </div>
        </div>
    </div>
    );
}

export default MidturnModal