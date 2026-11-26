import { useRef } from "react";
import { ABOUT } from "@/constants/content";
import { gsap, useGSAP, ANY_MOTION } from "@/lib/gsap";

/** Split "[[red]]" markup into words, keeping which ones are red. */
const words = ABOUT.statement
  .split(/(\[\[.*?\]\])/)
  .flatMap((chunk) => {
    const red = chunk.startsWith("[[");
    return chunk
      .replace(/\[\[|\]\]/g, "")
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => ({ w, red }));
  })
  .reduce<{ w: string; red: boolean }[]>((acc, cur) => {
    if (/^[.,;:!?]+$/.test(cur.w) && acc.length) acc[acc.length - 1].w += cur.w;
    else acc.push(cur);
    return acc;
  }, []);

const About = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.fromTo(
          ".ab-word",
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: { trigger: ".ab-statement", start: "top 78%", end: "bottom 45%", scrub: true },
          },
        );
        gsap.from(".ab-fact", {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ".ab-facts", start: "top 85%" },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="about" ref={root} className="relative bg-ink py-[clamp(88px,14vh,160px)]">
      <div className="shell">
        <h2 className="flex items-baseline gap-4">
          <span className="display text-[clamp(1.8rem,3vw,2.6rem)]">Who I am</span>
          <span className="deva text-[clamp(1.6rem,2.6vw,2.2rem)] text-blood">मी</span>
        </h2>

        <p className="ab-statement mt-10 max-w-[22ch] text-[clamp(2rem,4.6vw,4.4rem)] font-light leading-[1.08] tracking-[-0.02em] md:max-w-[24ch]">
          {words.map(({ w, red }, i) => (
            <span key={i} className={`ab-word ${red ? "text-blood-hi" : ""}`}>
              {w}{" "}
            </span>
          ))}
        </p>

        <dl className="ab-facts mt-20 grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 md:grid-cols-3">
          {ABOUT.facts.map((f) => (
            <div key={f.k} className="ab-fact bg-ink px-6 py-7">
              <dt className="label text-blood-hi">{f.k}</dt>
              <dd className="mt-3 text-[1.05rem] text-bone/85">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
