"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div className="about" id='about'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 0.6}}
        variants={{
            hidden: {opacity: 0, y: 0},
            visible: {opacity: 1, y: -50}
        }}
        >
            <div className="title">
                <h2>About me</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                    Hello, I'm Lakshay Arora, a Computer Science student from New Delhi with a passion for technology and a strong background in <span className="imp">full-stack development</span>. I find great joy in crafting efficient and elegant solutions for web applications and I also have in-depth knowledge of <span className="imp">data structures and algorithms</span>.
                    </p>
                    <p className="about-grid-info-text">
                    I have a strong passion for <span className="imp">machine learning</span>. The idea of creating smart systems that can solve real-world problems excites me, and I'm always eager to explore new ways to apply this cutting-edge technology to various domains.
                    </p>
                    <p className="about-grid-info-text">
                    I am also known for my <span className="imp">flexibility</span> and a genuine <span className="imp">eagerness to learn new things</span>. I believe that the world of technology is constantly evolving, and staying curious and open-minded is essential for personal growth. I'm always up for a challenge and continually seek opportunities to expand my skillset.
                    </p>
                    <p className="about-grid-info-text">
                    I am fluent in both <span className="imp">English</span> and <span className="imp">Hindi</span>, which has proven to be a valuable asset in my journey as a tech enthusiast. This bilingual proficiency allows me to effectively communicate and collaborate with a diverse range of individuals, transcending language barriers and fostering a deeper understanding of ideas and concepts. 
                    </p>
                    <p className="about-grid-info-text">
                        Here are a few technologies that have been a core part of my recent work:
                    </p>
                    <ul className="about-grid-info-list">
                        <li className="about-grid-info-list-item">HTML</li>
                        <li className="about-grid-info-list-item">CSS</li>
                        <li className="about-grid-info-list-item">JavaScript</li>
                        <li className="about-grid-info-list-item">React</li>
                        <li className="about-grid-info-list-item">Node.js</li>
                        <li className="about-grid-info-list-item">Next.js</li>
                        <li className="about-grid-info-list-item">React Native</li>
                        <li className="about-grid-info-list-item">MongoDB</li>
                        <li className="about-grid-info-list-item">SQL</li>
                        <li className="about-grid-info-list-item">C/C++</li>
                        <li className="about-grid-info-list-item">Python</li>
                    </ul>
                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image src="/profile.webp" alt='profile pic' fill />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About