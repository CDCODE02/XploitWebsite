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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-[#0A0A0A] border border-dark-border hover:border-brand/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand/5 hover:-translate-y-1 flex flex-col"
            >
              <div className="h-12 w-12 rounded-lg bg-white/5 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-black transition-colors">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;