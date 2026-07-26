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
                "Progressed from Research Intern to Junior Research Fellow across an 8-month computer vision research track focused on clinical movement analysis.",
                "Built ML research workflows using Python, PyTorch, Scikit-learn, OpenCV, MediaPipe, YOLO, Intel RealSense, Unity, and MySQL to convert noisy sequential sensor data into structured features for inference and analysis.",
                "Developed preprocessing, feature extraction, validation, benchmarking, and database-backed pipelines for reproducible experiments, model evaluation, and robust analytical code.",
                "Tested outputs with 25 subjects, mentored two summer interns, and communicated model assumptions, performance trade-offs, limitations, and recommendations to physiotherapists, clinicians, researchers, and technical stakeholders.",
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
                "Supported 5 months of computer vision research by developing video and depth-data workflows for movement analysis, data validation, metric extraction, and reporting.",
                "Worked across experimentation and model-output interpretation to make noisy clinical sensor data easier to evaluate and explain.",
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
                "Researched statistical modelling, applied ML, classification, deep learning, model evaluation, and optimisation workflows across a 12-month research assistantship.",
                "Used Python, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, and OpenCV to work with complex, high-dimensional healthcare datasets.",
                "Applied Particle Swarm Optimisation and Genetic Algorithms for feature selection, hyperparameter search, and dimensionality reduction, reducing features by 80% and improving model performance by approximately 9%.",
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
