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
        description:
            "“It always amazes me how much talent there is in every corner of the globe.",
        image: nikitaAvatar,
    },
    cristian: {
        fullName: "Cristian Duncan",
        jobTitle: "Co-founder & COO",
        description:
            "“Distributed teams required unique processes. You need to approach work in a new way.” ",
        image: cristianAvatar,
    },
    cruz: {
        fullName: "Cruz Hamer",
        jobTitle: "Co-founder & CTO",
        description:
            "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
        image: cruzAvatar,
    },
    drake: {
        fullName: "Drake Heaton",
        jobTitle: "Business Development Lead",
        description:
            "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
        image: drakeAvatar,
    },
    griffin: {
        fullName: "Griffin Wiser",
        jobTitle: "Lead Marketing",
        description:
            "“Unique perspectives shape unique products, which is what you need to survive these days.”",
        image: griffinAvatar,
    },
    aden: {
        fullName: "Aden Allan",
        jobTitle: "Head of Talent",
        description:
            "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
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
                            description={person[1].description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Directors;
