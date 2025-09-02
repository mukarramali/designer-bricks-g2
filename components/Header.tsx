
import React, { useState, useEffect } from 'react';
import { BRAND_NAME, PHONE_NUMBER, EMAIL_ADDRESS, NAV_LINKS, WHATSAPP_LINK } from '../constants';
import { ContactButton } from './ContactButton';
import { HamburgerIcon, CloseIcon } from './icons';

interface HeaderProps {
    currentRoute: string;
}

const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const leftLinks = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2, 4);

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
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-600 text-sm hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-primary">{PHONE_NUMBER}</a>
            <span className="text-gray-300">|</span>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-primary">{EMAIL_ADDRESS}</a>
          </div>
          <div className="flex items-center space-x-4">
            <span>Best Building Construction Company in Kumaon</span>
             <span className="text-gray-300">|</span>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary">Whatsapp</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          <nav className="hidden lg:flex items-center space-x-8">
            {leftLinks.map((link) => (
              <a key={link.href} href={link.href} className={`text-lg font-medium transition-colors duration-300 ${ currentRoute === link.href ? 'text-primary' : 'text-gray-700 hover:text-primary' }`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex-shrink-0">
            <a href="#/" className="text-2xl font-bold tracking-wider text-black">
              {BRAND_NAME}
            </a>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
             {rightLinks.map((link) => (
              <a key={link.href} href={link.href} className={`text-lg font-medium transition-colors duration-300 ${ currentRoute === link.href ? 'text-primary' : 'text-gray-700 hover:text-primary' }`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-gray-700 p-2">
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>
      
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