import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, description, image, isActive, isPrevious, isNext }) => {
  return (
    <motion.section
      id={id}
      className={`w-full min-h-screen snap-start flex items-center justify-center relative ${
        isActive ? 'z-20' : 'z-10'
      }`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.9,
        y: isPrevious ? -100 : isNext ? 100 : 0
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Section;
