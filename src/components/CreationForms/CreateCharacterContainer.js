import { useState, useEffect, useMemo, useCallback } from 'react';

import Brown_Spotted_Mith from '../../images/Sample Moths/Brown_Spotted_Mith.png';
import Ceanothus_Brawler from '../../images/Sample Moths/Ceanothus_Brawler.png';
import Cinder_Mith from '../../images/Sample Moths/Cinder_Mith.png';
import Clouded_Mith from '../../images/Sample Moths/Clouded_Mith.png';
import Construction_Mith from '../../images/Sample Moths/Construction_Mith.png';
import Crazed_Powermith from '../../images/Sample Moths/Crazed_Powermith.png';
import Curious_Mith from '../../images/Sample Moths/Curious_Mith.png';
import Geartoggle_Smith from '../../images/Sample Moths/Geartoggle_Smith.png';
import Goldenplains_Poodle_Mith from '../../images/Sample Moths/Goldenplains_Poodle_Mith.png';
import Hydraulic_Armored_Protector from '../../images/Sample Moths/Hydraulic_Armored_Protector.png';
import Luna_Mith from '../../images/Sample Moths/Luna_Mith.png';
import Luna_Mith_Squire from '../../images/Sample Moths/Luna_Mith_Squire.png';
import Marshland_Poodle_Mith from '../../images/Sample Moths/Marshland_Poodle_Mith.png';
import Mith_Bruiser from '../../images/Sample Moths/Mith_Bruiser.png';
import Mith_Loremaster from '../../images/Sample Moths/Mith_Loremaster.png';
import Mith_Spellstealer from '../../images/Sample Moths/Mith_Spellstealer.png';
import Primrose_Mith from '../../images/Sample Moths/Primrose_Mith.png';
import Regal_Silkmith from '../../images/Sample Moths/Regal_Silkmith.png';
import Sentinel_Mith from '../../images/Sample Moths/Sentinel_Mith.png';
import Silkmith from '../../images/Sample Moths/Silkmith.png';
import Voltaic_Ambassador from '../../images/Sample Moths/Voltaic_Ambassador.png';
import War_Smith from '../../images/Sample Moths/War_Smith.png';
import Weapon_Scavenger from '../../images/Sample Moths/Weapon_Scavenger.png';

import '../../App.css'

function CreateCharacterContainer({ setBasicInformation }) { 

    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [image, setImage] = useState(null);


    const submitCreation = () => {
        if (!name?.length) {
            alert("Name is required");
            return;
        }

        if (!pronouns) {
            alert("Pronouns are required");
            return;
        }

        if (!image) {
            alert("Image is required");
            return;
        }

        setBasicInformation(name, image, pronouns);
    }

    const renderImageSelector = useCallback(() => {
        const defaultImages = [
            Brown_Spotted_Mith, Ceanothus_Brawler, Cinder_Mith, Clouded_Mith, Construction_Mith, Crazed_Powermith, Curious_Mith, Geartoggle_Smith, Goldenplains_Poodle_Mith, Hydraulic_Armored_Protector,
            Mith_Bruiser, Mith_Spellstealer, Luna_Mith, Luna_Mith_Squire, Marshland_Poodle_Mith, Mith_Loremaster, Primrose_Mith, Silkmith, Regal_Silkmith, Sentinel_Mith, Voltaic_Ambassador,
            War_Smith, Weapon_Scavenger
        ];

        return (<div className="my-4">
            {defaultImages.map((thisImage, index) => {
                return (
                    <img
                        key={index} src={thisImage}
                        alt={"Image option " + (index + 1)}
                        className={image === thisImage ? 'selected-image' : null}
                        onClick={() => setImage(thisImage)}
                    />
                );
            })}
        </div>); 
    }, [image])


    return (<div className="container">

        <h2>Who are you?</h2>

        <p>What should we call you?</p>

        <div className="row my-4">
            <div className="col-xl-3"/>
            <div className="col-xl-3 vstack">
                <label label-for="creation-name">Name</label>
                <input
                    id="creation-name"
                    name="creation-name"
                    placeholder="Enter..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="col-xl-3 vstack">
                <label label-for="creation-pronouns">Pronouns</label>
                <input
                    id="creation-pronouns"
                    name="creation-pronouns"
                    placeholder="Enter..."
                    value={pronouns}
                    onChange={(e) => setPronouns(e.target.value)}
                />
            </div>
            <div className="col-xl-3" />
        </div>

        

       

        <p>What do you look like? Click on an image to select it!</p>

        {renderImageSelector ? renderImageSelector() : null}

        <p>Are you ready to START~?</p>

        <div className="my-4">
            <button className="create-character-button" onClick={() => submitCreation()}>Create Character</button>
        </div>

        

    </div>);
}

export default CreateCharacterContainer;