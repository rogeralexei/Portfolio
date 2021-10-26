import React from "react";
import logo from "../assets/images/logo.png";

const Navbar=()=>{
    return (
        <nav className="navbar">
            <div className="logo-section">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="link-section">
                <ul className="links">
                    <li className="nav-link">Abilities</li>
                    <li className="nav-link">Projects</li>
                    <li className="nav-link">Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;