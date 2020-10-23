import React from 'react';
import AboutOurTeam from './AboutOurTeam';

const ContactForm = () => {
    return (
        <div className="container">
            <div className="contact-form-header">
                <AboutOurTeam title="E-mail murojat" />
                <img className="email-image" src={require('../../assets/contact/EmailImage.png')} alt="" />
            </div>
            <form className="contact-form">
                <label htmlFor="name">
                    <input type="text" id="name" placeholder="Ism" />
                </label>
                <label htmlFor="surname">
                    <input type="text" id="surname" placeholder="Familiya" />
                </label>
                <label htmlFor="adress">
                    <input type="text" id="adress" placeholder="Manzil (viloyat, tuman)" />
                </label>
                <div className="textarea">
                    <textarea className="message" placeholder="Fikringizni yozing"></textarea>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
