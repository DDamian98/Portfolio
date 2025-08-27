import React, { useEffect, useState } from 'react';
import "./home.css"
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Animación de entrada
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className={`home__content grid ${isVisible ? 'home__content--visible' : ''}`}>
                    <Social/>
                    <div className="home__img"></div>
                    <Data/>
                </div>
            </div>
            
            {/* Elementos decorativos de fondo */}
            <div className="home__bg-elements">
                <div className="home__bg-circle home__bg-circle--1"></div>
                <div className="home__bg-circle home__bg-circle--2"></div>
                <div className="home__bg-circle home__bg-circle--3"></div>
            </div>
        </section>
    )
}
export default Home