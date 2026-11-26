import { useRef } from "react";
import { MUN } from "@/constants/content";
import { gsap, useGSAP, ANY_MOTION, DESKTOP_MOTION } from "@/lib/gsap";
import { ArrowUpRight } from "@/components/Icons";

type Row = { award: string; conf: string; where: string };

/** A flurry of placards, mostly the P5. Depth sets parallax speed; front ones sit over the photos. */
const FLAGS = [
  { c: "us", l: "-9%", t: "-5%", w: 104, r: -12, d: 1.2 },
  { c: "gb", l: "76%", t: "-8%", w: 92, r: 10, d: 0.8 },
  { c: "cn", l: "-13%", t: "46%", w: 88, r: 14, d: 1.0 },
  { c: "fr", l: "86%", t: "38%", w: 82, r: -8, d: 1.5, front: true },
  { c: "ru", l: "68%", t: "84%", w: 96, r: -6, d: 1.3, front: true },
  { c: "in", l: "2%", t: "88%", w: 74, r: 8, d: 0.7 },
  { c: "ch", l: "50%", t: "-11%", w: 56, r: -16, d: 1.7 },
  { c: "us", l: "95%", t: "72%", w: 54, r: 18, d: 0.9 },
  { c: "gb", l: "-6%", t: "24%", w: 52, r: -20, d: 1.8, front: true },
  { c: "cn", l: "36%", t: "94%", w: 50, r: 12, d: 1.4, front: true },
  { c: "fr", l: "28%", t: "-14%", w: 46, r: 6, d: 1.1 },
  { c: "ru", l: "100%", t: "12%", w: 48, r: -10, d: 1.6 },
];

