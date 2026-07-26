"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

function Contact() {
    const form = useRef();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS environment variables are missing.');
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <motion.div className="contact" id='contact'
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, y: 0 },
                visible: { opacity: 1, y: -50 }
            }}>
            <h2 className="contact-title">What&apos;s Next?</h2>
            <h2 className="contact-sub-title">Get In Touch</h2>
            <p className='contact-text'>
                Have a data science, machine learning, or analytics opportunity in mind? Get in touch.
            </p>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="contact-form-div">
                    <label className='contact-form-tag'>Name</label>
                    <input type="text" name='name' className="contact-form-input" placeholder='Your name' required />
                </div>
                <div className="contact-form-div">
                    <label className='contact-form-tag'>Email</label>
                    <input type="email" name='email' className="contact-form-input" placeholder='Your email id' required />
                </div>
                <div className="contact-form-div">
                    <label className='contact-form-tag'>Subject</label>
                    <input type="text" name='subject' className="contact-form-input" placeholder='Let me know how i can help' required />
                </div>
                <div className="contact-form-div contact-form-area">
                    <label className='contact-form-tag'>Message</label>
                    <textarea name="message" cols="30" rows="10" className="contact-form-input" placeholder='Enter your message...' required></textarea>
                </div>
                <button type="submit" className="contact-cta btn">
                    Send message
                </button>
            </form>

        </motion.div>
    )
}

export default Contact
