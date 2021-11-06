import React from "react";
import "./ContactButton.css";

const ContactButton = ({ color }) => {
    return (
        <div style={{ borderColor: color }} className="contact-button">
            <p style={{ color: color }}>contact us</p>
        </div>
    );
};

export default ContactButton;
