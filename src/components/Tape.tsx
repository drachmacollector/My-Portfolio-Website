import { Fragment } from "react";
import type { TapeItem } from "@/constants/content";

/** A crossing band of running text. English set in Aostala caps, German in Grenze Gotisch. */
const Tape = ({
  items,
  className = "",
  reverse = false,
  tone = "red",
}: {
  items: TapeItem[];
  className?: string;
  reverse?: boolean;
  tone?: "red" | "deep";
}) => {
  const run = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((t, i) => (
        <Fragment key={i}>
          {typeof t === "string" ? (
            <span className="display px-6 whitespace-nowrap">{t}</span>
          ) : (
            <span lang="de" className="fraktur px-6 whitespace-nowrap text-[1.35em]">
              {t.de}
            </span>
          )}
          <span className="h-[0.32em] w-[0.32em] shrink-0 rounded-full bg-current opacity-60" />
        </Fragment>
      ))}
    </div>
  );
  return (
    <div
      className={`pointer-events-none absolute left-[-15%] w-[130%] overflow-hidden py-[0.55em] ${
        tone === "red" ? "bg-[#b3102a] text-bone" : "bg-[#3b0910] text-blood-hi"
      } ${className}`}
    >
      <div className={`tape-track ${reverse ? "reverse" : ""}`}>
        {run("a")}
        {run("b")}
      </div>
    </div>
  );
};

export default Tape;
