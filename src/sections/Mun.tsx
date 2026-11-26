import { useRef } from "react";
import { MUN } from "@/constants/content";
import { gsap, useGSAP, ANY_MOTION, DESKTOP_MOTION } from "@/lib/gsap";
import { ArrowUpRight } from "@/components/Icons";

type Row = { award: string; conf: string; where: string };

const AwardList = ({ title, rows }: { title: string; rows: Row[] }) => (
  <div>
    <h3 className="label text-paper-mute">{title}</h3>
    <ul className="mn-list mt-3 border-t border-paper-ink/15">
      {rows.map((r) => (
        <li
          key={r.conf}
          className="mn-row grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-paper-ink/10 py-4 sm:grid-cols-[1.1fr_1.3fr_auto]"
        >
          <span className="display text-[clamp(1.35rem,2.2vw,1.8rem)] leading-tight">{r.conf}</span>
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
        gsap.from(".mn-stat", {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: ".mn-stats", start: "top 85%" },
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
        tl.to(".mn-disc", { yPercent: -40, xPercent: 20, ease: "none", duration: tl.duration() || 1 }, 0);
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="mun"
      ref={root}
      className="relative overflow-clip bg-paper py-[clamp(110px,18vh,200px)] text-paper-ink"
      aria-label="Model UN and debate"
    >
      <div className="shell">
        <div className="mn-head flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[clamp(3.4rem,9vw,8.5rem)] leading-[0.85]">
            Model <span className="text-blood">UN</span>
          </h2>
          <p className="max-w-[40ch] text-[1rem] leading-relaxed text-paper-ink/75">{MUN.intro}</p>
        </div>

        <dl className="mn-stats mt-14 grid grid-cols-3 gap-6 border-t border-paper-ink/15 pt-8">
          {MUN.stats.map((s) => (
            <div key={s.label} className="mn-stat">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="display tabular block text-[clamp(3rem,7vw,6rem)] leading-none">{s.value}</span>
                <span className="mt-2 block text-[0.92rem] text-paper-ink/65">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mn-body mt-16 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="grid gap-12">
            <AwardList title="From the chair" rows={MUN.chair} />
            <AwardList title="On the floor" rows={MUN.floor} />

            <div className="flex flex-wrap items-end justify-between gap-6 rounded-2xl bg-paper-ink px-6 py-7 text-bone">
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

          {/* Photos: a dealt pile on desktop, a row on phones */}
          <div className="relative lg:sticky lg:top-24 lg:h-[min(78svh,720px)] lg:self-start">
            <span
              className="mn-disc pointer-events-none absolute right-[-10%] top-[8%] hidden aspect-square w-[70%] rounded-full bg-blood lg:block"
              aria-hidden="true"
            />
            <div className="grid grid-cols-3 gap-3 lg:block">
              {MUN.photos.map((ph, i) => (
                <figure
                  key={ph.src}
                  className={`mn-card overflow-hidden rounded-2xl bg-paper-ink/10 shadow-[0_30px_60px_-30px_rgba(27,23,21,0.55)] lg:absolute lg:w-[72%] ${
                    ["lg:left-0 lg:top-0 lg:-rotate-3", "lg:right-0 lg:top-[14%] lg:rotate-[4deg]", "lg:left-[10%] lg:top-[30%] lg:-rotate-2"][i]
                  }`}
                >
                  <img src={ph.src} alt={ph.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mun;
