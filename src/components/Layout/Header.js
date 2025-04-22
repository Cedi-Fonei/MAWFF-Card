
export default function Header() {

    return (
        <div className="header bg-primary">

            <div className="row">
                <h2 className="col-xl-9">MAWFF Card Maker: V. Employed Skeleton</h2>

                {/*NOTE always update this before deploying to gh-pages!*/}
                <span className="col-xl-3">Last Updated: ??? ?? 2025</span>
            </div>

            

            <div className="row p3">
                <div className="col-xl">I'm working on developing the most important functionality before I make this application actually look pretty I prommie</div>
                <div className="col-xl text-warning">WARNING! Currently this app does not have any functions for saving data. Every time you reload the page, you will restart from character creation!</div>
            </div>
        </div>
    );
}