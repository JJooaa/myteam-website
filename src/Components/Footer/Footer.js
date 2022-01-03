import React from "react";
import "./Footer.css";
import myTeam from "../../assets/myteam.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import facebookIcon from "../../assets/icon-facebook.svg";
import pinterestIcon from "../../assets/icon-pinterest.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="myteam">
                        <img src={myTeam} alt="myteamlogo" />
                        <div className="footer-nav">
                            <p>home</p>
                            <p>about</p>
                        </div>
                    </div>
                    <p
                        style={{
                            fontSize: 15,
                            lineHeight: "25px",
                            opacity: "60%",
                        }}
                    >
                        987 Hillcrest Lane <br />
                        Irvine, CA <br />
                        California 92714 <br />
                        Call Us : 949-833-7432
                    </p>
                </div>
                <div className="socials">
                    <div>
                        <img src={facebookIcon} alt="facebook icon" />
                        <img src={pinterestIcon} alt="pinterest icon" />
                        <img src={twitterIcon} alt="twitter icon" />
                    </div>
                    <p
                        style={{
                            fontSize: 15,
                            lineHeight: "25px",
                            opacity: "60%",
                        }}
                    >
                        Copyright 2020. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
