import React from "react";
import "./Home.css";
import HeroSection from "../../Sections/Hero/Hero";
import CompanySection from "../../Sections/Company/Company";
import FeedbackSection from "../../Sections/Feedback/Feedback";
import GetStartedSection from "../../Sections/GetStarted/GetStarted";
const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <CompanySection />
            <FeedbackSection />
            <GetStartedSection />
        </div>
    );
};

export default Home;
