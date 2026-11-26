import { useEffect, useRef, useState } from "react";
import { SECTIONS, CONTACT, toDeva } from "@/constants/content";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { getLenis } from "@/animations/smooth-scroll";
import { ArrowUpRight } from "@/components/Icons";

const LIGHT_SECTIONS = new Set(["mun"]);

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(el, { duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

const Chrome = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [hush, setHush] = useState<Record<string, boolean>>(() => ({
    hero: typeof window !== "undefined" && window.scrollY < window.innerHeight * 0.55,
  }));
  const overlayRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();

  // Track which chapter is on screen.
  useEffect(() => {
    const triggers = SECTIONS.map((s, i) =>
      ScrollTrigger.create({
        trigger: `#${s.id}`,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => self.isActive && setActive(i),
      }),
    );
    // Sections ask the rail to step aside (hero, sideways chapters).
    const onHush = (e: Event) => {
      const { key, on } = (e as CustomEvent<{ key: string; on: boolean }>).detail;
      setHush((h) => ({ ...h, [key]: on }));
    };
    window.addEventListener("rail-hush", onHush);
    return () => {
      triggers.forEach((t) => t.kill());
      window.removeEventListener("rail-hush", onHush);
    };
  }, []);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(overlayRef.current, { visibility: "visible" })
        .fromTo(
          overlayRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "expo.inOut" },
        )
        .from(
          ".menu-item",
          { yPercent: 110, duration: 0.8, stagger: 0.05, ease: "expo.out" },
          "-=0.25",
        );
    },
    { scope: overlayRef },
  );

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      tl.current?.timeScale(1).play();
      lenis?.stop();
    } else {
      tl.current?.timeScale(1.6).reverse();
      lenis?.start();
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const light = LIGHT_SECTIONS.has(SECTIONS[active].id) && !open;

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 450 : 0);
  };

  return (
    <>
      {/* Top right actions */}
      <div className="fixed right-5 top-5 z-[60] flex items-center gap-3 md:right-8 md:top-7">
        <a
          href={CONTACT.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={`label hidden sm:inline-block rounded-full border px-4 py-3 transition-colors duration-300 ${
            light
              ? "border-paper-ink/25 bg-paper text-paper-ink hover:bg-paper-ink hover:text-paper"
              : "border-bone/20 bg-ink text-bone hover:bg-bone hover:text-ink"
          }`}
        >
          Résumé <ArrowUpRight />
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`group grid h-12 w-12 place-items-center rounded-2xl border transition-colors duration-300 ${
            light ? "border-paper-ink/25 bg-paper" : "border-bone/15 bg-ink-2"
          } backdrop-blur-sm`}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-[1.5px] w-5 transition-all duration-500 ${
                light ? "bg-paper-ink" : "bg-bone"
              } ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-5 transition-all duration-500 ${
                light ? "bg-paper-ink" : "bg-bone"
              } ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {/* Chapter rail */}
      <nav
        aria-label="Chapters"
        className={`fixed left-4 top-1/2 z-50 hidden w-[112px] -translate-y-1/2 rounded-2xl border px-4 py-5 lg:block transition-[color,background-color,border-color,opacity] duration-500 ${
          light ? "border-paper-ink/10 bg-paper text-paper-ink" : "border-bone/10 bg-ink text-bone"
        } ${Object.values(hush).some(Boolean) && !open ? "pointer-events-none opacity-0" : ""}`}
      >
        <ol className="flex flex-col gap-[12px]">
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(s.id);
                }}
                className="group flex items-center gap-3"
                aria-current={i === active ? "true" : undefined}
              >
                <span
                  className={`deva w-4 text-center text-[15px] transition-colors duration-300 ${
                    i === active ? "text-blood" : "opacity-60 group-hover:opacity-100"
                  }`}
                >
                  {toDeva(i)}
                </span>
                <span
                  className={`label text-[0.7rem] transition-all duration-500 ${
                    i === active
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                  }`}
                >
                  {s.label}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Full-screen menu */}
      <div
        id="site-menu"
        ref={overlayRef}
        className="invisible fixed inset-0 z-[55] flex flex-col justify-between bg-ink px-5 pb-8 pt-28 md:px-8 md:pt-36 lg:pl-[calc(var(--rail)+24px)]"
        aria-hidden={!open}
      >
        <ul className="flex flex-col">
          {SECTIONS.slice(1).map((s, i) => (
            <li key={s.id} className="overflow-hidden border-b border-bone/10">
              <a
                href={`#${s.id}`}
                tabIndex={open ? 0 : -1}
                onClick={(e) => {
                  e.preventDefault();
                  go(s.id);
                }}
                className="menu-item group flex items-baseline gap-5 py-2 md:py-3"
              >
                <span className="tabular w-8 text-lg text-blood md:text-xl">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-[13vw] transition-colors duration-300 group-hover:text-blood md:text-[5.5rem]">
                  {s.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8">
          <a tabIndex={open ? 0 : -1} className="label link-underline" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <a tabIndex={open ? 0 : -1} className="label link-underline" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight />
          </a>
          <a tabIndex={open ? 0 : -1} className="label link-underline" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight />
          </a>
          <a tabIndex={open ? 0 : -1} className="label link-underline" href={CONTACT.resume} target="_blank" rel="noopener noreferrer">
            Résumé <ArrowUpRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default Chrome;
