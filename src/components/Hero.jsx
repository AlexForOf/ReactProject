import React from "react";
import './Hero.css';
import photoGrid from '../images/photo-grid.png';

function Hero() {
    return (
        <section className="hero">
            <img src={photoGrid} className="hero--photoGrid"></img>
            <h1 className="hero--main--header">Online Experiences</h1>
            <p className="hero--main--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
       </section>
    )
}

export default Hero;