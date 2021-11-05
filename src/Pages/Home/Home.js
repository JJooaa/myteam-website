import React from "react";
import "./Home.css";
import HeroSection from "../../Sections/Hero/Hero";
import CompanySection from "../../Sections/Company/Company";
import FeedbackSection from "../../Sections/Feedback/Feedback";

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <CompanySection />
            <FeedbackSection />
        </div>
    );
};

export default Home;
