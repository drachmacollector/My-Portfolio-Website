import { useRef } from "react";
import { METHOD, toDeva } from "@/constants/content";
import { gsap, useGSAP, DESKTOP_MOTION } from "@/lib/gsap";

const SUN_POS = [
  { x: "-16vw", y: "-4vh" },
  { x: "16vw", y: "6vh" },
  { x: "-15vw", y: "7vh" },
  { x: "15vw", y: "-5vh" },
];

const Method = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MOTION, () => {
        gsap.set(".mt-glyph", { xPercent: -50, yPercent: -50 });
        gsap.set(".mt-move:not(:first-child)", { autoAlpha: 0 });
        gsap.set(".mt-glyph:not(:first-child)", { autoAlpha: 0 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: `+=${METHOD.length * 85}%`,
            pin: true,
            scrub: 1,
          },
        });
        METHOD.forEach((_, i) => {
          if (i === 0) {
            tl.to(".mt-sun", { x: SUN_POS[0].x, y: SUN_POS[0].y, duration: 0.5, ease: "power2.inOut" });
            return;
          }
          tl.to(`.mt-move:nth-child(${i})`, { autoAlpha: 0, y: -50, filter: "blur(8px)", duration: 0.5 }, `m${i}`)
            .to(`.mt-glyph:nth-child(${i})`, { autoAlpha: 0, scale: 0.8, filter: "blur(10px)", duration: 0.5 }, `m${i}`)
            .to(".mt-sun", { x: SUN_POS[i].x, y: SUN_POS[i].y, duration: 0.7, ease: "power3.inOut" }, `m${i}`)
            .fromTo(
              `.mt-move:nth-child(${i + 1})`,
              { autoAlpha: 0, y: 50, filter: "blur(8px)" },
              { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.5 },
              `m${i}+=0.45`,
            )
            .fromTo(
              `.mt-glyph:nth-child(${i + 1})`,
              { autoAlpha: 0, scale: 1.15, filter: "blur(10px)" },
              { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.5 },
              `m${i}+=0.45`,
            )
            .to(".mt-progress", { scaleX: (i + 1) / METHOD.length, duration: 1 }, `m${i}`);
        });
        tl.to({}, { duration: 0.6 });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="method"
      ref={root}
      className="relative overflow-hidden bg-paper text-paper-ink lg:h-[100svh] motion-reduce:lg:h-auto"
      aria-label="How I work"
    >
      <div className="shell flex items-center justify-between pt-28 lg:pt-32">
        <h2 className="flex items-baseline gap-3">
          <span className="deva text-[1.5rem] text-blood">पद्धत</span>
          <span className="display text-[clamp(1.6rem,2.6vw,2.4rem)]">How I work</span>
        </h2>
        <p className="label hidden text-paper-mute md:block">In four moves</p>
      </div>
      <div className="shell mt-4 hidden lg:block motion-reduce:!hidden">
        <div className="h-px w-full bg-paper-ink/10">
          <div className="mt-progress h-px origin-left scale-x-[0.25] bg-blood" />
        </div>
      </div>

      {/* Desktop: one stage, four moves */}
      <div className="relative hidden h-[calc(100svh-10rem)] lg:block motion-reduce:!hidden">
        <div className="mt-sun absolute left-1/2 top-1/2 h-0 w-0">
          <div className="absolute -left-[min(13vw,170px)] -top-[min(13vw,170px)] h-[min(26vw,340px)] w-[min(26vw,340px)] rounded-full bg-blood" />
          <div className="mt-glyphs absolute left-0 top-0">
            {METHOD.map((m) => (
              <span
                key={m.word}
                className="mt-glyph deva absolute left-0 top-0 whitespace-nowrap text-[clamp(5rem,9vw,8.5rem)] leading-none text-paper-ink"
              >
                {m.word}
              </span>
            ))}
          </div>
        </div>
        <div className="shell relative h-full">
          {METHOD.map((m, i) => (
            <div
              key={m.title}
              className={`mt-move absolute top-1/2 w-[30%] max-w-[380px] -translate-y-1/2 ${
                i % 2 === 0 ? "right-[clamp(20px,5vw,64px)]" : "left-[calc(var(--rail)+24px)]"
              }`}
            >
              <h3 className="display text-[clamp(2.4rem,4vw,3.8rem)]">{m.title}</h3>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-paper-ink/80">{m.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Phones and reduced motion: a plain list */}
      <ol className="shell grid gap-12 pb-24 pt-14 lg:hidden motion-reduce:lg:grid">
        {METHOD.map((m, i) => (
          <li key={m.title} className="border-t border-paper-ink/15 pt-8">
            <h3>
              <span className="deva block text-[3.4rem] leading-none text-blood">{m.word}</span>
              <span className="display mt-3 block text-[2.6rem]">{m.title}</span>
            </h3>
            <p className="mt-4 text-[1rem] leading-relaxed text-paper-ink/80">{m.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Method;
