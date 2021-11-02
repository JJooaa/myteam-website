import React from "react";
import myteamlogo from "../../assets/myteam.svg";
import "./NavBar.css";
import ContactButton from "../ContactButton/ContactButton";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logolinks">
                <img src={myteamlogo} />
                <div className="links">
                    <p>home</p>
                    <p>about</p>
                </div>
            </div>
            <ContactButton />
        </div>
    );
};

export default NavBar;
