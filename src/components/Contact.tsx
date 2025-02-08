import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e2024_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="bg-secondary/20 backdrop-blur-sm p-8 rounded-xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-center mb-8 text-gray-300">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/MeviDiRaizel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium transition-transform hover:scale-105"
            >
              GitHub
            </a>
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium transition-transform hover:scale-105"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;