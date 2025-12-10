import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[var(--color-cream)] relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-[var(--color-rich-brown)] to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm flex items-center gap-2 justify-center md:justify-start">
              &copy; {currentYear} Software Developer Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
            <a
              href="#about"
              className="text-[var(--color-luxury-black)] hover:text-[var(--color-rich-brown)] transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-rich-brown)] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#experience"
              className="text-[var(--color-luxury-black)] hover:text-[var(--color-rich-brown)] transition-colors duration-300 relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-rich-brown)] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#projects"
              className="text-[var(--color-luxury-black)] hover:text-[var(--color-rich-brown)] transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-rich-brown)] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-[var(--color-luxury-black)] hover:text-[var(--color-rich-brown)] transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-rich-brown)] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 lg:mt-8 pt-5 sm:pt-6 lg:pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
            Designed & Built with <Heart className="w-3 h-3 text-[var(--color-rich-brown)] fill-[var(--color-rich-brown)] animate-pulse" /> and attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
}