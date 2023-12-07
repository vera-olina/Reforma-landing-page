import React from "react"

export default function Navbar(props){

        const[isOpen, setIsOpen] = React.useState(false);
      
        function toggleMenu() {
          setIsOpen(!isOpen);
          console.log(isOpen)
        }

    return (
        <nav>
            {/* Mobile */}
            <div className="burger-menu hide-desktop">
                <button onClick={toggleMenu}>

                    <svg className={`${isOpen ? "burger-toggle" : ""}`} width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="9" height="2" rx="1" fill="black"/>
                    <rect y="6" width="32" height="2" rx="1" fill="black"/>
                    <rect y="12" width="18" height="2" rx="1" fill="black"/>
                    </svg>

                    <svg className={`${isOpen ? "" : "burger-toggle"}`} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.928955" y="13.4659" width="17.73" height="1.97" rx="0.985" transform="rotate(-45 0.928955 13.4659)" fill="black"/>
                    <rect x="2.39185" y="0.998901" width="17.73" height="1.97" rx="0.985" transform="rotate(45 2.39185 0.998901)" fill="black"/>
                    </svg>

                </button>
                
                <ol className={`brgr-m-pop-up ${isOpen ? "open" : ""}`}>
                    <li onClick={() => props.setActivePage("home")}
                        className={`nav-item 
                        ${props.activePage === "home" ? "active-home" : ""}`}
                    >
                        Home
                        <span className="nav-item-num">01</span>
                    </li>
                    <li onClick={() => props.setActivePage("menu")}
                        className={`nav-item 
                        ${props.activePage === "menu" ? "active-menu" : ""}`}
                    >
                        Menu
                        <span className="nav-item-num">02</span>
                    </li>
                    <li onClick={() => props.setActivePage("contact")}
                        className={`nav-item 
                        ${props.activePage === "contact" ? "active-contact" : ""}`}
                    >
                        Contact
                        <span className="nav-item-num">03</span>
                    </li>
                </ol>
                
                <img className="b-menu-logo" src="/Reforma-black.svg" alt="Logo" height="80"/>
            </div>
            {/* Desktop */}
            <ol className="nav" >
                <li onClick={() => props.setActivePage("home")}
                    className={`nav-item 
                    ${props.activePage === "home" && "active-home"}`}
                >
                    <a>Home
                    <span className="nav-item-num">01</span>
                    </a>
                </li>
                <li onClick={() => props.setActivePage("menu")}
                    className={`nav-item 
                    ${props.activePage === "menu" && "active-menu"}`}
                >
                    <a>Menu
                    <span className="nav-item-num">02</span>
                    </a>
                </li>
                <li onClick={() => props.setActivePage("contact")}
                    className={`nav-item 
                    ${props.activePage === "contact" && "active-contact"}`}
                >
                    <a>Contact
                    <span className="nav-item-num">03</span>
                    </a>
                </li>
            </ol>
        </nav>
    )
}