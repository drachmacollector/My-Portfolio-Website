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

/** Official Monkeytype mark (via Simple Icons). Brand yellow #E2B714. */
export const MonkeytypeLogo = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={`inline-block ${className}`} role="img" aria-label="Monkeytype">
    <path d="M20 14.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6ZM8.8 14.4h4.8a.8.8 0 1 1 0 1.6H8.8a.8.8 0 1 1 0-1.6ZM7.2 9.6a.8.8 0 0 1 .8.8V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 0 1 .8-.8Z M3.201 10.359A2.4 2.4 0 0 1 7.2 8.612a2.4 2.4 0 0 1 4 1.788V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 1 0-1.6 0V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 1 0-1.6 0V12a.8.8 0 1 1-1.6 0v-1.6l.001-.041ZM17.6 12.8v2.4a.8.8 0 1 1-1.6 0v-2.4h-2.306c-.493 0-.894-.358-.894-.8 0-.442.401-.8.894-.8h6.212c.493 0 .894.358.894.8 0 .442-.401.8-.894.8H17.6ZM16.8 8H20a.8.8 0 1 1 0 1.6h-3.2a.8.8 0 1 1 0-1.6ZM4 14.4h1.6a.8.8 0 1 1 0 1.6H4a.8.8 0 1 1 0-1.6ZM13.2 8h.4a.8.8 0 1 1 0 1.6h-.4a.8.8 0 1 1 0-1.6Z M1.6 14.4H0V8.8c0-2.208 1.792-4 4-4h16c2.208 0 4 1.792 4 4v6.4c0 2.208-1.792 4-4 4H4c-2.208 0-4-1.792-4-4v-1.6h1.6v1.6A2.4 2.4 0 0 0 4 17.6h16a2.4 2.4 0 0 0 2.4-2.4V8.8A2.4 2.4 0 0 0 20 6.4H4a2.4 2.4 0 0 0-2.4 2.4v5.6Z" fill="currentColor" />
  </svg>
);

/** Official Spotify icon (via Simple Icons). Brand green #1ED760. */
export const SpotifyLogo = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={`inline-block ${className}`} role="img" aria-label="Spotify">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="currentColor" />
  </svg>
);

export const Download = ({ className = "h-3.5 w-3.5" }: P) => (
  <svg viewBox="0 0 16 16" fill="none" className={`inline-block ${className}`} aria-hidden="true">
    <path d="M8 2v9M4 7.5 8 11.5l4-4M2.5 14h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);
