import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-white/10' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            whileHover={{ scale: 1.05 }}
          >
            MDR
          </motion.div>
          <ul className="flex space-x-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;