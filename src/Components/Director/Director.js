import React, { useState } from "react";
import "./Director.css";
import crossIcon from "../../assets/icon-cross.svg";
import closeIcon from "../../assets/icon-close.svg";
import twitter from "../../assets/icon-twitter.svg";
import linkedIn from "../../assets/icon-linkedin.svg";

const Director = ({ fullName, jobTitle, description, image }) => {
    const [isSelected, setIsSelected] = useState(true);

    return (
        <div className="director-outer">
            <div className="director-inner">
                {isSelected === true ? (
                    <div className="director-info">
                        <img src={image} alt="avatar" />
                        <h3>{fullName}</h3>
                        <p>{jobTitle}</p>
                    </div>
                ) : (
                    <div className="director-selected">
                        <h3>{fullName}</h3>
                        <p>{description}</p>
                        <div className="director-socials">
                            <img src={twitter} alt="twitter logo" />
                            <img src={linkedIn} alt="linkedin logo" />
                        </div>
                    </div>
                )}
                <div
                    className={
                        isSelected === true ? "circle red" : "circle blue"
                    }
                    onClick={() => setIsSelected((prevState) => !prevState)}
                >
                    <img
                        src={isSelected === true ? crossIcon : closeIcon}
                        alt="close or open cog"
                    />
                </div>
            </div>
        </div>
    );
};

export default Director;
