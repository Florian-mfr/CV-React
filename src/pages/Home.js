import React from 'react';
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';

import Navbar from '../components/Navbar'
import Social from '../components/Social';

const Home = () => {
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
                        .pauseFor(500)
                        .typeString('Développeur web <span style="color: #e96228">Html</span> / <span style="color: #31a4d5">CSS</span>')
                        .pauseFor(1000)
                        .deleteChars(10)
                        .typeString('<span style="color: #efd81d">Javascript</span>')
                        .pauseFor(1000)
                        .deleteChars(10)
                        .typeString('<span style="color: #5ed3f3">React</span> / <span style="color: #00bb7c">Vue</span>')
                        .pauseFor(1000)
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
                <div className='info'>
                    <div className='profile picture'></div>
                    <p>Bonjour moi c'est Florian, j'ai 23 ans et je suis originaire de Toulouse. Passionné du numérique, du web et de nouvelles technologies depuis plusieurs années, j'ai décidé il y a un peu plus d'un an d'y consacrer toute mon énergie afin d'en faire mon métier.</p>
                </div>
                <div className='info'>
                    <div className='books picture'></div>
                    <p>J'ai commencé par apprendre en autodidacte pendant plusieurs mois puis j'ai poursuivi dans cette voie et obtenu mon diplôme de développeur web chez Open Classrooms.</p>
                </div>
                <div className='info'>
                    <div className='code picture'></div>
                    <p>Je continue aujourd'hui encore de développer mes compétences tout en restant à l'affût des dernières évolutions dans ce domaine et je serai ravi de réaliser vos projets !</p>
                </div>

            </motion.div>
        </div>
    );
};

export default Home;