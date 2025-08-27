import React, { useState, useEffect } from "react";
import "./about.css";
import AboutImg from "../../assets/Profile_SF.jpg";
import CV from "../../assets/Damian_David_CV.pdf";

const About = () => {
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

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);

    const stats = [
        { number: "3+", label: "Años de experiencia", icon: "uil-briefcase-alt" },
        { number: "15+", label: "Proyectos completados", icon: "uil-check-circle" },
        { number: "5+", label: "Tecnologías dominadas", icon: "uil-code-branch" },
        { number: "100%", label: "Satisfacción del cliente", icon: "uil-smile" }
    ];

    const skills = [
        { name: "Frontend", icon: "uil-desktop", color: "#4F46E5", description: "React, Next.js, JavaScript" },
        { name: "Backend", icon: "uil-server", color: "#059669", description: "PHP, Laravel, Node.js" },
        { name: "Mobile", icon: "uil-mobile-android", color: "#DC2626", description: "Flutter, React Native" },
        { name: "Database", icon: "uil-database", color: "#EA580C", description: "MySQL, MongoDB, PostgreSQL" },
        { name: "Tools", icon: "uil-setting", color: "#0891B2", description: "Git, VS Code, Figma" }
    ];

    return (
        <section className="about section" id="about">
            <div className="about__header">
                <h2 className="section__title about__me">
                    <span className="about__title-text">Sobre mí</span>
                    <span className="about__title-line"></span>
                </h2>
                <p className="about__subtitle">
                    Conoce más sobre mi experiencia y pasión por el desarrollo
                </p>
            </div>

            <div className="about__container container grid">
                <div className={`about__img-container ${isVisible ? 'about__img-container--visible' : ''}`}>
                    <div className="about__img-wrapper">
                        <img src={AboutImg} alt="David Damian - Desarrollador Full Stack" className="about__img" />
                        <div className="about__img-overlay"></div>
                        <div className="about__img-badge">
                            <i className="uil uil-code"></i>
                            <span>Full Stack Developer</span>
                        </div>
                    </div>
                </div>

                <div className={`about__data ${isVisible ? 'about__data--visible' : ''}`}>
                    <div className="about__content">
                        <h3 className="about__content-title">
                            Desarrollador apasionado por crear soluciones innovadoras
                        </h3>
                        
                        <p className="about__description">
                            Soy un <strong>desarrollador Full Stack</strong> con más de 3 años de experiencia 
                            creando aplicaciones web y móviles escalables. Mi expertise abarca desde 
                            <strong> PHP y Laravel</strong> hasta <strong>React y Flutter</strong>, 
                            permitiéndome ofrecer soluciones completas y de alta calidad.
                        </p>

                        <p className="about__description">
                            Me especializo en implementar arquitecturas modernas con 
                            <strong> JavaScript, React, Next.js y MySQL</strong>, 
                            siempre enfocándome en optimizar la experiencia del usuario y 
                            garantizar el rendimiento de las aplicaciones.
                        </p>
                    </div>

                    <div className="about__actions">
                        <a
                            href={CV}
                            target="_blank"
                            className="button button--primary button--flex"
                            rel="noreferrer"
                        >
                            <span>Descargar CV</span>
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>

                        <a
                            href="#contact"
                            className="button button--secondary button--flex"
                        >
                            <span>Contáctame</span>
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Sección combinada de Especialidades y Estadísticas */}
            <div className={`about__combined-section ${isVisible ? 'about__combined-section--visible' : ''}`}>
                <div className="about__combined-container container">
                    {/* Especialidades */}
                    <div className="about__skills-section">
                        <h4 className="about__skills-title">Mis especialidades</h4>
                        <div className="about__skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="about__skill-item">
                                    <div className="about__skill-icon" style={{ backgroundColor: skill.color }}>
                                        <i className={skill.icon}></i>
                                    </div>
                                    <div className="about__skill-content">
                                        <h5 className="about__skill-name">{skill.name}</h5>
                                        <p className="about__skill-description">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Estadísticas */}
                    <div className="about__stats-section">
                        <h4 className="about__stats-title">Mi experiencia</h4>
                        <div className="about__stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="about__stat-item">
                                    <div className="about__stat-icon">
                                        <i className={stat.icon}></i>
                                    </div>
                                    <div className="about__stat-content">
                                        <span className="about__stat-number">{stat.number}</span>
                                        <span className="about__stat-label">{stat.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About