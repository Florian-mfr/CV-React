import React from 'react';
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';

import Navbar from '../components/Navbar'
import Social from '../components/Social';

const Home = () => {
    /*
        let app = document.getElementById('typewriter');
    
        let typewriter = new Typewriter(app, {
            loop: true,
            delay: 75,
        });
    
        typewriter
            .pauseFor(1000)
            .typeString('<span style="color: #e96228">Html</span> / <span style="color: #31a4d5">CSS</span>')
            .pauseFor(500)
            .deleteChars(10)
            .typeString('<span style="color: #efd81d">Javascript</span>')
            .pauseFor(500)
            .deleteChars(10)
            .typeString('<span style="color: #5ed3f3">ReactJS</span> / <span style="color: #7fc728">NodeJS</span>')
            .pauseFor(500)
            .deleteChars(16)
            .start();
    */
    return (
        <div className='home'>
            <Navbar />
            <Social />
            <h1><Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true
                }}
                onInit={(typewriter) => {

                    typewriter
                        .pauseFor(1000)
                        .typeString('Développeur web <span style="color: #e96228">Html</span> / <span style="color: #31a4d5">CSS</span>')
                        .pauseFor(500)
                        .deleteChars(10)
                        .typeString('<span style="color: #efd81d">Javascript</span>')
                        .pauseFor(500)
                        .deleteChars(10)
                        .typeString('<span style="color: #5ed3f3">ReactJS</span> / <span style="color: #7fc728">NodeJS</span>')
                        .pauseFor(500)
                        .deleteChars(16)
                        .start();
                }}
            /></h1>
            <motion.div
                className='home-container'
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <div className='profile picture'></div>
                <p>Bonjour moi c'est Florian, j'ai 23 ans et je suis originaire de Toulouse. Ayant commencé ma jeune carrière professionnelle dans un domaine choisi par défaut, j'ai décidé de me donner à fond dans quelque chose qui me plait...</p>
                <div className='toulouse picture'></div>
                <p>...Et miracle, il y a un peu plus d'un an j'ai découvert l'univers du web, j'ai commencé par apprendre en autodidacte pendant quelque mois et voyant que c'était quelque chose qui me passionne, j'ai poursuivi dans cette voie et obtenu mon diplôme suite à une formation de développeur web chez Open Classrooms.</p>
                <div className='code picture'></div>
                <p>Je continu aujourd'hui encore de développer mes compétences tout en recherchant l'emploi de mes rêves dans ce domaine.</p>


            </motion.div>
        </div>
    );
};

export default Home;