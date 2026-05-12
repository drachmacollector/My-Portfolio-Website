import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

/**
 * Initializes Lenis smooth scrolling and synchronizes it with GSAP ScrollTrigger.
 * Call once at app startup. Returns a cleanup function.
 */
export function initSmoothScroll(): () => void {
  if (lenisInstance) return () => {};

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
  });

  lenisInstance = lenis;

  // Bridge Lenis scroll events to GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Use GSAP ticker to drive Lenis — ensures perfect sync with GSAP animations
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return () => {
    lenis.destroy();
    lenisInstance = null;
  };
}

/**
 * Returns the active Lenis instance (if initialized).
 */
export function getLenis(): Lenis | null {
  return lenisInstance;
}
