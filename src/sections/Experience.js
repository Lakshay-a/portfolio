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
            url: 'https://home.iitd.ac.in/',
            start: 'May 2025',
            end: 'Aug 2025',
            shortDescription: [
                "Built AI-enabled data pipelines using Python, OpenCV, MediaPipe, YOLO, Intel RealSense, and MySQL to convert real-time video and depth streams into structured data.",
                "Engineered processing workflows for noisy sequential sensor data, including calibration, validation, anomaly detection, movement metrics, reporting, and performance review.",
                "Partnered with clinicians, researchers, and technical stakeholders to refine analytics outputs and translate model results into clinical decision support.",
            ],
        },
        {
            name: 'Indian Institute of Technology, Delhi',
            shortName: 'IIT Delhi',
            role: 'Research Intern',
            url: 'https://home.iitd.ac.in/',
            start: 'Dec 2024',
            end: 'Apr 2025',
            shortDescription: [
                "Supported computer vision research by developing video and depth-data processing workflows for movement analysis.",
                "Worked across experimentation, data validation, metric extraction, and reporting to make model outputs easier to evaluate and interpret.",
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
                "Developed machine learning and analytics pipelines using Python, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, and OpenCV.",
                "Applied feature engineering and PSO-GA optimisation to healthcare datasets, reducing feature dimensionality by 80% and improving classification performance by approximately 9%.",
                "Built reproducible workflows for model comparison, metric tracking, performance evaluation, and analytical reporting.",
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
                "Developed a public-facing product platform using React, REST APIs, Git, Sanity CMS, and cloud hosting, supporting content workflows, backend integrations, and documented delivery.",
                "Collaborated in a 10+ member multidisciplinary team across UI/UX, content, social media, photography, and engineering.",   
            ],
        },
    ];
    return (
        <motion.div className="experience" id='experience'
            initial="hidden"
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
