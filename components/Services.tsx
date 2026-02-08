import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-3">Services</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            What I Can Do For You
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of web3 focused marketing services to help you grow your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="bg-white/5 cursor-pointer border border-white/10 rounded-2xl p-8 hover:border-brand/50 hover:bg-brand/5 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,211,13,0.15)] transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                {/* Decoration gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand/10 transition-colors duration-500" />
                
                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-brand/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-brand/20 group-hover:border-brand">
                    <service.icon size={28} className="text-brand" strokeWidth={2} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-brand transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-400 flex-grow leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;