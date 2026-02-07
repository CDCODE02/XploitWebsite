import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left max-w-xl">
          <a href="#home" className="inline-block mb-4">
            <img 
              src="https://i.ibb.co/CsYdLDLD/explot-logo.png" 
              alt="Edwin Xploit" 
              className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </a>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            I help Web3 projects turn complex protocols into thriving ecosystems making user acquisition, community retention, and on-chain growth seamless and scalable.
          </p>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
           <a href="#" className="hover:text-brand transition-colors">Twitter</a>
           <a href="#" className="hover:text-brand transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-brand transition-colors">Telegram</a>
           <a href="#" className="hover:text-brand transition-colors">Instagram</a>
           <a href="#" className="hover:text-brand transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;