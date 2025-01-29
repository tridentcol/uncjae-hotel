import React from 'react';
import { motion } from 'framer-motion';

const SideNavBar = ({ sections, activeSection }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center"
          >
            <span
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                activeSection === index
                  ? 'bg-white'
                  : 'bg-gray-500 group-hover:bg-white'
              }`}
            />
            <span
              className={`absolute left-6 whitespace-nowrap text-sm transition-opacity duration-200 ${
                activeSection === index
                  ? 'text-white opacity-100'
                  : 'text-gray-500 opacity-0 group-hover:opacity-100'
              }`}
            >
              {section.title}
            </span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default SideNavBar;