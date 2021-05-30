import React from 'react';
import Navbar from '../components/Navbar';
import ProjectList from '../components/ProjectList';
import Social from '../components/Social';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navbar />
            <Social />
            <ProjectList />
        </div>
    );
};

export default Portfolio;