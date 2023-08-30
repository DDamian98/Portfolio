import React from "react";
import './skill.css'
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";

const Skill= () => {
    return(
        <section className="skills section" id="skill">
            <h2 className="section__title mb-1-5">Habilidades</h2>
            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <Tools/>
            </div>
        </section>
        
    )
}

export default Skill;