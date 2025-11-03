import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative bg-[#081028] py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <p className="text-sm uppercase tracking-widest text-[#6E42F4]">About</p>
          <h2 className="mt-3 bg-gradient-to-r from-white to-[#A8A8A8] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-6 text-[#A8A8A8]">
            At Newraal, we merge human creativity with artificial intelligence to build systems that
            think, learn, and evolve — empowering businesses to work smarter, faster, and more efficiently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0.5 md:w-1/2"
        >
          <div className="rounded-2xl bg-[#0B142F]/60 p-6">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2069&auto=format&fit=crop"
                alt="Futuristic technology"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
