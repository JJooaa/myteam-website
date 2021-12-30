import React from "react";
import "./Clients.css";
import verge from "../../assets/logo-the-verge.png";
import guardian from "../../assets/logo-the-guardian.png";
import radar from "../../assets/logo-tech-radar.png";
import jakarta from "../../assets/logo-jakarta-post.png";
import gadgets from "../../assets/logo-gadgets-now.png";

const Clients = () => {
    const logosAndDimensions = [
        { image: verge, width: 165, height: 28 },
        { image: jakarta, width: 184, height: 23 },
        { image: guardian, width: 180, height: 28 },
        { image: radar, width: 165, height: 28 },
        { image: gadgets, width: 98, height: 45 },
    ];

    return (
        <section id="clients-section">
            <h2>Some of our clients</h2>
            <div>
                {logosAndDimensions.map((logo) => (
                    <img
                        alt="logo"
                        style={{ width: logo.width, height: logo.height }}
                        src={logo.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Clients;
