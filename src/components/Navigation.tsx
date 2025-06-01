
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      scrolled 
        ? 'transform translate-y-4' 
        : 'transform translate-y-0'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-end md:justify-center transition-all duration-300 ease-in-out ${
          scrolled ? 'h-16' : 'h-20'
        }`}>

          {/* Desktop Navigation - Enhanced Floating Dock */}
          <div className="hidden md:block">
            <div className={`flex items-center space-x-3 p-2 rounded-3xl transition-all duration-300 ease-in-out ${
              scrolled 
                ? 'backdrop-blur-2xl bg-black/60 border border-white/10 shadow-2xl shadow-black/50' 
                : 'bg-transparent'
            }`}>
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-dock-item relative px-6 py-3 text-base font-medium 
                  text-gray-300 hover:text-white transition-all duration-300 rounded-xl group overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-white/10 
                  opacity-0 group-hover:opacity-100 transition-all duration-150 rounded-xl" />
                  
                  {/* Border glow effect */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-white/50 
                  rounded-xl transition-all duration-200" />
                  
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {item.label}
                  </span>
                  
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-4 pb-6 space-y-2 backdrop-blur-2xl bg-black/70 border 
            border-white/10 rounded-2xl mt-2 mb-4 shadow-2xl shadow-black/50">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-4 text-base font-medium text-gray-300 
                  hover:text-white transition-all duration-300 rounded-xl hover:bg-firebase-orange/10 
                  border border-transparent hover:border-firebase-orange/30"
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
