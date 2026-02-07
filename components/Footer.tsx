import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="inline-block mb-2">
            <img 
              src="https://i.ibb.co/CsYdLDLD/explot-logo.png" 
              alt="Edwin Xploit" 
              className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </a>
          <p className="text-gray-500 text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-gray-400">
           <a href="#" className="hover:text-brand transition-colors">Twitter</a>
           <a href="#" className="hover:text-brand transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-brand transition-colors">Telegram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;