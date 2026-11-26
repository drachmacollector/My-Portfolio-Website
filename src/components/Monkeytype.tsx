import { useEffect, useState } from "react";
import { CONTACT } from "@/constants/content";
import { ArrowUpRight, MonkeytypeLogo } from "@/components/Icons";

interface Best {
  wpm: number;
  acc: number;
  tests: number | null;
}

const FALLBACK: Best = { wpm: 137, acc: 100, tests: null };

/** Best 15-second English run, read live from Monkeytype's public profile API. */
const Monkeytype = () => {
  const [best, setBest] = useState<Best>(FALLBACK);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch("https://api.monkeytype.com/users/drachmacollector/profile", { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => {
        const runs: { wpm: number; acc: number; language: string }[] = json?.data?.personalBests?.time?.["15"] ?? [];
        const top = runs.filter((r) => r.language === "english").sort((a, b) => b.wpm - a.wpm)[0];
        if (!top) return;
        setBest({
          wpm: Math.round(top.wpm),
          acc: Math.round(top.acc),
          tests: json?.data?.typingStats?.completedTests ?? null,
        });
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  return (
    <a
      href={CONTACT.monkeytype}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between gap-8 bg-ink px-6 py-7"
      aria-label={`My Monkeytype profile: best ${best.wpm} words per minute`}
    >
      <span className="flex items-center justify-between gap-4">
        <span className="flex items-center gap-2.5 text-[#e2b714]">
          <MonkeytypeLogo className="h-7 w-7" />
          <span className="text-[1.05rem] tracking-tight">monkeytype</span>
        </span>
        <ArrowUpRight className="h-5 w-5 text-bone/50 transition-colors duration-300 group-hover:text-bone" />
      </span>
      <span>
        <span className="flex items-baseline gap-3">
          <span className="display tabular text-[clamp(3.6rem,7vw,5.6rem)] leading-none transition-colors duration-300 group-hover:text-[#e2b714]">
            {best.wpm}
          </span>
          <span className="label text-bone/60">wpm</span>
        </span>
        <span className="mt-3 block text-[0.92rem] text-bone/60">
          Best 15-second run, English, {best.acc}% accuracy
          {best.tests ? `. ${best.tests.toLocaleString("en-IN")} tests and counting.` : "."}
        </span>
      </span>
    </a>
  );
};

export default Monkeytype;
