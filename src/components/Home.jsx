export default function Home(){
    return (
        <section className="wraper-main">
            <header className="main-header">
                <h1 className="main-heading heading-flex">
                    <span>
                        We <span className="main-heading_span">are</span>
                    </span>
                    <span className="main-heading_margin">an independent</span>
                    coffee shop
                </h1>
                <img className="hide-mobile" src="../public/icon/coffee-mug.png" height="136"/>
            </header>
            <main className="main-content">
                <div className="description">
                    <img src="../public/icon/rabbit.png" width="72"/>
                    <p className="description-text">Reforma is Ukraine's premier independent coffee shop, 
                        founded by <a className="description-link">Polina Olina and Vadim Hrytsenko.</a>  
                        &nbsp; We're more than just a coffee place; we're a cultural 
                        hub where coffee, jazz, and community come together.
                    </p>
                </div>
                <div className="event">
                    <div className="event-table-wraper">
                        <h2 className="sub-heading">Events</h2>
                        <div className="event-table">
                            <div className="event-cell">Date</div>
                            <div className="event-cell">Time</div>
                            <div className="event-cell">What</div>
                            <div className="event-cell">Wednesdays</div>
                            <div className="event-cell">6 - 10 pm</div>
                            <div className="event-cell">Drawing Club</div>
                        </div>
                    </div>
                    <figure className="event-figure">
                        <img src="../public/icon/dog.png" width="72" />
                        <figcaption className="description-text">We are pet friendly!</figcaption>
                    </figure> 
                </div>
            </main>
        </section>
    )
}