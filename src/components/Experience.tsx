import { Calendar, ChevronRight, Briefcase } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
import { AnimatedSection } from './AnimatedSection';

const experiences = [
  {
    id: '1',
    title: 'Fullstack Software Developer',
    company: 'BrainFog Solutions LLC',
    period: 'Mar 2025 - Present',
    isCurrent: true,
    description: 'Designing and developing scalable full-stack applications with Go for backend APIs and Next.js/React for modern, responsive UIs',
    achievements: [
      'Containerized frontend and backend services using Docker and Docker Compose',
      'Implemented unit and integration tests achieving higher code coverage',
      'Collaborated using Scrum with sprint planning and iterative feature delivery',
      'Architected modular, reusable components for improved scalability',
    ],
    tags: ['Go', 'Next.js', 'React', 'Docker'],
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Fursoft',
    period: 'Aug 2023 - Dec 2024',
    isCurrent: false,
    description: 'Designed and built responsive web and mobile interfaces for a pet grooming platform using Next.js and modern React frameworks',
    achievements: [
      'Developed and maintained a comprehensive Figma design system',
      'Served as primary UI developer translating designs into pixel-perfect interfaces',
      'Enhanced UI testing and documentation with Storybook',
      'Ensured design consistency using component-based architecture and Tailwind CSS',
    ],
    tags: ['Next.js', 'React', 'Figma', 'Storybook'],
  },
  {
    id: '3',
    title: 'Software Developer Intern',
    company: 'Coded Arts',
    period: 'Jul 2022 - Jan 2023',
    isCurrent: false,
    description: 'Internship focused on game development, 3D tooling, and interactive web experiences in Port of Spain, Trinidad and Tobago',
    achievements: [
      'Co-developed an interactive game using Unity and C#',
      'Built a custom Autodesk Maya tool to streamline 3D artist workflows',
      'Developed a Three.js-based 3D prototype for interactive web models',
    ],
    tags: ['Unity', 'C#', 'Three.js', 'Maya'],
  },
  {
    id: '4',
    title: 'Web Developer (Freelance)',
    company: 'Tobago Performing Arts Company',
    period: '2022',
    isCurrent: false,
    description: 'Built a mobile-friendly booking website for the "Bitter Cassava" theatrical production',
    achievements: [
      'Increased online ticket sales through improved site performance',
      'Enhanced customer satisfaction with better accessibility',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-0 w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-b from-[var(--color-cream)]/30 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-20 xl:pl-32 relative">
        <div className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
          <div className="flex items-center gap-3 mb-3 sm:mb-4 lg:mb-5">
            <div className="h-px w-6 sm:w-8 bg-[var(--color-rich-brown)]"></div>
            <p className="text-label">
              Experience
            </p>
          </div>
          <h2 className="mb-4 sm:mb-5 lg:mb-6">Professional Journey</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[var(--color-rich-brown)] to-transparent rounded-full"></div>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.id} delay={index * 0.15}>
              <div className="group relative">
                {/* Left accent rail */}
                <div className={`hidden sm:block absolute left-0 top-6 bottom-6 rounded-full transition-colors duration-300 ${
                  exp.isCurrent
                    ? 'w-1 bg-gradient-to-b from-[var(--color-rich-brown)] via-[var(--color-accent-gold)] to-[var(--color-rich-brown)]/20'
                    : 'w-0.5 bg-gray-200 group-hover:bg-[var(--color-rich-brown)]/40'
                }`} />

                {/* Card */}
                <div className={`sm:ml-8 relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-[var(--color-cream)]/60 backdrop-blur-md border border-[var(--color-rich-brown)]/20 p-6 sm:p-7 lg:p-8 shadow-sm hover:shadow-xl hover:border-[var(--color-rich-brown)]/40'
                    : 'bg-white/60 backdrop-blur-md border border-white/40 p-5 sm:p-6 lg:p-7 hover:border-[var(--color-rich-brown)]/40 hover:shadow-xl'
                }`}>
                  {/* Corner accent */}
                  {exp.isCurrent ? (
                    <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[var(--color-accent-gold)]/8 to-transparent rounded-tr-2xl pointer-events-none" />
                  ) : (
                    <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[var(--color-rich-brown)]/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  )}

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="space-y-1.5">
                      <h3 className="group-hover:text-[var(--color-rich-brown)] transition-colors duration-300">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-[var(--color-rich-brown)]">
                        <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      {exp.isCurrent && (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--color-forest-green)]/10 border border-[var(--color-forest-green)]/20 rounded-full">
                          <span className="w-1.5 h-1.5 bg-[var(--color-forest-green)] rounded-full animate-pulse" />
                          <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-forest-green)]">Current</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-[var(--color-rich-brown)]/10 via-[var(--color-rich-brown)]/5 to-transparent mb-4 sm:mb-5" />

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-5">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-sm group/item">
                        <ChevronRight className="w-4 h-4 text-[var(--color-rich-brown)]/60 mt-0.5 flex-shrink-0 group-hover/item:text-[var(--color-rich-brown)] group-hover/item:translate-x-0.5 transition-all duration-200" />
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium bg-[var(--color-rich-brown)]/10 text-[var(--color-rich-brown)] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
