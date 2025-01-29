import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Rooms', href: '#' },
        { name: 'Dining', href: '#' },
        { name: 'Spa', href: '#' },
        { name: 'Events', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Privacy', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-luxury-brown dark:bg-luxury-brown-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-luxury-cream-light">Jaelen Hotel</h2>
            <p className="mt-4 text-luxury-cream-dark">
              Luxury and comfort in the heart of the city. Experience the perfect blend of elegance and modern amenities.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-luxury-cream-dark hover:text-luxury-gold-light transition-colors duration-300"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-luxury-gold-light">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-luxury-cream-dark hover:text-luxury-gold-light transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-luxury-gold/10">
          <p className="text-center text-luxury-cream-dark">
            © {new Date().getFullYear()} Jaelen Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;