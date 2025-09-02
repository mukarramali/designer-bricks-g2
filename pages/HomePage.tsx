import React from 'react';
import { ContactButton } from '../components/ContactButton';
import { REASONS_TO_LOVE_US, REVIEWS, INSTAGRAM_URL } from '../constants';
import { CheckCircleIcon } from '../components/icons';

const HomePage: React.FC = () => {
  return (
    <div className="text-gray-800">
      <HeroSection />
      <ServicesSection />
      <LuxuryFloorSection />
      <StatsBand />
      <ReasonsSection />
      <RemoteBuildSection />
      <ReviewsSection />
      <InstagramSection />
    </div>
  );
};

const HeroSection: React.FC = () => (
  <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/1600/900')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Largest Design + Build Company in Kumaon</h1>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
        89 Homes Delivered, 59 Under Execution. A team of 35+ architects and 70+ civil engineers building your dream home with transparency and quality.
      </p>
      <div className="mt-8">
        <ContactButton />
      </div>
    </div>
  </section>
);


const ServicesSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">What We Do</h2>
                <p className="mt-4 text-lg text-gray-600">Two distinct paths to build your perfect home.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                    <h3 className="text-2xl font-bold text-black">Turnkey Services</h3>
                    <p className="mt-4 text-gray-600">You own the plot, we handle the rest. From design to delivery, we build your dream home with a genuine warranty. 82 homes delivered, 49 under execution.</p>
                    <div className="mt-6">
                        <ContactButton />
                    </div>
                </div>
                <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                    <h3 className="text-2xl font-bold text-black">Plot Collaboration</h3>
                    <p className="mt-4 text-gray-600">Own a plot but don't want to invest? We'll design and build floors on your land, and you pay us with one of the floors.</p>
                    <div className="mt-6">
                        <ContactButton />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const LuxuryFloorSection: React.FC = () => (
    <section className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-bold text-black">Buy a Luxury Floor</h2>
                    <p className="mt-2 text-lg text-gray-900">Get a premium floor designed and built by DesignerBricks in prime locations.</p>
                </div>
                <div className="mt-6 md:mt-0 md:ml-6">
                    <ContactButton variant="secondary" />
                </div>
            </div>
        </div>
    </section>
);

const StatsBand: React.FC = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Largest Home Builder in Kumaon</h2>
                    <p className="mt-4 text-lg text-gray-600">Serving Kumaon with transparent budgets and premium quality construction, one dream home at a time.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-lg text-center border">
                        <p className="text-5xl font-extrabold text-primary">89</p>
                        <p className="mt-2 text-xl font-medium text-gray-700">Homes Delivered</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg text-center border">
                        <p className="text-5xl font-extrabold text-primary">59</p>
                        <p className="mt-2 text-xl font-medium text-gray-700">Homes In-Progress</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ReasonsSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">12 Reasons You'll Love Us</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {REASONS_TO_LOVE_US.map((reason, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
                        <CheckCircleIcon className="w-8 h-8 text-primary" />
                        <h3 className="mt-4 font-bold text-lg text-black">{reason.title}</h3>
                        <p className="mt-2 text-gray-600">{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const RemoteBuildSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Away from Kumaon? Build Remotely.</h2>
            <p className="mt-4 text-xl text-gray-700">30+ families built their homes while living away — you can too!</p>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">Our seamless remote management process ensures you are in complete control and updated at every step. We bridge the distance with technology and transparency.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    "Video calls for detailed design meetings",
                    "LookBooks to select materials without visiting site",
                    "Regular video tours keep you updated",
                    "CCTV access and our mobile app for live updates"
                ].map((feature, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200 h-full">
                        <p className="font-semibold text-gray-800">{feature}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ReviewsSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {REVIEWS.map((review, index) => (
                     <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col">
                        <p className="text-gray-600 flex-grow">"{review.quote}"</p>
                        <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                            <img src={review.avatarUrl} alt={review.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                            <div className="ml-4">
                                <p className="font-bold text-black">{review.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const InstagramSection: React.FC = () => {
    const postIds = ['C6zXyV0v4Oq', 'C59f_L_Pz8G', 'C54lB78P8iK', 'C5jqYxqvVbC', 'C47B2R1P9S6', 'C4Z_s90vY7d'];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">From Instagram</h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {postIds.map(id => (
                        <div key={id} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                           <img src={`https://picsum.photos/400/400?random=${id}`} alt="Instagram post placeholder" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-black hover:underline">
                        View more on Instagram &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomePage;