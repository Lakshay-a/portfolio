"use client";
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Logo from '@/components/Logo'
import Button from '@/components/Button';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

function Navbar() {
    const sectionLinks = [
        { name: "About", link: "/#about" },
        { name: "Skills", link: "/#skills" },
        { name: "Experience", link: "/#experience" },
        { name: "Work", link: "/#work" },
        { name: "Contact", link: "/#contact" },
    ];

    const [isLightMode, setIsLightMode] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const navbarStyles = {
        position: 'sticky',
    }

    const handleScroll = () => {
        if (hamburgerOpen) return;
        const currentScrollPos = window.scrollY;

        setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    };

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
        document.documentElement.classList.toggle('light');
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    useEffect(() => {
        const links = document.querySelectorAll('.nav-items-list-item-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                setHamburgerOpen(false);
            })
        });
        const nav = document.querySelector('.nav-items');
        nav?.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        const html = document.querySelector('html');
        html?.addEventListener('click', () => {
            setHamburgerOpen(false);
        });
    }, []);

    useEffect(() => {
        const main = document.querySelector('main');
        if (hamburgerOpen) {
            main?.classList.add('blur');
        }
        else {
            main?.classList.remove('blur');
        }
    }, [hamburgerOpen])

    return (
        <nav style={{ ...navbarStyles, top: visible ? '0' : '-110px' }}>
            <div className='wrapper'>

                <div className="logo">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>


                <div className='navb'>
                    <div className="theme">
                        <button className='toggle-button' onClick={toggleTheme}>
                            {isLightMode ? <BsMoonStarsFill className='icon' /> : <BsSunFill className='icon' />}
                        </button>
                    </div>

                    <div className="nav-responsive-toggle">
                        {hamburgerOpen ? (
                            <CgClose
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setHamburgerOpen(false);
                                }}
                            />
                        ) : (
                            <GiHamburgerMenu
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setHamburgerOpen(true);
                                }}
                            />
                        )}
                    </div>

                    <div className={`${hamburgerOpen && 'nav-responsive'} nav-items`}>
                        <ul className="nav-items-list">
                            {sectionLinks.map(({ name, link }) => (
                                <li key={name} className='nav-items-list-item'>
                                    <Link href={link} className='nav-items-list-item-link'>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="nav-items-button">
                            <Button text="Resume" link="http://localhost:3000/resume.pdf" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar