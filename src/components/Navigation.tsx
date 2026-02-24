import { useState, useEffect } from 'react';

export function Navigation ()
{
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      // Detect active section
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      // Check if we're at the top (hero section)
      if (window.scrollY < 100)
      {
        setActiveSection('hero');
        return;
      }

      for (const section of sections)
      {
        const element = document.getElementById(section);
        if (element)
        {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight)
          {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) =>
  {
    if (sectionId === 'hero')
    {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else
    {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About', number: '01' },
    { id: 'experience', label: 'Experience', number: '02' },
    { id: 'projects', label: 'Projects', number: '03' },
    { id: 'contact', label: 'Contact', number: '04' },
  ];

  // Get the next section index
  const getNextSectionId = () =>
  {
    const currentIndex = navItems.findIndex(item => item.id === activeSection);
    if (currentIndex === -1 || currentIndex === navItems.length - 1) return null;
    return navItems[currentIndex + 1].id;
  };

  const nextSectionId = getNextSectionId();

  return (
    <>
      {/* Desktop Vertical Navigation - Left Side */}
      <div className="hidden lg:block fixed left-0 right-0 top-[35%] -translate-y-1/2 z-50 pointer-events-none">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 xl:px-6 relative">
          <nav className="absolute left-0 lg:left-2 xl:-left-32 pointer-events-auto" aria-label="Main navigation">
            <div className="flex flex-col gap-10">
              {navItems.map((item) =>
              {
                const isActive = activeSection === item.id;
                const isNext = nextSectionId === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    aria-label={`Navigate to ${item.label} section`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group flex items-center gap-4 transition-all duration-300 ${isActive ? 'translate-x-0' : 'hover:translate-x-2'
                      }`}
                  >
                    {/* Number and dot indicator */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs transition-all duration-300 ${isActive
                            ? 'text-[var(--color-rich-brown)] opacity-100'
                            : isNext
                              ? 'text-[var(--color-rich-brown)] opacity-40'
                              : 'text-gray-400 opacity-60 group-hover:opacity-100 group-hover:text-[var(--color-rich-brown)]'
                          }`}
                      >
                        {item.number}
                      </span>
                      <div className="relative">
                        <div
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive
                              ? 'bg-[var(--color-rich-brown)] scale-150'
                              : isNext
                                ? 'bg-[var(--color-rich-brown)] scale-110 opacity-50'
                                : 'bg-gray-400 group-hover:bg-[var(--color-rich-brown)] group-hover:scale-125'
                            }`}
                        />
                        {isActive && (
                          <div className="absolute inset-0 w-2 h-2 bg-[var(--color-rich-brown)] rounded-full animate-ping opacity-75"></div>
                        )}
                        {isNext && (
                          <div className="absolute inset-0 w-2 h-2 bg-[var(--color-rich-brown)] rounded-full animate-pulse opacity-30"></div>
                        )}
                      </div>
                    </div>

                    {/* Label that appears on hover or when active */}
                    <span
                      className={`text-sm whitespace-nowrap transition-all duration-300 ${isActive
                          ? 'opacity-100 translate-x-0 text-[var(--color-rich-brown)]'
                          : isNext
                            ? 'opacity-40 translate-x-0 text-[var(--color-rich-brown)]'
                            : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gray-600'
                        }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation - Top */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200" aria-label="Mobile navigation">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[var(--color-luxury-black)] hover:text-[var(--color-rich-brown)] transition-colors tracking-wider text-sm"
              aria-label="Scroll to top"
            >
              PORTFOLIO
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center group"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-full bg-[var(--color-luxury-black)] transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                />
                <span
                  className={`block h-0.5 w-full bg-[var(--color-luxury-black)] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`}
                />
                <span
                  className={`block h-0.5 w-full bg-[var(--color-luxury-black)] transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                />
              </div>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div id="mobile-menu" className="pt-6 pb-4 border-t border-gray-200 mt-5 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col gap-4" role="menu">
                <button
                  onClick={() => scrollToSection('about')}
                  className={`text-[var(--color-luxury-black)] hover:text-[var(--color-rich-brown)] transition-colors text-left py-2 flex items-center gap-3 ${activeSection === 'about' ? 'text-[var(--color-rich-brown)]' : ''
                    }`}
                >
                  <span className="text-xs text-gray-400">01</span>
                  <span>About</span>
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className={`text-[var(--color-luxury-black)] hover:text-[var(--color-rich-brown)] transition-colors text-left py-2 flex items-center gap-3 ${activeSection === 'experience' ? 'text-[var(--color-rich-brown)]' : ''
                    }`}
                >
                  <span className="text-xs text-gray-400">02</span>
                  <span>Experience</span>
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`text-[var(--color-luxury-black)] hover:text-[var(--color-rich-brown)] transition-colors text-left py-2 flex items-center gap-3 ${activeSection === 'projects' ? 'text-[var(--color-rich-brown)]' : ''
                    }`}
                >
                  <span className="text-xs text-gray-400">03</span>
                  <span>Projects</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border-2 border-[var(--color-luxury-black)] hover:bg-[var(--color-luxury-black)] hover:text-white transition-all duration-300 rounded-full text-center mt-2"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}