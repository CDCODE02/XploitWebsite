import React from 'react';
import { EVENTS_GALLERY } from '../constants';
import { motion } from 'framer-motion';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-3">On The Ground</h2>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white">Events & Speaking</h3>
            </div>
            <p className="text-gray-400 max-w-md text-right md:text-right">
                Highlights from global conferences, hackathons, and community meetups.
            </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {EVENTS_GALLERY.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group break-inside-avoid rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-300 z-10" />
              <img 
                src={event.image} 
                alt={event.title}
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white font-bold text-lg">{event.title}</p>
                <p className="text-brand text-xs uppercase tracking-wider mt-1">View Details</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;