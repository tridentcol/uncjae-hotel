import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, toggleDark }) => {
  return (
    <button
      onClick={toggleDark}
      className={`
        p-2 rounded-full
        ${isDark 
          ? 'bg-luxury-cream/10 hover:bg-luxury-cream/20' 
          : 'bg-luxury-gold/10 hover:bg-luxury-gold/20'
        }
        ${isDark
          ? 'text-luxury-cream hover:text-luxury-gold-light'
          : 'text-luxury-brown hover:text-luxury-gold'
        }
        transition-all duration-300
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;