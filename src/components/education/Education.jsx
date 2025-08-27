import React, { useState, useEffect } from "react";
import "./education.css"; 
import education from "../../utils/Education_Experiencia"

const Education = () => {
    const [activeTab, setActiveTab] = useState("Experience");
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

        const educationSection = document.getElementById('education');
        if (educationSection) {
            observer.observe(educationSection);
        }

        return () => {
            if (educationSection) {
                observer.unobserve(educationSection);
            }
        };
    }, []);

    const educationData = education.filter(item => item.type === "Education");
    const experienceData = education.filter(item => item.type === "Experiencie");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const getStatusBadge = (period) => {
        if (period.includes("Actualidad")) {
            return { text: "Actual", type: "current" };
        }
        return { text: "Completado", type: "completed" };
    };

    const getTypeIcon = (type) => {
        return type === "Education" ? "uil-graduation-cap" : "uil-briefcase-alt";
    };

    const getTypeColor = (type) => {
        return "var(--button-color)";
    };

    return(
        <section className="education section" id="education">
            <div className="education__header">
                <h2 className="section__title education__title">
                    <span className="education__title-text">Educación y Experiencia</span>
                    <span className="education__title-line"></span>
                </h2>
                <p className="education__subtitle">
                    Mi trayectoria académica y profesional en el desarrollo de software
                </p>
            </div>

            <div className={`education__container container ${isVisible ? 'education__container--visible' : ''}`}>
                <div className="education__tabs">
                    <button 
                        className={`education__tab ${activeTab === "Experience" ? 'education__tab--active' : ''}`}
                        onClick={() => handleTabChange("Experience")}
                    >
                        <i className="uil uil-briefcase-alt education__tab-icon"></i>
                        <span>Experiencia</span>
                        <span className="education__tab-count">{experienceData.length}</span>
                    </button>

                    <button 
                        className={`education__tab ${activeTab === "Education" ? 'education__tab--active' : ''}`}
                        onClick={() => handleTabChange("Education")}
                    >
                        <i className="uil uil-graduation-cap education__tab-icon"></i>
                        <span>Educación</span>
                        <span className="education__tab-count">{educationData.length}</span>
                    </button>
                </div>

                <div className="education__content">
                    {activeTab === "Experience" && (
                        <div className="education__grid">
                            {experienceData.map((item, index) => {
                                const status = getStatusBadge(item.Period);
                                return (
                                    <div 
                                        key={index} 
                                        className={`education__card ${isVisible ? 'education__card--visible' : ''}`}
                                        style={{ '--animation-delay': `${index * 0.15}s` }}
                                    >
                                        <div className="education__card-header">
                                            <div className="education__card-icon" style={{ '--icon-color': getTypeColor("Experience") }}>
                                                <i className={getTypeIcon("Experience")}></i>
                                            </div>
                                            <div className="education__card-status">
                                                <span className={`education__status-badge education__status-badge--${status.type}`}>
                                                    {status.text}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="education__card-content">
                                            <h3 className="education__card-title">{item.title}</h3>
                                            <p className="education__card-company">{item.Company}</p>
                                            
                                            <div className="education__card-period">
                                                <i className="uil uil-calendar-alt"></i>
                                                <span>{item.Period}</span>
                                            </div>
                                        </div>

                                        <div className="education__card-footer">
                                            <div className="education__card-progress">
                                                <div className="education__progress-bar">
                                                    <div className="education__progress-fill" style={{ '--progress-width': status.type === 'current' ? '100%' : '100%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {activeTab === "Education" && (
                        <div className="education__grid">
                            {educationData.map((item, index) => {
                                const status = getStatusBadge(item.Period);
                                return (
                                    <div 
                                        key={index} 
                                        className={`education__card ${isVisible ? 'education__card--visible' : ''}`}
                                        style={{ '--animation-delay': `${index * 0.15}s` }}
                                    >
                                        <div className="education__card-header">
                                            <div className="education__card-icon" style={{ '--icon-color': getTypeColor("Education") }}>
                                                <i className={getTypeIcon("Education")}></i>
                                            </div>
                                            <div className="education__card-status">
                                                <span className={`education__status-badge education__status-badge--${status.type}`}>
                                                    {status.text}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="education__card-content">
                                            <h3 className="education__card-title">{item.title}</h3>
                                            <p className="education__card-company">{item.Company}</p>
                                            
                                            <div className="education__card-period">
                                                <i className="uil uil-calendar-alt"></i>
                                                <span>{item.Period}</span>
                                            </div>
                                        </div>

                                        <div className="education__card-footer">
                                            <div className="education__card-progress">
                                                <div className="education__progress-bar">
                                                    <div className="education__progress-fill" style={{ '--progress-width': status.type === 'current' ? '100%' : '100%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Education;