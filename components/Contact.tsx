import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
          Ready to scale?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          From Web3 events to viral storytelling, I partner with brands to build thriving ecosystems, scale presence, and transform engaged audiences into lasting, high-conviction movements.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://t.me/EdXploit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-brand text-black font-bold text-xl rounded hover:bg-brand-hover transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Mail size={22} />
            Get in Touch
          </a>
          <a 
            href="https://t.me/EdXploit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-xl rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            Book a Call
            <ArrowRight size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;