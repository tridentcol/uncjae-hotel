// AnimatedNavbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const AnimatedNavbar = ({ isDark, toggleDark, setLanguage }) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ];

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Places', href: '/places' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Additional Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: isScrolled 
          ? isDark ? 'rgba(44, 31, 24, 0.95)' : 'rgba(255, 251, 235, 0.95)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? 'shadow-lg' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between space-x-8 py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors ${
              isScrolled
                ? isDark
                  ? 'text-luxury-cream-light hover:text-luxury-gold-light'
                  : 'text-luxury-brown hover:text-luxury-gold'
                : 'text-luxury-cream-light hover:text-luxury-gold-light'
            }`}
          >
            Jaelen Hotel
          </Link>

          {/* Menu Items */}
          <div className="flex-1 flex justify-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`
                  relative px-4 py-2 text-lg font-light
                  transition-colors duration-300
                  ${isScrolled
                    ? isDark
                      ? 'text-luxury-cream-light hover:text-luxury-gold-light'
                      : 'text-luxury-brown hover:text-luxury-gold'
                    : 'text-luxury-cream-light hover:text-luxury-gold-light'
                  }
                  ${location.pathname === item.href ? 'text-luxury-gold-light' : ''}
                `}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5
                  transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300
                  bg-luxury-gold-light" />
              </motion.button>
            ))}
          </div>

          {/* Controls Group */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`
                  p-2 rounded-full
                  transition-colors duration-300
                  ${isScrolled
                    ? isDark
                      ? 'bg-luxury-cream-light/10 hover:bg-luxury-cream-light/20'
                      : 'bg-luxury-brown/10 hover:bg-luxury-brown/20'
                    : 'bg-luxury-cream-light/10 hover:bg-luxury-cream-light/20'
                  }
                `}
              >
                <Globe className={`w-6 h-6 ${
                  isScrolled
                    ? isDark
                      ? 'text-luxury-cream-light'
                      : 'text-luxury-brown'
                    : 'text-luxury-cream-light'
                }`} />
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg 
                  bg-white dark:bg-luxury-brown 
                  ring-1 ring-luxury-gold/10 dark:ring-luxury-gold-dark/10">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm
                          text-luxury-brown dark:text-luxury-cream
                          hover:bg-luxury-cream dark:hover:bg-luxury-brown-light
                          transition-colors"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDark}
              className={`
                p-2 rounded-full
                transition-colors duration-300
                ${isScrolled
                  ? isDark
                    ? 'bg-luxury-cream-light/10 hover:bg-luxury-cream-light/20'
                    : 'bg-luxury-brown/10 hover:bg-luxury-brown/20'
                  : 'bg-luxury-cream-light/10 hover:bg-luxury-cream-light/20'
                }
              `}
            >
              {isDark ? (
                <Sun className={`w-6 h-6 ${
                  isScrolled
                    ? isDark
                      ? 'text-luxury-cream-light'
                      : 'text-luxury-brown'
                    : 'text-luxury-cream-light'
                }`} />
              ) : (
                <Moon className={`w-6 h-6 ${
                  isScrolled
                    ? isDark
                      ? 'text-luxury-cream-light'
                      : 'text-luxury-brown'
                    : 'text-luxury-cream-light'
                }`} />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default AnimatedNavbar;