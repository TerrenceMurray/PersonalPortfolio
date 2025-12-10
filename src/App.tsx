import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen lg:cursor-none">
      {/* Skip link for keyboard navigation - accessibility */}
      <a
        href="#main-content"
        className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden focus:static focus:w-auto focus:h-auto focus:overflow-visible focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--color-luxury-black)] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-rich-brown)]"
      >
        Skip to main content
      </a>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  );
}