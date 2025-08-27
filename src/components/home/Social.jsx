import React, { useState } from "react";

const Social = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const socialLinks = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/david.damian.98/",
            icon: "uil-instagram",
            color: "#E4405F",
            delay: "0.1s"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/51931784733",
            icon: "uil-whatsapp",
            color: "#25D366",
            delay: "0.2s"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/david-reynaldo-damian-mamani-2836a6276/",
            icon: "uil-linkedin-alt",
            color: "#0077B5",
            delay: "0.3s"
        },
        {
            name: "GitHub",
            url: "https://github.com/DDamian98",
            icon: "uil-github-alt",
            color: "#24292e",
            delay: "0.4s"
        }
    ];

    return (
        <div className="home__social">
            {socialLinks.map((link, index) => (
                <a 
                    key={index}
                    href={link.url} 
                    className={`home__social-icon ${hoveredIcon === index ? 'home__social-icon--hovered' : ''}`}
                    target="_blank" 
                    rel="noreferrer"
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    style={{ 
                        '--icon-color': link.color,
                        '--animation-delay': link.delay
                    }}
                    title={link.name}
                >
                    <i className={`uil ${link.icon}`}></i>
                    <span className="home__social-tooltip">{link.name}</span>
                </a>
            ))}
        </div>
    )
}

export default Social;