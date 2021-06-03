import React from 'react';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Social from '../components/Social';

const Contact = () => {
    return (
        <div className='contact'>
            <Navbar />
            <Social />
            <div className='contact-container'>
                <Form />
                <div className='link-container'>
                    <ul>
                        <li className='bulle'><i class="fab fa-linkedin-in social-icon"></i> linkedin.com/in/florianmaffre</li>
                        <li className='bulle'><i class="fas fa-phone social-icon"></i> 06 08 10 36 90</li>
                        <li className='bulle'><i class="fas fa-envelope social-icon"></i> florian.maffre31@gmail.com</li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Contact;