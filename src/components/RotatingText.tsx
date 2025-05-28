
import React, { useState, useEffect } from 'react';

interface RotatingTextProps {
  words: string[];
  className?: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({ words, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`inline-block ${className}`}>
      <span
        className="block transition-opacity duration-300"
        style={{
          textShadow: '0 0 20px rgba(229, 9, 20, 0.5), 0 0 40px rgba(229, 9, 20, 0.3)'
        }}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
};

export default RotatingText;