const AwardList = ({ title, rows }: { title: string; rows: Row[] }) => (
  <div>
    <h3 className="label text-paper-mute">{title}</h3>
    <ul className="mn-list mt-3 border-t border-paper-ink/15">
      {rows.map((r) => (
        <li
          key={r.conf}
          className="mn-row grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-paper-ink/10 py-3 sm:grid-cols-[1.1fr_1.3fr_auto]"
        >
          <span className="display text-[clamp(1.25rem,1.9vw,1.6rem)] leading-tight">{r.conf}</span>
          <span className="text-[0.9rem] text-paper-ink/65 max-sm:order-last max-sm:col-span-2">{r.where}</span>
          <span
            className={`whitespace-nowrap text-right text-[0.9rem] ${
              r.award === "Best Delegate" || r.award === "1st place" || r.award.startsWith("Chair")
                ? "text-blood"
                : "text-paper-ink/75"
            }`}
          >
            {r.award}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const Mun = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.from(".mn-head > *", {
          yPercent: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: ".mn-head", start: "top 80%" },
        });
        gsap.utils.toArray<HTMLElement>(".mn-list").forEach((list) => {
          gsap.from(list.querySelectorAll(".mn-row"), {
            y: 24,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: { trigger: list, start: "top 85%" },
          });
        });
      });

      // Desktop: the photos deal themselves onto the pile as the list scrolls by.
      mm.add(DESKTOP_MOTION, () => {
        const cards = gsap.utils.toArray<HTMLElement>(".mn-card");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ".mn-body", start: "top 60%", end: "bottom 80%", scrub: 1 },
        });
        cards.forEach((card, i) => {
          if (i === 0) return;
          tl.fromTo(
            card,
            { yPercent: 115, rotate: i % 2 ? 9 : -9, opacity: 0 },
            { yPercent: 0, rotate: [-3, 4, -2][i], opacity: 1, ease: "power2.out" },
          );
        });
        // Flags: pop in, drift at their own depth, and sway on their own.
        const flags = gsap.utils.toArray<HTMLElement>(".mn-flag");
        gsap.from(flags.map((f) => f.firstElementChild), {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "back.out(2)",
          stagger: { each: 0.05, from: "random" },
          scrollTrigger: { trigger: ".mn-body", start: "top 70%" },
        });
        flags.forEach((f) => {
          const d = Number(f.dataset.d);
          gsap.fromTo(
            f,
            { y: 90 * d },
            {
              y: -110 * d,
              ease: "none",
              scrollTrigger: { trigger: ".mn-body", start: "top bottom", end: "bottom top", scrub: true },
            },
          );
          gsap.to(f.firstElementChild, {
            rotate: `+=${gsap.utils.random(5, 10)}`,
            duration: gsap.utils.random(2.2, 3.6),
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="mun"
      ref={root}
      className="relative overflow-clip bg-paper py-[clamp(88px,14vh,160px)] text-paper-ink"
      aria-label="Model UN and debate"
    >
      <div className="shell">
        <div className="mn-head flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[clamp(3.4rem,9vw,8.5rem)] leading-[0.85]">
            Model <span className="text-blood">UN</span>
          </h2>
          <p className="max-w-[40ch] text-[1rem] leading-relaxed text-paper-ink/75">{MUN.intro}</p>
        </div>

        <div className="mn-body mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="grid gap-8">
            <AwardList title="From the chair" rows={MUN.chair} />
            <AwardList title="On the floor" rows={MUN.floor} />

            <div className="flex flex-wrap items-end justify-between gap-6 rounded-2xl bg-paper-ink px-6 py-6 text-bone">
              <div>
                <p className="display text-[clamp(1.5rem,2.6vw,2.1rem)]">{MUN.grant.title}</p>
                <p className="mt-2 max-w-[46ch] text-[0.95rem] leading-relaxed text-bone/75">{MUN.grant.body}</p>
              </div>
              <a
                href={MUN.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blood px-5 py-2.5 text-[0.9rem] text-bone transition-colors duration-300 hover:bg-blood-deep"
              >
                Full MUN résumé <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Photos: a dealt pile in a flurry of flags on desktop, a row on phones */}
          <div className="relative lg:sticky lg:top-28 lg:h-[min(70svh,640px)] lg:self-start">
            {FLAGS.filter((f) => !!f.front === false).map((f, i) => (
              <span
                key={`${f.c}-${i}`}
                className="mn-flag pointer-events-none absolute hidden lg:block"
                style={{ left: f.l, top: f.t, width: f.w }}
                data-d={f.d}
                aria-hidden="true"
              >
                <img
                  src={`/flags/${f.c}.svg`}
                  alt=""
                  className="block aspect-[4/3] w-full rounded-[4px] object-cover shadow-[0_14px_28px_-14px_rgba(27,23,21,0.6)] ring-1 ring-paper-ink/10"
                  style={{ rotate: `${f.r}deg` }}
                />
              </span>
            ))}
            <div className="grid grid-cols-3 gap-3 lg:block">
              {MUN.photos.map((ph, i) => (
                <figure
                  key={ph.src}
                  className={`mn-card overflow-hidden rounded-2xl bg-paper-ink/10 shadow-[0_30px_60px_-30px_rgba(27,23,21,0.55)] lg:absolute lg:w-[68%] ${
                    ["lg:left-0 lg:top-0 lg:-rotate-3", "lg:right-0 lg:top-[14%] lg:rotate-[4deg]", "lg:left-[10%] lg:top-[30%] lg:-rotate-2"][i]
                  }`}
                >
                  <img src={ph.src} alt={ph.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                </figure>
              ))}
            </div>
            {FLAGS.filter((f) => !!f.front === true).map((f, i) => (
              <span
                key={`${f.c}-${i}`}
                className="mn-flag pointer-events-none absolute hidden lg:block"
                style={{ left: f.l, top: f.t, width: f.w }}
                data-d={f.d}
                aria-hidden="true"
              >
                <img
                  src={`/flags/${f.c}.svg`}
                  alt=""
                  className="block aspect-[4/3] w-full rounded-[4px] object-cover shadow-[0_14px_28px_-14px_rgba(27,23,21,0.6)] ring-1 ring-paper-ink/10"
                  style={{ rotate: `${f.r}deg` }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mun;
