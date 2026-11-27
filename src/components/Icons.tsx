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

/** GitHub mark (via Simple Icons). */
export const GithubLogo = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={`inline-block ${className}`} aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
  </svg>
);

/** LinkedIn mark (via Simple Icons). Brand blue #0A66C2. */
export const LinkedInLogo = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={`inline-block ${className}`} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
  </svg>
);
