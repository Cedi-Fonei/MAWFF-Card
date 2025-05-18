
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
                    <li>Improving visual responsiveness and how the app presents on smaller desktop screens</li>
                    <li>More Lamps! More Sparks!! More ways they work!!!</li>
                    <li>Some behind the scenes stuff you'll never see but you'll FEEL the app working better</li>
                    <li>... and more!</li>
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