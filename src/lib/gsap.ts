import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Desktop + motion allowed: the only context where pinned, scrubbed sequences run. */
export const DESKTOP_MOTION = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
export const ANY_MOTION = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, useGSAP };

/** Ask the chapter rail to step aside while a section needs the full width. */
export const hushRail = (key: string, on: boolean) =>
  window.dispatchEvent(new CustomEvent("rail-hush", { detail: { key, on } }));
