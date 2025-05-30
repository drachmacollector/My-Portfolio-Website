
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
        ? 'backdrop-blur-xl bg-black/40 shadow-lg' 
        : 'bg-transparent'
    }`}>
     
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-end md:justify-center h-20">

          {/* Desktop Navigation with enhanced sci-fi styling */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-6 py-3 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >

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
      
    </nav>
  );
};

export default Navigation;
