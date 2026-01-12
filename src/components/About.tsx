import { Download, Code2, Zap, Palette, Wrench } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
import { AnimatedSection } from './AnimatedSection';
import { AnimatedCounter } from './AnimatedCounter';

export function About ()
{
  const handleDownloadCV = () =>
  {
    const cvUrl = '/TerrenceMurray-SoftwareEngineer.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-20 xl:pl-32 relative">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* About Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4 lg:mb-5">
                  <div className="h-px w-6 sm:w-8 bg-[var(--color-rich-brown)]"></div>
                  <p className="text-label">
                    About Me
                  </p>
                </div>
                <h2 className="mb-4 sm:mb-5 lg:mb-6">
                  Building with Purpose
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[var(--color-rich-brown)] to-transparent rounded-full"></div>
              </div>
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <p>
                  Fullstack Software Engineer and final-year Computer Science student at the University of the West Indies. I'm experienced in building scalable web applications with React, Next.js, Nest.js, and Go.
                </p>
                <p>
                  Skilled in Dockerized deployments, clean architecture, and UI component design with Storybook and Figma. I focus on creating performant, accessible interfaces backed by robust backend systems.
                </p>
                <p>
                  Adept at collaborating in agile teams to deliver user-focused digital experiences. I'm passionate about writing clean, maintainable code and staying current with modern development practices.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 pt-4 sm:pt-6 lg:pt-8">
                <div className="text-center p-3 sm:p-4 lg:p-5 bg-white/60 backdrop-blur-md border border-white/40 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl text-[var(--color-rich-brown)] mb-1 sm:mb-2">
                    <AnimatedCounter value={2} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Exp.</div>
                </div>
                <div className="text-center p-3 sm:p-4 lg:p-5 bg-white/60 backdrop-blur-md border border-white/40 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl text-[var(--color-rich-brown)] mb-1 sm:mb-2">
                    <AnimatedCounter value={5} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center p-3 sm:p-4 lg:p-5 bg-white/60 backdrop-blur-md border border-white/40 rounded-lg">
                  <div className="text-xl sm:text-2xl lg:text-3xl text-[var(--color-rich-brown)] mb-1 sm:mb-2">
                    <AnimatedCounter value={3} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Clients</div>
                </div>
              </div>

              <button
                onClick={handleDownloadCV}
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 lg:py-4 bg-[var(--color-luxury-black)] hover:bg-[var(--color-rich-brown)] text-white transition-all duration-300 rounded-full hover:scale-105 text-sm sm:text-base"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>

            {/* Skills/Highlights */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Skill cards */}
              <div className="group relative p-5 sm:p-6 lg:p-7 bg-white/60 backdrop-blur-md border border-white/40 hover:border-[var(--color-rich-brown)]/40 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[var(--color-rich-brown)]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-[var(--color-rich-brown)]/10 rounded-lg">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-rich-brown)]" />
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg text-[var(--color-luxury-black)]">Frontend Development</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    React, Next.js, TypeScript, Tailwind CSS, Vite
                  </p>
                </div>
              </div>

              <div className="group relative p-5 sm:p-6 lg:p-7 bg-white/60 backdrop-blur-md border border-white/40 hover:border-[var(--color-rich-brown)]/40 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[var(--color-rich-brown)]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-[var(--color-rich-brown)]/10 rounded-lg">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-rich-brown)]" />
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg text-[var(--color-luxury-black)]">Backend Development</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    NestJS, Go, REST APIs, gRPC, Jest
                  </p>
                </div>
              </div>

              <div className="group relative p-5 sm:p-6 lg:p-7 bg-white/60 backdrop-blur-md border border-white/40 hover:border-[var(--color-rich-brown)]/40 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[var(--color-rich-brown)]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-[var(--color-rich-brown)]/10 rounded-lg">
                      <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-rich-brown)]" />
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg text-[var(--color-luxury-black)]">DevOps & Testing</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Docker, Docker Compose, Jest, Storybook, Postman
                  </p>
                </div>
              </div>

              <div className="group relative p-5 sm:p-6 lg:p-7 bg-white/60 backdrop-blur-md border border-white/40 hover:border-[var(--color-rich-brown)]/40 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[var(--color-rich-brown)]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-[var(--color-rich-brown)]/10 rounded-lg">
                      <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-rich-brown)]" />
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg text-[var(--color-luxury-black)]">Design Tools</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Figma, Adobe XD, Adobe Photoshop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SectionDivider />
    </section>
  );
}