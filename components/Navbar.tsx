import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      for (const item of NAVIGATION) {
        const sectionId = item.href.replace('#', '');
        const element = document.getElementById(sectionId);
        
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-md border-dark-border py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="group relative block">
          <img 
            src="https://i.ibb.co/CsYdLDLD/explot-logo.png" 
            alt="Edwin Xploit" 
            className="h-10 w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors tracking-wide ${
                activeSection === item.href.replace('#', '')
                  ? 'text-brand'
                  : 'text-gray-400 hover:text-brand'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-bold text-black bg-brand rounded hover:bg-brand-hover transition-transform hover:scale-105"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-brand transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-xl border-b border-dark-border p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium py-2 border-b border-white/5 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-brand'
                  : 'text-gray-300 hover:text-brand'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full text-center py-3 font-bold text-black bg-brand rounded"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;