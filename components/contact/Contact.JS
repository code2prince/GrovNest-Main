import React from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import styles from './Contact.module.css';
import { icons } from 'react-icons';
// import emailjs from 'emailjs';
import { useRef } from 'react';


 const Contact = ()=>{
    const form=useRef();

    const sendEmail=(e)=>{
        e.preventDefalt();
        emailjs.sendForm('service_dyj893i', 'template_8z2fwtv', form.current, 'd_7dD3HQGaFhRH13B')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        e.target.reset();
    };
 
 
 
    return (
        <>
            <h2>Contact Us</h2>
            <h3>Get In Touch</h3>
            <div className={styles.Container}>
                <div className={styles.contact__options}>
                    <article className={styles.contact__option}>
                        <MdOutlineEmail className={styles.contact__option_icon} />
                        <h4>Email</h4>
                        <h5>admin@grovnest.com</h5>
                        <a href='mailto:admin@grovnest.com'>Send a message</a>
                    </article>

                    <article className={styles.contact__option}>
                    <BsWhatsapp className={styles.contact__option_icon}/>
                    <h4>WhatsApp</h4>
                    <h5>+91 8787417784</h5>
                    <a href='https://api.whatsapp.com/send?phone=918787417784'>Send a message</a>
                    </article> 
                </div>
        
                <form className={styles.form_container}>
                    <div className={styles.input_container}>
                        <input type="text" name='name' placeholder="Your Full Name" required />
                        <input type="Email" name='Email' placeholder="Your Email" required />
                        
                        <textarea type="message" row="7" placeholder="Your Message" required></textarea>
                    
                    <button className={styles.btn}>Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Contact