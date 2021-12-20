import React from "react";
import "./Director.css";
import crossIcon from "../../assets/icon-cross.svg";

const Director = ({ fullName, jobTitle, description, image }) => {
    return (
        <div className="director-outer">
            <div className="director-inner">
                <div className="director-info">
                    <img src={image} alt="avatar" />
                    <p>{fullName}</p>
                    <p>{jobTitle}</p>
                </div>
                <div className="circle">
                    <img src={crossIcon} alt="asda" />
                </div>
            </div>
        </div>
    );
};

export default Director;
