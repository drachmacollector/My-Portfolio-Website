// src/components/Netflix.tsx
import React, { useRef, useEffect } from 'react';

interface NetflixProps {
  onFinish: () => void;
}

const Netflix: React.FC<NetflixProps> = ({ onFinish }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt to autoplay muted as soon as the component mounts.
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch(() => {
          // If autoplay still fails (rare for muted), nothing more to do.
        });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/netflix.mp4"
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Netflix;
