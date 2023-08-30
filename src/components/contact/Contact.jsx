import React from "react";
import './contact.css';

const Contact = () =>{
    return(
        <section className="contact section" id="contact">
            <h2 className="section__title mb-1-5">Contactame</h2>

            <div className="contact__container container grid">
                <a href="mailto:david.upt.123@gmail.com" className="contact__box">
                    <div className="contact__social grid">
                        <i class='uil uil-envelope contact__icon'></i>
                        <h3 className="contact__title">Correo</h3>
                    </div>
                    <span className="contact__subtitle">Mantengámonos en contacto.</span>
                </a>

                <a href="https://github.com/DDamian98" target="_blank" className="contact__box">
                    <div className="contact__social grid">
                        <i class='uil uil-github-alt contact__icon'></i>
                        <h3 className="contact__title">GitHub</h3>
                    </div>
                    <span className="contact__subtitle">Mira mis repositorios.</span>
                </a>
                

                <a href="https://github.com/DDamian98" target="_blank" className="contact__box">
                    <div className="contact__social grid">
                        <i class='uil uil-linkedin-alt contact__icon' ></i>
                        <h3 className="contact__title">LinkedIn</h3>
                    </div>
                <span className="contact__subtitle">Conectémonos.</span>
                </a>
            </div>
        </section>
    )
}

export default Contact;