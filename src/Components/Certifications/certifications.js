import React from 'react'
import data from './certData'
import './certifications.css'

export default function Certifications() {
    const certificates = data.certificates;
    return (
        <>
            <div className="container mt-5">
                <h1 className="mt-5">Certificaciones<strong>.</strong></h1>
                <div className="row row-cols-1  row-cols-md-2 row-cols-lg-2">
                    {certificates && certificates.map((cert, i) => (
                        <div key={i} className="shadow my-1 d-flex align-items-center">
                            <a href={cert.url}><img className="img-fluid" src={cert.urlImage} alt=""></img></a>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}