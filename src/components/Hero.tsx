import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#1e2024_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Mevi Di Raizel
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            Full Stack Developer (Maybe?)
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium transition-transform hover:scale-105"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              filter: "blur(8px)",
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;