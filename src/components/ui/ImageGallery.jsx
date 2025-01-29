import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ImageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/api/placeholder/1920/1080',
      title: 'Luxury Suite',
      description: 'Experience ultimate comfort in our premium suites'
    },
    {
      image: '/api/placeholder/1920/1080',
      title: 'Infinity Pool',
      description: 'Relax in our stunning infinity pool with ocean views'
    },
    {
      image: '/api/placeholder/1920/1080',
      title: 'Gourmet Restaurant',
      description: 'Savor exquisite cuisine in an elegant setting'
    },
    {
      image: '/api/placeholder/1920/1080',
      title: 'Spa Retreat',
      description: 'Unwind in our world-class spa facilities'
    },
    {
      image: '/api/placeholder/1920/1080',
      title: 'Event Space',
      description: 'Perfect venues for your special occasions'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30">
            <div className="absolute bottom-20 left-20 text-white">
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default ImageGallery;