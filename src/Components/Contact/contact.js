import React from 'react';
import './contact.css';
export default function Contacts() {
    return (
        <div className="container" >

            <h1>Contacto<strong>.</strong></h1>
            <div className='row'>
                <div className="social-links d-flex justify-content-around">
                    {/* mailto */}
                    <a href="mailto: nahuelmartinc@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope-square m-2" aria-hidden="true" /
                        ></a>
                    {/* github */}
                    <a href="https://github.com/nahuelcaputto" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github-square m-2" aria-hidden="true" />
                    </a>
                    {/* linkedin */}
                    <a href="https://www.linkedin.com/in/nahuel-caputto/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square m-2" aria-hidden="true" />
                    </a>
                    {/* whatsapp */}
                    <a href="https://wa.me/+541162737766" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp-square m-2" aria-hidden="true" />
                    </a>
                </div>
            </div>


        </div>
    )
}