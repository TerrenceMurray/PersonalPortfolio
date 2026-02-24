import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedSection } from './AnimatedSection';
import portfolioMockup from '../assets/portfolio-mockup.png';
import courseSchedulerMockup from '../assets/course-scheduler-mockup.png';
import helpDeskMockup from '../assets/macbook-pro-template-being-used-next-to-a-water-bottle-a19519.png';

const projects = [
  {
    id: 1,
    title: 'Help Desk Rostering',
    type: 'Fullstack',
    techSummary: 'React + TypeScript + Go',
    status: 'Active' as const,
    description: 'A fullstack web application to aid staff at The University of the West Indies, St. Augustine with scheduling students for the help desk program and managing payments.',
    tags: ['React', 'TypeScript', 'Go', 'Python', 'Docker', 'Microservice'],
    githubLink: 'https://github.com/HDR3604/HelpDeskRostering',
    liveLink: 'https://helpdesk.terrencemurray.work',
    featured: true,
    image: helpDeskMockup
  },
  {
    id: 2,
    title: 'Course Scheduler',
    type: 'Fullstack',
    techSummary: 'React + Go + PostgreSQL',
    status: 'Completed' as const,
    description: 'An automated course scheduling system that generates optimal timetables by matching courses to available rooms based on capacity, room type requirements, and time constraints.',
    tags: ['React', 'Go', 'PostgreSQL', 'TailwindCSS', 'Docker'],
    githubLink: 'https://github.com/TerrenceMurray/CourseScheduler',
    liveLink: 'https://scheduler.terrencemurray.work',
    featured: true,
    image: courseSchedulerMockup
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    type: 'Frontend',
    techSummary: 'React + TypeScript + Vite',
    status: 'Active' as const,
    description: 'A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, glass-morphism design, and optimized performance.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'],
    githubLink: 'https://github.com/TerrenceMurray/PersonalPortfolio',
    liveLink: 'https://terrencemurray.work',
    featured: false,
    image: portfolioMockup
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-20 xl:pl-32 relative">
        <AnimatedSection>
          <div className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
            <div className="flex items-center gap-3 mb-3 sm:mb-4 lg:mb-5">
              <div className="h-px w-6 sm:w-8 bg-[var(--color-rich-brown)]"></div>
              <p className="text-label">
                Projects
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
              <div>
                <h2 className="mb-4 sm:mb-5 lg:mb-6">Featured Work</h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[var(--color-rich-brown)] to-transparent rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Showing {projects.length} projects
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {projects.map((project) => (
              <article
                key={project.id}
                aria-label={`Project: ${project.title}`}
                className="group relative bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl overflow-hidden hover:border-[var(--color-rich-brown)]/40 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-transparent to-[var(--color-rich-brown)]/5 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                {/* Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-luxury-black)]/90 backdrop-blur-sm text-white rounded-full shadow-lg">
                      <Sparkles className="w-3 h-3 fill-white" />
                      <span className="text-[10px] uppercase tracking-wider">Featured</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/80 backdrop-blur-sm text-[var(--color-rich-brown)] rounded-full shadow-sm">
                    <span className="text-[10px] font-medium uppercase tracking-wider">{project.type}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-rich-brown)]/20 to-transparent" />

                {/* Content */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col">
                  <h3 className="text-lg font-semibold text-[var(--color-luxury-black)] mb-2 group-hover:text-[var(--color-rich-brown)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-gray-500">{project.techSummary}</p>
                    <span className={`inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider ${project.status === 'Active' ? 'text-[var(--color-forest-green)]' : 'text-gray-400'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Active' ? 'bg-[var(--color-forest-green)]' : 'bg-gray-400'}`} />
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-xs font-medium bg-[var(--color-rich-brown)]/10 text-[var(--color-rich-brown)] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-[var(--color-luxury-black)] text-white rounded-full hover:bg-[var(--color-rich-brown)] transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-[var(--color-rich-brown)] text-[var(--color-rich-brown)] rounded-full hover:bg-[var(--color-rich-brown)] hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
      
      <SectionDivider />
    </section>
  );
}