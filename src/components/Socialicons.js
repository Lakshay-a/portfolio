import React from 'react'
import Link from "next/link"
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { TfiEmail } from 'react-icons/tfi'

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
        <div className="social-icons">
            <ul className='social-icons-list'>
                {socialLinks.map(({ name, icon, link }) => (
                    <li key={name} title={name} className='social-icons-list-item'>
                        <Link href={link} className='social-icons-list-item-link' target='_blank '>
                            {icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Socialicons