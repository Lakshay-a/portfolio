"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub,FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            image: "/blog.webp",
            projectName: "SimplyBlog",
            projectLink: "https://github.com/Lakshay-a/SimplyBlog.git",
            projectDescription: "This is a MERN (mongo, express, react, node) stack blog web application which is fully responsive. It can be used to write a new blog, edit an existing blog, delete a blog, and view the blogs of other users too. It has a rich-text editor which i made using react-quill library and it also has authentication feature.",
            projectTech: ["React", "Node.js", "MongoDB", "Express.js", "react-quill",],
            projectExternalLinks:
            {
                github: "https://github.com/Lakshay-a/SimplyBlog.git",
                externalLink:"https://github.com/Lakshay-a/SimplyBlog.git"
            },
        },
        {
            image: "/ASL.png",
            projectName: "Sign Language Detection",
            projectLink: "https://github.com/Lakshay-a/Sign-language-detection.git",
            projectDescription: "This project is aimed at detecting American Sign Language (ASL) alphabets in real-time using computer vision. The system utilizes OpenCV for image processing, MediaPipe for hand detection, and a Random Forest classifier from scikit-learn for alphabet recognition.",
            projectTech: ["Python", "MediaPipe", "OpenCV", "Scikit-learn",],
            projectExternalLinks:
            {
                github: "https://github.com/Lakshay-a/Sign-language-detection.git",
                externalLink: "https://github.com/Lakshay-a/Sign-language-detection.git"
            },
        },
        {
            image: "/whatsapp.webp",
            projectName: "Whatsapp Clone",
            projectLink: "https://github.com/Lakshay-a/Whatsapp-clone.git",
            projectDescription: "A visually stunning UI clone of WhatsApp, built using React.js, to emulate the familiar messaging interface and deliver a seamless user experience for effective communication",
            projectTech: ["React", "CSS", "Firebase", "JavaScript",],
            projectExternalLinks:
            {
                github: "https://github.com/Lakshay-a/Whatsapp-clone.git",
                externalLink: "https://github.com/Lakshay-a/Whatsapp-clone.git"
            },
        }
    ];
    return (
        <motion.div className="projects" id='work'
            initial="hidden"
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