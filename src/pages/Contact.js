import React from 'react';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Social from '../components/Social';

const Contact = () => {
    return (
        <div className='contact'>
            <Navbar />
            <Social />
            <Form />
        </div>
    );
};

export default Contact;