import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { WhatsAppIcon } from './icons';

interface ContactButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    children?: React.ReactNode;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ variant = 'primary', children }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300";

  const styles = {
    primary: "text-white bg-primary border-transparent hover:opacity-90 focus:ring-primary",
    secondary: "text-white bg-black border-transparent hover:bg-gray-800 focus:ring-black",
    outline: "text-primary bg-transparent border-primary hover:bg-primary hover:text-white focus:ring-primary"
  };

  const showIcon = variant === 'primary' && !children;
  const buttonText = children || "Contact Us";
  
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${styles[variant]}`}
    >
      {showIcon && <WhatsAppIcon className="w-5 h-5 mr-2" />}
      {buttonText}
    </a>
  );
};
