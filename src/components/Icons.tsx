type P = { className?: string };

/** One stroke family for every arrow on the site: 1.5px, square caps. */
export const ArrowUpRight = ({ className = "h-[0.8em] w-[0.8em]" }: P) => (
  <svg viewBox="0 0 16 16" fill="none" className={`inline-block ${className}`} aria-hidden="true">
    <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const ArrowDown = ({ className = "h-[0.8em] w-[0.8em]" }: P) => (
  <svg viewBox="0 0 16 16" fill="none" className={`inline-block ${className}`} aria-hidden="true">
    <path d="M8 2v12M3.5 9.5 8 14l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const ArrowRight = ({ className = "h-[0.8em] w-[0.8em]" }: P) => (
  <svg viewBox="0 0 16 16" fill="none" className={`inline-block ${className}`} aria-hidden="true">
    <path d="M2 8h12M9.5 3.5 14 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const ArrowLeft = ({ className = "h-[0.8em] w-[0.8em]" }: P) => (
  <svg viewBox="0 0 16 16" fill="none" className={`inline-block ${className}`} aria-hidden="true">
    <path d="M14 8H2M6.5 3.5 2 8l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const Close = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 16 16" fill="none" className={`inline-block ${className}`} aria-hidden="true">
    <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const Play = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 16 16" className={`inline-block ${className}`} aria-hidden="true">
    <path d="M4 2.5v11L13 8z" fill="currentColor" />
  </svg>
);
