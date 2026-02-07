import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-3">Testimonials</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white">Trusted by Founders</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[#0F0F0F] p-8 rounded-2xl border border-white/5 relative hover:border-brand/30 transition-colors">
              <Quote className="text-brand/20 mb-6" size={40} />
              <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-sm">
                    {t.author.charAt(0)}
                 </div>
                 <div>
                    <p className="text-white font-bold">{t.author}</p>
                    <p className="text-brand text-xs">{t.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;