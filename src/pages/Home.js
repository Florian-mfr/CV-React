import React from 'react';

import Navbar from '../components/Navbar'
import Social from '../components/Social';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Social />
            <h1>Développeur Web <span>Javascript</span></h1>
            <div className='home-container'>
                <div className='container-left'>
                    <div className='profile-pic'></div>
                    <p>Bonjour moi c'est Florian, il y a un peu plus d'un an j'ai découvert l'univers du web, et
                    une nouvelle passion par la même occasion, j'ai donc poursuivi dans cette voie et viens aujourd'hui de
                    finir ma formation chez OpenClassrooms, je suis donc à votre disposition pour répondre à toutes vos
                attentes</p>
                </div>
                <div className='container-right'>
                    <div className='cube'>
                        <div className='face front'></div>
                        <div className='face back'></div>
                        <div className='face left'></div>
                        <div className='face right'></div>
                        <div className='face top'></div>
                        <div className='face bottom'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;