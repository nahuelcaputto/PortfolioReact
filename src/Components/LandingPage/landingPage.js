import React from 'react'
import Projects from '../Projects/projects'
import AboutMe from '../AboutMe/aboutMe'
import Contact from '../Contact/contact'
import AtachBar from './atachBar'
import Certifications from '../Certifications/certifications';
import './landingPage.css'
import { Element } from 'react-scroll'


export default function Landing() {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <AtachBar />
            <section >
                <Element name="Home" />
                <div className="presentation">
                    <h1>Hola<strong className="pres-dot">.</strong></h1>
                    <div className="presentation-sub">
                        <p>mi nombre es <strong>Nahuel</strong></p>
                        <p>soy un <strong>desarrollador web full stack</strong></p>
                        <p>de <strong>Buenos Aires</strong> para el mundo</p>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <Element name="About" />
                <AboutMe />
            </section>
            <section className="projects-section">
                <Element name="Projects" />
                <Projects />
            </section>
            <section className="certifications-section">
                <Element name="Certifications" />
                <Certifications />
            </section>
            <section>
                <Element name="Contact" />
                <Contact />
            </section>
        </div>
    )
}