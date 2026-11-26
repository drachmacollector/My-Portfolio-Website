import { useEffect, useState } from "react";
import { ArrowUpRight } from "@/components/Icons";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

/** Polls the Netlify function once a minute while the tab is visible. */
const NowPlaying = () => {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    let alive = true;
    let ctrl: AbortController | null = null;
    let timer: ReturnType<typeof setInterval> | null = null;

    const load = async () => {
      ctrl?.abort();
      const c = new AbortController();
      ctrl = c;
      try {
        const res = await fetch("/.netlify/functions/spotify", { signal: c.signal });
        if (!res.ok) throw new Error(String(res.status));
        const json = await res.json();
        if (alive && json?.title) {
          setData(json);
          setState("ok");
        } else if (alive) setState("error");
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        if (alive) setState("error");
      }
    };
    const startPolling = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(load, 60000);
    };
    const onVis = () => {
      if (document.hidden) {
        if (timer) clearInterval(timer);
        timer = null;
      } else {
        load();
        startPolling();
      }
    };
    if (!document.hidden) {
      load();
      startPolling();
    }
    document.addEventListener("visibilitychange", onVis);
    return () => {
      alive = false;
      ctrl?.abort();
      if (timer) clearInterval(timer);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const label = data?.isPlaying ? "Playing now on Spotify" : "Last played on Spotify";

  if (state !== "ok" || !data) {
    return (
      <div className="flex flex-col justify-end bg-ink px-6 py-8">
        <span className="text-[1.05rem] text-bone/60">
          {state === "loading" ? "Checking what I'm playing on Spotify…" : "Nothing playing on Spotify right now."}
        </span>
      </div>
    );
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-end justify-between gap-6 bg-ink px-6 py-8"
    >
      <span className="flex min-w-0 items-end gap-5">
        <img
          src={data.albumImageUrl}
          alt=""
          className={`h-20 w-20 shrink-0 rounded-full object-cover ${data.isPlaying ? "animate-[spin_9s_linear_infinite]" : ""} motion-reduce:animate-none`}
        />
        <span className="min-w-0">
          <span className="display block truncate text-[clamp(1.5rem,2.6vw,2.2rem)] transition-colors duration-300 group-hover:text-blood-hi">
            {data.title}
          </span>
          <span className="mt-1 flex items-center gap-2 truncate text-[0.92rem] text-bone/60">
            {data.isPlaying && <span className="h-2 w-2 shrink-0 rounded-full bg-blood-hi" aria-hidden="true" />}
            {data.artist} · {label}
          </span>
        </span>
      </span>
      <ArrowUpRight className="h-5 w-5 shrink-0 text-bone/50 transition-colors duration-300 group-hover:text-bone" />
    </a>
  );
};

export default NowPlaying;
