import React, { useState } from 'react';
import { EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';
import { ContactButton } from '../components/ContactButton';

const Toast: React.FC<{ message: string; show: boolean; onClose: () => void }> = ({ message, show, onClose }) => {
    if (!show) return null;
  
    return (
      <div className="fixed bottom-5 right-5 bg-primary text-white py-3 px-6 rounded-lg shadow-lg animate-fade-in-out">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 font-bold">X</button>
        <style>{`
          @keyframes fade-in-out {
            0% { opacity: 0; transform: translateY(20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(20px); }
          }
          .animate-fade-in-out {
            animation: fade-in-out 4s ease-in-out forwards;
          }
        `}</style>
      </div>
    );
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.message) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setShowToast(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setShowToast(false), 4000); // Hide toast after 4 seconds
    }
  };
  
  const inputStyles = "mt-1 block w-full bg-transparent px-1 py-2 border-b-2 border-gray-500 focus:outline-none focus:ring-0 focus:border-primary";

  return (
    <>
      <div className="bg-white min-h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="lg:pr-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Contact DesignerBricks</h1>
              <p className="mt-4 text-lg text-gray-700">
                Ready to start your dream project? Have a question for our team? Reach out to us, and we'll get back to you promptly.
              </p>
              <div className="mt-8 space-y-4">
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center text-lg font-medium text-gray-800 hover:text-black">
                   <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {PHONE_NUMBER}
                </a>
                 <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center text-lg font-medium text-gray-800 hover:text-black">
                  <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {EMAIL_ADDRESS}
                </a>
              </div>
              <div className="mt-10">
                <p className="text-lg font-semibold mb-3">Or connect with us instantly:</p>
                <ContactButton />
              </div>
            </div>
            
            <div className="bg-accent p-8 rounded-lg">
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={inputStyles} />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={inputStyles} />
                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                   <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={inputStyles} />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className={inputStyles}></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>
                  <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toast message="Thanks! We'll get back to you." show={showToast} onClose={() => setShowToast(false)} />
    </>
  );
};

export default ContactPage;