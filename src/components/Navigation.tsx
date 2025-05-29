
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'backdrop-blur-xl bg-black/40 border-b border-neon-red/30 shadow-lg shadow-neon-red/10' 
        : 'bg-transparent'
    }`}>
      {/* Sci-fi top border animation */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-60 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand area with futuristic styling */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 border-2 border-neon-red rounded-lg rotate-45 animate-pulse" />
              <span className="text-xl font-bold text-white glow-text">NAKUL.DEV</span>
            </div>
          </div>

          {/* Desktop Navigation with enhanced sci-fi styling */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-6 py-3 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Futuristic background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-red/10 to-netflix-red/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
                  
                  {/* Top and bottom borders */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Side glow effect */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-neon-red opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-300" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-neon-red opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-300" />
                  
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button with enhanced styling */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-lg bg-black/20 border border-neon-red/30 text-neon-red hover:bg-neon-red/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-red/5 to-netflix-red/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with enhanced styling */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-black/60 backdrop-blur-xl border border-neon-red/20 rounded-2xl mt-2 mb-4 shadow-xl shadow-neon-red/10">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-neon-red/10 border border-transparent hover:border-neon-red/30"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom sci-fi border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-red/20 to-transparent" />
    </nav>
  );
};

export default Navigation;
