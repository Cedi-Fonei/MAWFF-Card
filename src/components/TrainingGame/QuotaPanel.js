import { useState, useEffect, useMemo, useCallback } from 'react';
import { TrainingEffectEnums } from '../../utility/enums';

import EffectTooltip from './Popups/EffectTooltip';

function QuotaPanel({ pollen, currentTurn, quotas, stamina, maxStamina, tooltipItem, acquiredLamps }) {

    
    const endOfCampaign = useMemo(() => {
        if (quotas) {
            return quotas[quotas.length - 1].turnDeadline;
        }
    }, [quotas]);

    const staminaTooltipValue = useMemo(() => {

        if (tooltipItem) {
            let staminaEffect = tooltipItem.find(e => e.effect === TrainingEffectEnums.StaminaChange);
            if (staminaEffect) {
                return staminaEffect.value;
            }
            else
                return null;
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
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6" style={{ position: 'relative' }}>
                                <EffectTooltip
                                    value={tooltipItem?.find(e => e.effect === TrainingEffectEnums.Pollen)?.value}
                                    positionOffsets={{ top: "20px", right: "75px" }}
                                />
                                Pollen: {pollen}/{nextQuota.quotaScore}
                            </div>

                            <div className="col-6">Turns until Quota #{quotaNumber}: {nextQuota.turnDeadline - currentTurn}</div>
                        </div>

                        <div className="row">

                            <div className="col-6">
                                <span className="mx-2">Stamina</span>
                                <EffectTooltip
                                    value={staminaTooltipValue}
                                    positionOffsets={{ bottom: "-25px" }}
                                />
                                <progress value={stamina} max={maxStamina} />

                            </div>
                            <div className="col-6">{endOfCampaign - currentTurn} turns left!</div>
                        </div>
                    </div>

                    <div className="col-6 container">
                        {acquiredLamps && acquiredLamps.map((lamp, lampIndex) =>
                            <div key={lampIndex} className="gameplay-icon tooltip-container" alt={lamp.name} style={{ backgroundImage: ("url(" + lamp.icon + ")") }}>
                                <span className="tip">
                                    {lamp.description}
                                </span>
                            </div>
                        )}
                    </div>
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