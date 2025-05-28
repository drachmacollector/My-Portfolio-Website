
import React, { useState, useEffect } from 'react';

interface RotatingTextProps {
  words: string[];
  className?: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({ words, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <span
        className={`block transition-transform duration-500 ease-in-out ${
          isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{
          textShadow: '0 0 20px rgba(229, 9, 20, 0.5), 0 0 40px rgba(229, 9, 20, 0.3)'
        }}
      >
        {words[currentIndex]}
      </span>
      <span
        className={`absolute top-0 left-0 block transition-transform duration-500 ease-in-out ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{
          textShadow: '0 0 20px rgba(229, 9, 20, 0.5), 0 0 40px rgba(229, 9, 20, 0.3)'
        }}
      >
        {words[(currentIndex + 1) % words.length]}
      </span>
    </span>
  );
};

export default RotatingText;
