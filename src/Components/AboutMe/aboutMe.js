import React from 'react';
import profilePic from '../../images/about-img.png';
import './aboutMe.css'

export default function AboutMe() {
    return (
        <div className="about-container">
            <img className="profile-pic" src={profilePic} alt='profile-pic' />
            <div className="about-text">
                <p>Sobre mi</p>
                <p>Fullstack Developer</p>
                <p>
                    Soy un entusiasta de la tecnología al que le encanta desafiarse dia a dia.
                    Me gusta ayudar a los demas siempre que pueda, asi de alguna manera siento
                    que devuelvo algo de lo que me han enseñado mis profesores y compañeros a
                    lo largo de los años que llevo desarrollando.
                </p>
                <div>
                    <p>Javascript | React | React Native | Redux | Node | Express</p>
                    <p>Moleculer | Sequelize | GeneXus | PostgreSQL | MySQL</p>
                </div>
                <a href="mailto: nahuelmartinc@gmail.com">
                    <button class="hire-btn">Contactame</button>
                </a>
                <a href="src\Nahuel Caputto CV.pdf" download>
                    <button class="down-cv">Descargar CV</button>
                </a>
            </div>

        </div>
    )
}