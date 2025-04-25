
export default function Header() {

    return (
        <div className="header bg-primary">

            <div className="row">
                <h2 className="col-xl-9">MAWFF Card Maker: V. SPARKING</h2>

                {/*NOTE always update this before AND after deploying to gh-pages!*/}
                <div className="col-xl-3">
                    <div>Last Updated: April 22nd 2025</div>
                    <div className="whats-new-tag tooltip-container">
                        What's New?
                        <div className="tip">
                            <ul>
                                <li>Added various tooltips. Like this one!</li>
                                {/*<li>Added Lamp and Spark mechanics, giving your training various passive modifiers you acquire at random! Use them carefully!</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="row p3">
                <div className="col-xl">I'm working on developing the most important functionality before I make this application actually look pretty I prommie</div>
                <div className="col-xl text-warning">WARNING! Currently this app does not have any functions for saving data. Every time you reload the page, you will restart from character creation!</div>
            </div>
        </div>
    );
}