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
                    <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
                    On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;