import React from "react";
import "./About.css";
import AboutHeroSection from "../../Sections/About-Hero/AboutHero";
import Directors from "../../Sections/Directors/Directors";
import Clients from "../../Sections/Clients/Clients";
import GetStartedSection from "../../Sections/GetStarted/GetStarted";
import Footer from "../../Components/Footer/Footer";

const About = () => {
    return (
        <div className="about">
            <AboutHeroSection />
            <Directors />
            <Clients />
            <GetStartedSection />
            <Footer />
        </div>
    );
};

export default About;
