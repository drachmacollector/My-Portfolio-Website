import { useRef } from "react";
import { KPMG, toDeva } from "@/constants/content";
import { gsap, useGSAP, ScrollTrigger, DESKTOP_MOTION, ANY_MOTION } from "@/lib/gsap";

/* ── Chapter visuals ─────────────────────────────────────────────── */

/** 29 laws collapse into 4 codes. */
const LawsToCodes = () => (
  <figure className="kp-laws" aria-label="29 central labour laws consolidated into 4 codes">
    <div className="relative h-[180px] w-full max-w-[420px]">
      {Array.from({ length: 29 }).map((_, i) => (
        <span
          key={i}
          className="kp-law absolute bottom-0 w-[3px] bg-bone/70"
          style={{ left: `${(i / 28) * 100}%`, height: `${40 + ((i * 37) % 60)}%` }}
          data-target={Math.floor(i / 7.25)}
        />
      ))}
      {[0, 1, 2, 3].map((c) => (
        <span
          key={c}
          className="kp-code absolute bottom-0 w-[18%] origin-bottom scale-y-0 bg-blood"
          style={{ left: `${c * 27.3}%`, height: "100%" }}
        />
      ))}
    </div>
    <figcaption className="mt-4 flex max-w-[420px] justify-between text-[0.85rem] text-bone/60">
      <span>29 laws</span>
      <span>Wages · Industrial relations · Social security · Safety</span>
    </figcaption>
  </figure>
);

/** Illustrative price series with the three anomaly types the framework flags. */
const PRICES = [52, 53, 52, 54, 55, 55, 55, 55, 55, 55, 56, 57, 56, 74, 58, 57, 59, 58, 60, 59, 61, 60];
const PriceFlags = () => {
  const w = 420;
  const h = 170;
  const max = 78;
  const min = 46;
  const pts = PRICES.map((p, i) => [(i / (PRICES.length - 1)) * w, h - ((p - min) / (max - min)) * h]);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  return (
    <figure className="kp-prices max-w-[420px]">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full overflow-visible" role="img" aria-label="Illustrative price series with a flatline and a spike flagged">
        <rect x={pts[4][0]} y={0} width={pts[9][0] - pts[4][0]} height={h} fill="rgba(200,16,42,0.16)" className="kp-flag" />
        <path d={d} fill="none" stroke="#efe7dc" strokeWidth="1.5" className="kp-line" />
        <circle cx={pts[13][0]} cy={pts[13][1]} r="7" fill="none" stroke="#ff4255" strokeWidth="1.5" className="kp-flag" />
        <circle cx={pts[13][0]} cy={pts[13][1]} r="2.5" fill="#ff4255" className="kp-flag" />
      </svg>
      <figcaption className="mt-4 flex justify-between gap-6 text-[0.85rem] text-bone/60">
        <span>
          <span className="text-blood-hi">Flatline</span> · <span className="text-blood-hi">Spike</span>
        </span>
        <span>Illustrative data</span>
      </figcaption>
    </figure>
  );
};

const ScaleBlock = () => (
  <div className="kp-scale grid max-w-[420px] grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10">
    {[
      ["~1,00,000", "engineering applications"],
      ["~30,000", "medical applications"],
      ["Up to ₹1 lakh", "a year, per student"],
      ["By hand", "how each one was checked"],
    ].map(([a, b]) => (
      <div key={b} className="bg-ink-2 px-5 py-6">
        <p className="display text-[1.6rem] text-bone">{a}</p>
        <p className="mt-2 text-[0.85rem] text-bone/60">{b}</p>
      </div>
    ))}
  </div>
);

const VISUALS = [LawsToCodes, PriceFlags, ScaleBlock];

/* ── Section ─────────────────────────────────────────────────────── */

