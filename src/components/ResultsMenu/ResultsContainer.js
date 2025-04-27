
import MAWFFCard from "../PlayerCard/MAWFFCard";

function ResultsContainer({ name, pronouns, image, characterSheet }) {

    return (<>
        <h1>WOA you DIIIIIID it!!!</h1>

        <div className="row">
            <div className="col-md-6">
                <p>There's a lot more I wanna add to this aaaaa thank you for playing!!!</p>
                <button onClick={() => window.location.reload()}>Click here if you want to restart</button>
                <p>Some near-future todos I wanna implement include;</p>
                <ul>
                    <li>Gradually making everything prettier</li>
                    <li>Random training modifiers</li>
                    <li>... and more!!!</li>
                </ul>
            </div>

            <div className="col-md-6">
                <MAWFFCard
                    name={name}
                    pronouns={pronouns}
                    image={image}
                    mawffStats={characterSheet}
                />
            </div>
        </div>


       
    </>)
}

export default ResultsContainer;