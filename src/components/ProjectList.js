import React, { Component } from 'react';
import { portfolioData } from '../data/portfolioData';
import Project from './Project'

class ProjectList extends Component {
    state = {
        projects: portfolioData
    }

    render() {
        let { projects } = this.state;
        return (
            <div className='portfolio-container'>
                {
                    projects.map(item => {
                        return (
                            <Project
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default ProjectList;