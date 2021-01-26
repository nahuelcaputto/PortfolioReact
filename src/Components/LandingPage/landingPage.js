import React from 'react'
import { Grid, Cell } from 'react-mdl';
// import profilePic from '../images/profile-pic.png'
import Projects from '../Projects/projects'
import AboutMe from '../AboutMe/aboutMe'
import Contact from '../Contact/contact'
import AtachBar from './atachBar'
import './landingPage.css'
import { Element } from 'react-scroll'

export default function Landing() {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <AtachBar />
            <Element name="Home" />
            <Grid className='landing-grid'>
                <Cell col={12}>
                    {/* <img className="profile-pic" src={profilePic} alt='profile-pic' /> */}
                    <div className="presentation">
                        <h1>Hola<strong>.</strong></h1>
                        <div className="presentation-sub">
                            <p>mi nombre es <strong>Nahuel</strong></p>
                            <p>soy un <strong>desarrollador web full stack</strong></p>
                            <p>de <strong>Buenos Aires</strong> para el Mundo</p>
                        </div>
                    </div>
                </Cell>
                <Cell col={12}>
                    <Element name="About" />
                    <AboutMe />
                </Cell>

                <Cell col={12}>
                    <Element name="Projects" />
                    <Projects />
                </Cell>

                <Cell col={12}>
                    <Contact />
                </Cell>
            </Grid>
        </div>
    )
}