
import MAWFFCard from "../PlayerCard/MAWFFCard";

function ResultsContainer({ name, pronouns, image, characterSheet }) {

    return (<>
        <h1>WOA you DIIIIIID it!!!</h1>

        <div className="row">
            <div className="col-md-6">
                <p>There's a lot more I wanna add to this, this is mega placeholdery aaaaa thank you for playing please tell me if something exploded I like knowing how to make things not explode</p>
                <button onClick={() => window.location.reload()}>Click here if you want to restart</button>
                <p>Some near-future todos I wanna implement include;</p>
                <ul>
                    <li>Gradually making everything prettier</li>
                    <li>Importing your own avatars</li>
                    <li>More training options/mechanics</li>
                    <li>Exporting and importing completed cards</li>
                    <li>An inheritance system</li>
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