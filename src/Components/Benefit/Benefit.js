import React from "react";
import "./Benefit.css";

const Benefit = ({title, text, icon}) => {
    return (
        <div className="benefit">
            <img className="benefit-img" src={icon} />
            <div className="benefit-info">
                <h3 style={{ color: "#F67E7E" }}>{title}</h3>
                <p style={{fontSize: "15px", lineHeight: "25px"}}>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Benefit;
