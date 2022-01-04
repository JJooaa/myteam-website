import React from "react";
import "./Home.css";
import HeroSection from "../../Sections/Hero/Hero";
import CompanySection from "../../Sections/Company/Company";
import FeedbackSection from "../../Sections/Feedback/Feedback";
import GetStartedSection from "../../Sections/GetStarted/GetStarted";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <CompanySection />
            <FeedbackSection />
            <GetStartedSection />
            <Footer />
        </div>
    );
};

export default Home;
