import React from 'react';
import { motion } from 'framer-motion'

import Navbar from '../components/Navbar';
import Social from '../components/Social';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navbar />
            <Social />
            <motion.div 
            className='knowledges-container'
            initial={{ opacity: 0, x:100 }}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={{ duration: 0.5 }}
            >
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
                    <span>UX/UI</span>
                    <div className='progress-bar'>
                        <div className='progress3' role='progressbar'></div>
                    </div>
                </div>
                <div className='langages'>
                    <h2>Langages / Outils <span>(classé par ordre de maîtrise)</span></h2>
                    <div><span>Html5</span><span>Css3</span><span>Javascript</span><span>Github</span><span>VueJS</span><span>ReactJS</span><span>ExpressJS</span><span>NodeJS</span><span>NoSQL</span><span>SQL</span><span>Figma</span><span>Photoshop</span></div>
                    
                </div>
                <div className='atouts'>
                    <h2>Mes atouts</h2>
                    <span><i class="fas fa-brain"></i> Curiosité Intellectuelle</span>
                    <span><i class="fas fa-forward"></i> Prise d'initiatives</span>
                    <span><i class="fas fa-paint-brush"></i> Créativité</span>
                    <span><i class="fas fa-filter"></i> Agilité</span>
                </div>
                <div className='langues'>
                    <h2>Langues</h2>
                    <span>Anglais</span>
                    <div><i class="fas fa-circle full"></i><i class="fas fa-circle full"></i><i class="fas fa-circle full"></i><i class="fas fa-circle full"></i><i class="fas fa-circle full"></i><i class="fas fa-circle full"></i><i class="fas fa-circle full"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i></div>
                    <span className='level'>Indépendant</span>
                    <span>Espagnol</span>
                    <div><i class="fas fa-circle full"></i><i class="fas fa-circle full"></i><i class="fas fa-circle full"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i></div>
                    <span className='level'>Élémentaire</span>
                </div>
            </motion.div>
        </div>
    );
};

export default Knowledges;