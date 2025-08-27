import React, { useState, useEffect } from "react";
import projects from "../../utils/projectsList";
import './project.css';

const Project = () => {
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

        const projectSection = document.getElementById('project');
        if (projectSection) {
            observer.observe(projectSection);
        }

        return () => {
            if (projectSection) {
                observer.unobserve(projectSection);
            }
        };
    }, []);

    return(
        <section className="project section" id="project">
            <div className="project__header">
                <h2 className="section__title project__title">
                    <span className="project__title-text">Proyectos</span>
                    <span className="project__title-line"></span>
                </h2>
                <p className="project__subtitle">
                    Algunos de mis proyectos más destacados y trabajos recientes
                </p>
            </div>
            
            <div className={`project__container container ${isVisible ? 'project__container--visible' : ''}`}>
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className={`project__card ${isVisible ? 'project__card--visible' : ''}`}
                        style={{ '--animation-delay': `${index * 0.2}s` }}
                    >
                        <div className="project__image-container">
                            <img src={project.image} alt={project.title} className="project__image" />
                            <div className="project__image-overlay">
                                <a 
                                    href={project.live} 
                                    className="project__image-badge"
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    <i className="uil uil-external-link-alt"></i>
                                    <span>Ver Proyecto</span>
                                </a>
                            </div>
                        </div>
                        
                        <div className="project__content">
                            <div className="project__header-content">
                                <h3 className="project__name">{project.title}</h3>
                                <span className="project__category">{project.subTitle}</span>
                            </div>
                            
                            <p className="project__description">{project.description}</p>
                            
                            <div className="project__technologies">
                                <h4 className="project__tech-title">Tecnologías utilizadas:</h4>
                                <div className="project__tech-list">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="project__tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="project__actions">
                                <a 
                                    href={project.live} 
                                    className="project__btn project__btn--primary"
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    <i className="uil uil-external-link-alt"></i>
                                    <span>Ver Proyecto</span>
                                </a>
                                {(project.github && project.github !== "#") && (
                                    <a 
                                        href={project.github} 
                                        className="project__btn project__btn--secondary"
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <i className="uil uil-github-alt"></i>
                                        <span>Código</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project