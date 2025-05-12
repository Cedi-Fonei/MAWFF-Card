import { useState, useEffect, useMemo, useCallback } from 'react';


function TrainingActivityPanel({ attemptTraining, attemptRest, giveJobReward, isOpen, jobs, endTurn, characterSheet, characterStamina, setHoveringItem, setHoveringJob, beginTurnAction, pushTurnMessage, trainingFacilities, applyTraining }) { 

    

    

    const commitToTrainingAction = useCallback((trainingFacility, index) => {
        beginTurnAction({ trainingFacility, index }, applyTraining);
    }, [applyTraining, beginTurnAction]);

    const commitToRestAction = useCallback(() => {
        beginTurnAction(null, attemptRest);
    }, [attemptRest, beginTurnAction])

    const renderTrainingFacility = (trainingFacility, index) => {
        return (<button key={index} onClick={() => commitToTrainingAction(trainingFacility, index)}
            className="training-facility-selectable"
            onMouseOver={() => setHoveringItem(trainingFacility)}
            onMouseOut={() => setHoveringItem(null)}
        >
            <div className="vstack gap-2">
                <span className="kh-gummi">{trainingFacility.name}</span>

                <span>Lv. {trainingFacility.level}</span>
                {trainingFacility.level === 5 ? <span>MAX</span> : <progress value={trainingFacility.exp} max={trainingFacility.expToLevel} />}

                <span>Success: {(100 - trainingFacility.getFailureChance(characterStamina))}%</span>

                <span>Total Sparks: {trainingFacility.sparks.length}</span>
                
            </div>
        </button>)

    }

    const renderRestFacility = () => {
        return (<button className="training-facility-selectable" onClick={() => commitToRestAction()}>
            <span className="kh-menu"><b><i>Rest</i></b></span>
        </button>)
    }

    const applyJob = useCallback(({ job, index }) => {
        let successRate = job.checkJobSuccessRate(characterSheet);

        let randomCheck = Math.floor(Math.random() * 100) + 1;
        if (successRate >= randomCheck) {
            pushTurnMessage("You did the job!!!! Good for you!!!");
            giveJobReward(job, index);
        }
        else {
            pushTurnMessage("Ooch ouchie the job GOT YOU");
        }

    }, [characterSheet, giveJobReward, pushTurnMessage])

    const commitToJobAction = useCallback((job, index) => {
        beginTurnAction({ job, index }, applyJob);
    }, [applyJob, beginTurnAction])

    const renderJob = (job, index) => {
        if (!job) {
            return <button className="wide-button" disabled>Vacant job posting...</button>;
        }

        return (<button className="wide-button"
            onClick={() => commitToJobAction(job, index)}
            onMouseOver={() => setHoveringJob(job)}
            onMouseOut={() => setHoveringJob(null)}
        >
            <div className="row">
                <span className="col-md-10">{job.name}</span>
                <span className="col-md-2">{job.checkJobSuccessRate(characterSheet)}%</span>
            </div>
            
        </button>);
    }


    return (<>

        {trainingFacilities?.length && <div className="container">

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
            
        </div>}

        
    </>)

}

export default TrainingActivityPanel;