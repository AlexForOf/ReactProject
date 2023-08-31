import React from "react";
import './Navbar.css';
import logo from '../images/airbnb-logo.png'

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={logo} alt="logo" />
        </nav>
    )
}

export default Navbar;