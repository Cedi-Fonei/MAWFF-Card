import { useState, useEffect, useMemo, useCallback } from 'react';
import { TrainingEffectEnums } from '../../utility/enums';
import { calculateUnrandomizedTrainingEffects } from '../../utility/trainingModifiers';

function QuotaPanel({ pollen, currentTurn, quotas, stamina, maxStamina, tooltipItem }) {

    
    const endOfCampaign = useMemo(() => {
        if (quotas) {
            return quotas[quotas.length - 1].turnDeadline;
        }
    }, [quotas]);

    const staminaTooltip = useMemo(() => {

        if (tooltipItem) {
            let staminaEffect = tooltipItem.find(e => e.effect === TrainingEffectEnums.StaminaChange);
            if (staminaEffect) {
                return staminaEffect.value;
            }
            else {
                return null;
            }
        }
        else
            return null;
        
    }, [tooltipItem]);


    function renderNextQuota() {
        let nextQuota = quotas.filter(q => q.turnDeadline >= currentTurn)[0];


        if (!nextQuota) {
            return (<div>You diiiiiiiiidddddddddd it</div>)
        }
        let quotaNumber = quotas.findIndex(q => q === nextQuota) + 1;

        if (quotaNumber) {
            return (<div className="quota-panel">

                <div className="row">
                    <div className="col-6">Pollen: {pollen}/{nextQuota.quotaScore}</div>

                    <div className="col-6">Turns until Quota #{quotaNumber}: {nextQuota.turnDeadline - currentTurn}</div>
                </div>

                <div className="row">
                    
                    <div className="col-6">
                        <span className="mx-2">Stamina</span> 
                        {/*TODO testing the hover tooltip for training effects!!!*/}
                        {/*Its CLOSE to working as desired, except I would like this to appear closer to the part its supposed to be near*/}
                        {staminaTooltip && <div className="tooltip-popup">
                            {(staminaTooltip > 0) ? <span className="effect-positive">+{staminaTooltip}</span> : <span className="effect-negative">{staminaTooltip}</span>}
                        </div>}
                        <progress value={stamina} max={maxStamina} />
                        {/*{stamina}/{maxStamina}*/}

                        
                    </div>
                    <div className="col-6">{endOfCampaign - currentTurn} turns left!</div>
                </div>

               

                
            </div>);
        }
        else {
            return "uhhhhh please wait a tick"
        }

        
    };


    return (<div>
        {renderNextQuota()}
    </div>)
}

export default QuotaPanel;