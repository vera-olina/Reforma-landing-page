import React from "react"

export default function Subsection() {

    const [currentImage, setCurrentImage] = React.useState(0)

    const images = [
        "0001.jpg",
        "0002.jpg",
        "0003.jpg",
        "0004.jpg",
        "0005.jpg",
        "0006.jpg",
        "0007.jpg"
    ]

    const backgroundImageStyle ={
        backgroundImage: `url(/public/interior/${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

  function changeImage() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };


    return(
        <section className="wraper subsection" style={backgroundImageStyle}>
            <nav className="sub-nav ">
                <a className="sub-nav-item" href="https://www.tiktok.com/@reformacoffee?_t=8g2jcBmNs9O" target="_blank" rel="noopener noreferrer"><img src="../public/TikTok.svg" /></a>
                <a className="sub-nav-item" href="https://www.instagram.com/reformacoffee/" target="_blank" rel="noopener noreferrer"><img src="../public/Instagram.svg" /></a>
                {/* <a className="sub-nav-toggl">UA</a>
                <span className="sub-nav-span">/</span>
                <a className="sub-nav-toggl toggl-active">EN</a> */}
                <img src="../public/Reforma-white.svg" alt="Logo" height="24"/>
            </nav>
            <button className="sub-button" onClick={changeImage}><img src="../public/button-arrow.svg" height="32"/></button>
            <footer className="sub-footer">
                <div className="sub-text">
                    <p>Independent Coffee Shop.</p>
                    <p className="sub-text-right">Coworking with coffee and jazz.</p>
                </div>
                <div className="sub-text">
                    <p>Mon-sun</p>
                    <p>08:00-21:00</p>
                </div>
            </footer>
        </section>
    )
}