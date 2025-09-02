import React from 'react';
import { ContactButton } from '../components/ContactButton';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Our Services</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Comprehensive solutions for your home building needs, from concept to completion.
            </p>
        </div>

        <div className="mt-16 md:mt-24 space-y-16 md:space-y-24">
          <ServiceSection
            title="Turnkey Services"
            imageUrl="https://picsum.photos/800/500?random=service1"
            description="Perfect for those who own a plot and desire a hassle-free construction experience. We manage everything from architectural design to final handover, ensuring quality, transparency, and timely delivery."
            points={[
              "End-to-end project management",
              "Custom architectural and interior design",
              "Transparent, itemized budgeting",
              "High-quality material procurement",
              "On-site supervision and quality control",
              "Genuine warranty on construction"
            ]}
          />

          <ServiceSection
            title="Plot Collaboration"
            imageUrl="https://picsum.photos/800/500?random=service2"
            description="Ideal for plot owners who wish to develop their property into multiple floors without personal financial investment. We partner with you to design and construct the building, taking a floor as our compensation."
            points={[
              "Zero investment required from the landowner",
              "Collaborative design process",
              "Construction of multiple independent floors",
              "Mutually beneficial partnership",
              "Clear legal and commercial terms",
              "Unlock the value of your land"
            ]}
            reverse={true}
          />
        </div>
      </div>
    </div>
  );
};

interface ServiceSectionProps {
  title: string;
  imageUrl: string;
  description: string;
  points: string[];
  reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, imageUrl, description, points, reverse = false }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className={`order-1 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <img src={imageUrl} alt={title} className="rounded-lg w-full h-auto object-cover shadow-lg" loading="lazy" />
      </div>
      <div className={`order-2 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <h2 className="text-3xl font-bold text-primary">{title}</h2>
        <p className="mt-4 text-gray-700">{description}</p>
        <ul className="mt-6 space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ContactButton />
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;