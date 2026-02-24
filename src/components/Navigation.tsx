import { useState, useEffect } from 'react';

export function Navigation()
{
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
    handleScroll();
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-white/40 shadow-sm'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <span className={`text-sm font-medium tracking-widest transition-colors duration-300 ${
              scrolled
                ? 'text-[var(--color-luxury-black)] group-hover:text-[var(--color-rich-brown)]'
                : 'text-[var(--color-luxury-black)] group-hover:text-[var(--color-rich-brown)]'
            }`}>
              TERRENCE
            </span>
            <span className={`hidden sm:inline text-xs tracking-wider transition-colors duration-300 ${
              scrolled ? 'text-[var(--color-rich-brown)]' : 'text-[var(--color-rich-brown)]'
            }`}>
              MURRAY
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
            {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`Navigate to ${item.label} section`}
                  aria-current={isActive ? 'true' : undefined}
                  className="group relative px-4 py-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-medium tabular-nums transition-colors duration-300 ${
                      isActive
                        ? 'text-[var(--color-rich-brown)]'
                        : 'text-gray-300 group-hover:text-[var(--color-rich-brown)]'
                    }`}>
                      {item.number}
                    </span>
                    <span className={`text-sm transition-colors duration-300 ${
                      isActive
                        ? 'text-[var(--color-rich-brown)] font-medium'
                        : 'text-gray-600 group-hover:text-[var(--color-luxury-black)]'
                    }`}>
                      {item.label}
                    </span>
                  </div>

                  {/* Active underline indicator */}
                  <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[var(--color-rich-brown)] scale-x-100'
                      : 'bg-[var(--color-rich-brown)] scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              );
            })}

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="ml-4 px-5 py-2 text-sm bg-[var(--color-luxury-black)] text-white rounded-full hover:bg-[var(--color-rich-brown)] transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-center gap-1.5">
              <span
                className={`block h-0.5 w-full bg-[var(--color-luxury-black)] transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[var(--color-luxury-black)] transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[var(--color-luxury-black)] transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden pt-4 pb-6 border-t border-gray-200/50 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-1" role="menu">
              {navItems.map((item) =>
              {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-3 px-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                      isActive
                        ? 'text-[var(--color-rich-brown)] bg-[var(--color-rich-brown)]/5'
                        : 'text-[var(--color-luxury-black)] hover:text-[var(--color-rich-brown)] hover:bg-[var(--color-rich-brown)]/5'
                    }`}
                  >
                    <span className="text-xs text-gray-400">{item.number}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-3 px-6 py-3 bg-[var(--color-luxury-black)] text-white hover:bg-[var(--color-rich-brown)] transition-all duration-300 rounded-full text-center text-sm"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
