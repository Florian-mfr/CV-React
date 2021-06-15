import React, { useState } from 'react';
import emailjs from 'emailjs-com';
//init("user_3eiF78UDZojG9rt8YcZgU");

const Form = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const errorHandler = () => {
        const errorDiv = document.querySelector('.form-message');
        errorDiv.style.display = 'block';
        errorDiv.style.animation = 'squeeze .5s forwards';
        setTimeout(() => {
            errorDiv.style.animation = 'none'
        }, 500);
    }

    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handleSubmit = (e) => {
        e.preventDefault();

        messageInput.style.border = 'none';
        messageInput.style.boxShadow = '2px 2px 5px #9b9b9b';
        emailInput.style.boxShadow = '2px 2px 5px #9b9b9b';
        emailInput.style.border = 'none';

        sendFeedback("template_mqbu0ab", {
            name,
            company,
            phone,
            email,
            message,
        });
    };

    const sendFeedback = (templateId, variables) => {

        if (email.match(regex)) {
            if (message) {
                emailjs
                    .send("service_uox76mq", templateId, variables, "user_3eiF78UDZojG9rt8YcZgU")
                    .then((res) => {
                        console.log('success !');
                        setName("");
                        setCompany("");
                        setPhone("");
                        setEmail("");
                        setMessage("");
                    })
                    .catch(
                        (err) =>
                            document.querySelector('.form-message').innerHTML =
                            "Une erreur s'est produite, veuillez réessayer.");
                            errorHandler();
            } else {
                document.querySelector('.form-message').innerHTML = "Veuillez écrire un message";
                errorHandler();
                messageInput.style.border = '1px solid rgb(223, 79, 79)';
                messageInput.style.boxShadow = '2px 2px 5px rgb(223, 79, 79)';

            }

        } else {
            document.querySelector('.form-message').innerHTML = "Email non valide";
            errorHandler();
                emailInput.style.boxShadow = '2px 2px 5px rgb(223, 79, 79)';
                emailInput.style.border = '1px solid rgb(223, 79, 79)';
        }


    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-content">
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom"
                    value={name}
                    autoComplete="off"
                    className='input'
                />
                <input
                    type="text"
                    id="company"
                    name="company"
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Société"
                    value={company}
                    className='input'
                />
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Téléphone"
                    value={phone}
                    className='input'
                />
                <input
                    type="mail"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email *"
                    value={email}
                    autoComplete="off"
                    className='input'
                />
                <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message *"
                    cols='22'
                    rows='5'
                    value={message}
                    className='input'
                />
            </div>
            <input
                className="button"
                type="submit"
                value="Envoyer"
            />
            <div className="form-message"></div>
        </form>
    );
};

export default Form;