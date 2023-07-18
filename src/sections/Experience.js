"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

function Experience() {
    const [selected, setSelected] = useState(0);
    useEffect(() => {
        const transformSelection = () => {
            const underline= document.querySelector('.underline');
            underline.style.top= `${selected * 4}rem`;
        };
        transformSelection();
    }, [selected]);
    const experience = [
        {
            name: 'Leo Club Eternity Service',
            role: 'Full Stack Developer',
            url: '',
            start: 'April 2023',
            end: 'July 2023',
            shortDescription: [
                "Developed a full-stack web application using React, Sanity and Tailwind CSS for the NGO.",
                "Coded the front-end while maintaining responsiveness, optimizing user experience, and creating a clean interface. Additionally, served as the backend developer, implementing robust and scalable solutions, handling data management, and ensuring smooth functionality of the entire system.",
                "Collaborated with Design, Tech, Content Team and Senior members, using Slack, Git, Figma and Trello. Ensured proper SEO, easy on the eye brand-consistent design, clean Wireframes and swift deployment via Netlify/Hostinger etc.",
            ],
        },
        {
            name: 'SK Children Foundation',
            role: 'Volunteer',
            url: 'https://skchildrenfoundation.org/',
            start: 'October 2022',
            end: 'November 2022',
            shortDescription: [
                "Passionate volunteer actively engaged as a volunteer in an NGO that empowers underprivileged children through education and holistic support. By spreading awareness and mobilizing resources, I actively contributed to raising funds, enabling these young minds to thrive and fulfill their potential.",
            ],
        },
    ];
    return (
        <div className="experience" id='experience'>
            <div className="title">
                <h2>Where I&apos;ve worked</h2>
            </div>
            <div className="container">
                <ul className="exp-slider">
                    <div className="underline"></div>
                    {experience.map((exp, index) => {
                        return <li key={index} className={`exp-slider-item ${index === selected && "exp-slider-item-selected"}`}
                            onClick={() => setSelected(index)}>
                            <span>{exp.name}</span>
                        </li>
                    })}
                </ul>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <h3>
                            <span>{experience[selected].role}</span>
                            <span className="exp-details-position-company">
                                &nbsp;@&nbsp;
                                <Link className='link' href={experience[selected].url}>
                                    {experience[selected].name}{""}
                                </Link>
                            </span>
                        </h3>
                        <p className="exp-details-range">
                            {experience[selected].start} - {experience[selected].end}
                        </p>
                        <ul className='exp-details-list'>
                            {
                                experience[selected].shortDescription.map((desc, index) => (
                                    <li key={index} className='exp-details-list-item '>
                                        {desc}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience