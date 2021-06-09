import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const [toggleNav, setToggleNav] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const togglePhoneNav = () => {
        setToggleNav(!toggleNav);
    }

    useEffect(() => {
        const changeWidth = () => {
            setWidth(window.innerWidth);

            if (window.innerWidth > 500) {
                setToggleNav(false)
            }
        }
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <nav className='navbar-container'>

            {(toggleNav || width > 600) && (
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
            )}
            <button onClick={togglePhoneNav} className='phone-menu'>
                <span></span>
                <span></span>
                <span></span>
            </button>

        </nav>

    );
};