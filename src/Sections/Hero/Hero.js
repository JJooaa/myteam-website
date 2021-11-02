import React from "react";
import "./Hero.css";
import NavBar from "../../Components/NavBar/NavBar";

const HeroSection = () => {
    return (
        <section id="hero">
            <NavBar />
            <div className="hero-header">
                <h1>
                    Find the <br/>best <span>talent</span>
                </h1>
                <div className="hero-info">
                    <p>
                        Finding the right people and building high performing
                        teams can be hard. Most companies aren’t tapping into
                        the abundance of global talent. We’re about to change
                        that.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
