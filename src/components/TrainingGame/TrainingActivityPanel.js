import { useState, useEffect, useMemo } from 'react';

import { defaultFacilitiesExercise, defaultFacilitiesStudies, defaultFacilitiesMarathon, defaultFacilitiesPhotomeditation, defaultFacilitiesPreening } from '../../utility/trainingActivities';

function TrainingActivityPanel({ attemptTraining, attemptRest, isOpen, endTurn }) { 

    // PROBLEM; trainingFacilities are updating, but their displays are NOT updating.
    // I know there's something to fix this within react.js's tools but I've forgotten what it is. a ref? something else?
    const [trainingFacilities, setTrainingFacilities] = useState([]);

    const baseExpGain = 10;

    const reset = () => {
        // TODO build facility objects!!! Design them!
        // TODO These should probably be defined in a different js file and imported, huh?
        setTrainingFacilities([
            defaultFacilitiesExercise,
            defaultFacilitiesStudies,
            defaultFacilitiesMarathon,
            defaultFacilitiesPhotomeditation,
            defaultFacilitiesPreening
        ]);
    }

    useEffect(() => {
        reset();
    }, [isOpen])

    const applyTraining = (trainingFacility, index) => {
        var trainingSuccess = attemptTraining(trainingFacility);

        if (trainingSuccess) {
            trainingFacility.giveTrainingExp(baseExpGain);

            trainingFacility.checkTrainingLevelup();

            let facilitiesForSet = [... trainingFacilities];
            facilitiesForSet[index] = trainingFacility;
            setTrainingFacilities(facilitiesForSet);
        }
        else {
            console.log("Oh ouchie you got a booboo D:")
        }

        endTurn();
    }

    const applyRest = () => {
        attemptRest();

        endTurn();
    }

    const renderTrainingFacility = (trainingFacility, index) => {
        // Sofar so good, let's make this LEGIBLE and PRACTICAL TO USE next before we add actually training mechanics
        return (<button key={index} onClick={() => applyTraining(trainingFacility, index)}
            className="training-facility-selectable"
        >
            <div className="vstack gap-2">
                <span className="kh-gummi">{trainingFacility.name}</span>

                <span>Lv. {trainingFacility.level}</span>
                {trainingFacility.level === 5 ? <span>MAX</span> : <span>{trainingFacility.exp}/{trainingFacility.expToLevel}</span>}
                
            </div>
        </button>)

    }

    const renderRestFacility = () => {
        return (<button className="training-facility-selectable" onClick={() => applyRest()}>
            <span className="kh-menu"><b><i>Rest</i></b></span>
        </button>)
    }


    return (<>

        {trainingFacilities?.length && <>
            <div className="row d-flex justify-content-center">
                {renderTrainingFacility(trainingFacilities[0], 0)}
                {renderTrainingFacility(trainingFacilities[1], 1)}
                {renderTrainingFacility(trainingFacilities[2], 2)}
            </div>
            <div className="row d-flex justify-content-center">
                {renderTrainingFacility(trainingFacilities[3], 3)}
                {renderTrainingFacility(trainingFacilities[4], 4)}
                {renderRestFacility()}
            </div>
            
        </>}

        

        
        
    </>)

}

//{
//    trainingFacilities.length &&

//    <div>
//        <p>TODO training activity panel!</p>
//        {trainingFacilities.map((tf, index) => renderTrainingFacility(tf, index))}
//    </div>

//}

export default TrainingActivityPanel;