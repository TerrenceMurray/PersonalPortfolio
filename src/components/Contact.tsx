import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function Contact ()
{
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white relative overflow-hidden">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8 relative">
          <div>
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4 lg:mb-5">
              <div className="h-px w-6 sm:w-8 bg-[var(--color-rich-brown)]"></div>
              <p className="text-label">
                Get In Touch
              </p>
            </div>
            <h2 className="mb-4 sm:mb-5 lg:mb-6">
              Let's Work Together
            </h2>
            <div className="flex justify-center mb-5 sm:mb-6">
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[var(--color-rich-brown)] to-transparent rounded-full"></div>
            </div>
            <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-700">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hello, feel free to reach out.
            </p>
          </div>

          {/* Contact content without card */}
          <div className="space-y-5 sm:space-y-6 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="mailto:terrence.cd.murray@outlook.com"
                className="group flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 lg:py-4 bg-[var(--color-luxury-black)] hover:bg-[var(--color-rich-brown)] text-white transition-all duration-300 rounded-full hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">terrence.cd.murray@outlook.com</span>
                <span className="sm:hidden">Email Me</span>
              </a>

              <a
                href="tel:+18687216166"
                className="group flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 lg:py-4 border-2 border-[var(--color-luxury-black)] hover:bg-[var(--color-luxury-black)] hover:text-white text-[var(--color-luxury-black)] transition-all duration-300 rounded-full text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">+1 868 721 6166</span>
                <span className="sm:hidden">Call Me</span>
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-3 sm:py-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs sm:text-sm text-gray-400">or connect via</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
              <a
                href="https://github.com/TerrenceMurray"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 border border-white/40 bg-white/60 backdrop-blur-md hover:border-[var(--color-rich-brown)]/40 hover:bg-[var(--color-rich-brown)]/5 transition-all duration-300 rounded-xl hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[var(--color-luxury-black)] group-hover:text-[var(--color-rich-brown)] transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--color-luxury-black)] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/terrence-murray-1132b5250/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 border border-white/40 bg-white/60 backdrop-blur-md hover:border-[var(--color-rich-brown)]/40 hover:bg-[var(--color-rich-brown)]/5 transition-all duration-300 rounded-xl hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[var(--color-luxury-black)] group-hover:text-[var(--color-rich-brown)] transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--color-luxury-black)] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Additional info */}
          <div className="pt-6 sm:pt-8">
            <p className="text-xs sm:text-sm text-gray-500">
              Currently based in <span className="text-[var(--color-rich-brown)]">Trinidad and Tobago</span> • Available for remote work worldwide
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}