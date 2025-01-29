import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SectionPreview = ({ section, index, totalSections, isDark }) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <motion.section
      ref={sectionRef}
      className={`
        relative min-h-screen flex items-center
        ${index === 0 ? 'mt-0' : '-mt-32 md:-mt-64'}
        overflow-hidden
      `}
      style={{ opacity }}
    >
      {/* Imagen de fondo con efecto parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale }}
      >
        <motion.div
          className="relative w-full h-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-brown-dark/80 via-transparent to-luxury-brown-dark/80" />
        </motion.div>
      </motion.div>

      {/* Contenido */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          className={`flex flex-col ${isEven ? 'items-start' : 'items-end'} max-w-xl`}
          style={{ y }}
        >
          {/* Título con efecto de revelación */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-5xl font-light text-luxury-cream-light mb-4">
              {section.title}
            </h2>
            <div className={`h-px w-32 bg-luxury-gold dark:bg-luxury-gold-light ${isEven ? 'ml-0' : 'ml-auto'}`} />
          </motion.div>

          {/* Descripción con efecto de revelación */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-luxury-cream leading-relaxed mb-8"
          >
            {section.description}
          </motion.p>

          {/* Botón con efecto hover */}
          <motion.button
            onClick={() => navigate(section.href)}
            className="group relative overflow-hidden px-8 py-4 bg-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-luxury-cream-light font-light">
              Discover More
            </span>
            <motion.div
              className="absolute inset-0 border border-luxury-gold/20 dark:border-luxury-gold-light/20 rounded-lg"
              initial={false}
              whileHover={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-luxury-gold/10 dark:bg-luxury-gold-light/10 rounded-lg"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Efecto de transición entre secciones */}
      {index !== totalSections - 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-luxury-brown-dark/90 dark:to-luxury-brown/90 pointer-events-none" />
      )}
    </motion.section>
  );
};

export default SectionPreview;