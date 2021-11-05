import React from "react";
import "./CustomerFeedback.css";

const CustomerFeedback = ({ comment, name, jobTitle, avatar }) => {
    return (
        <div className="feedback">
            <p
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    lineHeight: "25px",
                }}
            >
                {comment}
            </p>
            <div className="nametitle-wrapper">
                <h3 style={{ color: "#79C8C7", textAlign: "center" }}>
                    {name}
                </h3>
                <p
                    style={{
                        fontSize: "13px",
                        lineHeight: "18px",
                        fontStyle: "italic",
                        fontWeight: 500,
                    }}
                >
                    {jobTitle}
                </p>
            </div>
            <img className="feedback-img" src={avatar} />
        </div>
    );
};

export default CustomerFeedback;
