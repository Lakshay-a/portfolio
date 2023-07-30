"use client";
import React from 'react'
import Link from "next/link"
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { TfiEmail } from 'react-icons/tfi'
import { motion } from 'framer-motion'

function Socialicons() {
    const socialLinks = [
        {
            name: "Github",
            icon: <FiGithub />,
            link: "https://github.com/Lakshay-a"
        },
        {
            name: "LinkedIn",
            icon: <FiLinkedin />,
            link: "https://www.linkedin.com/in/lakshayarora162/",
        },
        {
            name: "Twitter",
            icon: <FiTwitter />,
            link: "https://twitter.com/Lakshay_arora14",
        },
        {
            name: "Leetcode",
            icon: <SiLeetcode />,
            link: "https://leetcode.com/Lakshay_Arora14/",
        },
        {
            name: "Email",
            icon: <TfiEmail />,
            link: "mailto:lakshayarora1612@gmail.com"
        }
    ];
    return (
        <motion.div className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 1.6,
            }}>
            <ul className='social-icons-list'>
                {socialLinks.map(({ name, icon, link }) => (
                    <li key={name} title={name} className='social-icons-list-item'>
                        <Link href={link} className='social-icons-list-item-link' target='_blank '>
                            {icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default Socialicons