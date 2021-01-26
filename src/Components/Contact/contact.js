import React from 'react';
import './contact.css';
export default function Contacts() {
    return (
        <div className="contact-container" >
            <h1>Contacto<strong>.</strong></h1>
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
    )
}