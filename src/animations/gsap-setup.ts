import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins once at app level
gsap.registerPlugin(ScrollTrigger);

/**
 * Shared GSAP animation presets for consistent scroll-triggered animations.
 * These replace the AOS library data attributes with GSAP ScrollTrigger.
 */
export const ANIMATION_DEFAULTS = {
  ease: 'power2.out',
  duration: 0.8,
} as const;

/**
 * Creates a fade-in-up scroll-triggered animation on the given element.
 * Equivalent to AOS `data-aos="fade-up"`.
 */
export function fadeInUp(element: gsap.DOMTarget, delay = 0) {
  return gsap.from(element, {
    y: 40,
    opacity: 0,
    duration: ANIMATION_DEFAULTS.duration,
    delay,
    ease: ANIMATION_DEFAULTS.ease,
    scrollTrigger: {
      trigger: element as Element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Creates a fade-in from left scroll-triggered animation.
 * Equivalent to AOS `data-aos="fade-right"`.
 */
export function fadeInLeft(element: gsap.DOMTarget, delay = 0) {
  return gsap.from(element, {
    x: -60,
    opacity: 0,
    duration: 1.2,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element as Element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Creates a fade-in from right scroll-triggered animation.
 * Equivalent to AOS `data-aos="fade-left"`.
 */
export function fadeInRight(element: gsap.DOMTarget, delay = 0) {
  return gsap.from(element, {
    x: 60,
    opacity: 0,
    duration: 1.2,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element as Element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

export { gsap, ScrollTrigger };
