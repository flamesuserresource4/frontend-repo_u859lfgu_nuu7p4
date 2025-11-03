import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent. We will get back to you shortly.');
  };

  return (
    <section id="contact" className="relative bg-[#081028] py-24">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4D02BE]/10 via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm uppercase tracking-widest text-[#6E42F4]">Let’s Build Something Intelligent</p>
          <h2 className="mt-3 bg-gradient-to-r from-white to-[#A8A8A8] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Partner with Newraal to transform your workflow with AI-driven automation.
          </h2>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:grid-cols-2"
        >
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-white">Name</label>
            <input
              required
              type="text"
              className="rounded-xl border border-white/10 bg-[#0B142F] px-4 py-3 text-white placeholder:text-[#A8A8A8] focus:border-[#6E42F4] focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-white">Email</label>
            <input
              required
              type="email"
              className="rounded-xl border border-white/10 bg-[#0B142F] px-4 py-3 text-white placeholder:text-[#A8A8A8] focus:border-[#6E42F4] focus:outline-none"
              placeholder="name@company.com"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm text-white">Company</label>
            <input
              type="text"
              className="rounded-xl border border-white/10 bg-[#0B142F] px-4 py-3 text-white placeholder:text-[#A8A8A8] focus:border-[#6E42F4] focus:outline-none"
              placeholder="Company name"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm text-white">Message</label>
            <textarea
              required
              rows={5}
              className="rounded-xl border border-white/10 bg-[#0B142F] px-4 py-3 text-white placeholder:text-[#A8A8A8] focus:border-[#6E42F4] focus:outline-none"
              placeholder="Tell us about your goals"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-[#4D02BE] to-[#6E42F4] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#4D02BE]/40 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#6E42F4] md:w-auto"
            >
              Send Message
            </button>
            {status && <p className="mt-3 text-sm text-[#A8A8A8]">{status}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
