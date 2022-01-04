import React, { useContext } from "react";
import myteamlogo from "../../assets/myteam.svg";
import "./NavBar.css";
import ContactButton from "../ContactButton/ContactButton";
import { PageContext } from "../../App";

const NavBar = () => {
    const [page, setPage] = useContext(PageContext);

    return (
        <div className="navbar">
            <div className="logolinks">
                <img src={myteamlogo} />
                <div className="links">
                    <p onClick={() => setPage("home")}>home</p>
                    <p onClick={() => setPage("about")}>about</p>
                </div>
            </div>
            <ContactButton />
        </div>
    );
};

export default NavBar;
