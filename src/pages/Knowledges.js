import React from 'react';
import Navbar from '../components/Navbar';
import Social from '../components/Social';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navbar />
            <Social />
            <div className='knowledges-container'>
                <div className='competences'>
                    <h2>Mes compétences</h2>
                    <span>Front-end</span>
                    <div className='progress-bar'>
                        <div className='progress1' role='progressbar'></div>
                    </div>
                    <span>Back-end</span>
                    <div className='progress-bar'>
                        <div className='progress2' role='progressbar'></div>
                    </div>
                    <span>UX/UI Design</span>
                    <div className='progress-bar'>
                        <div className='progress3' role='progressbar'></div>
                    </div>
                </div>
                <div className='langages'>
                    <h2>Langages</h2>
                </div>
                <div className='atouts'>
                    <h2>Mes atouts</h2>
                </div>
                <div className='langues'>
                    <h2>Langues</h2>
                </div>
            </div>
        </div>
    );
};

export default Knowledges;