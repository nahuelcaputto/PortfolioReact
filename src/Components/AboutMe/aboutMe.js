import React from 'react';
import profilePic from '../../images/about-img.png';
import './aboutMe.css';
import CV from '../../CV/Nahuel Caputto CV.pdf'

export default function AboutMe() {
    return (
        <div className="about-container container-fluid">
            <div className='row'>
                <h1 className='col-12'>sobre mi<strong>.</strong></h1>
                <div className='col-sm-12 col-md-6'>
                    <img className="profile-pic" src={profilePic} alt='profile-pic' />
                </div>
                <div className="about-text col-sm-12 col-md-6">
                    
                    <h3>Full Stack Web Developer JR</h3>
                    <p>
                        Soy un desarrollador web full stack jr viviendo en Buenos Aires.
                        
                        Tengo experiencia de 5 años en desarrollo GeneXus y manejo de bases de datos SQL 
                        y un año de experiencia como tester funcional.

                        Por diversos motivos elegí formarme en nuevas tecnologías y empecé a investigar 
                        todo lo relacionado con el desarrollo de aplicaciones y paginas web.

                        Acabo de terminar el bootcamp de Henry y mi meta es seguir aprendiendo 
                        todos los dias un poco mas. 
                        
                        Soy muy autodidacta y estoy muy entrenado en aprender y aplicar cosas nuevas todo el tiempo.

                    </p>
                    <a className="down-cv"href={CV} download>
                        <strong>Descargar CV</strong>
                    </a>
                    <div>
                        <h2>tecnologías<strong>.</strong></h2>
                        <p>Javascript | React | React Native | Redux | Node | Express</p>
                        <p>Moleculer | Sequelize | GeneXus | PostgreSQL | MySQL</p>
                    </div>

                </div>
            </div>

        </div>
    )
}