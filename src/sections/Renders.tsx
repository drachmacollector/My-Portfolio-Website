import { useCallback, useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RENDERS, DE, pad2 } from "@/constants/content";
import { gsap, useGSAP, DESKTOP_MOTION, ANY_MOTION } from "@/lib/gsap";
import { getLenis } from "@/animations/smooth-scroll";
import { ArrowLeft, ArrowRight, Close, Play } from "@/components/Icons";
import NowPlaying from "@/components/NowPlaying";
import Monkeytype from "@/components/Monkeytype";
import Duolingo from "@/components/Duolingo";
import De from "@/components/De";

const src = (file: string) => `/blender/${encodeURIComponent(file)}`;
const isVideo = (file: string) => file.endsWith(".mp4");

/** "ANIMATION" running past, each word paired with the Blender mark at cap height. */
const MarqueeRow = ({ dir }: { dir: 1 | -1 }) => (
  <div className="overflow-hidden">
    <div className="rn-row marquee-track" data-dir={dir}>
      {[0, 1, 2, 3].map((k) => (
        <span
          key={k}
          className="display flex shrink-0 items-center gap-[0.28em] whitespace-nowrap pr-[0.5em] text-[clamp(4rem,11vw,10rem)] leading-[0.95]"
          aria-hidden={k > 0}
        >
          Animation
          <img
            src="/img/logo-blender.svg"
            alt={k === 0 ? "Blender" : ""}
            className="h-[0.8em] w-auto"
            width={181}
            height={148}
          />
        </span>
      ))}
    </div>
  </div>
);

