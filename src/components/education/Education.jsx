import React from "react";
import "./education.css"; 
import education from "../../utils/Education_Experiencia"

const Education = () => {
  
    return(
        <section className="education section" id = "education">
            <h2 className="section__title mb-1-5">Educacion y Experiencia</h2>

            <div className="education__container container">
                <div className="education__tabs">
                    <div className="education__button  button--flex">
                        <i className="uil uil-graduation-cap education__icon"></i>Educacion
                    </div>

                    <div className="education__button button--flex">
                        <i className="uil uil-briefcase-alt education__icon"></i>Experiencia
                    </div>
                </div>

                <div className="education__sections">
                    <div className="education__content education__content-active">
                    {education.map((educations,index)=>(
                         educations.type === "Education" ? (
                            <div className="education__data"  key={index}>
                            <div>
                                <h3 className="education__title">{educations.title}</h3>
                                <span className="education__subtitle">{educations.Company}</span>
                                <div className="education__calender">
                                    <i className="uil uil-calendar-alt"></i> {educations.Period}
                                </div>
                            </div>

                            <div>
                                <span className="education__rounder"></span>
                                <span className="education__line"></span>
                            </div>
                        </div>
                         ) :
                    <div className="education__data" key={index}>
                            <div></div>
                            <div>
                                <span className="education__rounder"></span>
                                <span className="education__line"></span>
                            </div>
                            <div>
                                <h3 className="education__title">{educations.title}</h3>
                                <span className="education__subtitle">{educations.Company}</span>
                                <div className="education__calender">
                                    <i className="uil uil-calendar-alt"></i>{educations.Period}
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Education;