import React from "react";

const Backend = ({ isVisible }) => {
    const backendSkills = [
        { name: "PHP", icon: "uil-server", color: "#777BB4" },
        { name: "Laravel", icon: "uil-layer-group", color: "#FF2D20" },
        { name: "Django", icon: "uil-code-branch", color: "#092E20" },
        
        { name: "MySQL", icon: "uil-database", color: "#4479A1" },
        { name: "PostgreSQL", icon: "uil-database", color: "#336791" },
        { name: "Firebase", icon: "uil-cloud", color: "#FFCA28" }
    ];

    return (
        <div className={`skills__content skills__content--backend ${isVisible ? 'skills__content--visible' : ''}`}>
            <div className="skills__header">
                <div className="skills__icon skills__icon--backend">
                    <i className="uil uil-server"></i>
                </div>
                <h3 className="skills__title">Backend</h3>
                <p className="skills__description">
                    Desarrollo de APIs robustas y bases de datos escalables
                </p>
            </div>
            
            <div className="skills__grid">
                {backendSkills.map((skill, index) => (
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

export default Backend