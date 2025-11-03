import React from 'react';
import { Search, Target, Code2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { icon: Search, title: 'Discovery', desc: 'Understand business challenges.' },
  { icon: Target, title: 'Strategy', desc: 'Define intelligent automation goals.' },
  { icon: Code2, title: 'Development', desc: 'Build and integrate AI solutions.' },
  { icon: TrendingUp, title: 'Optimization', desc: 'Monitor, improve, and scale.' },
];

const Process = () => {
  return (
    <section id="process" className="relative bg-[#081028] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm uppercase tracking-widest text-[#6E42F4]">Our Methodology</p>
          <h2 className="mt-3 bg-gradient-to-r from-white to-[#A8A8A8] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            From vision to automation — step by step.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4D02BE]/20 to-[#6E42F4]/20 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-[#A8A8A8]">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-20 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#6E42F4]/60 to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
