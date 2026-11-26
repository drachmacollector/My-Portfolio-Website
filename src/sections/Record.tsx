import { useRef } from "react";
import { HONOURS, CONTACT } from "@/constants/content";
import { gsap, useGSAP, ANY_MOTION } from "@/lib/gsap";
import { ArrowUpRight } from "@/components/Icons";

const Record = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.from(".rc-row", {
          xPercent: 8,
          opacity: 0,
          stagger: 0.07,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ".rc-list", start: "top 80%" },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="honours" ref={root} className="relative overflow-x-clip bg-ink py-[clamp(88px,14vh,160px)]" aria-label="Honours">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="display text-[clamp(2.6rem,5vw,4.6rem)]">Honours</h2>
          <p className="mt-6 max-w-[34ch] text-[1rem] leading-relaxed text-bone/70">
            Hackathons and 3D competitions. Model UN and debate awards are listed above.
          </p>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="label link-underline mt-8 inline-flex items-center gap-2 text-bone/70"
          >
            More on LinkedIn <ArrowUpRight />
          </a>
        </div>

        <ol className="rc-list">
          {HONOURS.map((h, i) => (
            <li
              key={h.what}
              className="rc-row group grid grid-cols-[2.2rem_1fr_auto] items-baseline gap-x-4 border-b border-bone/10 py-5 transition-[padding] duration-500 first:border-t hover:pl-3"
            >
              <span className="tabular text-[0.95rem] text-bone/40 transition-colors duration-300 group-hover:text-blood-hi">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="display block text-[clamp(1.6rem,3.2vw,2.8rem)] leading-[0.95]">{h.what}</span>
                <span className="mt-2 block text-[0.92rem] text-bone/60">{h.note}</span>
              </span>
              <span className="tabular whitespace-nowrap text-[0.95rem] text-blood-hi">{h.place}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Record;
