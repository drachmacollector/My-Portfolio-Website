import { useRef } from "react";
import Tape from "@/components/Tape";
import { TAPE_A, TAPE_B } from "@/constants/content";
import { gsap, useGSAP, ANY_MOTION } from "@/lib/gsap";
import { scrollToId } from "@/components/Chrome";
import { ArrowDown } from "@/components/Icons";

const Hero = ({ ready }: { ready: boolean }) => {
  const root = useRef<HTMLElement>(null);
  const reveal = useRef<HTMLDivElement>(null);

  // Entrance, once the preloader has lifted.
  useGSAP(
    () => {
      if (!ready) return;
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(".h-tape-a", { xPercent: -30, opacity: 0, duration: 1.6 })
          .from(".h-tape-b", { xPercent: 30, opacity: 0, duration: 1.6 }, "<")
          .from(".h-portrait", { yPercent: 12, opacity: 0, filter: "blur(18px)", duration: 1.6 }, "<0.1")
          .from(".h-name span", { yPercent: 60, opacity: 0, duration: 1.4, stagger: 0.04 }, "<0.2")
          .from(".h-ui", { y: 24, opacity: 0, duration: 1.2, stagger: 0.08 }, "<0.3");

        // Leaving the hero: the portrait sinks, the tapes swing, the name drifts.
        gsap
          .timeline({
            scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
          })
          .to(".h-portrait", { yPercent: 14, scale: 0.94, ease: "none" }, 0)
          .to(".h-tape-a", { rotate: -18, yPercent: -120, ease: "none" }, 0)
          .to(".h-tape-b", { rotate: 14, yPercent: 160, ease: "none" }, 0)
          .to(".h-name", { xPercent: -12, ease: "none" }, 0);
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [ready] },
  );

  // Colour torch: grey portrait, colour under the pointer.
  useGSAP(
    () => {
      const el = reveal.current;
      if (!el || !window.matchMedia("(hover: hover)").matches) return;
      const state = { x: 50, y: 40, r: 0 };
      const apply = () =>
        el.style.setProperty("clip-path", `circle(${state.r}px at ${state.x}% ${state.y}%)`);
      apply();
      const host = el.parentElement!;
      const move = (e: PointerEvent) => {
        const b = host.getBoundingClientRect();
        gsap.to(state, {
          x: ((e.clientX - b.left) / b.width) * 100,
          y: ((e.clientY - b.top) / b.height) * 100,
          duration: 0.6,
          ease: "power3.out",
          onUpdate: apply,
        });
      };
      const enter = () => gsap.to(state, { r: 190, duration: 0.9, ease: "expo.out", onUpdate: apply });
      const leave = () => gsap.to(state, { r: 0, duration: 0.7, ease: "expo.inOut", onUpdate: apply });
      host.addEventListener("pointermove", move);
      host.addEventListener("pointerenter", enter);
      host.addEventListener("pointerleave", leave);
      return () => {
        host.removeEventListener("pointermove", move);
        host.removeEventListener("pointerenter", enter);
        host.removeEventListener("pointerleave", leave);
      };
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="grain relative h-[100svh] min-h-[640px] overflow-hidden bg-ink"
      aria-label="Introduction"
    >
      {/* Logotype */}
      <div className="h-ui absolute left-5 top-5 z-[5] md:left-8 md:top-7">
        <p className="display text-[1.55rem] leading-[0.86] md:text-[2.1rem]">Nakul</p>
        <p className="display text-[1.55rem] leading-[0.86] text-blood md:text-[2.1rem]">Bhadade</p>
        <p className="label mt-2 hidden opacity-60 md:block">
          Portfolio · <span className="deva tracking-normal">२०२६</span>
        </p>
      </div>

      {/* Tapes */}
      <Tape items={TAPE_A} className="h-tape-a top-[30%] z-[1] -rotate-[11deg] text-[clamp(0.95rem,1.4vw,1.25rem)]" />
      <Tape
        items={TAPE_B}
        reverse
        tone="deep"
        className="h-tape-b top-[54%] z-[1] rotate-[7deg] text-[clamp(0.85rem,1.2vw,1.1rem)]"
      />

      {/* Giant outline name */}
      <h1
        className="h-name display outline-text pointer-events-none absolute inset-x-0 bottom-[-0.08em] z-[2] flex justify-center whitespace-nowrap text-[13.4vw] leading-[0.8]"
        aria-label="Nakul Bhadade"
      >
        {"NAKUL BHADADE".split("").map((c, i) => (
          <span key={i} className="inline-block" aria-hidden="true">
            {c === " " ? " " : c}
          </span>
        ))}
      </h1>

      {/* Portrait */}
      <div className="h-portrait absolute bottom-0 left-1/2 z-[3] aspect-square h-[min(84svh,980px)] -translate-x-1/2 max-md:h-[62svh]">
        <div className="relative h-full w-full">
          <img
            src="/img/nakul-cut.webp"
            alt="Nakul Bhadade in a suit, holding a debate trophy"
            className="absolute inset-0 h-full w-full object-contain object-bottom [filter:grayscale(1)_contrast(1.12)_brightness(0.92)_drop-shadow(-18px_0_38px_rgba(208,20,44,0.45))]"
            {...{ fetchpriority: "high" }}
          />
          <div ref={reveal} className="absolute inset-0" style={{ clipPath: "circle(0px at 50% 40%)" }}>
            <img
              src="/img/nakul-cut.webp"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Edge labels */}
      <p className="h-ui label absolute right-8 top-1/2 z-[4] hidden origin-right -translate-y-1/2 rotate-90 text-bone/50 lg:block">
        Hover to reveal
      </p>
      <p className="h-ui label absolute bottom-10 right-[18px] z-[4] hidden origin-bottom-right -rotate-90 translate-x-full text-bone/50 xl:block">
        Mumbai · Nagpur · India
      </p>

      {/* Role + action */}
      <div className="h-ui absolute bottom-[22%] left-5 z-[4] max-w-[300px] md:bottom-auto md:left-auto md:right-12 md:top-[34%] lg:right-20">
        <p className="text-[0.95rem] leading-relaxed text-bone/80">
          AI consultant and engineer. At KPMG I shaped AI strategy for the Government of Maharashtra, then built the
          system that verified <span className="text-bone">1.5 lakh scholarship records</span>.
        </p>
        <button
          onClick={() => scrollToId("kpmg")}
          className="group mt-5 inline-flex items-center gap-3 rounded-full bg-blood px-5 py-3 text-[0.9rem] text-bone transition-colors duration-300 hover:bg-blood-hi"
        >
          Read the KPMG story
          <ArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
