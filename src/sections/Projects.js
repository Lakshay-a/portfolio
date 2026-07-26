"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub,FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            image: "/Text_summarisation.webp",
            projectName: "Text Summarization System",
            projectLink: "https://github.com/Lakshay-a/Text-Summary-Generator.git",
            projectDescription: "An end-to-end GenAI workflow using T5 for preprocessing, training, ROUGE/BLEU evaluation, inference, and deployment packaging. The model is served through a Dockerised FastAPI application for REST API access and easier output comparison.",
            projectTech: ["Python", "PyTorch", "Transformers", "T5", "FastAPI", "Docker",],
            projectExternalLinks:
            {
                github: "https://github.com/Lakshay-a/Text-Summary-Generator.git",
                externalLink:"https://github.com/Lakshay-a/Text-Summary-Generator.git"
            },
        },
        {
            image: "/Alzheimer.webp",
            projectName: "Alzheimer's Disease Diagnosis System",
            projectLink: "https://github.com/Lakshay-a/Alzheimer-Diagnosis-using-Hybrid-PSO-GA-DenseNet-121.git",
            projectDescription: "A DenseNet-121 deep learning system for medical image classification, covering preprocessing, training, evaluation, and inference. The workflow integrates PSO-GA optimisation to reduce feature dimensionality by 80% and improve classification performance by approximately 9%.",
            projectTech: ["Python", "TensorFlow", "Keras", "OpenCV", "DenseNet-121",],
            projectExternalLinks:
            {
                github: "https://github.com/Lakshay-a/Alzheimer-Diagnosis-using-Hybrid-PSO-GA-DenseNet-121.git",
                externalLink: "https://github.com/Lakshay-a/Alzheimer-Diagnosis-using-Hybrid-PSO-GA-DenseNet-121.git"
            },
        },
        {
            image: "/ASL.png",
            projectName: "Sign Language Detection",
            projectLink: "https://github.com/Lakshay-a/Sign-language-detection.git",
            projectDescription: "A real-time computer vision project for detecting American Sign Language alphabets using OpenCV for image processing, MediaPipe for hand detection, and a Scikit-learn Random Forest classifier for recognition.",
            projectTech: ["Python", "MediaPipe", "OpenCV", "Scikit-learn",],
            projectExternalLinks:
            {
                github: "https://github.com/Lakshay-a/Sign-language-detection.git",
                externalLink: "https://github.com/Lakshay-a/Sign-language-detection.git"
            },
        }
    ];
    return (
        <motion.div className="projects" id='work'
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, y: 0 },
                visible: { opacity: 1, y: -50 }
            }}>
            <div className="title">
                <h2>Some things I&apos;ve Built</h2>
            </div>
            <div className="projects-container">
                {projects.map(
                    ({
                        image,
                        projectDescription,
                        projectLink,
                        projectExternalLinks,
                        projectName,
                        projectTech,
                    }) => {
                        return (
                            <div className="project" key={projectName}>
                                <div className="project-image">
                                    <div className="project-image-overlay"></div>

                                    <div className="project-image-container">
                                        <a href={projectExternalLinks.github}>
                                            <Image src={image} alt={projectName} fill quality={100} />
                                        </a>
                                    </div>

                                </div>
                                <div className="project-info">
                                    {/* <p className="project-info-overline">Featured Project</p> */}
                                    <h3 className="project-info-title" >
                                        <Link href={projectLink} className="link" target="_blank">{projectName}</Link>
                                    </h3>
                                    <div className="project-info-description">
                                        <p>{projectDescription}</p>
                                    </div>
                                    <ul className="project-info-tech-list">
                                        {projectTech.map((tech) => (
                                            <li className="project-info-tech-list-item" key={tech}>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="project-info-links">
                                        <li className="project-info-links-item">
                                            <Link
                                                href={projectExternalLinks.github}
                                                className="project-info-links-item-link"
                                                target="_blank"
                                            >
                                                <FiGithub />
                                            </Link>
                                        </li>
                                        <li className="project-info-links-item">
                                            <Link
                                                href={projectExternalLinks.externalLink}
                                                className="project-info-links-item-link"
                                            >
                                                <FiExternalLink />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </motion.div>
    );
}
export default Projects
