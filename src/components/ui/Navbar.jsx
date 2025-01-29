import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sun, Moon, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ isDark, toggleDark, setLanguage }) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              Jaelen Hotel
            </Link>

            {/* Navigation Menu */}
            <div className="flex-1 flex justify-center space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={`text-white text-lg font-medium hover:text-blue-400 transition-colors relative group ${
                    location.pathname === item.href ? 'text-blue-400' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </motion.button>
              ))}
            </div>

            {/* Controls Group */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                >
                  <Globe className="w-6 h-6" />
                </button>
                
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                {isDark ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Booking Button */}
      <div className="fixed top-24 right-8 z-50">
        <div className="group relative">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-full shadow-lg transition-all duration-300 group-hover:scale-105">
            <Calendar className="w-8 h-8" />
          </button>
          <div className="absolute right-0 mt-4 w-80 opacity-0 scale-95 transform transition-all duration-300 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
              <h3 className="text-xl text-gray-800 dark:text-white font-medium mb-4">Make a Reservation</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-lg font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;