import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./projects.css";

export default function Projects() {
    const projectsObj = require("./projects.json")
    const projects = projectsObj.projects
    console.log(projects)


    return (
        <div className="projects-section">

        {projects && projects.map((project,i)=>(
                    <Card key={i} shadow={5} style={{width: '320px', height: '320px', margin: "1em"}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: `url(${project.urlImage}) center / cover`}}> {project.name}</CardTitle>
                        <CardText>{project.descriptionES}</CardText>
                        <CardActions border className="card-actions">
                            {project.github?(<Button colored href={project.github}>Github</Button>):(<></>)}
                            {project.urlPage?(<Button colored href={project.urlPage}>Deploy</Button>):(<></>)}      
                        </CardActions>
                        <CardMenu style={{ color: '#FFF' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

        ))}
        </div>
    )
}