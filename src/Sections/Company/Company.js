import React from "react";
import "./Company.css";
import Benefit from "../../Components/Benefit/Benefit";
import chartIcon from "../../assets/icon-chart.svg";
import cogIcon from "../../assets/icon-cog.svg";
import personIcon from "../../assets/icon-person.svg";

const benefits = {
    experience: {
        title: "Experienced Invididuals",
        text: "Our network is made up of highly experienced professionals who are passionate about what they do.",
        icon: personIcon,
    },
    easy: {
        title: "Easy to Implement",
        text: "Our processes have been refined over years of implementation meaning our teams always deliver",
        icon: cogIcon,
    },
    productivity: {
        title: "Enhanced Productivity",
        text: "Our customised platform with in-built analytics helps you manage your distributed teams",
        icon: chartIcon,
    },
};

const CompanySection = () => {
    return (
        <section id="companysection">
            <div className="company-container">
                <div className="company-title">
                    <h2>Build & manage distributed teams like no one else.</h2>
                </div>
                <div className="benefits-container">
                    {Object.entries(benefits).map((item) => {
                        console.log(item);
                        return (
                            <Benefit
                                title={item[1].title}
                                text={item[1].text}
                                icon={item[1].icon}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CompanySection;
