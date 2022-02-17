import React from "react";
import "./Benefit.css";

const Benefit = ({ title, text, icon }) => {
    return (
        <div className="benefit">
            <img src={icon} alt="benefit" />
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Benefit;
