import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import placesHeroImg from '../assets/images/sections/places/places-hero.jpg';
// Importamos las imágenes locales
import socorroImg from '../assets/images/sections/places/socorro/places-socorro.jpg';
import zaragocillaImg from '../assets/images/sections/places/zaragocilla/places-zaragocilla.jpg';

const Places = ({ isDark, toggleDark, setLanguage }) => {
  const navigate = useNavigate();
  
  const locations = [
    {
      title: 'Proyecto El Socorro',
      description: 'Experimenta el lujo y la comodidad en nuestra exclusiva ubicación en El Socorro. Disfruta de vistas espectaculares y amenidades premium diseñadas para una estancia inolvidable.',
      image: socorroImg,
      href: '/places/socorro',
      status: 'active'
    },
    {
      title: 'Proyecto Zaragocilla',
      description: 'Próximamente, una nueva definición de hospitalidad de lujo en Zaragocilla. Regístrate para ser el primero en conocer nuestras ofertas exclusivas de prelanzamiento.',
      image: zaragocillaImg,
      href: '#',
      status: 'coming-soon'
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-brown transition-colors duration-300">
      <HeroSection 
        isDark={isDark} 
        toggleDark={toggleDark}
        setLanguage={setLanguage}
        backgroundImage={placesHeroImg}
        pageTitle="Nuestras Ubicaciones"
        pageDescription="Descubre nuestras exclusivas propiedades diseñadas para experiencias excepcionales"
      />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => location.status === 'active' && navigate(location.href)}
              className={`
                group relative rounded-xl overflow-hidden shadow-lg 
                transform transition-all duration-500 
                ${location.status === 'active' ? 'cursor-pointer hover:-translate-y-2' : 'cursor-default'}
                hover:shadow-2xl
              `}
            >
              {/* Imagen Principal */}
              <div className="relative h-[400px] w-full overflow-hidden">
                <img
                  src={location.image}
                  alt={location.title}
                  className="h-full w-full object-cover object-center 
                    transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t 
                  from-luxury-brown-dark/80 via-luxury-brown-dark/20 to-transparent" 
                />
                
                {/* Contenido sobre la imagen */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform transition-transform duration-500 group-hover:translate-y-0">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-3xl font-light text-luxury-cream-light">
                        {location.title}
                      </h3>
                      {location.status === 'coming-soon' && (
                        <Lock className="w-6 h-6 text-luxury-gold-light" />
                      )}
                    </div>
                    <p className="mt-3 text-luxury-cream max-w-lg">
                      {location.description}
                    </p>
                    
                    {/* Botón personalizado */}
                    <div className="mt-6">
                      <button
                        className={`
                          px-6 py-3 rounded-lg
                          backdrop-blur-sm
                          border border-luxury-cream/20
                          ${location.status === 'active'
                            ? 'bg-luxury-cream/10 hover:bg-luxury-cream/20 text-luxury-cream hover:text-luxury-gold-light'
                            : 'bg-luxury-gold/10 text-luxury-gold-light cursor-not-allowed'}
                          transition-all duration-300
                          group-hover:border-luxury-gold-light
                        `}
                      >
                        {location.status === 'active' ? 'Explorar Propiedad' : 'Próximamente'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;