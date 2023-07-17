"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@/components/Button';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_1tzsci1","template_95s1vqa", form.current, 'ayiOGQUKDHuuy7-6c')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };
    return (
        <div className="contact" id='contact'>
            <h2 className="contact-title">What&apos;s Next?</h2>
            <h2 className="contact-sub-title">Get In Touch</h2>
            <p className='contact-text'>
                Have a question ? Get in touch with me
            </p>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="contact-form-div">
                    <label className='contact-form-tag'>Name</label>
                    <input type="text" name='name' className="contact-form-input" placeholder='Your name' />
                </div>
                <div className="contact-form-div">
                    <label className='contact-form-tag'>Email</label>
                    <input type="email" name='email' className="contact-form-input" placeholder='Your email id' />
                </div>
                <div className="contact-form-div">
                    <label className='contact-form-tag'>Subject</label>
                    <input type="text" name='subject' className="contact-form-input" placeholder='Let me know how i can help' />
                </div>
                <div className="contact-form-div contact-form-area">
                    <label className='contact-form-tag'>Message</label>
                    <textarea name="message" cols="30" rows="10" className="contact-form-input" placeholder='Enter your message...'></textarea>
                </div>
                <div className="contact-cta" onClick={sendEmail}>
                    <Button text="Send message" link="/#contact" />
                </div>
            </form>

        </div>
    )
}

export default Contact