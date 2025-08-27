import React, { useState, useEffect } from "react";

const ScrollDown = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Ocultar cuando se ha hecho scroll significativo
            if (scrollTop > windowHeight * 0.3) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollClick = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    if (!isVisible) return null;

    return(
        <div className={`home__scroll ${isVisible ? 'home__scroll--visible' : ''}`}>
            <a 
                href="#about" 
                className="home__scroll-button button--flex"
                onClick={handleScrollClick}
                aria-label="Desplazarse hacia abajo"
            >
                <div className="home__scroll-mouse">
                    <svg
                        width="32px"
                        height="32px"
                        className="home__scroll-mouse-svg"
                        viewBox="0 0 247 390"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 1.5,
                        }}                        
                    >
                        <path
                            className="wheel"
                            d="M123.359,79.775l0,72.843"
                            style={{
                                fill: "none",
                                stroke: "var(--title-color-dark)",
                                strokeWidth: "20px",
                            }}
                        />
                        <path
                            id="mouse"
                            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                            style={{
                                fill: "none",
                                stroke: "var(--title-color-dark)",
                                strokeWidth: "20px",
                            }}
                        />
                    </svg>
                </div>
                <span className="home__scroll-name">Desplázate</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    )
}

export default ScrollDown