import React from "react";
import projects from "../../utils/projectsList";
import './project.css';
const Project = () =>{
    return(
        <section className="project section" id="project">
            <h2 className="section__title mb-1-5 project__tl">Proyectos</h2>
            <div className="project__box container">
                {projects.map((project, index) => (
                    <div className="project__info" key={index}>
                        <img src={project.image} alt="" className="project__img" />
                        <div className="project__description">
                            <h2 className="project__title">{project.title}</h2>
                            <p className="text__project">{project.description}</p>
                            <div className="project__technology">
                                <h3 className="technology__title">Tecnologias: </h3>
                                {project.technologies.map((tech,index) => (
                                    <span className="technology__details" key={index}>{tech}</span>
                                ))}
                            </div>
                            <div className="project__button">
                                <a href={project.live} className="project__demo" target="_blank" rel="noreferrer">Demo</a>
                                <a href={project.github} className="project__code"  target="_blank" rel="noreferrer">Repositorio</a>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </section>
    )
}
export default Project