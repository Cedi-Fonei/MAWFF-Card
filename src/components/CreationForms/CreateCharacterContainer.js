import { useState, useEffect, useMemo, useCallback } from 'react';

import Ceanothus_Brawler from '../../images/Ceanothus_Brawler.png';
import Construction_Mith from '../../images/Construction_Mith.png';
import Crazed_Powermith from '../../images/Crazed_Powermith.png';
import Geartoggle_Smith from '../../images/Geartoggle_Smith.png';
import Hydraulic_Armored_Protector from '../../images/Hydraulic_Armored_Protector.png';
import Luna_Mith from '../../images/Luna_Mith.png';
import Luna_Mith_Squire from '../../images/Luna_Mith_Squire.png';
import Marshland_Poodle_Mith from '../../images/Marshland_Poodle_Mith.png';
import Mith_Loremaster from '../../images/Mith_Loremaster.png';
import Primrose_Mith from '../../images/Primrose_Mith.png';
import Silkmith from '../../images/Silkmith.png';

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
        const defaultImages = [Ceanothus_Brawler, Construction_Mith, Crazed_Powermith, Geartoggle_Smith, Hydraulic_Armored_Protector, Luna_Mith, Luna_Mith_Squire, Marshland_Poodle_Mith, Mith_Loremaster, Primrose_Mith, Silkmith];

        return (<>
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
        </>); 
    }, [image])


    return (<>

        <h2>Who are you?</h2>

        <p>What should we call you?</p>
        <label>Name</label>
        <input
            id="creation-name"
            name="creation-name"
            placeholder="Enter..."
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <label>Pronouns</label>
        <input
            id="creation-pronouns"
            name="creation-pronouns"
            placeholder="Enter..."
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
        />

        <p>What do you look like? Click on an image to select it!</p>

        {renderImageSelector ? renderImageSelector() : null}


        <button onClick={() => submitCreation()}>Create Character</button>

    </>);
}

export default CreateCharacterContainer;