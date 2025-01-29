import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 text-white text-center py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold">Jaelen Hotel</h1>
    </motion.header>
  );
};

export default Header;