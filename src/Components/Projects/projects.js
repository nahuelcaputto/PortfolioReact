import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export default function Projects() {
    const [activeTab, setActiveTab] = useState(0);
    const projects = require("./projects.json")
    console.log(projects);
    const toggleCategories = () => {
        if (activeTab === 0) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle syle={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}> Astrid Toys</CardTitle>
                    <img style={{ height: '300px' }} src="https://i.imgur.com/samwvex.jpg" alt="ecommerce" />
                    <CardText>
                        Ecommerce de FunkoPops realizado con la pila de desarrollo PERN. PosgreSQL-Express-React-Node.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Deploy</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#FFF' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if (activeTab === 1) {
            return (<div><h1>This is React Native</h1></div>)
        }
    }
    return (
        <div className="category-tabs">
            <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
                <Tab>React</Tab>
                <Tab>React Native</Tab>

            </Tabs>
            <section className="projects-section">
                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">
                            {toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </section>
        </div>
    )
}