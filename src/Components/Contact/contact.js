import React from 'react';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Contacts() {
    AOS.init({
        mirror: false,
        once: false,
        easing: 'ease-in-out',
        duration: 600
    });
    return (
        <div className="container" >

            <h1 className="contact-title" data-aos="fade-right">
                contacto<strong>.</strong>
            </h1>
            <div className='row'>
                <div className="social-links d-flex justify-content-around" data-aos="zoom-in-up" >

                    {/* mailto */}
                    <a href="mailto: nahuelmartinc@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope-square m-2" />
                    </a>

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