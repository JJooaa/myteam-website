import React, { useContext } from "react";
import "./ContactButton.css";
import { PageContext } from "../../App";

const ContactButton = ({ color }) => {
    const [page, setPage] = useContext(PageContext);

    return (
        <div
            className={
                color === "#012F34"
                    ? "contact-button black"
                    : "contact-button white"
            }
            onClick={() => setPage("contact")}
        >
            contact us
        </div>
    );
};

export default ContactButton;
