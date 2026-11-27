import { useRef } from "react";
import { EXPERIENCE, KPMG } from "@/constants/content";
import { gsap, useGSAP, ANY_MOTION } from "@/lib/gsap";
import { ArrowUpRight } from "@/components/Icons";

const pad = (n: number) => String(n).padStart(2, "0");

const Experience = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.from(".ex-head > *", {
          yPercent: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: ".ex-head", start: "top 80%" },
        });

        // The photo opens like a door, then settles as you scroll past.
        gsap.fromTo(
          ".ex-photo",
          { clipPath: "inset(100% 0% 0% 0% round 24px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            duration: 1.6,
            ease: "expo.inOut",
            scrollTrigger: { trigger: ".ex-photo", start: "top 80%" },
          },
        );
        gsap.fromTo(
          ".ex-photo img",
          { scale: 1.25 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: ".ex-photo", start: "top bottom", end: "bottom top", scrub: true },
          },
        );
        gsap.from(".ex-logo", {
          y: 30,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ".ex-logo", start: "top 85%" },
        });
        gsap.from(".ex-job", {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ".ex-jobs", start: "top 80%" },
        });

        // Pipeline: a red line runs through the seven steps, lighting each in turn.
        const steps = gsap.utils.toArray<HTMLElement>(".ex-step");
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".ex-pipe",
              start: "top 70%",
              end: "bottom 65%",
              scrub: true,
              onUpdate: (self) => {
                const lit = self.progress * steps.length;
                steps.forEach((s, i) => s.classList.toggle("is-on", i < lit));
              },
            },
          })
          .fromTo(".ex-line-x", { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0)
          .fromTo(".ex-line-y", { scaleY: 0 }, { scaleY: 1, ease: "none" }, 0);

        gsap.utils.toArray<HTMLElement>(".ex-num").forEach((el) => {
          const target = Number(el.dataset.to);
          const dec = Number(el.dataset.dec || 0);
          const o = { v: 0 };
          gsap.to(o, {
            v: target,
            duration: 2,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
            onUpdate: () => (el.textContent = o.v.toFixed(dec)),
          });
        });

        gsap.from(".ex-other", {
          xPercent: 6,
          opacity: 0,
          stagger: 0.08,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ".ex-others", start: "top 85%" },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="experience"
      ref={root}
      className="relative overflow-x-clip bg-ink pb-[clamp(76px,11vh,130px)] pt-[clamp(88px,14vh,160px)]"
      aria-label="Experience"
    >
      <div className="shell">
        <div className="ex-head flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[clamp(3.4rem,9vw,8.5rem)] leading-[0.85]">Experience</h2>
          <p className="max-w-[34ch] text-[1rem] leading-relaxed text-bone/70">
            Where I have worked so far, and what I left behind.
          </p>
        </div>

        {/* KPMG */}
        <article className="mt-16 border-t border-bone/15 pt-12" aria-labelledby="ex-kpmg">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <figure className="lg:sticky lg:top-24 lg:self-start">
              <div className="ex-photo relative aspect-[3/4] overflow-hidden rounded-[24px] bg-ink-3">
                <img
                  src="/img/nakul-kpmg.webp"
                  alt="Nakul at the KPMG office in Mumbai"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[0.85rem] text-bone/50">KPMG India, Mumbai office</figcaption>
            </figure>

            <div>
              <div className="ex-logo flex flex-wrap items-center justify-between gap-6">
                <span className="block aspect-[2.4/1] h-[5.5rem] overflow-hidden rounded-xl md:h-28">
                  <img src="/img/kpmg.webp" alt="KPMG" width={726} height={726} className="h-full w-full object-cover" />
                </span>
                <span className="tabular text-[0.95rem] text-bone/60">{KPMG.meta.find((m) => m.k === "When")?.v}</span>
              </div>
              <h3 id="ex-kpmg" className="display mt-8 text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[0.95]">
                {KPMG.role}
              </h3>
              <dl className="mt-6 grid gap-x-8 border-t border-bone/15 sm:grid-cols-2">
                {KPMG.meta
                  .filter((m) => m.k !== "When" && m.k !== "Firm")
                  .map((m) => (
                    <div key={m.k} className="flex gap-4 border-b border-bone/10 py-2.5 text-[0.92rem] sm:last:col-span-2">
                      <dt className="label w-14 shrink-0 pt-[3px] text-bone/50">{m.k}</dt>
                      <dd className="text-bone/90">{m.v}</dd>
                    </div>
                  ))}
              </dl>
              <p className="mt-8 max-w-[90ch] text-[1.05rem] leading-relaxed text-bone/80">{KPMG.intro}</p>

              <ol className="ex-jobs mt-10 grid gap-8">
                {KPMG.chapters.map((ch) => (
                  <li key={ch.title} className="ex-job grid grid-cols-[2.4rem_1fr] gap-x-4">
                    <span className="tabular pt-2 text-[0.95rem] text-blood-hi">{pad(ch.n)}</span>
                    <div>
                      <h4 className="display text-[clamp(1.6rem,2.6vw,2.2rem)]">{ch.title}</h4>
                      <p className="mt-3 max-w-[120ch] text-[0.98rem] leading-relaxed text-bone/75">{ch.body}</p>
                      {ch.list.length > 0 && (
                        <details className="group mt-4 max-w-[120ch]">
                          <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-[0.9rem] text-bone/70 transition-colors duration-300 hover:text-bone [&::-webkit-details-marker]:hidden">
                            <span className="grid h-5 w-5 place-items-center rounded-full border border-bone/25 text-[0.8rem] leading-none transition-transform duration-300 group-open:rotate-45">
                              +
                            </span>
                            {ch.listTitle}
                          </summary>
                          <ul className="mt-3 grid gap-1.5 border-l border-blood/60 pl-4">
                            {ch.list.map((li) => (
                              <li key={li} className="text-[0.92rem] leading-relaxed text-bone/70">
                                {li}
                              </li>
                            ))}
                          </ul>
                        </details>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* 03 · Scholarship pipeline */}
          <div className="ex-pipe mt-20 border-t border-bone/10 pt-12">
            <div className="grid grid-cols-[2.4rem_1fr] gap-x-4">
              <span className="tabular pt-2 text-[0.95rem] text-blood-hi">03</span>
              <div>
                <h4 className="display text-[clamp(1.6rem,2.6vw,2.2rem)]">
                  Scholarship pipeline
                </h4>
                <p className="mt-3 max-w-[120ch] text-[0.98rem] leading-relaxed text-bone/75">
                  {KPMG.pipelineIntro}
                </p>
              </div>
            </div>


            <div className="relative mt-12">
              <span className="absolute left-0 right-0 top-[14px] hidden h-px bg-bone/15 xl:block" aria-hidden="true" />
              <span
                className="ex-line-x absolute left-0 right-0 top-[14px] hidden h-[2px] origin-left bg-blood xl:block"
                aria-hidden="true"
              />
              <span className="absolute bottom-0 left-[14px] top-0 w-px bg-bone/15 xl:hidden" aria-hidden="true" />
              <span
                className="ex-line-y absolute bottom-0 left-[14px] top-0 w-[2px] origin-top bg-blood xl:hidden"
                aria-hidden="true"
              />
              <ol className="grid gap-8 xl:grid-cols-7 xl:gap-5">
                {KPMG.pipeline.map((s, i) => (
                  <li key={s.t} className="ex-step group relative pl-12 xl:pl-0 xl:pt-12">
                    <span
                      className="absolute left-0 top-0 grid h-[30px] w-[30px] place-items-center rounded-full border border-bone/25 bg-ink text-[0.78rem] transition-colors duration-500 group-[.is-on]:border-blood group-[.is-on]:bg-blood"
                      aria-hidden="true"
                    >
                      <span className="tabular">{i + 1}</span>
                    </span>
                    <h5 className="display text-[1.3rem] leading-tight text-bone/50 transition-colors duration-500 group-[.is-on]:text-bone">
                      {s.t}
                    </h5>
                    <p className="mt-3 text-[0.8rem] text-blood-hi">{s.tools}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-16 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
                {KPMG.numbers.map((n) => {
                  const dec = n.display.includes(".") ? 1 : 0;
                  return (
                    <div key={n.label}>
                      <dt className="sr-only">{n.label}</dt>
                      <dd>
                        <span className="display tabular text-[clamp(2.4rem,4vw,3.4rem)] leading-none">
                          <span className="ex-num" data-to={n.display} data-dec={dec}>
                            {n.display}
                          </span>
                        </span>
                        <span className="label ml-2 text-blood-hi">{n.unit}</span>
                        <p className="mt-2 max-w-[18ch] text-[0.88rem] text-bone/60">{n.label}</p>
                      </dd>
                    </div>
                  );
                })}
              </dl>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <p className="max-w-[34ch] text-[0.98rem] leading-relaxed text-bone/75 lg:text-right">{KPMG.shipped}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={KPMG.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-5 py-2.5 text-[0.9rem] transition-colors duration-300 hover:border-bone"
                  >
                    Pipeline code <ArrowUpRight />
                  </a>
                  <img
                    src={KPMG.appLogo}
                    alt="MAHABOCW app"
                    className="h-10 w-10 rounded-lg object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Everything else */}
        <ul className="ex-others mt-20 border-t border-bone/15">
          {EXPERIENCE.map((e) => {
            const inner = (
              <div className="grid gap-x-10 gap-y-3 py-7 md:grid-cols-[1fr_1.3fr_8.5rem] md:items-center">
                <span className="flex items-center gap-4">
                  {e.logo && (
                    <img
                      src={e.logo}
                      alt=""
                      loading="lazy"
                      className="h-12 w-12 shrink-0 object-contain md:h-14 md:w-14"
                    />
                  )}
                  <span className="display text-[clamp(1.6rem,2.6vw,2.2rem)] transition-colors duration-300 group-hover:text-blood-hi">
                    {e.org}
                  </span>
                </span>
                <span className="text-[0.95rem] leading-relaxed text-bone/70">
                  <span className="text-bone/90">{e.role}</span>
                  {e.body && <span className="mt-1 block">{e.body}</span>}
                </span>
                <span className="tabular whitespace-nowrap text-[0.88rem] text-bone/55 md:text-right">{e.when}</span>
              </div>
            );
            return (
              <li key={e.org} className="ex-other border-b border-bone/10">
                {e.href ? (
                  <a href={e.href} target="_blank" rel="noopener noreferrer" className="group block">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
