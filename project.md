# Nakul Portfolio — Project Documentation

## Overview

A personal developer portfolio website built with React, TypeScript, Tailwind CSS, Framer Motion, and GSAP. It showcases projects, skills, 3D artwork, and provides contact functionality via Netlify Forms.

**Live URL:** Deployed on Netlify  
**Repository:** [GitHub](https://github.com/drachmacollector/My-Portfolio-Website)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion** | Navbar dock animation, micro-interactions |
| **GSAP + ScrollTrigger** | Projects horizontal scroll, scroll-triggered animations |
| **Lenis** | Smooth scrolling (synchronized with GSAP) |
| **Radix UI** | Dialog, Toast, Tooltip primitives |
| **Lucide React** | Icon library |
| **Sonner** | Toast notifications |
| **Netlify Forms** | Contact form submission |
| **Netlify Functions** | Visitor IP logging |

---

## Folder Structure

```
src/
├── animations/          # Animation infrastructure
│   ├── gsap-setup.ts    # GSAP plugin registration + animation presets
│   └── smooth-scroll.ts # Lenis smooth scroll + GSAP bridge
│
├── components/
│   ├── effects/         # Visual effects
│   │   ├── AuroraText.tsx      # Animated gradient text
│   │   ├── CanvasCursor.tsx    # Canvas-based cursor trails
│   │   └── LetterGlitch.tsx    # Background letter glitch effect
│   ├── layout/          # Structural components
│   │   ├── Navbar.tsx          # Floating dock navbar
│   │   └── LogVisitorIP.tsx    # Netlify function IP logger
│   └── ui/              # Shared UI primitives (Radix-based)
│       ├── 3d-card.tsx         # 3D hover card effect
│       ├── dialog.tsx          # Radix dialog
│       ├── sonner.tsx          # Sonner toast wrapper
│       ├── toast.tsx           # Radix toast
│       ├── toaster.tsx         # Toast renderer
│       ├── tooltip.tsx         # Radix tooltip
│       └── use-toast.ts        # Toast hook (internal)
│
├── constants/           # Static data & configuration
│   ├── navigation.ts    # Nav items
│   ├── projects.ts      # Project cards data
│   ├── social-links.tsx # Social link icons & URLs
│   └── tech-stack.ts    # Tech stack items
│
├── hooks/               # Custom React hooks
│   ├── use-canvas-cursor.ts  # Canvas cursor animation logic
│   ├── use-mobile.tsx        # Mobile breakpoint detection
│   └── use-toast.ts          # Toast state management
│
├── lib/
│   └── utils.ts         # cn() utility (clsx + tailwind-merge)
│
├── pages/
│   ├── Index.tsx         # Main page (composes all sections)
│   └── NotFound.tsx      # 404 page
│
├── sections/            # Page sections (self-contained)
│   ├── hero/
│   │   ├── HeroSection.tsx   # Hero with typing animation
│   │   ├── HeroButtons.tsx   # Social links keyboard
│   │   ├── Profile.tsx       # Profile photo with orbit
│   │   └── RotatingText.tsx  # Animated rotating text
│   ├── about/
│   │   ├── AboutSection.tsx  # About section wrapper
│   │   ├── Bento.tsx         # Bento grid layout
│   │   ├── AboutCard.tsx     # About me card
│   │   ├── Blender.tsx       # 3D gallery card + lightbox
│   │   ├── Monkeytype.tsx    # Typing speed card
│   │   ├── Socials.tsx       # Social links card
│   │   ├── Spotify.tsx       # Spotify embed card
│   │   └── TechStack.tsx     # Tech stack marquee
│   ├── projects/
│   │   └── ProjectsSection.tsx  # Horizontal scroll projects
│   └── contact/
│       ├── ContactSection.tsx   # Contact section with glass card
│       └── SendMessage.tsx      # Netlify form
│
├── styles/
│   ├── index.css        # Global styles + Tailwind layers
│   └── buttons.css      # Keyboard button styles
│
├── App.tsx              # Router + providers
└── main.tsx             # Entry point
```

---

## Key Architectural Decisions

### Animation Strategy
- **GSAP** handles scroll-based animations (horizontal scroll pinning, scroll-triggered reveals)
- **Framer Motion** handles interactive micro-animations (navbar dock, hover effects)
- **Lenis** provides smooth scrolling, synced with GSAP's ScrollTrigger via `gsap.ticker`

### Data Separation
All static data (projects, social links, tech stack, nav items) is extracted to `src/constants/` to keep component files focused on rendering logic.

### Component Organization
- **`sections/`** contains page-level sections that compose the main page
- **`components/`** contains reusable UI primitives and effects
- **`hooks/`** contains custom React hooks

---

## Development

```bash
# Install dependencies
npm install

# Start dev server (port 8080)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Deployment

Deployed on **Netlify** with:
- `netlify.toml` configuration for redirects & function setup
- Netlify Forms for contact form handling
- Netlify Functions for visitor IP logging (`/.netlify/functions/log-ip`)
