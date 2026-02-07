import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-3">Testimonials</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Builders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex"
            >
              <div className="flex flex-col h-full w-full p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-brand/50 transition-colors duration-300 relative group">
                {/* Large Quote Icon */}
                <div className="mb-6">
                    <Quote className="w-12 h-12 text-transparent stroke-brand stroke-[1.5] opacity-80" />
                </div>

                {/* Quote Text */}
                <div className="flex-grow">
                  <p className="text-gray-200 text-lg italic leading-relaxed font-light">
                    "{t.quote}"
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                   <div className="relative shrink-0">
                     <img 
                       src={t.image} 
                       alt={t.author} 
                       className="w-12 h-12 rounded-full bg-gray-800 object-cover border border-white/10 group-hover:border-brand/50 transition-colors"
                     />
                   </div>
                   <div>
                      <h4 className="font-bold text-white text-base leading-tight">
                        {t.author}
                      </h4>
                      <p className="text-brand text-sm font-medium mt-1">
                        {t.role}
                      </p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;