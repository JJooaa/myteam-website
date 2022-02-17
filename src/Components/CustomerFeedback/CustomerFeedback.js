import React from "react";
import "./CustomerFeedback.css";

const CustomerFeedback = ({ comment, name, jobTitle, avatar }) => {
    return (
        <div className="feedback">
            <p>{comment}</p>
            <div className="nametitle-wrapper">
                <h3>{name}</h3>
                <p>{jobTitle}</p>
            </div>
            <img alt="customer avatar" src={avatar} />
        </div>
    );
};

export default CustomerFeedback;
