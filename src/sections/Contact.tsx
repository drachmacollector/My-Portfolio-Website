import { useRef, useState } from "react";
import { CONTACT, toDeva } from "@/constants/content";
import { gsap, useGSAP, ANY_MOTION } from "@/lib/gsap";
import { ArrowUpRight, ArrowRight } from "@/components/Icons";
import { scrollToId } from "@/components/Chrome";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

type Status = "idle" | "sending" | "sent" | "error";

const LINKS = [
  { name: "LinkedIn", note: "The fastest way to reach me about roles.", href: CONTACT.linkedin },
  { name: "GitHub", note: "Code for most of the projects above.", href: CONTACT.github },
  { name: "Résumé", note: "One page, PDF.", href: CONTACT.resume },
];

const Field = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}) => (
  <label className="group block border-b border-bone/15 pb-2 transition-colors duration-300 focus-within:border-blood">
    <span className="label text-bone/55 transition-colors duration-300 group-focus-within:text-blood-hi">{label}</span>
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        rows={4}
        className="mt-2 block w-full resize-none bg-transparent text-[1.1rem] outline-none placeholder:text-bone/30"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        autoComplete={name === "email" ? "email" : name === "name" ? "name" : "off"}
        className="mt-2 block w-full bg-transparent text-[1.1rem] outline-none placeholder:text-bone/30"
      />
    )}
  </label>
);

const Contact = () => {
  const root = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(ANY_MOTION, () => {
        gsap.fromTo(
          ".ct-row",
          { xPercent: 0 },
          {
            xPercent: -30,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
        gsap.from(".ct-cta", {
          scale: 0.6,
          opacity: 0,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: ".ct-cta", start: "top 85%" },
        });
      });

      // Magnetic pull on the main action.
      const btn = root.current!.querySelector<HTMLElement>(".ct-cta");
      if (!btn || !window.matchMedia("(hover: hover)").matches) return;
      const xTo = gsap.quickTo(btn, "x", { duration: 0.6, ease: "power3.out" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.6, ease: "power3.out" });
      const move = (e: PointerEvent) => {
        const b = btn.getBoundingClientRect();
        xTo((e.clientX - (b.left + b.width / 2)) * 0.3);
        yTo((e.clientY - (b.top + b.height / 2)) * 0.3);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };
      btn.addEventListener("pointermove", move);
      btn.addEventListener("pointerleave", leave);
      return () => {
        btn.removeEventListener("pointermove", move);
        btn.removeEventListener("pointerleave", leave);
        mm.revert();
      };
    },
    { scope: root },
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status === "sent" || status === "error") setStatus("idle");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={root} className="relative overflow-hidden bg-ink pt-[clamp(100px,16vh,180px)]" aria-label="Contact">
      {/* Running line behind the call to action */}
      <div className="relative">
      <div className="pointer-events-none" aria-hidden="true">
        <div className="ct-row marquee-track">
          {[0, 1].map((k) => (
            <span key={k} className="display outline-text shrink-0 whitespace-nowrap pr-[0.3em] text-[clamp(5rem,15vw,15rem)] leading-[0.9]">
              So, what are we building ·
            </span>
          ))}
        </div>
        <div className="ct-row marquee-track -mt-[0.3em]">
          {[0, 1].map((k) => (
            <span key={k} className="deva shrink-0 whitespace-nowrap pr-[0.4em] text-[clamp(3rem,8vw,8rem)] leading-[1.15] text-blood/20">
              चला, काहीतरी घडवूया ·
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-[1] flex items-center justify-center">
        <a
          href={`mailto:${CONTACT.email}`}
          className="ct-cta inline-flex items-center gap-3 rounded-full bg-blood px-8 py-5 text-[clamp(1rem,1.6vw,1.2rem)] text-bone shadow-[0_24px_48px_-18px_rgba(0,0,0,0.9)] transition-colors duration-300 hover:bg-blood-deep"
        >
          Email me about a role or a project <ArrowUpRight />
        </a>
      </div>
      </div>

      <div className="shell mt-[clamp(80px,12vh,140px)] grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="flex items-baseline gap-4">
            <span className="display text-[clamp(2.4rem,4.5vw,4rem)]">Write to me</span>
            <span className="deva text-[clamp(1.6rem,2.8vw,2.4rem)] text-blood">संपर्क</span>
          </h2>
          <form name="contact" method="POST" data-netlify="true" onSubmit={onSubmit} className="mt-10 grid gap-8" noValidate={false}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid gap-8 md:grid-cols-2">
              <Field label="Your name" name="name" value={form.name} onChange={onChange} />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} />
            </div>
            <Field label="Subject" name="subject" value={form.subject} onChange={onChange} />
            <Field label="Message" name="message" value={form.message} onChange={onChange} textarea />
            <div className="flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-3 rounded-full bg-bone px-6 py-3.5 text-[0.95rem] text-ink transition-colors duration-300 hover:bg-blood hover:text-bone disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"} <ArrowRight />
              </button>
              <p role="status" aria-live="polite" className="text-[0.92rem]">
                {status === "sent" && <span className="text-bone">Sent. I usually reply within two days.</span>}
                {status === "error" && (
                  <span className="text-blood-hi">
                    That didn't go through. Try again, or email {CONTACT.email} directly.
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>

        <div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="group block border-b border-bone/10 pb-6"
          >
            <span className="label text-bone/55">Email</span>
            <span className="display mt-3 block break-all text-[clamp(1.6rem,3.2vw,2.6rem)] text-blood-hi transition-colors duration-300 group-hover:text-bone">
              {CONTACT.email}
            </span>
          </a>
          <ul>
            {LINKS.map((l) => (
              <li key={l.name} className="border-b border-bone/10">
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[minmax(8rem,auto)_1fr_auto] items-center gap-6 py-6"
                >
                  <span className="display text-[clamp(1.5rem,2.6vw,2.2rem)] transition-colors duration-300 group-hover:text-blood-hi">
                    {l.name}
                  </span>
                  <span className="text-[0.92rem] text-bone/60">{l.note}</span>
                  <ArrowUpRight className="h-4 w-4 text-bone/50 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bone" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="shell mt-[clamp(90px,14vh,160px)] flex flex-wrap items-center justify-between gap-4 border-t border-bone/10 py-8 text-[0.85rem] text-bone/50">
        <p>
          Nakul Bhadade · <span className="deva">{toDeva(2026)}</span>
        </p>
        <p>Designed and built by me, with React and GSAP.</p>
        <button onClick={() => scrollToId("top")} className="label link-underline">
          Back to top
        </button>
      </footer>
    </section>
  );
};

export default Contact;
