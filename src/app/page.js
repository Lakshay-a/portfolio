"use client";
import React, { useState } from 'react'
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
