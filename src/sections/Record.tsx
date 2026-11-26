import { useRef } from "react";
import { EXPERIENCE, HONOURS, toDeva } from "@/constants/content";
import { gsap, useGSAP, ANY_MOTION } from "@/lib/gsap";
import { ArrowUpRight } from "@/components/Icons";

const Record = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.utils.toArray<HTMLElement>(".rc-list").forEach((list) => {
          gsap.from(list.querySelectorAll(".rc-row"), {
            xPercent: 8,
            opacity: 0,
            stagger: 0.07,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: list, start: "top 80%" },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="record" ref={root} className="relative bg-ink py-[clamp(110px,18vh,200px)]" aria-label="Experience and honours">
      <div className="shell grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="flex items-baseline gap-4">
            <span className="display text-[clamp(2.6rem,5vw,4.6rem)]">Record</span>
            <span className="deva text-[clamp(1.8rem,3vw,2.6rem)] text-blood">नोंद</span>
          </h2>
          <ul className="rc-list mt-10">
            {EXPERIENCE.map((e) => {
              const body = (
                <>
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="display text-[1.5rem] transition-colors duration-300 group-hover:text-blood-hi">
                      {e.org}
                    </span>
                    <span className="tabular shrink-0 text-[0.85rem] text-bone/55">{e.when}</span>
                  </span>
                  <span className="mt-1 block text-[0.95rem] text-bone/70">{e.role}</span>
                </>
              );
              return (
                <li key={e.org} className="rc-row border-b border-bone/10 py-5">
                  {e.href ? (
                    <a
                      href={e.href}
                      className="group block"
                      {...(e.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {body}
                    </a>
                  ) : (
                    <div>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="display text-[clamp(1.6rem,2.6vw,2.2rem)] text-bone/70">Honours</h3>
          <ol className="rc-list mt-4">
            {HONOURS.map((h, i) => (
              <li
                key={h.what}
                className="rc-row group grid grid-cols-[2.2rem_1fr_auto] items-baseline gap-x-4 border-b border-bone/10 py-5 transition-[padding] duration-500 hover:pl-3"
              >
                <span className="deva text-[1.1rem] text-bone/40 transition-colors duration-300 group-hover:text-blood">
                  {toDeva(String(i + 1).padStart(2, "0"))}
                </span>
                <span>
                  <span className="display block text-[clamp(1.6rem,3.2vw,2.8rem)] leading-[0.95]">{h.what}</span>
                  <span className="mt-2 block text-[0.92rem] text-bone/60">{h.note}</span>
                </span>
                <span className="tabular whitespace-nowrap text-[0.95rem] text-blood-hi">{h.place}</span>
              </li>
            ))}
          </ol>
          <a
            href="https://www.linkedin.com/in/nakul-bhadade/"
            target="_blank"
            rel="noopener noreferrer"
            className="label link-underline mt-8 inline-flex items-center gap-2 text-bone/70"
          >
            More on LinkedIn <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Record;
