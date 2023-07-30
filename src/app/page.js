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
import Head from 'next/head'
import Loader from '@/components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoader = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  }
  return (
    <div className='app'>
      <Head>
        <title>Lakshay Arora</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {
        showContent && (
          <>
            <Navbar />
            <Socialicons />
            <main>
              <Intro />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </main>
          </>
        )
      }
      <Loader isLoading={isLoading} setIsLoading={handleLoader} />
    </div>
  )
}
