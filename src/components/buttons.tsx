// src/components/Buttons.tsx
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import './buttons.css';

interface ButtonProps {
  className?: string;
}

// Inline SVG icon for GitHub (outline)
const GithubIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.286-.01-1.04-.015-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.762-1.604-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.467-2.382 1.235-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.5 11.5 0 0 1 3.003-.403c1.018.005 2.044.138 3.003.403 2.292-1.553 3.298-1.23 3.298-1.23.655 1.652.243 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.814 1.102.814 2.222 0 1.604-.014 2.896-.014 3.289 0 .32.218.694.824.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"
    />
  </svg>
);

// Inline SVG icon for LinkedIn (outline)
const LinkedInIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98 2.98-1.34 2.98-2.98S6.62 3.5 4.98 3.5zM2.4 21.5h5.16V8.99H2.4V21.5zM9.7 8.99h4.95v1.66h.07c.69-1.31 2.37-2.69 4.88-2.69C23.5 8 24 11.26 24 15.14V21.5h-5.16v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.45V21.5H9.7V8.99z" />
  </svg>
);

// Inline SVG icon for “Resume” (scroll/document)
const ScrollIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 12h8v1.5H8V12zm0 3h8v1.5H8V15zm0-6h8v1.5H8V9z" />
  </svg>
);

// Inline SVG icon for Email (outline envelope)
const MailIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.5 4.5A2.5 2.5 0 0 1 4 2h16a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 19.5v-15zM4 4l8 6 8-6H4zm0 2.25V19.5h16V6.25l-8 6-8-6z" />
  </svg>
);

// The "database" of social‐link buttons:
const SOCIAL_MEDIA_DATA = [
  {
    name: 'Github',
    icon: GithubIcon,
    href: 'https://github.com/drachmacollector',
    tooltip: 'Github'
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/nakul-bhadade-b7ba06313/',
    tooltip: 'LinkedIn'
  },
  {
    name: 'Resume',
    icon: ScrollIcon,
    tooltip: 'My Resume'
  },
  {
    name: 'Email',
    icon: MailIcon,
    href: 'mailto:nakulccs@gmail.com',
    tooltip: 'Email Me'
  },
];

const Buttons: React.FC<ButtonProps> = ({ className = '' }) => {
  return (
    <TooltipProvider>
      <div className={`flex items-start text-center flex-col sm:flex-row ${className}`}>
        <div className="board">
          {SOCIAL_MEDIA_DATA.map(({ name, href, icon: Icon, tooltip }) => (
            <div key={name} className="key-position">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    aria-label={name}
                    className="key"
                    data-key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-zinc-900 text-white border-zinc-700">
                  <p>{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>

        {/* Call‐to‐Action "Explore more" key */}
        <div className="key-position flex items-center justify-center ml-2">
          <a
            id="cta-hero-btn"
            href="#about"
            data-block="center"
            className="key call-to-action peer"
          >
            <p className="call-to-action-content text-white">Explore more</p>
          </a>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Buttons;
