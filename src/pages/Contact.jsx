import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';

const Contact = ({ isDark, toggleDark, setLanguage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@jaelenhotel.com',
      link: 'mailto:info@jaelenhotel.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Luxury Avenue, City, Country',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-brown transition-colors duration-300">
      <HeroSection 
        isDark={isDark} 
        toggleDark={toggleDark}
        setLanguage={setLanguage}
        backgroundImage="/api/placeholder/1920/1080"
        pageTitle="Contact Us"
        pageDescription="Let us assist you in creating unforgettable moments"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-luxury-brown-light 
                p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-lg border border-luxury-cream-dark dark:border-luxury-brown
                        bg-luxury-cream dark:bg-luxury-brown
                        text-luxury-brown dark:text-luxury-cream
                        focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent
                        transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-lg border border-luxury-cream-dark dark:border-luxury-brown
                        bg-luxury-cream dark:bg-luxury-brown
                        text-luxury-brown dark:text-luxury-cream
                        focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent
                        transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 rounded-lg border border-luxury-cream-dark dark:border-luxury-brown
                      bg-luxury-cream dark:bg-luxury-brown
                      text-luxury-brown dark:text-luxury-cream
                      focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent
                      transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-lg border border-luxury-cream-dark dark:border-luxury-brown
                      bg-luxury-cream dark:bg-luxury-brown
                      text-luxury-brown dark:text-luxury-cream
                      focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent
                      transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg
                    bg-luxury-gold hover:bg-luxury-gold-dark
                    text-white font-medium
                    transition-colors duration-300
                    focus:outline-none focus:ring-2 focus:ring-luxury-gold-light focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white dark:bg-luxury-brown-light 
                  rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full 
                      bg-luxury-gold/10 dark:bg-luxury-gold-dark/10">
                      <item.icon className="w-6 h-6 text-luxury-gold dark:text-luxury-gold-light" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-luxury-brown dark:text-luxury-cream-light">
                      {item.title}
                    </h3>
                    <a
                      href={item.link}
                      className="mt-1 text-luxury-brown-light dark:text-luxury-cream-dark
                        hover:text-luxury-gold dark:hover:text-luxury-gold-light
                        transition-colors"
                    >
                      {item.details}
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;