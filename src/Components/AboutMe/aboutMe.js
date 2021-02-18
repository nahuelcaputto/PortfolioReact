import React from 'react';
import profilePic from '../../images/about-img.png';
import './aboutMe.css';
import CV from '../../CV/Nahuel Caputto CV.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutMe() {
    AOS.init({
        mirror: false,
        once: false,
        easing: 'ease-in-out',
        duration: 600
    });
    return (
        <div className="container my-5">
            <div className='row'>
                <h1 className='col-12 m-5'
                    data-aos="fade-right">
                    sobre mi<strong>.</strong>
                </h1>
                <div className='col-sm-12 col-md-6'
                    data-aos="fade-right">
                    <img className="ml-1" src={profilePic} alt='profile-pic' />
                </div>
                <div className="about-text col-sm-12 col-md-12 col-lg-6"
                    data-aos="fade-left">

                    <h3>Full Stack Web Developer Jr</h3>
                    <p>
                        Me llamo <strong>Nahuel Caputto</strong>, vivo en la ciudad de <strong>Buenos Aires</strong>. Trabajé durante cinco años como desarrollador GeneXus y un año como tester funcional. Luego elegí formarme en nuevas tecnologías y empecé a investigar
                        todo lo relacionado con el <strong>desarrollo de aplicaciones y paginas web.</strong> Recientemente obtuve la certificación de <strong>Full Stack Web Developer</strong> por parte del
                        bootcamp de <strong>Henry</strong> y mi meta es seguir creciendo todos los dias un poco mas.
                    </p>
                    <a className="down-cv" href={CV} download>
                        <strong>Descargar CV</strong>
                    </a>
                    <div>
                        <h2>tecnologías<strong>.</strong></h2>
                        <p>Javascript <strong>|</strong> React <strong>|</strong> React Native <strong>|</strong> Redux <strong>|</strong> Node <strong>|</strong> Express</p>
                        <p>Moleculer <strong>|</strong> Sequelize <strong>|</strong> GeneXus <strong>|</strong> PostgreSQL <strong>|</strong> MySQL</p>
                    </div>

                </div>
            </div>

        </div >
    )
}