import React, { useState, useEffect } from "react";
import './contact.css';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const contactSection = document.getElementById('contact');
        if (contactSection) {
            observer.observe(contactSection);
        }

        return () => {
            if (contactSection) {
                observer.unobserve(contactSection);
            }
        };
    }, []);

    const contactMethods = [
        {
            id: 'email',
            href: 'mailto:david.upt.123@gmail.com',
            icon: 'uil-envelope',
            title: 'Correo',
            subtitle: 'Mantengámonos en contacto',
            color: 'var(--button-color)',
            description: 'Envíame un email para cualquier consulta'
        },
        {
            id: 'github',
            href: 'https://github.com/DDamian98',
            icon: 'uil-github-alt',
            title: 'GitHub',
            subtitle: 'Mira mis repositorios',
            color: 'var(--button-color)',
            description: 'Explora mis proyectos y contribuciones'
        },
        {
            id: 'linkedin',
            href: 'https://linkedin.com/in/damian-david',
            icon: 'uil-linkedin-alt',
            title: 'LinkedIn',
            subtitle: 'Conectémonos',
            color: 'var(--button-color)',
            description: 'Conecta conmigo profesionalmente'
        },
        {
            id: 'whatsapp',
            href: 'https://wa.me/51931784733',
            icon: 'uil-whatsapp',
            title: 'WhatsApp',
            subtitle: 'Hablemos por WhatsApp',
            color: 'var(--button-color)',
            description: 'Conversemos directamente'
        }
    ];

    return(
        <section className="contact section" id="contact">
            <div className="contact__header">
                <h2 className="section__title contact__title">
                    <span className="contact__title-text">Contáctame</span>
                    <span className="contact__title-line"></span>
                </h2>
                <p className="contact__subtitle">
                    ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
                </p>
            </div>

            <div className={`contact__container container ${isVisible ? 'contact__container--visible' : ''}`}>
                <div className="contact__grid">
                    {contactMethods.map((method, index) => (
                        <a 
                            key={method.id}
                            href={method.href}
                            target={method.id !== 'email' ? '_blank' : '_self'}
                            rel={method.id !== 'email' ? 'noreferrer' : undefined}
                            className={`contact__card ${isVisible ? 'contact__card--visible' : ''}`}
                            style={{ 
                                '--animation-delay': `${index * 0.15}s`,
                                '--card-color': method.color
                            }}
                            onMouseEnter={() => setHoveredCard(method.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="contact__card-header">
                                <div className="contact__card-icon">
                                    <i className={`uil ${method.icon}`}></i>
                                </div>
                                <div className="contact__card-status">
                                    <span className="contact__status-badge">
                                        {hoveredCard === method.id ? 'Hacer clic' : 'Disponible'}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="contact__card-content">
                                <h3 className="contact__card-title">{method.title}</h3>
                                <p className="contact__card-subtitle">{method.subtitle}</p>
                                <p className="contact__card-description">{method.description}</p>
                            </div>

                            <div className="contact__card-footer">
                                <div className="contact__card-action">
                                    <i className="uil uil-external-link-alt"></i>
                                    <span>Acceder</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact;