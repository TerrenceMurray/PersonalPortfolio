import profileImage from '@/assets/portfolio-image.jpg';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero ()
{
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToContact = () =>
  {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:py-20 lg:py-24 relative bg-white overflow-hidden">
      {/* Forest-inspired background with parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          y,
          backgroundImage: 'url(https://images.unsplash.com/photo-1744040982238-01c12ad531ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMGZvcmVzdCUyMG5hdHVyZXxlbnwxfHx8fDE3NjUzMTA1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></motion.div>

      {/* Decorative top element - with glassmorphism */}
      <motion.div
        className="absolute top-28 sm:top-24 lg:top-16 left-1/2 -translate-x-1/2 text-center z-10"
        style={{ opacity }}
      >
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm bg-white/40 rounded-full border border-white/60">
          <div className="h-px w-6 sm:w-8 lg:w-12 bg-gradient-to-r from-transparent to-[var(--color-rich-brown)]"></div>
          <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-600 uppercase">Portfolio 2025</span>
          <div className="h-px w-6 sm:w-8 lg:w-12 bg-gradient-to-l from-transparent to-[var(--color-rich-brown)]"></div>
        </div>
      </motion.div>

      <div className="max-w-6xl w-full mx-auto lg:pl-20 xl:pl-24 grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center relative z-10 pt-12 sm:pt-20 md:pt-0">
        {/* Text Content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center md:text-left">
          <div className="space-y-3 sm:space-y-4 lg:space-y-5">
            <motion.p
              className="text-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Software Developer
            </motion.p>
            <h1 className="leading-tight overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Crafting Digital{' '}
              </motion.span>
              <motion.span
                className="relative inline-block"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Experiences
                <motion.svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: 'easeInOut' }}
                >
                  <motion.path
                    d="M2 8C52 3 102 6 152 4C202 2 252 7 298 5"
                    stroke="var[var(--color-rich-brown)]"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </motion.span>
            </h1>
          </div>
          <motion.p
            className="text-gray-600 max-w-lg leading-relaxed mx-auto md:mx-0 text-sm sm:text-base lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Transforming ideas into elegant, functional solutions through clean code and thoughtful design.
          </motion.p>
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 bg-[var(--color-luxury-black)] hover:bg-[var(--color-rich-brown)] text-white transition-all duration-300 rounded-full hover:scale-105 text-sm sm:text-base"
            >
              Get In Touch
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Profile Image with Enhanced Design */}
        <motion.div
          className="relative order-first md:order-last"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative aspect-square max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto md:mx-0 md:ml-auto">
            {/* Background outline */}
            <div className="absolute inset-0 -translate-x-3 -translate-y-3 sm:-translate-x-4 sm:-translate-y-4 lg:-translate-x-6 lg:-translate-y-6 bg-[var(--color-cream)] border border-gray-200 rounded-2xl"></div>

            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge - availability - with glassmorphism */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 backdrop-blur-md bg-white/80 border border-white/60 rounded-xl px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 shadow-lg">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                <span className="text-xs sm:text-sm">Open to opportunities</span>
              </div>
            </div>

            {/* Floating card - location/info - with glassmorphism */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 backdrop-blur-md bg-white/80 border border-white/60 rounded-xl px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 shadow-lg">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--color-rich-brown)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}