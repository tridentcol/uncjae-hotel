import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import MainPage from './pages/MainPage';
import Places from './pages/Places';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SocorroProject from './pages/SocorroProject';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(prev => !prev);
  };

  return (
<Router basename="/uncjae-hotel"> {/* Actualizado para coincidir con tu repositorio */}
  <Layout 
        isDark={isDark} 
        toggleDark={toggleDark}
        setLanguage={setLanguage}
      >
        <Routes>
          <Route path="/" element={<MainPage isDark={isDark} toggleDark={toggleDark} setLanguage={setLanguage} />} />
          <Route path="/places" element={<Places isDark={isDark} toggleDark={toggleDark} setLanguage={setLanguage} />} />
          <Route path="/places/socorro" element={<SocorroProject isDark={isDark} toggleDark={toggleDark} setLanguage={setLanguage} />} />
          <Route path="/gallery" element={<Gallery isDark={isDark} toggleDark={toggleDark} setLanguage={setLanguage} />} />
          <Route path="/services" element={<Services isDark={isDark} toggleDark={toggleDark} setLanguage={setLanguage} />} />
          <Route path="/contact" element={<Contact isDark={isDark} toggleDark={toggleDark} setLanguage={setLanguage} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;