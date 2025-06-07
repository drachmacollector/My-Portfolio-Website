import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mouseX = useMotionValue(Infinity); // For floating dock effect

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

  // Floating Dock Item Component
  const FloatingNavItem = ({ item }: { item: typeof navItems[0] }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const distance = useTransform(mouseX, (val) => {
      const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
    });

    // Slightly wider animations: increased base width from 90 to 110, expanded from 130 to 160
    const widthTransform = useTransform(distance, [-200, 0, 200], [110, 160, 110]);
    const backgroundOpacity = useTransform(distance, [-200, 0, 200], [0.3, 0.8, 0.3]);
    const width = useSpring(widthTransform, { 
      mass: 0.1,
      stiffness: 150,
      damping: 12
    });
    const bgOpacity = useSpring(backgroundOpacity);

    return (
      <motion.button
        ref={ref}
        style={{ width }}
        onClick={() => scrollToSection(item.href)}
        className="relative py-3 text-base font-medium text-gray-300 rounded-xl overflow-hidden"
        whileHover={{ color: "#ffffff" }}
      >
        {/* Animated background - fully transparent at top of page */}
        <motion.div 
          className="absolute inset-0 bg-white/20 rounded-xl"
          style={{ opacity: scrolled ? bgOpacity : 0 }}
        />
        
        {/* Border glow effect - only visible when scrolled */}
        <div className={`absolute inset-0 border rounded-xl transition-all duration-200 ${
          scrolled 
            ? 'border-transparent group-hover:border-white/50' 
            : 'border-transparent'
        }`} />
        
        <span className="relative z-10 block whitespace-nowrap">
          {item.label}
        </span>
      </motion.button>
    );
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

          {/* Enhanced Desktop Navbar with Floating Dock Effect */}
          <div className="hidden md:block">
            <motion.div 
              className={`flex items-center space-x-2 p-3 rounded-3xl transition-all duration-300 ease-in-out ${
                scrolled 
                  ? 'backdrop-blur-2xl bg-black/60 border border-white/10 shadow-2xl shadow-black/50' 
                  : 'bg-transparent border-transparent' // Fully transparent at top
              }`}
              onMouseMove={(e) => mouseX.set(e.clientX)}
              onMouseLeave={() => mouseX.set(Infinity)}
            >
              {navItems.map((item) => (
                <FloatingNavItem key={item.href} item={item} />
              ))}
            </motion.div>
          </div>

          {/* Mobile Menu Button - with transparency control */}
          <button
            className={`md:hidden ml-4 p-2 rounded-lg backdrop-blur-lg border transition-colors ${
              scrolled
                ? 'bg-black/30 border-white/10'
                : 'bg-transparent border-transparent'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Navbar with Animations */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className={`px-2 pt-4 pb-6 space-y-2 backdrop-blur-2xl border rounded-2xl mt-2 mb-4 shadow-2xl shadow-black/50 ${
              scrolled 
                ? 'bg-black/70 border-white/10' 
                : 'bg-black/40 border-white/5' // More transparent at top
            }`}>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-4 text-base font-medium text-gray-300 
                  hover:text-white transition-all duration-300 rounded-xl hover:bg-firebase-orange/10 
                  border border-transparent hover:border-firebase-orange/30"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;