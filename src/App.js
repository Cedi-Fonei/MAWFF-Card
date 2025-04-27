import logo from './logo.svg';
import './App.css';


import { useState } from 'react';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import CreateCharacterContainer from './components/CreationForms/CreateCharacterContainer';
import TrainingContainer from './components/TrainingGame/TrainingContainer';

import ResultsContainer from './components/ResultsMenu/ResultsContainer';

function App() {

    const [charName, setCharName] = useState(null);
    const [charPronouns, setCharPronouns] = useState(null);
    const [charImage, setCharImage] = useState(null);

    const [characterSheet, setCharacterSheet] = useState(null);

    const [currentlyLoading, setCurrentlyLoading] = useState(null);

    function setBasicInformation(newName, newImage, newPronouns) {
        setCharName(newName);
        setCharPronouns(newPronouns);
        setCharImage(newImage)
    }

    function finalizeTraining(developedCharacterSheet) {
        setCharacterSheet(developedCharacterSheet);
    }

    return (
        <div className="App">

            <Header />

            {
                !characterSheet ? (
                    (!charName || !charPronouns || !charImage)
                    ? <CreateCharacterContainer
                        setBasicInformation={setBasicInformation}
                    />
                    : <TrainingContainer
                        name={charName}
                        pronouns={charPronouns}
                        image={charImage}
                        finalizeTraining={finalizeTraining}
                        className="container"
                        />
                )
                    : <ResultsContainer
                        name={charName}
                        pronouns={charPronouns}
                        image={charImage}
                        characterSheet={characterSheet}
                    />
            }

            <Footer />
        
    </div>
    );
}

export default App;
