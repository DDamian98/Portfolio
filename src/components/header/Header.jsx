import React, { useState, useEffect } from 'react'
import "./header.css"; 
import Logo from "../../assets/Logo.png"

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Efecto para detectar scroll y cambiar el estilo del header
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY >= 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Efecto para cerrar el menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (Toggle && !event.target.closest('.nav__menu') && !event.target.closest('.nav__toggle')) {
                closeMenu();
            }
        };

        if (Toggle) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [Toggle]);

    // Función para cerrar el menú móvil
    const closeMenu = () => {
        showMenu(false);
    };

    // Función para alternar el menú
    const toggleMenu = () => {
        showMenu(!Toggle);
    };

    // Función para manejar clic en enlaces
    const handleLinkClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        closeMenu();
    };

    // Debug temporal
    console.log('Toggle state:', Toggle);
    console.log('Menu class:', Toggle ? "show-menu" : "hide-menu");

    return(
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <nav className="nav container">
                <a href="#home" className="nav__logo" onClick={handleLinkClick}>
                    <img src={Logo} alt="David Damian" />
                    <span className="nav__logo-text">DAMIAN</span>
                </a>
                
                <div className={`nav__menu ${Toggle ? "show-menu" : "hide-menu"}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link" onClick={handleLinkClick}>
                                <i className="uil uil-estate nav__icon"></i>
                                <span className="nav__text">Inicio</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={handleLinkClick}>
                                <i className="uil uil-user nav__icon"></i>
                                <span className="nav__text">Sobre Mí</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skill" className="nav__link" onClick={handleLinkClick}>
                                <i className="uil uil-file-alt nav__icon"></i>
                                <span className="nav__text">Habilidades</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#project" className="nav__link" onClick={handleLinkClick}>
                                <i className="uil uil-scenery nav__icon"></i>
                                <span className="nav__text">Proyectos</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#education" className="nav__link" onClick={handleLinkClick}>
                                <i className="uil uil-graduation-cap nav__icon"></i>
                                <span className="nav__text">Educación</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={handleLinkClick}>
                                <i className="uil uil-message nav__icon"></i>
                                <span className="nav__text">Contacto</span>
                            </a>
                        </li>
                    </ul>
                    <button 
                        className="nav__close" 
                        onClick={closeMenu} 
                        aria-label="Cerrar menú"
                        title="Cerrar menú"
                    >
                        <i className="uil uil-times"></i>
                    </button>
                </div>
                
                <button 
                    className="nav__toggle" 
                    onClick={toggleMenu}
                    aria-label="Abrir menú"
                >
                    <i className="uil uil-apps"></i>
                </button>
            </nav>
        </header>
    )
}

export default Header