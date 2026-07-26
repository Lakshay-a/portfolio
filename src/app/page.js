"use client";
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Navbar from '@/sections/Navbar'
import Socialicons from '@/components/Socialicons'
import Intro from '@/sections/Intro'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import Loader from '@/components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  const handleLoader = () => {
    setIsLoading(false);
  }
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Socialicons />
      <Loader isLoading={isLoading} setIsLoading={handleLoader} />
    </div>
  )
}
