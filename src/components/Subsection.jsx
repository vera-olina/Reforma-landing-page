export default function Subsection() {
    return(
        <section className="wraper subsection">
            <nav className="sub-nav">
                <a className="sub-nav-item" href="https://www.tiktok.com/@reformacoffee?_t=8g2jcBmNs9O" target="_blank"><img src="../public/TikTok.svg" /></a>
                <a className="sub-nav-item" href="https://www.instagram.com/reformacoffee/" target="_blank"><img src="../public/Instagram.svg" /></a>
                <img src="../public/Reforma-white.svg" alt="Logo" height="20"/>
            </nav>
            <button className="sub-button"><img src="../public/button-arrow.svg" height="32"/></button>
            <div className="sub-text">
                <p>Independent Coffee Shop.</p>
                <p>Coworking with coffee and jazz.</p>
            </div>
            <div className="sub-text">
                <p>Mon-sun</p>
                <p>08:00-21:00</p>
            </div>
        </section>
    )
}