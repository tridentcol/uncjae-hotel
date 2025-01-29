import React from 'react';
import Footer from './Footer';

const Layout = ({ children, isDark, toggleDark, setLanguage }) => {
  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-luxury-cream dark:bg-luxury-brown transition-colors duration-300">
        <main>
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { isDark, toggleDark, setLanguage });
            }
            return child;
          })}
        </main>
        <Footer isDark={isDark} />
      </div>
    </div>
  );
};

export default Layout;