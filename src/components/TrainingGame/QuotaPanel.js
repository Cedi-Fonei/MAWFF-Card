import { useState, useEffect, useMemo, useCallback } from 'react';

function QuotaPanel({ pollen, currentTurn, quotas, stamina, maxStamina }) {

    
    const endOfCampaign = useMemo(() => {
        if (quotas) {
            return quotas[quotas.length - 1].turnDeadline;
        }
    }, [quotas]);


    function renderNextQuota() {
        let nextQuota = quotas.filter(q => q.turnDeadline >= currentTurn)[0];


        if (!nextQuota) {
            return (<div>You diiiiiiiiidddddddddd it</div>)
        }
        let quotaNumber = quotas.findIndex(q => q === nextQuota) + 1;

        if (quotaNumber) {
            return (<div className="quota-panel">
                <span className="row">Pollen: {pollen}/{nextQuota.quotaScore}</span>
                <span className="row">Turns until Quota #{quotaNumber}: {nextQuota.turnDeadline - currentTurn}</span>
                <span className="row">{endOfCampaign - currentTurn} turns left!</span>
                <span>Stamina: {stamina}/{maxStamina}</span>
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