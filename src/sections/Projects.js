import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";

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
            },
        }
    ];
    return (
        <div className="projects" id='work'>
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
                                            <Image src={image} alt={projectName} fill quality={100}/>
                                        </a>
                                    </div>

                                </div>
                                <div className="project-info">
                                    <p className="project-info-overline">Featured Project</p>
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
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    );
}
export default Projects