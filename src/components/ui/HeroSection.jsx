// HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { AnimatedNavbar } from './AnimatedNavbar';

const HeroSection = ({ 
  isDark, 
  toggleDark, 
  setLanguage,
  backgroundImage,
  pageTitle,
  pageDescription
}) => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt={pageTitle}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-luxury-brown-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/50" />
      
      {/* Navigation Menu */}
      <AnimatedNavbar 
        isDark={isDark} 
        toggleDark={toggleDark} 
        setLanguage={setLanguage} 
      />

      {/* Page Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-luxury-cream-light">
            {pageTitle}
          </h1>
          <p className="text-xl md:text-2xl text-luxury-cream">
            {pageDescription}
          </p>
        </motion.div>
      </div>

      {/* Booking Button */}
      <div className="absolute top-24 right-8 z-20">
        <div className="group relative">
          <button className="
            bg-luxury-cream-light/10 hover:bg-luxury-cream-light/20
            backdrop-blur-sm
            text-luxury-cream-light hover:text-luxury-gold-light
            p-6 rounded-full shadow-lg
            transition-all duration-300
            group-hover:scale-105
          ">
            <Calendar className="w-8 h-8" />
          </button>
          <div className="absolute right-0 mt-4 w-80 opacity-0 scale-95 transform 
            transition-all duration-300 invisible 
            group-hover:visible group-hover:opacity-100 group-hover:scale-100">
            <div className="bg-white dark:bg-luxury-brown rounded-lg shadow-xl p-6">
              <h3 className="text-xl text-luxury-brown dark:text-luxury-cream-light font-medium mb-4">
                Make a Reservation
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 rounded-lg
                      border border-luxury-cream-dark dark:border-luxury-brown
                      bg-luxury-cream dark:bg-luxury-brown
                      text-luxury-brown dark:text-luxury-cream
                      focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 rounded-lg
                      border border-luxury-cream-dark dark:border-luxury-brown
                      bg-luxury-cream dark:bg-luxury-brown
                      text-luxury-brown dark:text-luxury-cream
                      focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent"
                  />
                </div>
                <button className="w-full py-3 px-4 rounded-lg
                  bg-luxury-gold hover:bg-luxury-gold-dark
                  text-white text-lg font-light
                  transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;