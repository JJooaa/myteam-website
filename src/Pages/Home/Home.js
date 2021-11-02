import React from "react";
import "./Home.css";
import HeroSection from "../../Sections/Hero/Hero";
import CompanySection from "../../Sections/Company/Company";

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <CompanySection />
        </div>
    );
};

export default Home;
