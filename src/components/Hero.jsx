import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#081028]" aria-label="Hero">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#081028]/40 via-[#081028]/20 to-[#081028]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#081028] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#081028] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-r from-white via-white to-[#6E42F4] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          Redefining Intelligence Through Automation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 max-w-2xl text-base text-[#A8A8A8] sm:text-lg"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          We build AI-powered systems that automate, connect, and evolve the way you work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('about')}
            className="rounded-full bg-gradient-to-r from-[#4D02BE] to-[#6E42F4] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#4D02BE]/40 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#6E42F4]"
          >
            Discover Newraal
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="group rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-[#6E42F4] hover:text-white"
          >
            <span className="bg-gradient-to-r from-white to-[#A8A8A8] bg-clip-text text-transparent transition group-hover:from-white group-hover:to-white">
              Get Started
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
