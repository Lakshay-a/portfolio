"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

function Experience() {
    const [selected, setSelected] = useState(0);
    useEffect(() => {
        const transformSelection = () => {
            const underline = document.querySelector('.underline');
            underline.style.top = `${selected * 4}rem`;
        };
        transformSelection();
    }, [selected]);
    const experience = [
        {
            name: 'Indian Institute of Technology, Delhi',
            shortName: 'IIT Delhi',
            role: 'Junior Research Fellow (Computer Vision)',
            previousRole: 'Research Intern',
            url: 'https://home.iitd.ac.in/',
            start: 'May 2025',
            end: 'Aug 2025',
            previousStart: 'Dec 2024',
            previousEnd: 'Apr 2025',
            shortDescription: [
                <>Built healthcare-focused <span className="imp">data science and ML pipelines</span> using <span className="imp">Python, PyTorch, Scikit-learn, OpenCV, MediaPipe, YOLO, Intel RealSense, and MySQL</span>, converting noisy movement data into structured analytical outputs.</>,
                <>Designed <span className="imp">preprocessing, feature engineering, validation, benchmarking, and SQL-backed workflows</span> to improve data quality, reproducibility, model-readiness, and auditability across multi-source datasets.</>,
                <>Tested outputs with <span className="imp">25 subjects</span>, worked with researchers and physiotherapists, mentored <span className="imp">two interns</span>, and explained model behaviour, uncertainty, and limitations to mixed technical and clinical audiences.</>,
            ],
        },
        {
            name: 'Maharaja Agrasen Institute of Technology',
            shortName: 'MAIT',
            role: 'Research Assistant',
            url: 'https://mait.ac.in/',
            start: 'Sep 2023',
            end: 'Sep 2024',
            shortDescription: [
                <>Researched <span className="imp">classification, deep learning, statistical modelling, model evaluation, and optimisation</span> using Python, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, and OpenCV on healthcare datasets.</>,
                <>Applied <span className="imp">Particle Swarm Optimisation</span> and <span className="imp">Genetic Algorithms</span> for feature selection and hyperparameter search, reducing features by <span className="imp">80%</span> and improving performance by approximately <span className="imp">9%</span>.</>,
            ],
        },
        {
            name: 'Leo Club Eternity Service',
            shortName: 'Leo Club',
            role: 'Full Stack Developer',
            url: 'https://leoclubes.org/',
            start: 'Apr 2023',
            end: 'Jul 2023',
            shortDescription: [
                <>Shipped a public-facing full-stack application using <span className="imp">React, REST APIs, Git/GitHub, Sanity CMS, and cloud hosting</span>, strengthening API integration, documentation, and iterative delivery.</>,
                <>Collaborated in a <span className="imp">10+ member</span> multidisciplinary team, translating stakeholder needs into practical web workflows and user-facing digital tools.</>,
            ],
        },
    ];
    return (
        <motion.div className="experience" id='experience'
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, y: 0 },
                visible: { opacity: 1, y: -50 }
            }}>
            <div className="title">
                <h2>Where I&apos;ve worked</h2>
            </div>
            <div className="container">
                <ul className="exp-slider">
                    <div className="underline"></div>
                    {experience.map((exp, index) => {
                        return <li key={index} className={`exp-slider-item ${index === selected && "exp-slider-item-selected"}`}
                            onClick={() => setSelected(index)}>
                            <span>{exp.shortName}</span>
                        </li>
                    })}
                </ul>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <h3>
                            <span>{experience[selected].role}</span>
                            <span className="exp-details-position-company">
                                &nbsp;@&nbsp;
                                <Link className='link' href={experience[selected].url} target='_blank'>
                                    {experience[selected].name}{""}
                                </Link>
                            </span>
                        </h3>
                        <p className="exp-details-range">
                            {experience[selected].start} - {experience[selected].end}
                        </p>
                        {experience[selected].previousRole && (
                            <>
                                <h3>
                                    <span>{experience[selected].previousRole}</span>
                                </h3>
                                <p className="exp-details-range">
                                    {experience[selected].previousStart} - {experience[selected].previousEnd}
                                </p>
                            </>
                        )}
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
        </motion.div>
    )
}

export default Experience
