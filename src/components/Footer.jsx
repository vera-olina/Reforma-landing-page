export default function Footer(props){

    let footerClass;
    if (props.activePage === "home") {
        footerClass = ""
    } else if (props.activePage === "menu") {
        footerClass = "menu-footer"
    } else {
        footerClass = ""
    }

    return (
        <footer className={`footer ${footerClass}`}>

            {props.activePage === "home" &&
                <>
                    <div className="home-footer">
                        <h2 className="sub-heading">Location</h2>
                        <a className="adress-link" href="https://maps.app.goo.gl/rSKX4rK3cfa71hF96" target="_blank">5b Bohdana Khmelnytskoho ST,
                        Residential complex Petrivskyi kvartal</a>
                        <div></div>
                    </div>
                </>  
            }

            {props.activePage === "menu" &&
                <>
                    <p className="footer-subtext">scroll</p>
                    <div className="footer-options">
                        <div>
                            <img src="/icon/milk.svg" />
                            <p>Milk +5</p>
                        </div>
                        <div>
                            <img src="/icon/plant.svg" />
                            <p>Plant-Based Milk +10</p>
                        </div>
                        <div>
                            <img src="/icon/syrup.svg" />
                            <p>Syrup +5</p>
                        </div>
                    </div>
                </>
            }

            {props.activePage === "contact" &&
                <>
                <div className="contact-footer">
                    <button className="cta-button"><a href="mailto:reforma.coffee@icloud.com" title="Send us an email">reforma.coffee@icloud.com</a></button>
                    <button className="cta-button"><a href="tel:380667137012" title="Call us">+380667137012</a></button>
                </div>
                </>
            }
            
        </footer>
    )
}
