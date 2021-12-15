import React from "react";
import "./AboutHero.css";
import NavBar from "../../Components/NavBar/NavBar";

// About page hero section

const AboutHeroSection = () => {
    return (
        <section id="about-hero">
            <NavBar />
            <div className="about-hero-wrapper">
                <h1 style={{ fontSize: 64 }}>About</h1>
                <div className="about-hero-info">
                    <p>
                        We help companies build dynamic teams made up of top
                        global talent. Using our network of passionate
                        professionals we drive innovation and deliver incredible
                        outcomes. Talented, diverse teams shape the best
                        products and experiences. We’ll bring those teams to
                        you.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;
