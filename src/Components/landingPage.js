import React from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from '../images/profile-pic.png'

export default function Landing() {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img className="profile-pic" src={profilePic} alt='profile-pic' />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr />
                        <p>Javascript | React | React Native | Redux | Node | Express</p>
                        <p>Moleculer | Sequelize | GeneXus | PostgreSQL | MySQL</p>
                        <div className="social-links">
                            {/* mailto */}
                            <a href="mailto: nahuelmartinc@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-envelope-square" aria-hidden="true" /
                                ></a>
                            {/* github */}
                            <a href="https://github.com/nahuelcaputto" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-github-square" aria-hidden="true" />
                            </a>
                            {/* linkedin */}
                            <a href="https://www.linkedin.com/in/nahuel-caputto/" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* whatsapp */}
                            <a href="https://wa.me/+541162737766" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-whatsapp-square" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}