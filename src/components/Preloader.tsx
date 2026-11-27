import { useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { DE } from "@/constants/content";

/** Counter from 0 to 100, then the curtain lifts. Shown once per session. */
const Preloader = ({ onDone }: { onDone: () => void }) => {
  const root = useRef<HTMLDivElement>(null);
  const [skip] = useState(() => {
    if (typeof window === "undefined") return true;
    return prefersReducedMotion() || sessionStorage.getItem("nb-seen") === "1";
  });
  const [n, setN] = useState(0);

  useGSAP(
    () => {
      if (skip) {
        onDone();
        return;
      }
      sessionStorage.setItem("nb-seen", "1");
      const counter = { v: 0 };
      gsap
        .timeline({ onComplete: onDone })
        .to(counter, {
          v: 100,
          duration: 1.5,
          ease: "power3.inOut",
          onUpdate: () => setN(Math.round(counter.v)),
        })
        .to(".pl-line", { scaleX: 1, duration: 1.5, ease: "power3.inOut" }, 0)
        .to(".pl-word", { yPercent: -110, duration: 0.6, ease: "expo.in" }, ">-0.1")
        .to(root.current, { clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "expo.inOut" }, "<0.2")
        .set(root.current, { display: "none" });
    },
    { scope: root },
  );

  if (skip) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col justify-end bg-ink px-5 pb-8 md:px-10 md:pb-10"
      style={{ clipPath: "inset(0 0 0% 0)" }}
      aria-hidden="true"
    >
      <div className="overflow-hidden">
        <p lang="de" className="pl-word fraktur text-[clamp(2.5rem,7vw,6rem)] text-blood">{DE.hello}</p>
      </div>
      <div className="mt-6 flex items-end justify-between">
        <div className="overflow-hidden">
          <span className="pl-word display tabular block text-[clamp(4rem,14vw,12rem)] leading-[0.8]">
            {String(n).padStart(3, "0")}
          </span>
        </div>
        <div className="overflow-hidden text-right">
          <span lang="de" className="pl-word fraktur block text-2xl text-bone/50">{n} {DE.percent}</span>
        </div>
      </div>
      <div className="pl-line mt-6 h-px w-full origin-left scale-x-0 bg-blood" />
    </div>
  );
};

export default Preloader;
