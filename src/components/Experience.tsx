import { Calendar, TrendingUp } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
import { AnimatedSection } from './AnimatedSection';

const experiences = [
  {
    id: '1',
    title: 'Senior Software Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise-scale applications',
    achievements: [
      'Architected and implemented microservices infrastructure',
      'Mentored team of 5 junior developers',
      'Reduced application load time by 60%',
    ],
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects',
    achievements: [
      'Built 15+ responsive web applications',
      'Implemented automated testing pipelines',
      'Collaborated with design team on UX improvements',
    ],
  },
  {
    id: '3',
    title: 'Junior Developer',
    company: 'StartUp Labs',
    period: '2018 - 2020',
    description: 'Contributed to various full-stack projects',
    achievements: [
      'Developed RESTful APIs using Node.js',
      'Created reusable component library',
      'Participated in code reviews and agile ceremonies',
    ],
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

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.id} delay={index * 0.2}>
              <div className="group relative pl-5 sm:pl-6 lg:pl-8 border-l-2 border-gray-300 hover:border-[var(--color-rich-brown)] transition-colors duration-300">
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-[-9px] top-0">
                  <div className="relative">
                    <div className="w-4 h-4 bg-[var(--color-rich-brown)] border-4 border-white group-hover:scale-125 transition-transform duration-300 rounded-full shadow-md"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-[var(--color-rich-brown)] rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                  </div>
                </div>

                <div className="relative bg-white/60 backdrop-blur-md border border-white/40 group-hover:border-[var(--color-rich-brown)]/40 group-hover:shadow-xl transition-all duration-300 rounded-xl p-4 sm:p-5 lg:p-6 -ml-2">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline gap-1 sm:gap-2 lg:gap-3 mb-2">
                        <h3 className="group-hover:text-[var(--color-rich-brown)] transition-colors">{exp.title}</h3>
                        <span className="text-[var(--color-rich-brown)] text-sm sm:text-base lg:text-lg inline-flex items-center gap-1">
                          <span className="hidden sm:inline">@</span>{exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-sm sm:text-base">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm group/item">
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--color-rich-brown)] mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[var(--color-rich-brown)]/5 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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