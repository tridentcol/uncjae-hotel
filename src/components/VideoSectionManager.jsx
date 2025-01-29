import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedNavbar } from '../components/ui/AnimatedNavbar';
import { Calendar, X } from 'lucide-react';
import Footer from '../components/layout/Footer';
import BookingForm from '../components/booking/BookingForm';

const VideoSectionManager = ({ sections, currentSection, onSectionChange }) => {
  const sectionRefs = useRef([]);
  const observerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [showFooter, setShowFooter] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const videoRefs = useRef([]);
  const scrollingRef = useRef(false);
  const containerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
    videoRefs.current = videoRefs.current.slice(0, sections.length);

    const options = {
      root: null,
      rootMargin: '-45% 0px',
      threshold: 0
    };

    const handleIntersection = async (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setShowFooter(index === sections.length - 1);

          if (videoRefs.current[activeVideo]) {
            try {
              await videoRefs.current[activeVideo].pause();
            } catch (error) {
              console.log('Error al pausar:', error);
            }
          }

          if (videoRefs.current[index]) {
            try {
              const playPromise = videoRefs.current[index].play();
              if (playPromise !== undefined) {
                playPromise.catch(error => {
                  console.log('Error al reproducir:', error);
                });
              }
            } catch (error) {
              console.log('Error al reproducir:', error);
            }
          }

          setActiveVideo(index);
          onSectionChange(index);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        observerRef.current.observe(ref);
      }
    });

    if (videoRefs.current[0]) {
      const playPromise = videoRefs.current[0].play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Error al reproducir:', error);
        });
      }
    }

    const handleWheel = (event) => {
      event.preventDefault();
      
      if (scrollingRef.current) return;
      
      const direction = event.deltaY > 0 ? 1 : -1;
      const newIndex = Math.min(Math.max(activeVideo + direction, 0), sections.length - 1);
      
      if (newIndex !== activeVideo) {
        scrollingRef.current = true;
        const targetSection = sectionRefs.current[newIndex];
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        setTimeout(() => {
          scrollingRef.current = false;
        }, 1000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      videoRefs.current.forEach(video => {
        if (video) {
          video.pause();
        }
      });
    };
  }, [sections, onSectionChange, activeVideo]);

  return (
    <>
      {/* Video Background Container */}
      <div className="fixed inset-0 w-full h-full z-0">
        {sections.map((section, index) => (
          <div
            key={`video-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeVideo === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <video
              ref={el => videoRefs.current[index] = el}
              className="object-cover w-full h-full"
              muted
              loop
              playsInline
              preload="auto"
              src={section.video}
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-luxury-brown-dark/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/50" />
          </div>
        ))}
      </div>

      {/* Navigation Menu (siempre visible) */}
      <AnimatedNavbar 
        isDark={true}
        toggleDark={sections[0].toggleDark}
        setLanguage={sections[0].setLanguage}
      />

      {/* Booking Button (siempre visible) */}
      <div className="fixed top-24 right-8 z-50">
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

      {/* Contenedor principal con scroll controlado */}
      <div 
        ref={containerRef}
        className="relative z-10 h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <div
            key={`section-${index}`}
            ref={el => sectionRefs.current[index] = el}
            data-index={index}
            className="h-screen snap-start snap-always"
          >
            <div className="h-screen flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto px-6 text-center"
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-luxury-cream-light">
                  {section.title}
                </h2>
                <p className="text-xl md:text-2xl text-luxury-cream">
                  {section.description}
                </p>
                {index !== 0 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-8 py-3 rounded-lg
                      bg-luxury-cream/10 backdrop-blur-sm
                      border border-luxury-cream/20
                      text-luxury-cream
                      transition-all duration-300
                      hover:bg-luxury-cream/20 hover:border-luxury-gold-light
                      hover:text-luxury-gold-light"
                    onClick={() => window.location.href = section.href}
                  >
                    Discover More
                  </motion.button>
                )}
              </motion.div>
            </div>
          </div>
        ))}

        {/* Footer Section */}
        <div ref={footerRef} className="h-screen snap-start snap-always">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default VideoSectionManager;