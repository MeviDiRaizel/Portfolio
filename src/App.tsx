import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";

const App: React.FC = () => {
  const languages = [
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  ];

  // Create separate refs for each section
  const [heroRef, heroInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [langRef, langInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [projectsRef, projectsInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [contactRef, contactInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <motion.div ref={heroRef} variants={sectionVariants} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
          <Hero />
        </motion.div>

        <motion.div ref={aboutRef} variants={sectionVariants} initial="hidden" animate={aboutInView ? "visible" : "hidden"}>
          <About />
        </motion.div>

        {/* Language Icons Section with in-view animation */}
        <motion.div
          className="bg-secondary/20 backdrop-blur-sm py-8 overflow-x-hidden"
          ref={langRef}
          variants={sectionVariants}
          initial="hidden"
          animate={langInView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear"
            }}
          >
            {languages.map((language, index) => (
              <IconItem key={index} language={language} />
            ))}
            {languages.map((language, index) => (
              <IconItem key={`duplicate-${index}`} language={language} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div ref={projectsRef} variants={sectionVariants} initial="hidden" animate={projectsInView ? "visible" : "hidden"}>
          <Projects />
        </motion.div>

        <motion.div ref={contactRef} variants={sectionVariants} initial="hidden" animate={contactInView ? "visible" : "hidden"}>
          <Contact />
        </motion.div>
      </main>
    </div>
  );
};

const IconItem = ({ language }: { language: { name: string; icon: any; color: string } }) => (
  <div className="mx-4 flex items-center">
    <language.icon size={40} color={language.color} className="mr-2" />
    <span className="text-gray-300">{language.name}</span>
  </div>
);

export default App;