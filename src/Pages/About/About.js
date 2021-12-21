import React from "react";
import "./About.css";
import AboutHeroSection from "../../Sections/About-Hero/AboutHero";
import Directors from "../../Sections/Directors/Directors";

const About = () => {
    return (
        <div className="about">
            <AboutHeroSection />
            <Directors />
        </div>
    );
};

export default About;
