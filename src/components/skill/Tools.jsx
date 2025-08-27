import React from "react";

const Tools = ({ isVisible }) => {
    const toolsSkills = [
        { name: "Git", icon: "uil-code-branch", color: "#F05032" },
        { name: "GitHub", icon: "uil-github", color: "#181717" },
        { name: "VS Code", icon: "uil-code", color: "#007ACC" },
        { name: "Heroku", icon: "uil-cloud", color: "#430098" },
        { name: "Hostinger", icon: "uil-server", color: "#FF6B35" }
    ];

    return (
        <div className={`skills__content skills__content--tools ${isVisible ? 'skills__content--visible' : ''}`}>
            <div className="skills__header">
                <div className="skills__icon skills__icon--tools">
                    <i className="uil uil-setting"></i>
                </div>
                <h3 className="skills__title">Herramientas</h3>
                <p className="skills__description">
                    Herramientas de desarrollo y plataformas de despliegue
                </p>
            </div>
            
            <div className="skills__grid">
                {toolsSkills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="skills__item"
                        style={{ 
                            '--skill-color': skill.color,
                            '--animation-delay': `${index * 0.1}s`
                        }}
                    >
                        <div className="skills__item-icon" style={{ backgroundColor: skill.color }}>
                            <i className={skill.icon}></i>
                        </div>
                        <span className="skills__item-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tools