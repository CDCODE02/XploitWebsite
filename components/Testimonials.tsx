import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand mb-4">
            Trusted by Ambitious Founders
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Trusted by founders who value market dominance, community depth, and long-term token health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center xl:justify-center"
            >
              <div className="p-8 h-full rounded-3xl bg-brand/[0.04] border border-gray-800 hover:border-transparent shadow-brand hover:scale-[1.04] flex flex-col justify-between group cursor-pointer duration-300 hover:shadow-md w-full">
                <div>
                  <span className="text-4xl font-serif text-gray-200">"</span>
                  <p className="text-gray-200 mt-4 text-sm leading-relaxed">
                    {t.quote}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center gap-3">
                   <img 
                     src={t.image} 
                     alt={t.author} 
                     className="w-10 h-10 rounded-full bg-gray-100 object-cover"
                   />
                   <div>
                      <p className="font-bold text-gray-500 group-hover:text-brand transition-colors text-sm">{t.author}</p>
                      <p className="text-gray-500 group-hover:text-brand transition-colors text-xs">{t.role}</p>
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