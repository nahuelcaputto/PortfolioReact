import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

export default function Projects() {
    const [activeTab, setActiveTab] = useState(0);
    const toggleCategories = () => {
        if (activeTab === 0) {
            return (<div><h1>This is React</h1></div>)
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