// src/components/Netflix.tsx
import React, { useRef, useEffect } from 'react';

interface NetflixProps {
  onFinish: () => void;
}

const Netflix: React.FC<NetflixProps> = ({ onFinish }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to autoplay muted as soon as the component mounts.
    video
      .play()
      .catch(() => {
        // If autoplay still fails (rare for muted), nothing more to do.
      });

    // Handle visibility change to keep video playing in background
    const handleVisibilityChange = () => {
      if (video && video.paused && document.visibilityState === 'hidden') {
        // Force play when tab becomes hidden
        video.play().catch(() => {
          // Silently fail if play is blocked
        });
      }
    };

    // Handle page blur (when switching windows/tabs)
    const handleBlur = () => {
      if (video && video.paused) {
        video.play().catch(() => {
          // Silently fail if play is blocked
        });
      }
    };

    // Prevent pause events from stopping the video
    const handlePause = () => {
      if (video && !video.ended) {
        video.play().catch(() => {
          // Silently fail if play is blocked
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    video.addEventListener('pause', handlePause);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      video.removeEventListener('pause', handlePause);
    };
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
