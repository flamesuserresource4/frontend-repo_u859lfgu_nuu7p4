import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#081028] text-white">
      <Hero />
      <About />
      <Services />
      <Process />
      <Contact />
      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#081028] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-[#A8A8A8]">© 2025 Newraal. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-[#A8A8A8]">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Methodology</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
