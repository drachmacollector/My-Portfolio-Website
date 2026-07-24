# Nakul Portfolio — Project Documentation

## Overview

A personal developer portfolio website built with **React 18 + TypeScript + Vite**. It showcases projects, experience, 3D artwork, and provides contact functionality via Netlify Forms. Designed for performance and visual impact across all screen sizes.

**Live URL:** [nakul-web.netlify.app](https://nakul-web.netlify.app)  
**Repository:** [github.com/drachmacollector/My-Portfolio-Website](https://github.com/drachmacollector/My-Portfolio-Website)

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.x | UI framework |
| **TypeScript** | 5.x | Type safety throughout |
| **Vite** | 5.x | Build tool & dev server (port 8080) |
| **Tailwind CSS** | 3.x | Utility-first styling |
| **Framer Motion** | 12.x | Navbar dock animation, RotatingText, mobile fade transitions |
| **GSAP + ScrollTrigger** | 3.x | Projects horizontal scroll pinning, scroll-triggered reveals |
| **@gsap/react** | 2.x | `useGSAP` hook for scoped GSAP animations |
| **Lenis** | 1.x | Smooth scrolling (synced to GSAP via `gsap.ticker`) |
| **Radix UI** | — | Dialog, Tooltip primitives (headless, accessible) |
| **Lucide React** | 0.462 | Icon library |
| **Netlify Forms** | — | Contact form submission (no backend needed) |
| **Netlify Functions** | — | Serverless: Spotify now-playing, visitor IP log |

> **CRITICAL:** This is a **Vite** project, NOT Next.js. Never add `"use client"` directives — they are meaningless and wrong here.

---

## Folder Structure

```
src/
├── animations/
│   └── smooth-scroll.ts       # Lenis init + GSAP ticker bridge + getLenis() export
│
├── components/
│   ├── effects/
│   │   ├── AuroraText.tsx     # Animated gradient text (memo'd)
│   │   ├── CanvasCursor.tsx   # Canvas-based cursor trail (desktop only)
│   │   └── LetterGlitch.tsx   # Full-screen background glitch effect (desktop only)
│   ├── layout/
│   │   └── Navbar.tsx         # Floating dock navbar (Framer Motion dock magnification)
│   └── ui/
│       ├── 3d-card.tsx        # 3D hover card — CardContainer/CardBody/CardItem
│       ├── dialog.tsx         # Radix Dialog wrapper with portal + overlay
│       └── tooltip.tsx        # Radix Tooltip wrapper
│
├── constants/                 # ALL static data lives here — never inline data in components
│   ├── experience.ts          # EXPERIENCES array (role, company, date, type, responsibilities)
│   ├── navigation.ts          # NAV_ITEMS array (href, label)
│   ├── projects.ts            # PROJECTS array (id, title, description, image, tech, urls)
│   ├── social-links.tsx       # SOCIAL_LINKS + DEVELOPER_TITLES
│   └── tech-stack.ts          # TECH_STACK array (icon filenames matching public/projects/ and public/tech/)
│
├── hooks/
│   ├── use-canvas-cursor.ts   # Canvas cursor logic (@ts-nocheck, prototype-based JS)
│   └── use-mobile.tsx         # useIsMobile() — breakpoint 768px
│
├── lib/
│   └── utils.ts               # cn() = clsx + tailwind-merge
│
├── pages/
│   └── Index.tsx              # Main page — composes all sections, initialises Lenis
│
├── sections/
│   ├── hero/
│   │   ├── HeroSection.tsx    # Hero layout (2-col grid, typing animation)
│   │   ├── HeroButtons.tsx    # Keyboard-keycap social links + resume Dialog
│   │   ├── Profile.tsx        # Profile image with HUD orbit rings
│   │   └── RotatingText.tsx   # Animated word-cycling text (AnimatePresence)
│   ├── about/
│   │   ├── AboutSection.tsx   # Section wrapper — owns id="about", heading
│   │   ├── Bento.tsx          # Bento grid layout (lg: 12-col CSS grid)
│   │   ├── AboutCard.tsx      # Easter egg text card
│   │   ├── Blender.tsx        # 3D art card with Dialog gallery + lightbox
│   │   ├── Monkeytype.tsx     # Typing speed stats card (static)
│   │   ├── Socials.tsx        # Social media icons card
│   │   ├── Spotify.tsx        # Now-playing widget (polls /.netlify/functions/spotify)
│   │   └── TechStack.tsx      # Infinite marquee of tech icons
│   ├── experience/
│   │   └── Experience.tsx     # Work experience timeline (maps EXPERIENCES)
│   ├── projects/
│   │   └── ProjectsSection.tsx # Horizontal scroll (GSAP pin) desktop / vertical grid mobile
│   └── contact/
│       ├── ContactSection.tsx  # Contact layout (glass-box card + form)
│       └── SendMessage.tsx     # Netlify form with inline success/error feedback
│
├── styles/
│   ├── index.css              # Global styles, Tailwind layers, all extracted CSS classes
│   └── buttons.css            # Keyboard keycap (.key, .board, .key-position) styles
│
├── App.tsx                    # Root — wraps Index in TooltipProvider
└── main.tsx                   # Entry — createRoot, imports index.css
```

---

## Architecture & Key Decisions

### 1. Animation Strategy

Three animation systems coexist — each has a strict domain:

| System | Owns | Why |
|---|---|---|
| **GSAP** | Scroll-based animations — horizontal scroll pinning, any `ScrollTrigger` effect | Best-in-class scroll orchestration; syncs with Lenis via ticker |
| **Framer Motion** | Interactive micro-animations — Navbar dock magnification, RotatingText word transitions | Declarative API ideal for component-local, gesture-driven animations |
| **CSS animations** | Looping ambient animations — Profile HUD rings, TechStack marquee, Spotify bars, aurora text | Zero JS overhead for persistent loops |

**Do NOT mix these** — don't use GSAP for hover effects (use Framer Motion or CSS) and don't use Framer Motion for scroll-triggered reveals (use GSAP).

### 2. Smooth Scroll (Lenis + GSAP)

Lenis is initialized **once** in `Index.tsx → useEffect`. The `smooth-scroll.ts` module is a singleton:

```ts
initSmoothScroll() → () => void  // call once at startup, returns cleanup
getLenis()         → Lenis | null // call anywhere to pause/resume scroll
```

**Lenis is skipped on touch/mobile** — native scroll is faster on Android. Any component that opens a modal must call `getLenis()?.stop()` on open and `.start()` on close (see `Blender.tsx` for the established pattern).

### 3. Data Layer

All static content lives in `src/constants/`. **Never hardcode data inside a component.**

| To change... | Edit... |
|---|---|
| Projects | `constants/projects.ts` |
| Tech stack icons | `constants/tech-stack.ts` + add PNG to `public/projects/ and public/tech/` |
| Nav items | `constants/navigation.ts` |
| Social links / hero titles | `constants/social-links.tsx` |
| Experience entries | `constants/experience.ts` |

### 4. Mobile vs Desktop Rendering

`useIsMobile()` returns `true` when `window.innerWidth < 768px`. Components use it to:
- **Skip effects** — LetterGlitch and CanvasCursor are not rendered (`Index.tsx` gate)
- **Swap animations** — RotatingText: per-letter blur (desktop) vs simple fade (mobile)
- **Change layout** — ProjectsSection: GSAP horizontal scroll (desktop) vs vertical grid (mobile)
- **Disable 3D** — Blender card tilt, 3d-card hover transforms

### 5. CSS Architecture

All CSS lives in two files only — no `<style>` tags inside components ever.

**`src/styles/index.css`** — structured in Tailwind layers:
- `@layer base` — CSS tokens (design system colors, radius), body reset
- `@layer components` — named classes: `.glass-card`, `.neomorph-card`, `.glow-text`, `.nav-link`, `.typing-container`, `.project-card`, `.tech-tag`, `.live-tag`, `.contact-form`, `.neon-glow`, `.marquee`, `.marquee-slow`
- Global (outside layers) — bento, Spotify bars, TechStack marquee, ContactSection glass-box
- `@media (hover: none) and (pointer: coarse)` at the bottom — surgical mobile animation overrides. This pauses **specific named classes** (not all transitions globally — that breaks dialog animations)

**`src/styles/buttons.css`** — exclusively for `.key`, `.board`, `.key-position` keyboard-keycap styles. Imported directly in `HeroButtons.tsx`.

### 6. Tailwind Customization

Custom tokens in `tailwind.config.ts → theme.extend`:

```
colors.firebase.*    → brand palette (orange, red, purple, pink, blue, cyan, green)
colors.neon.*        → neon red variants  
fontFamily.space     → 'Space Grotesk' (body font)
fontFamily.mono      → 'JetBrains Mono' (code/HUD readout font)
animation.*          → fade-in, float, glow-pulse, rotate-slow, rotate-slow2,
                       spin-reverse, neon-pulse, orbit, aurora, lock-on, blink, typing
```

If a color is used more than once, add it to `tailwind.config.ts`. Never use arbitrary hex values inline for brand colors.

---

## Sections Reference

### Hero (`sections/hero/`)
- 2-column grid (`grid-cols-1 lg:grid-cols-2`). Left: text + buttons. Right: Profile.
- Typing animation uses React `setInterval` state — no GSAP needed.
- Once "Nakul" is reached, `AuroraText` wraps the name for the gradient effect.
- `HeroButtons.tsx` renders `SOCIAL_LINKS` as `.key` keyboard buttons. Resume opens as `<iframe>` inside a Radix Dialog.
- `Profile.tsx` — pure CSS/Tailwind HUD rings. No library. `animate-rotate-slow`, `animate-spin-reverse`, `animate-rotate-slow2`.

### About (`sections/about/`)
- `AboutSection.tsx` owns `id="about"` — **never add this id to any child**.
- `Bento.tsx` is a flat `div` — **no section wrapper** — rendering the 12-column CSS grid.
- On mobile/tablet (`sm`, `md`), grid collapses to 1–2 columns with `auto-rows-auto`.
- `Blender.tsx` is self-contained: card trigger → Dialog → gallery grid → lightbox. Uses `getLenis()` to pause/resume scroll. Keyboard arrows navigate the lightbox.

### Experience (`sections/experience/`)
- Simple vertical list mapping `EXPERIENCES` constant.
- `id="experience"` — linked from Navbar.

### Projects (`sections/projects/`)
- **Desktop:** GSAP ScrollTrigger pins the section, translates cards horizontally.
- **Mobile:** Vertical flex column, no GSAP.
- Cards use `CardContainer/CardBody/CardItem` from `components/ui/3d-card.tsx`.

### Contact (`sections/contact/`)
- `SendMessage.tsx` — Netlify Forms: `<form name="contact" data-netlify="true">`. The hidden detection form is in `index.html`. Uses `fetch` POST with URL-encoded body.

---

## Netlify Functions (`netlify/functions/`)

| File | Endpoint | Env Vars Required |
|---|---|---|
| `spotify.ts` | `/.netlify/functions/spotify` | `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` |
| `log-ip.js` | `/.netlify/functions/log-ip` | none |

---

## Public Assets (`public/`)

```
public/
├── favicon.ico
├── Nakul_Resume.pdf           # Active resume — linked from HeroButtons
├── blender/                   # 3D art files (.mp4, .png) for Blender gallery
└── public/
    ├── Nakul 5.jpg            # Profile photo (LCP image — preloaded in index.html)
    ├── Blender.png            # Blender logo (Bento card)
    ├── monkeytype.png         # Monkeytype logo (Monkeytype card)
    ├── instagram.png, reddit.png, 4chan.png  # Socials card icons
    ├── [ProjectName].png      # Screenshots — match image field in projects.ts
    └── [TechName].png         # Tech icons — must match exact string in tech-stack.ts
```

**Tech icon naming:** `TechStack.tsx` constructs the path as `` `/tech/.png` ``. The filename must match the constant string exactly (case-sensitive).

---

## Responsive Design Rules

| Breakpoint | Behaviour |
|---|---|
| `< 768px` (mobile) | Single-column. No LetterGlitch, no CanvasCursor. Vertical projects grid. Simple animations. Lenis disabled. |
| `768px – 1024px` (tablet) | 2–3 column bento, vertical projects. |
| `>= 1024px` (desktop) | 12-column bento, GSAP horizontal scroll, all effects. |

**Spacing standard:** `py-20 px-6 lg:px-8` for sections. Use `min-h-*` not fixed `h-*` on containers that hold text.

---

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 8080)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint
```

---

## Deployment (Netlify)

- `netlify.toml` — SPA redirect rules + function directory config.
- Netlify Forms auto-detects the `<form name="contact" netlify hidden>` in `index.html`.
- Set Spotify env vars in Netlify dashboard for the Spotify function to work.

---

## Future Development Instructions

### Adding a New Section
1. Create `src/sections/[name]/[Name]Section.tsx`
2. Give root element `id="[name]"` for anchor navigation
3. Import and render in `src/pages/Index.tsx`
4. Add nav link to `src/constants/navigation.ts` if needed
5. Use standard padding: `py-20 px-6 lg:px-8`

### Adding a New Component
- Reusable UI → `src/components/ui/`
- Visual effect → `src/components/effects/`
- Page structure → `src/components/layout/`
- Section-specific → `src/sections/[section]/`

### Adding CSS
- Named component styles → `src/styles/index.css` in `@layer components`
- Keyframes / animations → `tailwind.config.ts` under `keyframes` + `animation`
- **Do NOT** use `<style>` tags inside component files

### Adding a GSAP Animation
```tsx
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = useRef<HTMLElement>(null);
useGSAP(() => {
  if (isMobile) return;  // always gate expensive animations
  // animations scoped to sectionRef
}, { scope: sectionRef, dependencies: [isMobile] });
```

### Adding a Project
Edit `src/constants/projects.ts`:
```ts
{
  id: 7,
  title: "🔭 My New Project",
  description: "One concise paragraph.",
  image: "/projects/MyProject.png",  // add PNG to public/projects/ and public/tech/
  tech: ["React", "Python"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
}
```

### Adding an Experience Entry
Edit `src/constants/experience.ts`:
```ts
{
  role: "Job Title",
  company: "Company Name",
  date: "Month YYYY – Month YYYY",
  type: "Remote" | "On-site" | "Hybrid",
  responsibilities: ["Bullet point one.", "Bullet point two."]
}
```

### Rules — Never Do These
- ❌ Add `"use client"` or `'use client'` — this is Vite, not Next.js
- ❌ Use `<style>` tags inside component files
- ❌ Hardcode data (projects, links, tech) inside component files
- ❌ Add `id="about"` anywhere other than `AboutSection.tsx`
- ❌ Use `transition-duration: 0ms` globally on mobile — breaks dialog animations
- ❌ Commit `dist/`, `tmpdir/`, `bun.lockb`, `deno.lock`, `components.json`
- ❌ Add tech icon filenames that don't match `TECH_STACK` constant strings exactly



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

---

## SEO Guidelines

### Adding New Content
- **Semantic HTML**: Always use correct semantic tags (<section>, <article>, <nav>, <main>).
- **Heading Hierarchy**: Maintain logical heading hierarchy (H1 -> H2 -> H3). Never skip levels or use headings purely for styling. Use CSS classes for styling instead.
- **Image Optimization**: Every new image must have a descriptive lt text. Use loading=lazy` and decoding=sync` for images outside the initial viewport.
- **Structured Data**: Keep JSON-LD in index.html updated if your primary roles, social links, or project highlights change.
- **URLs & Assets**: Ensure any new asset filenames are URL-safe (no spaces, use lowercase and hyphens).
- **Performance**: Monitor bundle size when importing new libraries to maintain fast LCP (Largest Contentful Paint) and Core Web Vitals.

