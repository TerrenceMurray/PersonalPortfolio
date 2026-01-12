import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedSection } from './AnimatedSection';
import portfolioMockup from '../assets/portfolio-mockup.png';
import courseSchedulerMockup from '../assets/course-scheduler-mockup.png';

const projects = [
  {
    id: 1,
    title: 'Course Scheduler',
    description: 'An automated course scheduling system that generates optimal timetables by matching courses to available rooms based on capacity, room type requirements, and time constraints.',
    tags: ['React', 'Go', 'PostgreSQL', 'TailwindCSS', 'Docker'],
    githubLink: 'https://github.com/TerrenceMurray/CourseScheduler',
    liveLink: 'https://scheduler.terrencemurray.work',
    featured: true,
    image: courseSchedulerMockup
  },
  {
    id: 2,
    title: 'Personal Portfolio',
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                aria-label={`Project: ${project.title}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-luxury-black)]/90 backdrop-blur-sm text-white rounded-full shadow-lg">
                      <Sparkles className="w-3 h-3 fill-white" />
                      <span className="text-[10px] uppercase tracking-wider">Featured</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col">
                  <h3 className="text-lg font-semibold text-[var(--color-luxury-black)] mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
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
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-[var(--color-luxury-black)] text-white rounded-full hover:bg-[var(--color-rich-brown)] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-[var(--color-rich-brown)] text-[var(--color-rich-brown)] rounded-full hover:bg-[var(--color-rich-brown)] hover:text-white transition-colors"
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