const Tile = ({ i, onOpen }: { i: number; onOpen: (i: number) => void }) => {
  const r = RENDERS[i];
  const vid = useRef<HTMLVideoElement>(null);
  const [armed, setArmed] = useState(false);
  const tall = r.still.includes("perfume");
  const start = () => {
    if (!isVideo(r.file)) return;
    setArmed(true);
    requestAnimationFrame(() => vid.current?.play().catch(() => {}));
  };
  const stop = () => vid.current?.pause();
  return (
    <button
      onClick={() => onOpen(i)}
      onPointerEnter={start}
      onPointerLeave={stop}
      onFocus={start}
      onBlur={stop}
      className={`rn-tile group relative shrink-0 overflow-hidden rounded-2xl bg-ink-3 text-left ${
        tall ? "aspect-[9/14] h-[min(46svh,440px)]" : "aspect-[16/10] h-[min(46svh,440px)]"
      } max-lg:h-auto max-lg:w-full`}
      aria-label={`Open ${r.title}`}
    >
      <img src={r.still} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      {armed && isVideo(r.file) && (
        <video
          ref={vid}
          src={src(r.file)}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {r.badge && (
        <span className="absolute left-4 top-4 z-[1] inline-flex items-center gap-2 rounded-full bg-blood px-3.5 py-1.5 text-[0.8rem] text-bone shadow-[0_8px_20px_-8px_rgba(0,0,0,0.8)]">
          <span className="h-1.5 w-1.5 rounded-full bg-bone" aria-hidden="true" />
          {r.badge}
        </span>
      )}
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-[linear-gradient(to_top,rgba(11,11,12,0.85),transparent)] p-5 pt-16">
        <span>
          <span className="fraktur block text-[1.1rem] text-blood-hi">{pad2(i + 1)}</span>
          <span className="display text-[1.5rem]">{r.title}</span>
        </span>
        {isVideo(r.file) && (
          <span className="grid h-10 w-10 place-items-center rounded-full bg-bone/10 backdrop-blur-sm transition-colors duration-300 group-hover:bg-blood">
            <Play className="h-3.5 w-3.5" />
          </span>
        )}
      </span>
    </button>
  );
};

const Renders = () => {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.utils.toArray<HTMLElement>(".rn-row").forEach((row) => {
          const dir = Number(row.dataset.dir);
          gsap.fromTo(
            row,
            { xPercent: dir > 0 ? -25 : 0 },
            {
              xPercent: dir > 0 ? 0 : -25,
              ease: "none",
              scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });
      });
      mm.add(DESKTOP_MOTION, () => {
        const strip = root.current!.querySelector<HTMLElement>(".rn-strip")!;
        const dist = () => strip.scrollWidth - window.innerWidth + 80;
        gsap.to(strip, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: ".rn-pin",
            start: "top top",
            end: () => `+=${dist()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  useEffect(() => {
    const lenis = getLenis();
    if (open !== null) lenis?.stop();
    else lenis?.start();
  }, [open]);

  const step = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (o + d + RENDERS.length) % RENDERS.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    // Capture phase, so a focused video can't swallow the keys for seeking.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      e.stopPropagation();
      step(e.key === "ArrowRight" ? 1 : -1);
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open, step]);

  const current = open !== null ? RENDERS[open] : null;

  return (
    <section id="renders" ref={root} className="relative overflow-hidden bg-ink pt-[clamp(76px,11vh,130px)]" aria-label="3D work">
      <div className="text-bone">
        <MarqueeRow dir={1} />
      </div>

      <div className="rn-pin relative flex flex-col justify-center py-16 lg:h-[100svh] lg:py-0 motion-reduce:lg:h-auto">
        <div className="shell mb-10 flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-[46ch] text-[1.02rem] leading-relaxed text-bone/75">
            Modelling, simulation and lighting in Blender. Two national wins at Render Riot came out of this habit. Hover
            a frame to play it, open it to watch full size.
          </p>
          <p className="label flex items-baseline gap-2 text-bone/50">
            <span className="fraktur text-[1.3rem] text-blood">{RENDERS.length}</span> pieces ·
            <De className="text-[1.3rem] text-blood">
              {DE.renders}
            </De>
          </p>
        </div>
        <div className="rn-strip flex gap-5 px-[clamp(20px,5vw,64px)] max-lg:grid max-lg:grid-cols-1 sm:max-lg:grid-cols-2 lg:w-max lg:pl-[calc(var(--rail)+24px)] motion-reduce:lg:w-full motion-reduce:lg:flex-wrap">
          {RENDERS.map((_, i) => (
            <Tile key={i} i={i} onOpen={setOpen} />
          ))}
        </div>
      </div>

      {/* Off the clock */}
      <div className="shell grid gap-px overflow-hidden pb-[clamp(76px,11vh,130px)] pt-6">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.4fr]">
          <Monkeytype />
          <Duolingo />
          <div className="grid md:col-span-2 xl:col-span-1">
            <NowPlaying />
          </div>
        </div>
      </div>

      <Dialog.Root open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-sm data-[state=open]:animate-[fadeIn_.3s_ease-out]" />
          <Dialog.Content
            className="fixed inset-0 z-[81] flex flex-col p-4 outline-none md:p-8"
            aria-describedby={undefined}
          >
            <div className="flex items-center justify-between">
              <Dialog.Title className="display text-[1.6rem]">{current?.title}</Dialog.Title>
              <Dialog.Close className="grid h-12 w-12 place-items-center rounded-2xl border border-bone/15" aria-label="Close">
                <Close />
              </Dialog.Close>
            </div>
            <div className="relative mt-4 flex min-h-0 flex-1 items-center justify-center">
              {current &&
                (isVideo(current.file) ? (
                  <video
                    key={current.file}
                    src={src(current.file)}
                    poster={current.still}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-full max-w-full rounded-xl"
                  />
                ) : (
                  <img src={src(current.file)} alt={current.title} className="max-h-full max-w-full rounded-xl object-contain" />
                ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button onClick={() => step(-1)} className="label inline-flex items-center gap-2 rounded-full border border-bone/20 px-5 py-3 hover:border-bone">
                <ArrowLeft /> Previous
              </button>
              <span className="fraktur text-[1.2rem] text-bone/60">
                <span className="text-blood-hi">{open !== null && open + 1}</span> / {RENDERS.length}
              </span>
              <button onClick={() => step(1)} className="label inline-flex items-center gap-2 rounded-full border border-bone/20 px-5 py-3 hover:border-bone">
                Next <ArrowRight />
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};

export default Renders;
