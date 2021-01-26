import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./projects.css";

export default function Projects() {
    const projectsObj = require("./projects.json")
    const projects = projectsObj.projects
    return (
        <>
            <h1 className='title'>proyectos<strong>.</strong></h1>
            <div className="projects-section">

                {projects && projects.map((project, i) => (
                    <Card key={i} shadow={5} className="card">
                        <CardTitle style={{ color: '#FFF', textShadow: '2px 2px 5px #ff4081', fontWeight: 'bold', fontSize: '25px', height: '176px', alignItems: 'flex-end', background: `url(${project.urlImage}) center / cover` }}> {project.name}</CardTitle>
                        <CardText className="card-text">{project.descriptionES}</CardText>
                        <CardActions border className="card-actions">
                            {project.github ? (<Button style={{ color: '#ff4081' }} colored href={project.github}>Github</Button>) : (<></>)}
                            {project.urlPage ? (<Button colored href={project.urlPage}>Deploy</Button>) : (<></>)}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                ))
                }
            </div >
        </>
    )
}