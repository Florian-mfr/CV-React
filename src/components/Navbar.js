import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName='navActive'>
                        <span>Accueil</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/competences' activeClassName='navActive'>
                        <span>Compétences</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/portfolio' activeClassName='navActive'>
                        <span>Portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/contact' activeClassName='navActive'>
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
            
        </div>
    );
};

export default Navbar;