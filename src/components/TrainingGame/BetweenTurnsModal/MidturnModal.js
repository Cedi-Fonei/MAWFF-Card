import { useEffect, useCallback } from "react";


function MidturnModal({ show, setShow, isLoadingNextTurn, turnActionTitle, messages, thisTurnChanges, characterImage, offeredLamps }) {

    //useEffect(() => {
    //    console.log(show + ", " + isLoadingNextTurn)

    //}, [show, isLoadingNextTurn])
    //const onSelectOfferedLamp = useCallback((thisLamp) => {
    //    alert(JSON.stringify(thisLamp));
    //}, []);

    return (show &&
    <div className="midturn-modal-dimbackground">
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
                    <button onClick={() => setShow(false)} disabled={isLoadingNextTurn}
                        style={{margin: "1rem"}}>
                        Continue
                    </button>
                </div>
        </div>
    </div>
    );
}

export default MidturnModal