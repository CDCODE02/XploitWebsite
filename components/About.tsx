import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-3">About Me</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              More than a marketer. <br/> A strategic partner.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              In the fast-paced world of Web3, noise is cheap. Attention is expensive. Trust is priceless. 
              I specialize in bridging the gap between complex technology and human connection.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My approach combines data-driven growth tactics with authentic community building. 
              Whether I'm organizing a 500-person side event at Token2049 or devising a 
              go-to-market strategy for a DeFi protocol, my goal remains the same: 
              <strong className="text-white"> Create value that lasts.</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Community Growth', 'Event Management', 'Strategic Partnerships', 'Developer Relations'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand" size={20} />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/seed/tech1/400/500" alt="Working" className="rounded-2xl border border-white/5 object-cover h-64 w-full translate-y-8 shadow-2xl" />
               <img src="https://picsum.photos/seed/tech2/400/500" alt="Speaking" className="rounded-2xl border border-white/5 object-cover h-64 w-full shadow-2xl" />
            </div>
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-brand/20 rounded-full opacity-20 animate-spin-slow" style={{ animationDuration: '20s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;