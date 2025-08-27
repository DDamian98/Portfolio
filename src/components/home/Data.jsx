import React, { useState, useEffect } from "react";

const Data = () => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    
    const fullText = "Desarrollador Full Stack";
    const typingSpeed = 100;

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timer = setTimeout(() => {
                setCurrentText(fullText.substring(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, typingSpeed);

            return () => clearTimeout(timer);
        } else {
            setIsTypingComplete(true);
        }
    }, [currentIndex, fullText, typingSpeed]);

    return(
        <div className="home__data">
            <div className="home__greeting">
                <span className="home__greeting-text">👋 Hola, mi nombre es</span>
            </div>
            
            <h1 className="home__title">
                <span className="home__title-name">David Damian</span>
                <span className="home__title-role">
                    {currentText}
                    {!isTypingComplete && <span className="home__cursor">|</span>}
                </span>
            </h1>
            
            <p className="home__description">
                Bachiller de <strong>Ingeniería de Sistemas</strong> con experiencia en desarrollo 
                <strong> Full Stack</strong>. Especializado en crear soluciones web modernas y escalables. 
                Actualmente radico en <strong>Tacna, Perú</strong> 🇵🇪
            </p>
            
            <div className="home__buttons">
                <a href="#contact" className="button button--primary button--flex">
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
                        <path
                            d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
                
                <a href="#about" className="button button--secondary button--flex">
                    <span>Conoce más</span>
                    <svg
                        className="button__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}
export default Data;