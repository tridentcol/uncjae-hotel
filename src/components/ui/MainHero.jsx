// src/components/ui/MainHero.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { AnimatedNavbar } from './AnimatedNavbar';
import { motion } from 'framer-motion';
import BookingForm from '../booking/BookingForm';

const MainHero = ({ isDark, toggleDark, setLanguage, videoSrc }) => {
  const videoRef = useRef(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-luxury-brown-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/50" />
      
      {/* Navigation Menu */}
      <AnimatedNavbar 
        isDark={isDark} 
        toggleDark={toggleDark} 
        setLanguage={setLanguage}
      />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-luxury-cream-light">
            Welcome to Jaelen Hotel
          </h1>
          <p className="text-xl md:text-2xl text-luxury-cream">
            Experience luxury redefined in the heart of sophistication
          </p>
        </motion.div>
      </div>

      {/* Booking Button */}
      <div className="absolute top-24 right-8 z-20">
        <div className="group relative">
          <button
            onClick={() => setShowBookingForm(true)}
            className="
              bg-luxury-cream-light/10 hover:bg-luxury-cream-light/20
              backdrop-blur-sm
              text-luxury-cream-light hover:text-luxury-gold-light
              p-6 rounded-full shadow-lg
              transition-all duration-300
              group-hover:scale-105
            "
          >
            <Calendar className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Modal de Reserva */}
      {showBookingForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-white dark:bg-luxury-brown rounded-xl shadow-2xl p-8 max-w-md w-full m-4"
          >
            <button
              onClick={() => setShowBookingForm(false)}
              className="absolute top-4 right-4 text-luxury-brown-light dark:text-luxury-cream-dark
                hover:text-luxury-gold dark:hover:text-luxury-gold-light transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-light text-luxury-brown dark:text-luxury-cream-light mb-6">
              Reserve su Suite Getsemaní
            </h3>
            <BookingForm onClose={() => setShowBookingForm(false)} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MainHero;