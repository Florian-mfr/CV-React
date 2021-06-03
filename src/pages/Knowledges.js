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
                    <span>UX/UI</span>
                    <div className='progress-bar'>
                        <div className='progress3' role='progressbar'></div>
                    </div>
                </div>
                <div className='langages'>
                    <h2>Langages / Outils <span>(classé par ordre de maitrise)</span></h2>
                    <div><span>Html5</span><span>Css3</span><span>Javascript</span><span>VueJS</span><span>ReactJS</span><span>NodeJS</span><span>NoSQL</span><span>SQL</span><span>Figma</span><span>Photoshop</span></div>
                    
                </div>
                <div className='atouts'>
                    <h2>Mes atouts</h2>
                    <span><i class="fas fa-brain"></i> Curiosité Intellectuelle</span>
                    <span><i class="fas fa-forward"></i> Prise d'initiative</span>
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
            </div>
        </div>
    );
};

export default Knowledges;