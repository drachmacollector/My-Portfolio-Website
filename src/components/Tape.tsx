import { Fragment } from "react";

/** A crossing band of running text. Latin set in Aostala, Devanagari in Tiro. */
const Tape = ({
  items,
  className = "",
  reverse = false,
  tone = "red",
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  tone?: "red" | "deep";
}) => {
  const run = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((t, i) => {
        const deva = /[ऀ-ॿ]/.test(t);
        return (
          <Fragment key={i}>
            <span className={deva ? "deva px-6 text-[1.35em]" : "display px-6 whitespace-nowrap"}>{t}</span>
            <span className="h-[0.32em] w-[0.32em] shrink-0 rounded-full bg-current opacity-60" />
          </Fragment>
        );
      })}
    </div>
  );
  return (
    <div
      className={`pointer-events-none absolute left-[-15%] w-[130%] overflow-hidden py-[0.55em] ${
        tone === "red" ? "bg-blood text-ink" : "bg-[#3b0910] text-blood-hi/80"
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
