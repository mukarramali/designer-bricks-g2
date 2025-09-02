import React, { useState, useMemo } from 'react';
import type { Project, ProjectType } from '../types';
import { ContactButton } from '../components/ContactButton';

const ALL_PROJECTS: Project[] = [
  { id: 1, title: 'Mountain View Villa', type: 'Villa', imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'The Grand Duplex', type: 'Duplex', imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'Serene Independent Floor', type: 'Independent Floor', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'Skyline Ultra-Luxury', type: 'Ultra-Luxury', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { id: 5, title: 'The Halcyon Villa', type: 'Villa', imageUrl: 'https://picsum.photos/600/400?random=5' },
  { id: 6, title: 'Cityscape Duplex', type: 'Duplex', imageUrl: 'https://picsum.photos/600/400?random=6' },
  { id: 7, title: 'Greenwood Independent Floor', type: 'Independent Floor', imageUrl: 'https://picsum.photos/600/400?random=7' },
  { id: 8, title: 'The Pinnacle Residence', type: 'Ultra-Luxury', imageUrl: 'https://picsum.photos/600/400?random=8' },
  { id: 9, title: 'Riverside Villa', type: 'Villa', imageUrl: 'https://picsum.photos/600/400?random=9' },
];

const FILTER_CHIPS: ProjectType[] = ['Villa', 'Duplex', 'Independent Floor', 'Ultra-Luxury'];

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType | 'All'>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return ALL_PROJECTS;
    }
    return ALL_PROJECTS.filter(project => project.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-full bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Our Projects</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            A glimpse into the quality, craftsmanship, and aesthetic of the homes we build.
            </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 border-b pb-4">
          <button
            onClick={() => setActiveFilter('All')}
            className={`px-1 py-2 text-base font-medium transition-colors duration-300 ${
              activeFilter === 'All' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-primary'
            }`}
          >
            All
          </button>
          {FILTER_CHIPS.map(chip => (
            <button
              key={chip}
              onClick={() => setActiveFilter(chip)}
              className={`px-1 py-2 text-base font-medium transition-colors duration-300 ${
                activeFilter === chip ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-primary'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-gray-200 rounded-lg overflow-hidden group relative aspect-w-1 aspect-h-1">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-sm font-semibold text-white/90">{project.type}</span>
                <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
            </div>
        </div>
    );
};


export default ProjectsPage;