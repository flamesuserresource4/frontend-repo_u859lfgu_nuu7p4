import React from 'react';
import { Brain, BarChart3, Plug, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Brain,
    title: 'AI Automation',
    desc: 'Automate repetitive workflows with intelligent decision systems.',
  },
  {
    icon: BarChart3,
    title: 'Data & Insights',
    desc: 'Turn data into action with real-time analytics and predictive dashboards.',
  },
  {
    icon: Plug,
    title: 'Integration Systems',
    desc: 'Connect tools and platforms for unified, seamless operations.',
  },
  {
    icon: Palette,
    title: 'Experience Design',
    desc: 'Create engaging interfaces powered by AI-driven personalization.',
  },
];

const Card = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
  >
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div className="absolute -inset-1 bg-gradient-to-br from-[#4D02BE]/30 via-[#6E42F4]/20 to-transparent blur-2xl" />
    </div>
    <div className="relative z-10">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4D02BE]/20 to-[#6E42F4]/20 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-[#A8A8A8]">{desc}</p>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#6E42F4]/50 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="relative bg-[#081028] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm uppercase tracking-widest text-[#6E42F4]">What We Deliver</p>
          <h2 className="mt-3 bg-gradient-to-r from-white to-[#A8A8A8] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Solutions that redefine how you work and grow.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Card key={i} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
