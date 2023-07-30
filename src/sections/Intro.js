"use client";
import React from 'react'
import { motion } from 'framer-motion'

function Intro() {
  return (
    <div className="intro">
      <motion.h1 className="intro-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.7,
        }}>
        Hi my name is
      </motion.h1>
      <motion.h2 className="intro-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.85,
        }}>
        Lakshay Arora.
      </motion.h2>
      <motion.h3 className="intro-title-large intro-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.1,
        }}>
        I craft elegant and intuitive web solutions that bring visions to life, one line of code at a time
      </motion.h3>
      <motion.p className="intro-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}>
        I&apos;m a computer science student based in New Delhi, India. I specialize in building responsive websites and mobile apps. Fascinated by machine learning and artificial intelligence, I aspire to create intelligent applications that shape the future.
      </motion.p>
    </div>
  )
}

export default Intro 