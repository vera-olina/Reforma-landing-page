import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Content() {
    
    const [activePage, setActivePage] = React.useState("home");

    //JS Switch Statment
    function renderPage() {
        switch(activePage) {
            case "home":
                return <Home />;
            case "menu":
                return <Menu />;
            case "contact":
                return <Contact />;
            default:
                return null;    
        }
    }

    return (
        <div className="wraper">
            <Navbar 
                setActivePage = {setActivePage}
                activePage={activePage}
            />
            {renderPage()}
            <Footer 
                activePage={activePage}
            />
        </div>

    )
}
