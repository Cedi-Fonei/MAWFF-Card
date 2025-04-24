import { useState, useEffect, useMemo } from 'react';

import { defaultFacilitiesExercise, defaultFacilitiesStudies, defaultFacilitiesMarathon, defaultFacilitiesPhotomeditation, defaultFacilitiesPreening } from '../../utility/trainingActivities';
import { calculateUnrandomizedTrainingEffects } from '../../utility/trainingModifiers';

function TrainingActivityPanel({ attemptTraining, attemptRest, giveJobReward, isOpen, jobs, endTurn, characterSheet, characterStamina, setHoveringItem }) { 

    const [trainingFacilities, setTrainingFacilities] = useState([]);

    const baseExpGain = 10;

    const reset = () => {
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

            let facilitiesForSet = [...trainingFacilities];
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
        return (<button key={index} onClick={() => applyTraining(trainingFacility, index)}
            className="training-facility-selectable"
            onMouseOver={() => setHoveringItem(trainingFacility)}
            onMouseOut={() => setHoveringItem(null)}
        >
            <div className="vstack gap-2">
                <span className="kh-gummi">{trainingFacility.name}</span>

                <span>Lv. {trainingFacility.level}</span>
                {trainingFacility.level === 5 ? <span>MAX</span> : <progress value={trainingFacility.exp} max={trainingFacility.expToLevel} />}

                <span>Success: {(100 - trainingFacility.getFailureChance(characterStamina))}%</span>
                
            </div>
        </button>)

    }

    const renderRestFacility = () => {
        return (<button className="training-facility-selectable" onClick={() => applyRest()}>
            <span className="kh-menu"><b><i>Rest</i></b></span>
        </button>)
    }

    const applyJob = (job, index) => {
        let successRate = job.checkJobSuccessRate(characterSheet);

        let randomCheck = Math.floor(Math.random() * 100) + 1;
        if (successRate >= randomCheck) {
            giveJobReward(job, index);
        }
        else {
            console.log("Ooch ouchie the job GOT YOU");
        }

        endTurn();
    }

    const renderJob = (job, index) => {
        if (!job) {
            return <button className="wide-button" disabled>Vacant job posting...</button>;
        }

        return (<button className="wide-button" onClick={() => applyJob(job, index)}>
            <div className="row">
                <span className="col-md-10">{job.name}</span>
                <span className="col-md-2">{job.checkJobSuccessRate(characterSheet)}%</span>
            </div>
            
        </button>);
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

            <div className="row">
                {renderJob(jobs[0], 0)}
            </div>

            <div className="row">
                {renderJob(jobs[1], 1)}
            </div>

            <div className="row">
                {renderJob(jobs[2], 2)}
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