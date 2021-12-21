import React from "react";
import "./Directors.css";
import Director from "../../Components/Director/Director";
import nikitaAvatar from "../../assets/avatar-nikita.jpg";
import cristianAvatar from "../../assets/avatar-christian.jpg";
import cruzAvatar from "../../assets/avatar-cruz.jpg";
import drakeAvatar from "../../assets/avatar-drake.jpg";
import griffinAvatar from "../../assets/avatar-griffin.jpg";
import adenAvatar from "../../assets/avatar-aden.jpg";

const personel = {
    nikita: {
        fullName: "Nikita Marks",
        jobTitle: "Founder & CEO",
        description: "",
        image: nikitaAvatar,
    },
    cristian: {
        fullName: "Cristian Duncan",
        jobTitle: "Co-founder & COO",
        description: "",
        image: cristianAvatar,
    },
    cruz: {
        fullName: "Cruz Hamer",
        jobTitle: "Co-founder & CTO",
        description: "",
        image: cruzAvatar,
    },
    drake: {
        fullName: "Drake Heaton",
        jobTitle: "Business Development Lead",
        description: "",
        image: drakeAvatar,
    },
    griffin: {
        fullName: "Griffin Wiser",
        jobTitle: "Lead Marketing",
        description: "",
        image: griffinAvatar,
    },
    aden: {
        fullName: "Aden Allan",
        jobTitle: "Head of Talent",
        description: "",
        image: adenAvatar,
    },
};

const Directors = () => {
    return (
        <section id="directors">
            <div className="directors-content">
                <h2>Meet the directors </h2>
                <div className="directors-container">
                    {Object.entries(personel).map((person) => (
                        <Director
                            fullName={person[1].fullName}
                            jobTitle={person[1].jobTitle}
                            image={person[1].image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Directors;
