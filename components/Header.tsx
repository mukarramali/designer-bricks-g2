
import React, { useState, useEffect } from 'react';
import { BRAND_NAME, PHONE_NUMBER, EMAIL_ADDRESS, NAV_LINKS } from '../constants';
import { ContactButton } from './ContactButton';
import { HamburgerIcon, CloseIcon } from './icons';

interface HeaderProps {
    currentRoute: string;
}

const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentRoute]);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${hasScrolled ? 'shadow-md' : ''}`}>
      {/* Top Bar: Centered Logo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-center">
          <a href="#/" className="text-2xl font-bold tracking-wider text-black">
            {BRAND_NAME}
          </a>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-gray-700 p-2">
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar (Desktop) */}
      <nav className="hidden bg-accent lg:grid lg:grid-cols-4 text-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`py-4 text-lg font-medium text-black transition-colors duration-300 hover:bg-primary hover:text-white ${
              currentRoute === link.href ? 'bg-primary text-white' : ''
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-20 left-0 right-0">
          <nav className="flex flex-col items-center space-y-4 p-6">
            {NAV_LINKS.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`text-lg ${currentRoute === link.href ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <ContactButton />
            </div>
             <div className="text-center text-sm pt-4">
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="block text-gray-600 hover:text-black">{PHONE_NUMBER}</a>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="block text-gray-600 hover:text-black">{EMAIL_ADDRESS}</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;