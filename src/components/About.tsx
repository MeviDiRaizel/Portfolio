import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e2024_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
        >
          About Me
        </motion.h2>
        <motion.div
          className="bg-secondary/20 backdrop-blur-sm p-8 rounded-xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg mb-6 text-gray-300">
            I'm a passionate Full Stack Developer with a love for creating elegant solutions to complex problems. 
            My journey in software development has equipped me with a strong foundation in both frontend and backend technologies.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            I specialize in building modern web applications using React, TypeScript, and Node.js. 
            I'm always eager to learn new technologies and best practices to deliver high-quality software solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;