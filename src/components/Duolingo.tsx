import { useEffect, useState } from "react";
import { CONTACT, DE } from "@/constants/content";
import { ArrowUpRight, DuolingoLogo } from "@/components/Icons";
import De from "@/components/De";

interface Streak {
  streak: number;
  xp: number | null;
}

// Last known values, shown until the live numbers arrive (or if Duolingo is down).
const FALLBACK: Streak = { streak: 450, xp: 10403 };

/** Current German streak, read live from Duolingo through the Netlify function. */
const Duolingo = () => {
  const [data, setData] = useState<Streak>(FALLBACK);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch("/.netlify/functions/duolingo", { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => {
        if (typeof json?.streak === "number" && json.streak > 0) {
          setData({ streak: json.streak, xp: typeof json.xp === "number" ? json.xp : null });
        }
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  return (
    <a
      href={CONTACT.duolingo}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between gap-8 bg-ink px-6 py-7"
      aria-label={`My Duolingo profile: a ${data.streak}-day German streak`}
    >
      <span className="flex items-center justify-between gap-4">
        <span className="flex items-center gap-2.5 text-[#58cc02]">
          <DuolingoLogo className="h-7 w-7" />
          <span className="text-[1.05rem] tracking-tight">duolingo</span>
        </span>
        <ArrowUpRight className="h-5 w-5 text-bone/50 transition-colors duration-300 group-hover:text-bone" />
      </span>
      <span>
        <span className="flex items-baseline gap-3">
          <span className="display tabular text-[clamp(3.6rem,7vw,5.6rem)] leading-none transition-colors duration-300 group-hover:text-[#58cc02]">
            {data.streak}
          </span>
          <span className="label text-bone/60">day streak</span>
        </span>
        <span className="mt-3 block text-[0.92rem] text-bone/60">
          Learning German, every day{data.xp ? `. ${data.xp.toLocaleString("en-IN")} XP so far.` : "."}{" "}
          <De className="text-[1.1rem] text-blood-hi">
            {DE.everyDay}
          </De>
        </span>
      </span>
    </a>
  );
};

export default Duolingo;
