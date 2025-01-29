import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';

const Gallery = ({ isDark, toggleDark, setLanguage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/api/placeholder/800/600', category: 'Rooms', title: 'Luxury Suite' },
    { id: 2, src: '/api/placeholder/800/600', category: 'Dining', title: 'Gourmet Restaurant' },
    { id: 3, src: '/api/placeholder/800/600', category: 'Facilities', title: 'Infinity Pool' },
    { id: 4, src: '/api/placeholder/800/600', category: 'Rooms', title: 'Executive Room' },
    { id: 5, src: '/api/placeholder/800/600', category: 'Dining', title: 'Elegant Bar' },
    { id: 6, src: '/api/placeholder/800/600', category: 'Facilities', title: 'Spa Retreat' },
    { id: 7, src: '/api/placeholder/800/600', category: 'Rooms', title: 'Presidential Suite' },
    { id: 8, src: '/api/placeholder/800/600', category: 'Facilities', title: 'Fitness Center' }
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(images.map(img => img.category))];

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-brown transition-colors duration-300">
      <HeroSection 
        isDark={isDark} 
        toggleDark={toggleDark}
        setLanguage={setLanguage}
        backgroundImage="/api/placeholder/1920/1080"
        pageTitle="Our Gallery"
        pageDescription="A visual journey through elegance and sophistication"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flex justify-center space-x-4 flex-wrap gap-y-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-luxury-gold text-white'
                    : 'bg-luxury-cream-dark dark:bg-luxury-brown-light text-luxury-brown dark:text-luxury-cream hover:bg-luxury-gold/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-brown-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <p className="text-luxury-cream-light text-lg font-medium">
                        {image.title}
                      </p>
                      <p className="text-luxury-cream-dark text-sm">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-brown-dark/90"
        >
          <div className="relative max-w-4xl mx-auto px-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-luxury-cream-light hover:text-luxury-gold-light transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <h3 className="text-luxury-cream-light text-xl font-medium">
                {selectedImage.title}
              </h3>
              <p className="text-luxury-cream-dark">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;