"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div className="about" id='about'
        initial={false}
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
                    Hello, I&apos;m Lakshay Arora, a <span className="imp">Data Scientist</span> based in London and currently pursuing an MSc in Data Science at <span className="imp">King&apos;s College London</span>. I work at the intersection of machine learning, analytics, and software engineering.
                    </p>
                    <p className="about-grid-info-text">
                    My dissertation is a reproducible ML pipeline for <span className="imp">4D biomedical time-lapse imaging data</span>, covering QC, segmentation, tracking, feature extraction, and robust validation.
                    </p>
                    <p className="about-grid-info-text">
                    My recent experience includes building <span className="imp">computer vision</span> and sensor-data pipelines at IIT Delhi, developing healthcare machine learning workflows at MAIT, and turning noisy high-dimensional data into structured features for inference, benchmarking, reporting, and decision support.
                    </p>
                    <p className="about-grid-info-text">
                    I enjoy taking projects from first-principles problem decomposition through feature engineering, model training, metric tracking, API deployment, and stakeholder-ready reporting. My healthcare ML work has reduced feature dimensionality by <span className="imp">80%</span> and improved classification performance by approximately <span className="imp">9%</span>.
                    </p>
                    <p className="about-grid-info-text">
                    I&apos;ve collaborated with clinicians, researchers, designers, and technical teams, and I&apos;m comfortable translating model outputs into clear insights for both technical and non-technical audiences.
                    </p>
                    <p className="about-grid-info-text">
                        Here are a few technologies that have been a core part of my recent work:
                    </p>
                    <ul className="about-grid-info-list">
                        <li className="about-grid-info-list-item">Python</li>
                        <li className="about-grid-info-list-item">SQL</li>
                        <li className="about-grid-info-list-item">Pandas</li>
                        <li className="about-grid-info-list-item">NumPy</li>
                        <li className="about-grid-info-list-item">Scikit-learn</li>
                        <li className="about-grid-info-list-item">TensorFlow</li>
                        <li className="about-grid-info-list-item">PyTorch</li>
                        <li className="about-grid-info-list-item">OpenCV</li>
                        <li className="about-grid-info-list-item">FastAPI</li>
                        <li className="about-grid-info-list-item">Docker</li>
                        <li className="about-grid-info-list-item">AWS</li>
                        <li className="about-grid-info-list-item">Git</li>
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
