import { useState, useEffect, useMemo, useCallback } from 'react';

function QuotaPanel({ pollen, currentTurn, quotas, stamina, maxStamina, endCampaign }) {

    //const [quotas, setQuotas] = useState(null);


    const checkQuota = useCallback(() => {
        if (quotas && currentTurn && endCampaign) {
            let quotaDueNow = quotas.find(q => q.turnDeadline);

            if (quotaDueNow) {
                if (pollen >= quotaDueNow.quotaScore) {
                    console.log("TODO apply quota reward");
                }
                else {
                    endCampaign();
                }
            }
        }
    }, [pollen, quotas, currentTurn, endCampaign]);

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

        return (<div>
            <span className="row">Pollen: {pollen}/{nextQuota.quotaScore}</span>
            <span className="row">Turns until Quota #{quotaNumber}: {nextQuota.turnDeadline - currentTurn}</span>
            <span className="row">{endOfCampaign - currentTurn} turns left!</span>
            <span>Stamina: {stamina}/{maxStamina}</span>
        </div>);
    };


    return (<div>
        {renderNextQuota()}
    </div>)
}

export default QuotaPanel;