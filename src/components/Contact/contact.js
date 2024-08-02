import React from 'react'
import './contact.css';
import Adobe from '../../assets/adobe.png';
import Facebook from '../../assets/facebook-icon.png';
import facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Microsoft from '../../assets/microsoft.png';
import Twitter from '../../assets/twitter.png';
import Walmart from '../../assets/walmart.png';
import Youtube from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_7ljnevk', 'template_otgsizu', form.current, {
            publicKey: 'jdzWgq46ykxm-bN9N',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="clientPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the oppertunity to work with adiverse group of companies. Some of the notable companies i have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Adobe} alt="Adobe" className="clientImg" />
                <img src={facebook} alt="facebook" className="clientImg" />
                <img src={Walmart} alt="Walmart" className="clientImg" />
                <img src={Microsoft} alt="Microsoft" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work oppertunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="user_name"/>
                <input type="text" className="email" placeholder='Your Email' name="user_email"/>
                <textarea name="message" className="msg" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={Facebook} alt="Facebook" className="link" />
                    <img src={Twitter} alt="Twitter" className="link" />
                    <img src={Youtube} alt="Youtube" className="link" />
                    <img src={Instagram} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
