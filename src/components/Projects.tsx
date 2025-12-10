import { ExternalLink, Sparkles } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedSection } from './AnimatedSection';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management, secure payment processing, and personalized recommendations.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux'],
    link: '/projects/ecommerce-platform',
    featured: true,
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjUyMTQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization dashboard for business intelligence with customizable widgets and advanced filtering capabilities.',
    tags: ['TypeScript', 'Next.js', 'D3.js', 'TailwindCSS'],
    link: '/projects/analytics-dashboard',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NTIxMjYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application with workout plans, progress tracking, and social features for community engagement.',
    tags: ['React Native', 'Firebase', 'Redux', 'REST API'],
    link: '/projects/fitness-app',
    featured: false,
    image: 'https://images.unsplash.com/photo-1758599881121-c31bde092252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMG1vYmlsZXxlbnwxfHx8fDE3NjUzMTMzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'Machine learning powered content creation tool that generates high-quality marketing copy and creative content for businesses.',
    tags: ['Python', 'OpenAI', 'Flask', 'React', 'Docker'],
    link: '/projects/ai-content-generator',
    featured: false,
    image: 'https://images.unsplash.com/photo-1763568258474-7c2330c1a893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwd3JpdGluZ3xlbnwxfHx8fDE3NjUyMTUxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    title: 'Data Visualization Suite',
    description: 'Comprehensive data visualization library with interactive charts, graphs, and reporting tools for enterprise analytics.',
    tags: ['TypeScript', 'Chart.js', 'WebGL', 'Webpack'],
    link: '/projects/data-viz-suite',
    featured: false,
    image: 'https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NjUxOTA1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Projects() {
  const handleProjectClick = (link: string) => {
    // Navigate to external project page or internal route
    // For external links, use window.open; for internal routes, integrate with your router
    window.open(link, '_blank');
  };

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

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 auto-rows-[340px] sm:auto-rows-[360px] lg:auto-rows-[380px]">
            {/* Project 1 - Large featured (spans 2 columns, 2 rows) */}
            <div
              onClick={() => handleProjectClick(projects[0].link)}
              className="group cursor-pointer relative md:col-span-2 md:row-span-2 border border-white/40 hover:border-[var(--color-rich-brown)]/40 hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-md rounded-xl overflow-hidden"
            >
              <div className="relative h-full flex flex-col">
                {/* Image */}
                <div className="relative h-3/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/40 z-10"></div>
                  <ImageWithFallback 
                    src={projects[0].image} 
                    alt={projects[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {projects[0].featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-luxury-black)]/90 backdrop-blur-sm text-white rounded-full z-20 shadow-lg">
                      <Sparkles className="w-3 h-3 fill-white" />
                      <span className="text-[10px] uppercase tracking-wider">New</span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 bg-white/40 backdrop-blur-sm">
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl group-hover:text-[var(--color-rich-brown)] transition-colors duration-300 mb-2 break-words">
                          {projects[0].title}
                        </h3>
                        <div className="h-0.5 w-0 group-hover:w-16 bg-[var(--color-rich-brown)] transition-all duration-500 rounded-full"></div>
                      </div>
                      <div className="p-2.5 bg-white/60 backdrop-blur-sm rounded-lg group-hover:bg-[var(--color-rich-brown)]/10 transition-all duration-300 flex-shrink-0">
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-rich-brown)] group-hover:rotate-45 transition-all duration-300" />
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                      {projects[0].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {projects[0].tags.slice(0, 5).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 sm:px-3 py-1 text-xs bg-white/70 backdrop-blur-sm text-[var(--color-rich-brown)] border border-[var(--color-rich-brown)]/30 rounded-full hover:bg-[var(--color-rich-brown)]/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-rich-brown)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Project 2 - Medium featured (spans 1 column, 2 rows) */}
            <div
              onClick={() => handleProjectClick(projects[1].link)}
              className="group cursor-pointer relative md:row-span-2 border border-white/40 hover:border-[var(--color-rich-brown)]/40 hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-md rounded-xl overflow-hidden"
            >
              <div className="relative h-full flex flex-col">
                <div className="relative h-2/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 z-10"></div>
                  <ImageWithFallback 
                    src={projects[1].image} 
                    alt={projects[1].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {projects[1].featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-luxury-black)]/90 backdrop-blur-sm text-white rounded-full z-20 shadow-lg">
                      <Sparkles className="w-3 h-3 fill-white" />
                      <span className="text-[10px] uppercase tracking-wider">New</span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 p-5 sm:p-6 bg-white/40 backdrop-blur-sm">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="group-hover:text-[var(--color-rich-brown)] transition-colors duration-300 mb-2 break-words">
                          {projects[1].title}
                        </h3>
                        <div className="h-0.5 w-0 group-hover:w-12 bg-[var(--color-rich-brown)] transition-all duration-500 rounded-full"></div>
                      </div>
                      <div className="p-2 bg-white/60 backdrop-blur-sm rounded-lg group-hover:bg-[var(--color-rich-brown)]/10 transition-all duration-300 flex-shrink-0">
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-rich-brown)] group-hover:rotate-45 transition-all duration-300" />
                      </div>
                    </div>
                    
                    <p className="text-sm leading-relaxed text-gray-700 line-clamp-3">
                      {projects[1].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {projects[1].tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 text-xs bg-white/70 backdrop-blur-sm text-[var(--color-rich-brown)] border border-[var(--color-rich-brown)]/30 rounded-full hover:bg-[var(--color-rich-brown)]/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--color-rich-brown)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Projects 3, 4, 5 - Small cards */}
            {projects.slice(2).map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.link)}
                className="group cursor-pointer relative border border-white/40 hover:border-[var(--color-rich-brown)]/40 hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-md rounded-xl overflow-hidden h-[380px]"
              >
                <div className="relative h-full flex flex-col">
                  <div className="relative flex-shrink-0 h-[160px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 z-10"></div>
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex-1 p-5 bg-white/40 backdrop-blur-sm">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base group-hover:text-[var(--color-rich-brown)] transition-colors duration-300 mb-1.5 break-words">
                            {project.title}
                          </h3>
                          <div className="h-0.5 w-0 group-hover:w-10 bg-[var(--color-rich-brown)] transition-all duration-500 rounded-full"></div>
                        </div>
                        <div className="p-2 bg-white/60 backdrop-blur-sm rounded-lg group-hover:bg-[var(--color-rich-brown)]/10 transition-all duration-300 flex-shrink-0">
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-rich-brown)] group-hover:rotate-45 transition-all duration-300" />
                        </div>
                      </div>
                      
                      <p className="text-xs leading-relaxed text-gray-700 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2.5 py-1 text-[10px] bg-white/70 backdrop-blur-sm text-[var(--color-rich-brown)] border border-[var(--color-rich-brown)]/30 rounded-full hover:bg-[var(--color-rich-brown)]/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--color-rich-brown)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      
      <SectionDivider />
    </section>
  );
}