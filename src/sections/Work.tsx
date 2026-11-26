import { useEffect, useRef, useState } from "react";
import { PROJECTS, RESEARCH, toDeva, type Project } from "@/constants/content";
import { gsap, useGSAP, ScrollTrigger, ANY_MOTION } from "@/lib/gsap";
import { ArrowUpRight, Download } from "@/components/Icons";

/** One screenshot, or several that take turns while the card is on screen. */
const Shots = ({ p }: { p: Project }) => {
  const shots = [p.image, ...(p.gallery ?? [])];
  const [cur, setCur] = useState(0);
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shots.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval> | null = null;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !timer) timer = setInterval(() => setCur((c) => (c + 1) % shots.length), 3200);
        if (!e.isIntersecting && timer) {
          clearInterval(timer);
          timer = null;
        }
      },
      { threshold: 0.5 },
    );
    if (host.current) io.observe(host.current);
    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [shots.length]);

  const fit = p.fit === "contain" ? "bg-[#202020] object-contain" : "object-cover object-top";
  return (
    <div ref={host} className="absolute inset-0">
      {shots.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? `${p.title} screenshot` : ""}
          aria-hidden={i === 0 ? undefined : true}
          loading="lazy"
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${fit} ${i === cur ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {shots.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-ink/70 px-2.5 py-2">
          {shots.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setCur(i)}
              aria-label={`Show screenshot ${i + 1} of ${shots.length}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === cur ? "w-5 bg-bone" : "w-1.5 bg-bone/40"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Work = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        // Each sheet recedes as the next one slides over it.
        const sheets = gsap.utils.toArray<HTMLElement>(".wk-sheet");
        sheets.forEach((sheet, i) => {
          if (i === sheets.length - 1) return;
          // Explicit start values: tweening from filter "none" snaps instead of easing.
          gsap.fromTo(sheet.querySelector(".wk-card"), { scale: 1, filter: "brightness(1)" }, {
            scale: 0.93,
            filter: "brightness(0.62)",
            ease: "power2.in",
            scrollTrigger: {
              trigger: sheets[i + 1],
              start: "top 75%",
              end: "top top",
              scrub: true,
            },
          });
        });

        // Screens lean with scroll speed.
        const screens = gsap.utils.toArray<HTMLElement>(".wk-screen");
        gsap.set(screens, { rotateX: 0, transformPerspective: 1400 });
        const setters = screens.map((el) => gsap.quickTo(el, "rotateX", { duration: 0.6, ease: "power3.out" }));
        const st = ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const v = gsap.utils.clamp(-14, 14, self.getVelocity() / -120);
            setters.forEach((s) => s(v));
          },
        });

        gsap.from(".wk-head > *", {
          yPercent: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: ".wk-head", start: "top 80%" },
        });
        return () => st.kill();
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const total = PROJECTS.length;

  return (
    <section id="work" ref={root} className="relative bg-ink pt-[clamp(88px,14vh,160px)]" aria-label="Selected work">
      <div className="shell wk-head flex flex-wrap items-end justify-between gap-6">
        <h2 className="display text-[clamp(3.4rem,9vw,8.5rem)] leading-[0.85]">
          Selected
          <br />
          <span className="text-blood">work</span>
        </h2>
        <p className="max-w-[34ch] text-[1rem] leading-relaxed text-bone/70">
          Things I designed, trained and shipped: a drilling early-warning system, research dashboards, a Windows
          utility and platforms with real users.
        </p>
      </div>

      <div className="mt-16">
        {PROJECTS.map((p, i) => (
          <article key={p.title} className="wk-sheet sticky top-0 flex h-[100svh] items-center py-6 md:py-10">
            <div className="shell h-full">
              <div className="wk-card grid h-full origin-top grid-rows-[auto_1fr] overflow-hidden rounded-[28px] border border-bone/10 bg-ink-2 lg:grid-cols-[1fr_1.15fr] lg:grid-rows-1">
                <div className="flex flex-col justify-between gap-6 p-6 md:p-10">
                  <div>
                    <p className="flex justify-end text-bone/55">
                      <span className="deva whitespace-nowrap text-[1.1rem]">
                        <span className="text-blood-hi">{toDeva(String(i + 1).padStart(2, "0"))}</span> /{" "}
                        {toDeva(String(total).padStart(2, "0"))}
                      </span>
                    </p>
                    <h3 className="display mt-2 text-[clamp(2.6rem,5.2vw,5.4rem)]">{p.title}</h3>
                    <p className="mt-3 text-[1rem] text-bone/55">
                      {p.kind}, {p.year}
                    </p>
                    <p className="mt-4 max-w-[46ch] text-[1rem] leading-relaxed text-bone/75 max-md:text-[0.95rem]">
                      {p.body}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.88rem] text-bone/55">{p.stack.join("  ·  ")}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-[0.9rem] text-ink transition-colors duration-300 hover:bg-blood hover:text-bone"
                        >
                          Visit <ArrowUpRight />
                        </a>
                      )}
                      {p.download && (
                        <a
                          href={p.download}
                          className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-[0.9rem] text-ink transition-colors duration-300 hover:bg-blood hover:text-bone"
                        >
                          Download (.exe) <Download />
                        </a>
                      )}
                      {p.code && (
                        <a
                          href={p.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-5 py-2.5 text-[0.9rem] transition-colors duration-300 hover:border-bone"
                        >
                          Code <ArrowUpRight />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative min-h-0 overflow-hidden bg-ink-3 [perspective:1400px] max-lg:order-first max-lg:h-[30svh]">
                  <div className="wk-screen absolute inset-[6%] origin-center overflow-hidden rounded-xl border border-bone/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] [transform-style:preserve-3d]">
                    <Shots p={p} />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="shell relative z-[1] bg-ink pb-10 pt-16">
        <div className="grid gap-4 border-t border-bone/10 pt-8 md:grid-cols-[auto_1fr] md:gap-10">
          <h3 className="display text-[1.4rem] text-blood-hi">In progress</h3>
          <p className="max-w-[62ch] text-[1rem] leading-relaxed text-bone/75">
            <span className="text-bone">{RESEARCH.title}</span> {RESEARCH.body}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
