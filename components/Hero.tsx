import React from 'react';
import { ArrowRight, Twitter, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Available for projects
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] text-white mb-6">
            Powering Web3 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-yellow-200">
              Growth.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            I help elite protocols, ecosystems and startups build unstoppable communities, execute high-impact events, and define their narrative in the decentralized economy.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-brand text-black font-bold text-lg rounded hover:bg-brand-hover transition-colors flex items-center justify-center gap-2 group"
            >
              Start Building
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#events" 
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-lg rounded hover:bg-white/10 transition-colors"
            >
              View Events
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-white">
            <a href="https://x.com/Xploit_VOBE" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors transform hover:scale-110" aria-label="Twitter"><Twitter size={24} /></a>
            <a href="#" className="hover:text-brand transition-colors transform hover:scale-110" aria-label="LinkedIn"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-brand transition-colors transform hover:scale-110" aria-label="Telegram"><Send size={24} /></a>
            <a href="#" className="hover:text-brand transition-colors transform hover:scale-110" aria-label="TikTok">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Hero Image / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative max-w-md md:max-w-full"
        >
            <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand/10">
              {/* Edwin's Image */}
              <img 
                src="https://i.ibb.co/C3mpfdpp/footeridel.jpg" 
                alt="Achebo Edwin" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center gap-4">
                 <div className="h-10 w-10 rounded-full bg-brand flex items-center justify-center text-black font-bold">
                    XP
                 </div>
                 <div>
                    <p className="text-white font-bold text-sm">Achebo Edwin</p>
                    <p className="text-gray-400 text-xs">Community Strategist</p>
                 </div>
              </div>
            </div>

            {/* Decorative Elements behind image */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;