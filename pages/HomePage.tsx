
import React, { useState } from 'react';
import { ContactButton } from '../components/ContactButton';
import { REASONS_TO_LOVE_US, REVIEWS, INSTAGRAM_URL } from '../constants';
import {
    CheckCircleIcon, QuoteIcon, ArchitectureIcon, ConstructionIcon, ZeroSurprisesIcon,
    LookBookIcon, AppIcon, AccountabilityIcon, ScopeIcon, PriceIcon,
    ComfortIcon, TeamIcon, HandoverChecklistIcon, WarrantyIcon
} from '../components/icons';

const HomePage: React.FC = () => {
  return (
    <div className="text-gray-800">
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
    <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="h-full min-h-[400px] md:min-h-[500px] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://picsum.photos/800/900')" }}>
                    {/* Image part */}
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Largest Design + Build Company in Kumaon</h1>
                    <ul className="mt-6 space-y-3 text-lg text-gray-200">
                        <li className="flex items-start"><span className="text-accent mr-3 mt-1">&#8226;</span>89 Homes Delivered, 59 Under Execution currently.</li>
                        <li className="flex items-start"><span className="text-accent mr-3 mt-1">&#8226;</span>A team of 35+ architects and 70+ civil engineering employees.</li>
                        <li className="flex items-start"><span className="text-accent mr-3 mt-1">&#8226;</span>Our clients like us for transparency and complete budget clarity before construction starts.</li>
                    </ul>
                    <div className="mt-8">
                        <ContactButton variant="accent">
                            Schedule a meeting
                        </ContactButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ServicesSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://picsum.photos/800/600?random=service1" alt="Turnkey Services" className="w-full h-full object-cover rounded-lg shadow-md"/>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">Turnkey Services</h3>
                    <p className="mt-4 text-gray-800">Do you have a plot and want to build a villa or floors by investing your own money? We will design and build it for you for a pre-decided all inclusive price in a fixed time line, and with warranty too. This is our most popular service with 82 homes delivered and 49 under execution.</p>
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
                    <h3 className="text-2xl font-bold text-gray-900">Plot Collaboration</h3>
                    <p className="mt-4 text-gray-800">Do you have a plot and want to build floors but do not want to invest your money? We will design and build it for you and take a floor(s) in return.</p>
                    <div className="mt-6">
                        <ContactButton variant="outline">Know more</ContactButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const StatsBand: React.FC = () => (
    <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Largest Home Builder in Kumaon</h2>
            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">We are the largest home construction company in Kumaon, specializing in custom villas, simplex-duplexes, and independent floors. With 89 homes delivered and 59 under construction, our expertise spans different home styles and plot sizes.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-accent p-8 rounded-lg text-center shadow-lg">
                    <p className="text-7xl lg:text-8xl font-extrabold text-gray-900">89</p>
                    <p className="mt-2 text-xl font-medium text-gray-900">Homes Delivered</p>
                </div>
                <div className="bg-accent p-8 rounded-lg text-center shadow-lg">
                    <p className="text-7xl lg:text-8xl font-extrabold text-gray-900">59</p>
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
        <section className="py-16 md:py-24 bg-accent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">See Our Projects</h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projectTypes.map(project => (
                        <div key={project.name} className="group">
                            <a href="#/projects" className="block">
                                <img src={project.imageUrl} alt={project.name} className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                                <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">{project.name}</h3>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const getReasonIcon = (title: string, className: string) => {
    switch (title) {
        case "Best-in-class architecture": return <ArchitectureIcon className={className} />;
        case "Superior quality construction": return <ConstructionIcon className={className} />;
        case "Zero surprises": return <ZeroSurprisesIcon className={className} />;
        case "LookBooks by DesignerBricks": return <LookBookIcon className={className} />;
        case "DesignerBricks App": return <AppIcon className={className} />;
        case "Single point of accountability": return <AccountabilityIcon className={className} />;
        case "Detailed scope of work": return <ScopeIcon className={className} />;
        case "Premium homes at fair prices": return <PriceIcon className={className} />;
        case "Homes for comfort & longevity": return <ComfortIcon className={className} />;
        case "150+ full-time employees": return <TeamIcon className={className} />;
        case "Handover checklist": return <HandoverChecklistIcon className={className} />;
        case "Genuine warranty": return <WarrantyIcon className={className} />;
        default: return <CheckCircleIcon className={className} />;
    }
};

const ReasonsSection: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const reasonsToShow = showAll ? REASONS_TO_LOVE_US : REASONS_TO_LOVE_US.slice(0, 8);

    return (
        <section className="py-16 md:py-24 bg-primary text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center">12 Reasons Why You Will Love Us</h2>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {reasonsToShow.map((reason) => (
                        <div key={reason.title} className="text-center">
                            <div className="w-20 h-20 mx-auto flex items-center justify-center bg-white/20 rounded-full">
                                {getReasonIcon(reason.title, "w-10 h-10 text-accent")}
                            </div>
                            <h3 className="mt-6 font-semibold text-lg">{reason.title}</h3>
                        </div>
                    ))}
                </div>
                {!showAll && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-accent hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-300"
                        >
                            Explore All Reasons
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

const RemoteBuildSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-12 rounded-lg shadow-xl max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black">Away from Kumaon?</h2>
                 <p className="mt-4 text-xl text-gray-700">30+ families built their homes while living away — you can too!</p>
                <p className="mt-4 max-w-3xl mx-auto text-gray-600">Whether you are an NRI, a frequent traveler, or living outside Kumaon, we ensure that distance does not stop you from building your dream home. With us, 30+ clients have successfully managed their home construction remotely while we handled every detail.</p>
                <h3 className="mt-8 text-xl font-bold text-gray-900">How we make it easy for you:</h3>
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
    <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">What Our Customers Are Saying</h2>
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