const Kpmg = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: pinned opener, horizontal chapters.
      mm.add(DESKTOP_MOTION, () => {
        gsap
          .timeline({
            scrollTrigger: { trigger: ".kp-opener", start: "top top", end: "+=110%", scrub: true, pin: true },
          })
          .fromTo(".kp-letter", { xPercent: (i) => [-6, -2, 2, 6][i] }, { xPercent: (i) => [-34, -12, 12, 34][i], ease: "none" }, 0)
          .fromTo(".kp-person", { yPercent: 6, scale: 0.96 }, { yPercent: 0, scale: 1.04, ease: "none" }, 0)
          .from(".kp-meta", { opacity: 0, y: 30, duration: 0.35, ease: "none" }, 0)
          .from(".kp-intro", { opacity: 0, y: 30, duration: 0.35, ease: "none" }, 0.08);

        const track = root.current!.querySelector<HTMLElement>(".kp-track")!;
        const dist = () => track.scrollWidth - window.innerWidth;
        const slide = gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: ".kp-chapters",
            start: "top top",
            end: () => `+=${dist()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".kp-panel").forEach((panel, i) => {
          if (i === 0) return;
          gsap.from(panel.querySelectorAll(".kp-reveal"), {
            y: 60,
            opacity: 0,
            stagger: 0.06,
            ease: "expo.out",
            duration: 1.2,
            scrollTrigger: { trigger: panel, containerAnimation: slide, start: "left 70%" },
          });
        });

        // Chapter 1: lines gather into four codes.
        gsap
          .timeline({
            scrollTrigger: { trigger: ".kp-laws", containerAnimation: slide, start: "left 80%", end: "left 30%", scrub: true },
          })
          .to(".kp-law", {
            left: (i, el) => `${Number((el as HTMLElement).dataset.target) * 27.3 + 8}%`,
            opacity: 0,
            ease: "power2.in",
          })
          .to(".kp-code", { scaleY: 1, stagger: 0.05, ease: "expo.out" }, "<0.4");

        // Chapter 2: draw the series, then flag it.
        const line = root.current!.querySelector<SVGPathElement>(".kp-line")!;
        const len = line.getTotalLength();
        gsap
          .timeline({
            scrollTrigger: { trigger: ".kp-prices", containerAnimation: slide, start: "left 85%", end: "left 35%", scrub: true },
          })
          .fromTo(line, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, ease: "none" })
          .from(".kp-flag", { opacity: 0, scale: 0.4, transformOrigin: "50% 50%", stagger: 0.1 }, ">-0.2");
      });

      // Pipeline: the path draws itself as you scroll, stations light up.
      mm.add(ANY_MOTION, () => {
        const path = root.current!.querySelector<SVGPathElement>(".kp-path")!;
        const len = path.getTotalLength();
        gsap.fromTo(
          path,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: { trigger: ".kp-pipe", start: "top 60%", end: "bottom 70%", scrub: true },
          },
        );
        gsap.utils.toArray<HTMLElement>(".kp-stage").forEach((st) => {
          ScrollTrigger.create({
            trigger: st,
            start: "top 62%",
            onEnter: () => st.classList.add("is-on"),
            onLeaveBack: () => st.classList.remove("is-on"),
          });
          gsap.from(st.querySelector(".kp-stage-body"), {
            y: 40,
            opacity: 0,
            duration: 1.1,
            ease: "expo.out",
            scrollTrigger: { trigger: st, start: "top 80%" },
          });
        });
        gsap.utils.toArray<HTMLElement>(".kp-num").forEach((el) => {
          const target = Number(el.dataset.to);
          const dec = el.dataset.dec ? Number(el.dataset.dec) : 0;
          const o = { v: 0 };
          gsap.to(o, {
            v: target,
            duration: 2,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: () => (el.textContent = o.v.toFixed(dec)),
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  const stages = KPMG.pipeline;
  // Snake between two columns; one unit of height per stage.
  const pathD = stages
    .map((_, i) => {
      const y = i * 100 + 50;
      const x = i % 2 === 0 ? 28 : 72;
      if (i === 0) return `M50,0 C50,25 ${x},25 ${x},${y}`;
      const py = (i - 1) * 100 + 50;
      const px = (i - 1) % 2 === 0 ? 28 : 72;
      return `C${px},${py + 50} ${x},${y - 50} ${x},${y}`;
    })
    .join(" ")
    .concat(` C${(stages.length - 1) % 2 === 0 ? 28 : 72},${stages.length * 100 - 25} 50,${stages.length * 100 - 25} 50,${stages.length * 100}`);

  return (
    <section id="kpmg" ref={root} className="relative bg-ink" aria-label="KPMG case study">
      {/* Opener */}
      <div className="kp-opener grain relative flex flex-col overflow-hidden lg:h-[100svh] lg:min-h-[680px] lg:flex-row lg:items-end">
        <div className="relative h-[72svh] lg:absolute lg:inset-0 lg:h-auto">
        <div
          className="pointer-events-none absolute inset-x-0 top-[14%] flex justify-center text-[clamp(7rem,33vw,34rem)] leading-[0.8] lg:top-[12%]"
          aria-hidden="true"
        >
          {"KPMG".split("").map((c, i) => (
            <span key={c} className={`kp-letter display inline-block ${i % 2 ? "text-blood" : "text-bone/90"}`}>
              {c}
            </span>
          ))}
        </div>
        <img
          src="/img/nakul-kpmg-cut.webp"
          alt="Nakul at the KPMG office in Mumbai"
          loading="lazy"
          className="kp-person absolute bottom-0 left-1/2 h-[86%] -translate-x-1/2 object-contain object-bottom [filter:drop-shadow(0_30px_40px_rgba(0,0,0,0.6))]"
        />
        </div>
        <div className="shell relative z-[2] grid w-full gap-10 pb-16 pt-8 md:grid-cols-2 lg:pt-0">
          <div>
            <h2 className="flex items-baseline gap-3">
              <span className="deva text-[1.6rem] text-blood">क्षेत्र</span>
              <span className="display text-[clamp(1.6rem,2.6vw,2.4rem)]">{KPMG.role}</span>
            </h2>
            <dl className="kp-meta mt-6 grid max-w-[340px] gap-2 rounded-2xl bg-ink/70 p-5 backdrop-blur-sm">
              {KPMG.meta.map((m) => (
                <div key={m.k} className="flex gap-4 text-[0.92rem]">
                  <dt className="label w-16 shrink-0 pt-[3px] text-bone/50">{m.k}</dt>
                  <dd className="text-bone/90">{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="kp-intro self-end justify-self-end rounded-2xl bg-ink/70 p-5 text-[1.05rem] leading-relaxed text-bone/85 backdrop-blur-sm md:max-w-[360px]">
            {KPMG.intro}
          </p>
        </div>
      </div>

      {/* Three assignments */}
      <div className="kp-chapters relative overflow-hidden lg:h-[100svh] motion-reduce:lg:h-auto">
        <div className="kp-track flex flex-col lg:h-full lg:w-max lg:flex-row motion-reduce:lg:w-full motion-reduce:lg:flex-col">
          {KPMG.chapters.map((ch, idx) => {
            const Visual = VISUALS[idx];
            return (
              <article
                key={ch.title}
                className="kp-panel relative flex min-h-[100svh] w-full shrink-0 items-center overflow-hidden border-t border-bone/10 py-24 lg:w-[100vw] lg:border-l lg:border-t-0 lg:py-0"
              >
                <span
                  className="deva pointer-events-none absolute -right-[4vw] top-1/2 -translate-y-1/2 text-[clamp(16rem,40vw,40rem)] leading-none text-bone/[0.04]"
                  aria-hidden="true"
                >
                  {toDeva(ch.n)}
                </span>
                <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
                  <div>
                    <p className="kp-reveal flex items-center gap-4 text-bone/60">
                      <span className="deva text-[2rem] text-blood">{ch.word}</span>
                      <span className="label">
                        Assignment {ch.n} of 3 · {ch.sub}
                      </span>
                    </p>
                    <h3 className="kp-reveal display mt-6 text-[clamp(3rem,7vw,6rem)]">{ch.title}</h3>
                    <p className="kp-reveal mt-8 max-w-[52ch] text-[1.05rem] leading-relaxed text-bone/80">{ch.body}</p>
                  </div>
                  <div className="kp-reveal">
                    {ch.list.length > 0 && (
                      <div className="mb-10">
                        <p className="label text-blood-hi">{ch.listTitle}</p>
                        <ol className="mt-4 grid gap-2">
                          {ch.list.map((li, j) => (
                            <li key={li} className="flex gap-4 border-b border-bone/10 pb-2 text-[0.95rem] text-bone/80">
                              <span className="deva w-5 shrink-0 text-blood">{toDeva(j + 1)}</span>
                              {li}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    <Visual />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* The pipeline */}
      <div className="kp-pipe relative border-t border-bone/10 py-[clamp(100px,16vh,180px)]">
        <div className="shell">
          <div className="max-w-[760px]">
            <h3 className="display text-[clamp(2.6rem,6vw,5.6rem)]">
              Paperwork in,
              <br />
              <span className="text-blood">verdict out</span>
            </h3>
            <p className="mt-8 max-w-[56ch] text-[1.05rem] leading-relaxed text-bone/75">
              An intelligent document processing pipeline that reads each claim the way a consultant would, and only asks a
              person when it is unsure.
            </p>
          </div>

          <div className="relative mt-20">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full max-md:hidden"
              viewBox={`0 0 100 ${stages.length * 100}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d={pathD} fill="none" stroke="rgba(239,231,220,0.1)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <path className="kp-path" d={pathD} fill="none" stroke="#c8102a" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="pointer-events-none absolute bottom-0 left-[14px] top-0 w-px bg-bone/10 md:hidden" aria-hidden="true" />

            <ol>
              {stages.map((s, i) => {
                const right = i % 2 === 1;
                return (
                  <li
                    key={s.t}
                    className={`kp-stage group relative flex min-h-[200px] items-center md:min-h-[240px] ${
                      right ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <span
                      className={`absolute z-[1] grid h-[30px] w-[30px] -translate-x-1/2 place-items-center rounded-full border border-bone/25 bg-ink transition-colors duration-500 group-[.is-on]:border-blood group-[.is-on]:bg-blood max-md:left-[14px] ${
                        right ? "md:left-[72%]" : "md:left-[28%]"
                      }`}
                      aria-hidden="true"
                    >
                      <span className="deva text-[0.85rem] leading-none">{toDeva(i + 1)}</span>
                    </span>
                    <div
                      className={`kp-stage-body w-full pl-12 md:w-[40%] md:pl-0 ${
                        right ? "md:mr-[34%] md:text-right" : "md:ml-[34%]"
                      }`}
                    >
                      <h4 className="display text-[clamp(1.5rem,2.4vw,2.2rem)] transition-colors duration-500 group-[.is-on]:text-bone text-bone/50">
                        {s.t}
                      </h4>
                      <p className="mt-3 text-[0.98rem] leading-relaxed text-bone/75">{s.d}</p>
                      <p className="label mt-3 text-blood-hi">{s.tools}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-16 grid items-end gap-10 border-t border-bone/10 pt-14 md:grid-cols-[1fr_auto]">
            <p className="max-w-[30ch] text-[clamp(1.5rem,2.6vw,2.3rem)] font-light leading-snug">{KPMG.shipped}</p>
            <a
              href="#contact"
              className="label inline-flex items-center gap-2 rounded-full border border-bone/20 px-5 py-3 transition-colors duration-300 hover:border-blood hover:bg-blood"
            >
              Ask me about it
            </a>
          </div>

          {/* By the numbers */}
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 lg:grid-cols-4">
            {KPMG.numbers.map((n) => {
              const dec = n.display.includes(".") ? 1 : 0;
              return (
                <div key={n.label} className="bg-ink px-6 py-8">
                  <dt className="sr-only">{n.label}</dt>
                  <dd>
                    <span className="display tabular text-[clamp(3.2rem,6vw,5.2rem)] leading-none">
                      <span className="kp-num" data-to={n.display} data-dec={dec}>
                        {n.display}
                      </span>
                    </span>
                    <span className="label ml-2 text-blood-hi">{n.unit}</span>
                    <p className="mt-4 text-[0.92rem] text-bone/65">{n.label}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Kpmg;
