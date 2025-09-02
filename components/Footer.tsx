import React from 'react';
import { BRAND_NAME, PHONE_NUMBER, EMAIL_ADDRESS, INSTAGRAM_URL, LINKEDIN_URL, NAV_LINKS } from '../constants';
import { InstagramIcon, LinkedInIcon } from './icons';
import { ContactButton } from './ContactButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-wider text-accent">{BRAND_NAME}</h2>
            <p className="text-gray-400 text-sm">Building Dreams in Kumaon since {currentYear - 6}.</p>
            <div className="flex space-x-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-accent"><InstagramIcon /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-accent"><LinkedInIcon /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold tracking-wide text-accent">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-accent text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact */}
           <div className="space-y-4">
            <h3 className="font-semibold tracking-wide text-accent">Contact Us</h3>
            <ul className="space-y-2 text-sm">
                <li><a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-gray-400 hover:text-accent">{PHONE_NUMBER}</a></li>
                <li><a href={`mailto:${EMAIL_ADDRESS}`} className="text-gray-400 hover:text-accent">{EMAIL_ADDRESS}</a></li>
            </ul>
          </div>

          {/* Column 4: CTA */}
          <div>
            <h3 className="font-semibold tracking-wide text-accent">Ready to build?</h3>
            <div className="mt-4">
              <ContactButton />
            </div>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {currentYear} {BRAND_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;