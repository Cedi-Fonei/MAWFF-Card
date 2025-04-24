export default function EffectTooltip({ value, positionOffsets }) {

    return (<>
        {value &&
            <div className="tooltip-popup" style={positionOffsets}>
                {(value > 0) ? <span className="effect-positive">+{value}</span> : <span className="effect-negative">{value}</span>}
            </div>
            }
    </>)
}