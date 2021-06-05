import React, { Component } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion'

import Project from './Project'

class ProjectList extends Component {
    state = {
        projects: portfolioData
    }

    render() {
        let { projects } = this.state;
        return (
            <motion.div 
            className='portfolio-container'
            initial={{ opacity: 0, x:100 }}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={{ duration: 0.5 }}
            >
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
            </motion.div>
        );
    }
}

export default ProjectList;