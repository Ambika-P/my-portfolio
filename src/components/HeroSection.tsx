import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import AnimatedText from './AnimatedText';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const yearsOfExperience = new Date().getFullYear() - 2022;
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef, { once: false }); // you can use "once: true" if you want it to animate only once

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-900 dark:to-purple-950 transition-colors duration-500"
    >
      {/* Background Gradient Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-purple-600 dark:text-purple-400 font-medium mb-4"
            >
              Hello, I’m Ambika P 👋
            </motion.p>

            <h1
              key={animationKey}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              <span className="inline-block">
                {`React.js Developer with ${yearsOfExperience} Years of Experience`
                  .split(' ')
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: [20, -5, 0] }}
                      transition={{
                        duration: 0.8,              // slower animation per word
                        delay: index * 0.5,         // delay between each word is longer
                        ease: 'easeOut',
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
              </span>
            </h1>



            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
            >
              I create fast, accessible, and engaging web interfaces with a focus on performance and user experience.
            </motion.p>

            <motion.button
              aria-label="Scroll to Projects"
              onClick={scrollToProjects}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168,85,247,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center mx-auto md:mx-0"
            >
              View My Work <ArrowDown size={20} className="ml-2" />
            </motion.button>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/Profile.jpg"
                alt="Ambika P Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full border-8 border-purple-100 dark:border-purple-900 opacity-70"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={24} className="text-purple-600 dark:text-purple-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
