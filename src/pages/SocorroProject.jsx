import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Check, ChevronLeft, ChevronRight, X } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';

// Importar las imágenes
import roomMain from '../assets/images/sections/places/socorro/room-main.jpg';
import roomBedroom from '../assets/images/sections/places/socorro/room-bedroom.jpg';
import roomBathroom from '../assets/images/sections/places/socorro/room-bathroom.jpg';
import roomLiving from '../assets/images/sections/places/socorro/room-living.jpg';
import roomView from '../assets/images/sections/places/socorro/room-view.jpg';
import placesHeroImg from '../assets/images/sections/places/places-hero.jpg';

const SocorroProject = ({ isDark, toggleDark, setLanguage }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  // Array de imágenes con metadata
  const images = [
    {
      src: roomMain,
      alt: 'Vista principal de la habitación',
      title: 'Suite Ejecutiva'
    },
    {
      src: roomBedroom,
      alt: 'Área de dormitorio',
      title: 'Dormitorio Principal'
    },
    {
      src: roomBathroom,
      alt: 'Baño de lujo',
      title: 'Baño Completo'
    },
    {
      src: roomLiving,
      alt: 'Área de estar',
      title: 'Sala de Estar'
    },
    {
      src: roomView,
      alt: 'Vista desde la habitación',
      title: 'Vista Panorámica'
    }
  ];

  const amenities = [
    'Cama King Size',
    'Baño privado con ducha de lluvia',
    'Smart TV 55"',
    'Aire acondicionado',
    'WiFi de alta velocidad',
    'Minibar premium',
    'Caja fuerte digital',
    'Servicio a la habitación 24/7'
  ];

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-brown transition-colors duration-300">
      <HeroSection 
        isDark={isDark} 
        toggleDark={toggleDark}
        setLanguage={setLanguage}
        backgroundImage={placesHeroImg}
        pageTitle="Proyecto El Socorro"
        pageDescription="Una experiencia de hospedaje única en el corazón de la ciudad"
      />

      {/* Sección Principal */}
      <div className="container mx-auto px-6 py-16">
{/* Galería de Vista Previa */}
<div className="relative group">
  <div className="grid grid-cols-4 gap-4 h-[500px]">
    {/* Imagen Principal */}
    <div 
      className="col-span-2 row-span-2 relative overflow-hidden rounded-lg group/item cursor-pointer"
      onClick={() => setShowGallery(true)}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="h-full"
      >
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-brown-dark/80 to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl font-light text-luxury-cream-light mb-2">
              {images[0].title}
            </h3>
            <p className="text-luxury-cream text-sm">
              Click para ver la galería completa
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Imágenes Secundarias */}
    {images.slice(1, 5).map((img, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-lg group/item cursor-pointer"
        onClick={() => {
          setCurrentImage(index + 1);
          setShowGallery(true);
        }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="h-full"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-brown-dark/80 to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-500">
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
              <h4 className="text-luxury-cream-light text-lg font-light">{img.title}</h4>
            </div>
          </div>
        </motion.div>
      </div>
    ))}
  </div>

  {/* Botón Ver Todas */}
  <motion.button 
    className="absolute bottom-4 right-4 px-6 py-3 rounded-lg
      bg-luxury-cream/10 backdrop-blur-sm
      border border-luxury-cream/20
      text-luxury-cream
      transition-all duration-300
      hover:bg-luxury-cream/20 hover:border-luxury-gold-light
      hover:text-luxury-gold-light"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setShowGallery(true)}
  >
    <span className="relative inline-flex items-center">
      Ver todas las fotos
      <motion.span
        className="ml-2"
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
      >
        →
      </motion.span>
    </span>
  </motion.button>
</div>

{/* Modal de Galería */}
<AnimatePresence>
  {showGallery && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black/95" onClick={() => setShowGallery(false)} />

      {/* Contenido */}
      <div className="relative z-10 w-full">
        {/* Botón Cerrar */}
        <motion.button
          onClick={() => setShowGallery(false)}
          className="absolute top-4 right-4 text-white hover:text-luxury-gold-light transition-colors p-2 z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-8 h-8" />
        </motion.button>

        {/* Navegación */}
        <motion.button
          onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 
            text-white hover:text-luxury-gold-light transition-colors p-2 z-20"
          whileHover={{ scale: 1.2, x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-8 h-8" />
        </motion.button>

        <motion.button
          onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 
            text-white hover:text-luxury-gold-light transition-colors p-2 z-20"
          whileHover={{ scale: 1.2, x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-8 h-8" />
        </motion.button>

        {/* Imagen Principal */}
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative max-w-5xl mx-auto px-4"
        >
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl"
          />
          
          {/* Información */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
            <div className="bg-black/50 text-white px-6 py-3 rounded-full backdrop-blur-sm">
              <h3 className="text-xl font-light mb-2">{images[currentImage].title}</h3>
              <p className="text-sm text-luxury-cream-dark">
                {currentImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Miniaturas */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
          flex space-x-3 overflow-x-auto max-w-3xl px-4">
          {images.map((img, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`
                relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0
                transition-all duration-300
                ${currentImage === index ? 'ring-2 ring-luxury-gold-light scale-110' : 'opacity-50 hover:opacity-100'}
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

        {/* Información y Reserva */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          {/* Información Principal */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-light text-luxury-brown dark:text-luxury-cream-light">
                Suite Ejecutiva
              </h2>
              <p className="mt-4 text-luxury-brown-light dark:text-luxury-cream-dark leading-relaxed">
                Experimenta el lujo y la comodidad en nuestra Suite Ejecutiva. Un espacio 
                cuidadosamente diseñado que combina elegancia moderna con comodidades premium, 
                ofreciendo una experiencia de hospedaje excepcional para el viajero exigente.
              </p>
            </div>

            {/* Amenidades */}
            <div>
              <h3 className="text-xl font-light text-luxury-brown dark:text-luxury-cream-light mb-4">
                Amenidades
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 text-luxury-brown-light dark:text-luxury-cream-dark"
                  >
                    <Check className="w-5 h-5 text-luxury-gold" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Políticas */}
            <div>
              <h3 className="text-xl font-light text-luxury-brown dark:text-luxury-cream-light mb-4">
                Información Importante
              </h3>
              <div className="space-y-2 text-luxury-brown-light dark:text-luxury-cream-dark">
                <p>Check-in: 3:00 PM | Check-out: 12:00 PM</p>
                <p>Política de cancelación: Gratuita hasta 24 horas antes</p>
                <p>No se permiten mascotas</p>
              </div>
            </div>
          </div>

          {/* Módulo de Reserva */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white dark:bg-luxury-brown-light rounded-xl shadow-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="block text-2xl font-light text-luxury-brown dark:text-luxury-cream-light">
                    $299 USD
                  </span>
                  <span className="text-luxury-brown-light dark:text-luxury-cream-dark">
                    por noche
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-luxury-gold">★★★★★</span>
                  <span className="text-luxury-brown-light dark:text-luxury-cream-dark">
                    (48 reseñas)
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
                    Fecha de llegada
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
                    Fecha de salida
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
                    Huéspedes
                  </label>
                  <select
                    className="w-full p-2 rounded-lg
                      border border-luxury-cream-dark dark:border-luxury-brown
                      bg-luxury-cream dark:bg-luxury-brown
                      text-luxury-brown dark:text-luxury-cream
                      focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent"
                  >
                    <option>1 huésped</option>
                    <option>2 huéspedes</option>
                    <option>3 huéspedes</option>
                    <option>4 huéspedes</option>
                  </select>
                </div>
                <button className="w-full py-3 px-4 rounded-lg
                  bg-luxury-gold hover:bg-luxury-gold-dark
                  text-white text-lg font-light
                  transition-colors">
                  Reservar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Galería Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          >
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 text-white hover:text-luxury-gold-light transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 
                text-white hover:text-luxury-gold-light transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 
                text-white hover:text-luxury-gold-light transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl mx-auto px-4"
            >
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                {currentImage + 1} / {images.length}
              </div>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-lg">
                {images[currentImage].title}
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
              flex space-x-2 overflow-x-auto max-w-3xl px-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`
                    w-16 h-16 rounded-lg overflow-hidden flex-shrink-0
                    border-2 transition-all duration-300
                    ${currentImage === index 
                      ? 'border-luxury-gold-light scale-110' 
                      : 'border-transparent opacity-50 hover:opacity-100'}
                  `}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocorroProject;