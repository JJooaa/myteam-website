import React from "react";
import "./GetStarted.css";
import ContactButton from "../../Components/ContactButton/ContactButton";

const GetStartedSection = () => {
    return (
        <section id="getstarted-section">
            <div className="getstarted-container">
                <h2 style={{ color: "#012F34" }}>Ready to get started?</h2>
                <ContactButton color="#012F34" />
            </div>
        </section>
    );
};

export default GetStartedSection;
