import React from "react";

const Frontend = ({ isVisible }) => {
    const frontendSkills = [
        { name: "HTML", icon: "uil-html5", color: "#E34F26" },
        { name: "CSS", icon: "uil-css3-simple", color: "#1572B6" },
        { name: "JavaScript", icon: "uil-code-branch", color: "#F7DF1E" },
        { name: "Bootstrap", icon: "uil-layer-group", color: "#7952B3" },
        { name: "React", icon: "uil-react", color: "#61DAFB" },
        { name: "Next.js", icon: "uil-react", color: "#000000" },
        { name: "Dart", icon: "uil-mobile-android", color: "#0175C2" },
        { name: "Flutter", icon: "uil-mobile-android", color: "#02569B" },
    ];

    return(
        <div className={`skills__content skills__content--frontend ${isVisible ? 'skills__content--visible' : ''}`}>
            <div className="skills__header">
                <div className="skills__icon skills__icon--frontend">
                    <i className="uil uil-desktop"></i>
                </div>
                <h3 className="skills__title">Frontend</h3>
                <p className="skills__description">
                    Desarrollo de interfaces de usuario modernas y responsivas
                </p>
            </div>
            
            <div className="skills__grid">
                {frontendSkills.map((skill, index) => (
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
    )
}

export default Frontend