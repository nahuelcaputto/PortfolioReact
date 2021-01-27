import React from 'react';
import "./projects.css";

export default function Projects() {
    const projectsObj = require("./projects.json")
    const projects = projectsObj.projects
    return (
        <>
            <h1 className='title'>proyectos<strong>.</strong></h1>
            <div className='container m-10'>
                <div className='row row-cols-1  row-cols-md-3 row-cols-lg-4 '>
                    {projects && projects.map((project, i) => (

                        <div class="col m-2 project-card" key={i}>
                            <div class="card">
                                <img src={project.urlImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{project.name}</h5>
                                    <p class="card-text">{project.descriptionES}</p>
                                    <div className='d-flex justify-content-between'>
                                        {project.github ? (<a href={project.github} class="btn btn-outline-primary mx-1">Github</a>) : (<></>)}
                                        {project.urlPage ? (<a href={project.urlPage} class="btn btn-outline-primary mx-1">Deploy</a>) : (<></>)}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}