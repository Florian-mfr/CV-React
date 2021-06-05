import React from 'react';
import { motion } from 'framer-motion'

import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Social from '../components/Social';

const Contact = () => {
    return (
        <div className='contact'>
            <Navbar />
            <Social />
            <motion.div 
            className='contact-container'
            initial={{ opacity: 0, x:100 }}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={{ duration: 0.5 }}
            >
                <Form />
                <div className='link-container'>
                    <ul>
                        <li className='contact-link'><i class="fab fa-linkedin-in social-icon"></i> linkedin.com/in/florianmaffre</li>
                        <li className='contact-link'><i class="fas fa-phone social-icon"></i> 06 08 10 36 90</li>
                        <li className='contact-link'><i class="fas fa-envelope social-icon"></i> florian.maffre31@gmail.com</li>

                    </ul>

                </div>
            </motion.div>
        </div>
    );
};

export default Contact;