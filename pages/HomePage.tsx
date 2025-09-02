
import React from 'react';
import { ContactButton } from '../components/ContactButton';
import { REASONS_TO_LOVE_US, REVIEWS, INSTAGRAM_URL } from '../constants';
import { CheckCircleIcon, QuoteIcon } from '../components/icons';

const HomePage: React.FC = () => {
  return (
    <div className="text-gray-800 bg-white">
      <HeroSection />
      <ServicesSection />
      <StatsBand />
      <ProjectsHighlightSection />
      <ReasonsSection />
      <RemoteBuildSection />
      <ReviewsSection />
    </div>
  );
};

const HeroSection: React.FC = () => (
    <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="h-full min-h-[400px] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://picsum.photos/800/900')" }}>
                    {/* Image part */}
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Largest Design + Build Company in Kumaon</h1>
                    <ul className="mt-6 space-y-3 text-lg text-gray-700">
                        <li className="flex items-start"><span className="text-primary mr-3 mt-1">&#8226;</span>89 Homes Delivered, 59 Under Execution currently.</li>
                        <li className="flex items-start"><span className="text-primary mr-3 mt-1">&#8226;</span>A team of 35+ architects and 70+ civil engineering employees.</li>
                        <li className="flex items-start"><span className="text-primary mr-3 mt-1">&#8226;</span>Our clients like us for transparency and complete budget clarity before construction starts.</li>
                    </ul>
                    <div className="mt-8">
                        <ContactButton variant="primary">
                            Schedule a meeting
                        </ContactButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ServicesSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://picsum.photos/800/600?random=service1" alt="Turnkey Services" className="w-full h-full object-cover rounded-lg shadow-md"/>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-black">Turnkey Services</h3>
                    <p className="mt-4 text-gray-700">Do you have a plot and want to build a villa or floors by investing your own money? We will design and build it for you for a pre-decided all inclusive price in a fixed time line, and with warranty too. This is our most popular service with 82 homes delivered and 49 under execution.</p>
                    <div className="mt-6">
                        <ContactButton variant="outline">Know more</ContactButton>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div className="md:order-2">
                    <img src="https://picsum.photos/800/600?random=service2" alt="Plot Collaboration" className="w-full h-full object-cover rounded-lg shadow-md"/>
                </div>
                <div className="md:order-1">
                    <h3 className="text-2xl font-bold">Plot Collaboration</h3>
                    <p className="mt-4 text-gray-700">Do you have a plot and want to build floors but do not want to invest your money? We will design and build it for you and take a floor(s) in return.</p>
                    <div className="mt-6">
                        <ContactButton variant="outline">Know more</ContactButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const StatsBand: React.FC = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Largest Home Builder in Kumaon</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We are the largest home construction company in Kumaon, specializing in custom villas, simplex-duplexes, and independent floors. With 89 homes delivered and 59 under construction, our expertise spans different home styles and plot sizes.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-lg text-center border">
                    <p className="text-7xl lg:text-8xl font-extrabold text-primary">89</p>
                    <p className="mt-2 text-xl font-medium text-gray-900">Homes Delivered</p>
                </div>
                <div className="bg-white p-8 rounded-lg text-center border">
                    <p className="text-7xl lg:text-8xl font-extrabold text-primary">59</p>
                    <p className="mt-2 text-xl font-medium text-gray-900">Homes Under Design/Construction</p>
                </div>
            </div>
        </div>
    </section>
);

const ProjectsHighlightSection: React.FC = () => {
    const projectTypes = [
        { name: 'Villa', imageUrl: 'https://picsum.photos/300/300?random=villa' },
        { name: 'Simplex Duplex', imageUrl: 'https://picsum.photos/300/300?random=duplex' },
        { name: 'Independent Floor', imageUrl: 'https://picsum.photos/300/300?random=floor' },
        { name: 'Ultra-Luxury Homes', imageUrl: 'https://picsum.photos/300/300?random=luxury' },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">See Our Projects</h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projectTypes.map(project => (
                        <div key={project.name} className="group">
                            <a href="#/projects" className="block">
                                <img src={project.imageUrl} alt={project.name} className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                                <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors">{project.name}</h3>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ReasonsSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black">12 Reasons Why You Will Love Us</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {REASONS_TO_LOVE_US.slice(0, 6).map((reason, index) => (
                    <div key={index} className="p-6">
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
    <section className="py-16 md:py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1600/800?random=remote')"}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-12 rounded-lg shadow-xl max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black">Away from Kumaon?</h2>
                 <p className="mt-4 text-xl text-gray-700">30+ families built their homes while living away — you can too!</p>
                <p className="mt-4 max-w-3xl mx-auto text-gray-600">Whether you are an NRI, a frequent traveler, or living outside Kumaon, we ensure that distance does not stop you from building your dream home. With us, 30+ clients have successfully managed their home construction remotely while we handled every detail.</p>
                <h3 className="mt-8 text-xl font-bold">How we make it easy for you:</h3>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "Video calls for detailed design meetings",
                        "LookBooks to select materials without visiting site",
                        "Regular video tours keep you updated",
                        "CCTV access and our mobile app for live updates"
                    ].map((feature, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg border h-full">
                            <p className="font-semibold text-gray-800 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const ReviewsSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">What Our Customers Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {REVIEWS.map((review, index) => (
                     <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col border border-gray-200 relative">
                        <QuoteIcon className="absolute top-0 left-0 w-16 h-16 text-primary opacity-10 -translate-x-6 -translate-y-6" />
                        <p className="text-gray-600 flex-grow z-10">"{review.quote}"</p>
                        <div className="flex items-center mt-6 pt-6 border-t border-gray-200 z-10">
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

export default HomePage;