export default function EffectTooltip({ value, positionOffsets }) {

    return (<>
        {(value > 0 || value < 0) &&
            <div className="tooltip-popup" style={positionOffsets}>
                {(value > 0) ? <span className="effect-positive">+{value}</span> : <span className="effect-negative">{value}</span>}
            </div>
            }
    </>)
}