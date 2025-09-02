import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { WhatsAppIcon } from './icons';

interface ContactButtonProps {
    variant?: 'primary' | 'secondary';
}

export const ContactButton: React.FC<ContactButtonProps> = ({ variant = 'primary' }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300";

  const styles = {
    primary: "text-white bg-whatsapp hover:bg-green-600 focus:ring-whatsapp",
    secondary: "text-white bg-black hover:bg-gray-800 focus:ring-black"
  };

  const icon = variant === 'primary' ? <WhatsAppIcon className="w-5 h-5 mr-2" /> : null;
  
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${styles[variant]}`}
    >
      {icon}
      Contact Us
    </a>
  );
};