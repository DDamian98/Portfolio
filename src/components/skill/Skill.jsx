import React, { useState, useEffect } from "react";
import './skill.css'
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";

const Skill = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const skillsSection = document.getElementById('skill');
        if (skillsSection) {
            observer.observe(skillsSection);
        }

        return () => {
            if (skillsSection) {
                observer.unobserve(skillsSection);
            }
        };
    }, []);

    return(
        <section className="skills section" id="skill">
            <div className="skills__header">
                <h2 className="section__title skills__title">
                    <span className="skills__title-text">Habilidades</span>
                    <span className="skills__title-line"></span>
                </h2>
                <p className="skills__subtitle">
                    Tecnologías y herramientas que domino para crear soluciones innovadoras
                </p>
            </div>
            
            <div className={`skills__container container grid ${isVisible ? 'skills__container--visible' : ''}`}>
                <Frontend isVisible={isVisible} />
                <Backend isVisible={isVisible} />
                <Tools isVisible={isVisible} />
            </div>
        </section>
    )
}

export default Skill;