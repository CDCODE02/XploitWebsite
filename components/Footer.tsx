import React from 'react';
import { Twitter, Linkedin, Send } from 'lucide-react';

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

        <div className="flex flex-wrap justify-center gap-6 text-white">
           <a href="https://x.com/Xploit_VOBE" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors transform hover:scale-110" aria-label="Twitter"><Twitter size={24} /></a>
           <a href="#" className="hover:text-brand transition-colors transform hover:scale-110" aria-label="LinkedIn"><Linkedin size={24} /></a>
           <a href="#" className="hover:text-brand transition-colors transform hover:scale-110" aria-label="Telegram"><Send size={24} /></a>
           <a href="#" className="hover:text-brand transition-colors transform hover:scale-110" aria-label="TikTok">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;