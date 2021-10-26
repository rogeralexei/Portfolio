import React from "react";

const Abilities=()=>{
    return(
        <>
        <section className="abilities">
            <div className="technologies">
                <h2>Technologies</h2>
                <div className="technology-bars">
                    <p>PYTHON</p>
                    <progress max="100" value="90"> 90% </progress>
                    <p>FLASK</p>
                    <progress max="100" value="75"> 75% </progress>
                    <p>HTML</p>
                    <progress max="100" value="70"> 70% </progress>
                    <p>CSS</p>
                    <progress max="100" value="70"> 70% </progress>
                    <p>JAVASCRIPT</p>
                    <progress max="100" value="70"> 70% </progress>
                    <p>SASS</p>
                    <progress max="100" value="60"> 60% </progress>
                    <p>BOOTSTRAP</p>
                    <progress max="100" value="60"> 60% </progress>
                    <p>SEMANTIC UI</p>
                    <progress max="100" value="60"> 60% </progress>
                    <p>REACT</p>
                    <progress max="100" value="40"> 40% </progress>
                </div>
            </div>
            <div className="general-info">
                <div className="content">
                <h2>Profile</h2>
                <p>I'm  a systems engineering student with strong interest in programming and algorithmia topics . One of the things I enjoy the most is learning. I fully commit to everything I do and  focus on always getting the best results.</p>
                </div>
                <div className="content">
                <h2>Languages</h2>
                <ul>
                    <li>Spanish (Native Language)</li>
                    <li>English</li>
                    <li>Mandarin</li>
                </ul>
                </div>
                <div className="content">
                <h2>Education</h2>
                <div className="education-item">
                    <div>
                        <h3>Bachelor in Systems Engineering</h3>
                        <h4>Universidad Interamericana de Panamá</h4>
                        <p className="country">🇵🇦 PANAMÁ, PANAMÁ</p>
                    </div>
                    <p>2018-Actualidad</p>
                </div>
                <div className="education-item">
                    <div>
                        <h3>Mandarin Language Studies</h3>
                        <h4>Northeast Normal University</h4>
                        <p className="country">🇨🇳CHANGCHUN,CHINA</p>
                    </div>
                    <p>2016-2017</p>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Abilities;