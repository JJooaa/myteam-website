import React from "react";
import "./ContactForm.css";
import NavBar from "../../Components/NavBar/NavBar";
import chartIcon from "../../assets/icon-chart.svg";
import cogIcon from "../../assets/icon-cog.svg";
import personIcon from "../../assets/icon-person.svg";
// bg-pattern-about-2-contact-1.svg;
// bg-pattern-contact-2.svg;

const arrayObjects = [
    {
        image: personIcon,
        text: "The quality of our talent network",
    },
    {
        image: cogIcon,
        text: "Usage & implementation of our software",
    },
    {
        image: chartIcon,
        text: "How we help drive innovation",
    },
];

const ContactForm = () => {
    return (
        <section id="contact-form">
            <NavBar />
            <div className="contact-content-container">
                <div className="contact-info">
                    <h1 style={{ fontSize: 64 }}>Contact</h1>
                    <div className="contact-text">
                        <h2 style={{ fontSize: 32, color: "#F67E7E" }}>
                            Ask us about
                        </h2>
                        <div className="contact-x">
                            {arrayObjects.map((item) => {
                                return (
                                    <div className="contact-item">
                                        <img
                                            style={{ width: 72, height: 72 }}
                                            src={item.image}
                                            alt={item.text}
                                        />
                                        <p style={{marginLeft: 23}}>{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="contact-form"></div>
            </div>
        </section>
    );
};

export default ContactForm;
