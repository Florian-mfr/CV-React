import React from 'react';
import { motion } from 'framer-motion'

import Navbar from '../components/Navbar'
import Social from '../components/Social';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Social />
            <h1>Développeur Web <span>Javascript</span></h1>
            <motion.div 
            className='home-container'
            initial={{ opacity: 0, x:100 }}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={{ duration: 0.5 }}
            >
                <div className='container-left'>
                    <div className='profile-pic'></div>
                    <p>Bonjour moi c'est Florian, il y a un peu plus d'un an j'ai découvert l'univers du web, et une nouvelle passion par la même occasion. J'ai donc poursuivi dans cette voie et obtenu mon diplôme suite à une formation de développeur web chez Open Classrooms. Je continu aujourd'hui encore de développer mes compétences tout en recherchant l'emploi de mes rêves dans ce domaine.</p>
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
            </motion.div>
        </div>
    );
};

export default Home;