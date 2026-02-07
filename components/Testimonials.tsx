import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand mb-6">
            Trusted by Ambitious Founders
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Trusted by founders who value market dominance, community depth, and long-term token health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-3xl bg-brand/5 border border-dark-border hover:border-transparent hover:shadow-2xl hover:shadow-brand/20 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-serif text-brand/50">"</span>
                <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-8">
                  {t.quote}
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                 <img 
                   src={t.image} 
                   alt={t.author} 
                   className="w-12 h-12 rounded-full bg-gray-800 object-cover border border-white/10"
                 />
                 <div>
                    <p className="text-white font-bold group-hover:text-brand transition-colors">{t.author}</p>
                    <p className="text-gray-500 text-xs group-hover:text-brand/80 transition-colors">{t.role}</p>
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