import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#080808] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-3">Career Path</h2>
           <h3 className="font-display text-4xl md:text-5xl font-bold text-white">Proven Track Record</h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-[11px] h-[11px] rounded-full bg-brand border-2 border-dark-bg ring-4 ring-brand/20" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">{job.role}</h4>
                  <div className="text-brand font-medium mb-2">{job.company}</div>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {job.description}
                  </p>
                </div>
                {job.period && (
                  <div className="md:text-right">
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/10">
                      {job.period}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="/resume.pdf" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand transition-colors text-sm font-medium border-b border-transparent hover:border-brand pb-0.5">
                <Briefcase size={16} />
                Download Full Resume
            </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;