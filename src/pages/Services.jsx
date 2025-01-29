import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart,
  ChefHat,
  Users,
  Dumbbell,
  Wifi,
  Car,
  Coffee,
  ShieldCheck
} from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import servicesHeroImg from '../assets/images/sections/services/services-hero.jpg';

const Services = ({ isDark, toggleDark, setLanguage }) => {
  const services = [
    {
      title: 'Spa & Wellness',
      description: 'Immerse yourself in tranquility with our premium spa services. Expert therapists provide personalized treatments using luxury products.',
      icon: Heart
    },
    {
      title: 'Fine Dining',
      description: 'Savor exceptional cuisine prepared by world-class chefs in our elegant restaurants, featuring both local and international specialties.',
      icon: ChefHat
    },
    {
      title: 'Event Spaces',
      description: 'Host memorable occasions in our sophisticated venues, perfect for both intimate gatherings and grand celebrations.',
      icon: Users
    },
    {
      title: 'Fitness Center',
      description: 'Maintain your wellness routine in our state-of-the-art fitness center, equipped with premium exercise machines and personal trainers.',
      icon: Dumbbell
    },
    {
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary high-speed internet access throughout the hotel, perfect for both business and leisure.',
      icon: Wifi
    },
    {
      title: 'Valet Parking',
      description: 'Experience hassle-free arrival and departure with our professional valet service and secure parking facilities.',
      icon: Car
    },
    {
      title: 'Room Service',
      description: 'Enjoy gourmet dining in the privacy of your room with our 24-hour room service, featuring an extensive menu of culinary delights.',
      icon: Coffee
    },
    {
      title: '24/7 Security',
      description: 'Rest assured with our round-the-clock security service, ensuring your safety and peace of mind throughout your stay.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-brown transition-colors duration-300">
      <HeroSection 
        isDark={isDark} 
        toggleDark={toggleDark}
        setLanguage={setLanguage}
        backgroundImage={servicesHeroImg}
        pageTitle="Premium Services"
        pageDescription="Experience unparalleled luxury and comfort"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 bg-white dark:bg-luxury-brown-light rounded-lg shadow-lg 
                  hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-luxury-gold-light/5 dark:bg-luxury-gold-dark/5 
                  scale-0 group-hover:scale-100 transition-transform duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full 
                    bg-luxury-gold/10 dark:bg-luxury-gold-dark/10">
                    <service.icon className="w-6 h-6 text-luxury-gold dark:text-luxury-gold-light" />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3 text-luxury-brown dark:text-luxury-cream-light
                    group-hover:text-luxury-gold dark:group-hover:text-luxury-gold-light transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-luxury-brown-light dark:text-luxury-cream-dark leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                  from-luxury-gold/0 via-luxury-gold to-luxury-gold/0 
                  dark:from-luxury-gold-dark/0 dark:via-luxury-gold-dark dark:to-luxury-gold-dark/0
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;