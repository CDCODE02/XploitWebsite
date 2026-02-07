import React from 'react';
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
              I'm Edwin Xploit, a dynamic community builder
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I have a strong track record in driving engagement and growth. A skilled video content creator known for crafting compelling, platform-native narratives.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm an experienced Web3 marketing executive and event expert, adept at organizing,
              moderating, and amplifying blockchain-focused gatherings that connect communities and drive ecosystem value.
              Passionate about brand representation, with a natural fit for ambassadorial and partnership-facing roles.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I build high-growth ecosystems by bridging digital content and human connection, scripting viral videos, architecting Web3 events, and scaling communities into engaged, loyal networks.
              <strong className="text-white"> Create value that lasts.</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Community Builder',
                'Marketer',
                'Video Content Creator',
                'Web3 Event Expert',
                'Business development',
                'Web3 Entertainer'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-brand text-xl">✦</span>
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
               <img src="https://i.ibb.co/Q3X4jRQ2/heroimg.jpg" alt="Working" className="rounded-2xl border border-white/5 object-cover h-64 w-full translate-y-8 shadow-2xl" />
               <img src="https://i.ibb.co/hxpgGv6d/about.jpg" alt="Speaking" className="rounded-2xl border border-white/5 object-cover h-64 w-full shadow-2xl" />
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