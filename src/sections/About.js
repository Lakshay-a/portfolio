import React from 'react'
import Image from 'next/image'

function About() {
    return (
        <div className="about" id='about'>
            <div className="title">
                <h2>About me</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa debitis blanditiis placeat sequi saepe. Amet, accusamus reiciendis in ab sit eligendi eius unde perferendis eum molestias. Est, aliquam recusandae.
                    </p>
                    <p className="about-grid-info-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa debitis blanditiis placeat sequi saepe. Amet, accusamus reiciendis in ab sit eligendi eius unde perferendis eum molestias. Est, aliquam recusandae.
                    </p>
                    <p className="about-grid-info-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa debitis blanditiis placeat sequi saepe. Amet, accusamus reiciendis in ab sit eligendi eius unde perferendis eum molestias. Est, aliquam recusandae.
                    </p>
                    <p className="about-grid-info-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa debitis blanditiis placeat sequi saepe. Amet, accusamus reiciendis in ab sit eligendi eius unde perferendis eum molestias. Est, aliquam recusandae.
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
        </div>
    )
}

export default About