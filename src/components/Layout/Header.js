
export default function Header() {

    return (
        <div className="header bg-primary">

            <div className="row">
                <h2 className="col-xl-8">MAWFF Card Maker: V. SPARKING</h2>

                {/*NOTE always update this before AND after deploying to gh-pages!*/}
                <div className="col-xl-4">
                    {/*<div>Last Updated: April 22nd 2025</div>*/}
                    <div>Last Updated: Developing update for May 2025...</div>
                    <div className="whats-new-tag tooltip-container">
                        What's New?
                        <div className="tip">
                            <ul>
                                <li>Added various tooltips. Like this one!</li>
                                <li>Added turn results overlay with message feedback!</li>
                                <li>Added Lamp and Spark mechanics, giving your training various passive modifiers you build during a run! Use them wisely!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="row p3">
                <div className="col-xl text-warning">WARNING! Currently this app does not have any functions for saving data. Every time you reload the page, you will restart from character creation!</div>
            </div>
        </div>
    );
}