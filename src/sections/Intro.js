"use client";
import React from 'react'
import { motion } from 'framer-motion'

function Intro() {
  return (
    <div className="intro">
      <motion.h1 className="intro-title"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.7,
        }}>
        Hi my name is
      </motion.h1>
      <motion.h2 className="intro-title-large"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.85,
        }}>
        Lakshay Arora.
      </motion.h2>
      <motion.h3 className="intro-title-large intro-title-sub"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.1,
        }}>
        Data Scientist building machine learning, computer vision, and analytics systems that turn complex data into useful decisions.
      </motion.h3>
      <motion.p className="intro-text"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}>
        I&apos;m based in London, pursuing an MSc in Data Science at King&apos;s College London. My recent work spans AI-enabled data pipelines, medical image analysis, GenAI applications, and reproducible model evaluation workflows.
      </motion.p>
    </div>
  )
}
export default Intro 
