import React, { useContext } from "react";
import "./ContactButton.css";
import { PageContext } from "../../App";

const ContactButton = ({ color }) => {
    const [page, setPage] = useContext(PageContext);

    return (
        <div
            style={{ borderColor: color }}
            className="contact-button"
            onClick={() => setPage("contact")}
        >
            <p style={{ color: color }}>contact us</p>
        </div>
    );
};

export default ContactButton;
