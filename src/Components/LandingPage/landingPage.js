import React from 'react';
import { Grid, Cell } from 'react-mdl';
// import profilePic from '../images/profile-pic.png'
import Projects from '../Projects/projects'
import AboutMe from '../AboutMe/aboutMe'
import Contact from '../contact'
import './landingPage.css'

export default function Landing() {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    {/* <img className="profile-pic" src={profilePic} alt='profile-pic' /> */}
                    <div className="presentation">
                        <h1>¡Hola!</h1>
                        <div className="presentation-sub">
                            <p>mi nombre es <strong>Nahuel</strong></p>
                            <p>soy un <strong>desarrollador web full stack</strong></p>
                            <p>de <strong>Buenos Aires</strong> para el Mundo</p>
                        </div>
                    </div>
                </Cell>
                <Cell col={12}>
                    <AboutMe />
                </Cell>
                <Cell col={12}>
                    <Contact />
                </Cell>
                <Cell col={12}>
                    <Projects name="projects" />
                </Cell>
            </Grid>
        </div>
    )
}