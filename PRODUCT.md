# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, hiring managers and partners at consulting firms and applied-AI teams who land on the site from a resume, LinkedIn or a referral and give it a minute or two. They want to know who Nakul is, what he has actually shipped, and whether he can take a messy real-world problem to a working AI system.

Secondary: peers, hackathon judges, MUN and debate contacts, and collaborators who arrive from GitHub or socials.

## Product Purpose

A personal portfolio for Nakul Bhadade, B.Tech CSE (AI & ML) at IIIT Nagpur (Aug 2024 – present). It must sell him first for **AI consulting / applied AI** roles: framing a client's problem, then building the system that solves it. Success is a visitor who leaves knowing what he built at KPMG, has opened at least one project, and has a way to contact him or download the resume.

## Positioning

He is not only a model-trainer and not only a web developer: at KPMG he consulted for a state government and then shipped the production system himself (an IDP pipeline that verified ~1.5 lakh scholarship records, delivered as a Windows app the department runs on its own). Strategy plus delivery, backed by a wide build record (web, ML research, Windows tooling, 3D animation) and a debater's communication skills.

## Operating Context

Visitors read on desktop between other tabs, and on phones from LinkedIn. Deployed on Netlify (`nakul-web.netlify.app`), with Netlify Forms for contact and Netlify Functions for the Spotify now-playing widget.

## Capabilities and Constraints

- Stack: React 18 + TypeScript + Vite + Tailwind; GSAP, Framer Motion and Lenis are available. Not Next.js.
- Contact form must keep working through Netlify Forms (`name="contact"` form in index.html).
- Spotify widget polls `/.netlify/functions/spotify`; it must keep working.
- Kept personal widgets (confirmed): Spotify now-playing, Blender 3D art gallery, Monkeytype stats. Removed: tech-stack marquee, joke cards, glitch background, canvas cursor.
- Fonts: the user asked for fonts sourced from ifonts.xyz, self-hosted.

## Brand Commitments

- Reference the user likes: https://www.worksruthi.com/ (craft bar, not a world to copy).
- The user wants the redesign to stop looking cluttered, outdated and AI-generated.

## Evidence on Hand

- KPMG internship (May – July 2026), AI Consultant Intern, Government & Public Services, Mumbai. Client: Labour Department, Government of Maharashtra; board: MAHABOCW. Three assignments in rising order: Labour Code analysis + AI framework for the Inspection Testing portal; CPI verification and validation framework; MAHABOCW scholarship verification IDP pipeline (Playwright, PaddleOCR, Qwen 2.5 7B via Ollama, Gemini with Google Search grounding + OpenRouter fallback, RapidFuzz cache, deterministic 0–100 scoring, Excel output, packaged as a Windows desktop app). Source: `D:\Code\KPMG\internship report.md`, `D:\Code\KPMG\ARCHITECTURE.md`.
- Photo of Nakul at the KPMG office: `D:\Code\KPMG\20260714_155738.jpg`.
- **Confidentiality (confirmed):** case study only. No portal screenshots, no applicant data, no internal documents, no client data. Architecture may be shown as an original diagram.
- The Consistent Academy, Web Developer Intern (Dec 2025 – present): React + Firebase + Cloudinary platform, 150+ users, Razorpay, Resend.
- Projects: Icarus, D.R.I.F.T., XBar, Kepler AI, FloatChat (Aquasense), The Consistent Academy, Parkify, Kadam; research study on fetal ultrasound classifiers (in progress). Screens in `public/projects/`.
- Achievements (from resume): €1,000 grant for CWMUN New York 2026; 1st Healthy Headspace Hackathon; 2nd AstroHack 2025; 4th Krafton Game Dev Hackathon (IIT Bombay E-Summit 2025); 2× winner Render Riot (national 3D animation); 1st Infacto 4.0 (national debate).
- Blender renders and videos in `public/blender/`. Resume at `public/Nakul_Resume.pdf`.
- Absent: testimonials, client quotes, metrics beyond those above. Do not invent them.

## Product Principles

1. KPMG is one entry under Experience, featured but not the whole site: official KPMG logo, the full office photo with its background, no oversized KPMG lettering, no KPMG mentions in the hero. (Owner direction, 2026-11-27.)
2. Show the work, not adjectives: real systems, real numbers, real screens.
3. Fewer, better sections. Every block must earn its place.
4. Personality stays, but as a footnote to the work, not the headline.

## Owner direction, 2026-11-27

- Use official brand marks for third parties (KPMG wordmark, Monkeytype and Spotify logos), never the site's own type or colours to spell them.
- Projects: eRTMAC-NWIS (SIH 2026, team PLANNS, Oil India) replaces Kadam and FloatChat.
- Model UN gets its own compact section (source: the owner's MUN résumé on Canva and `C:\Users\Nakul\Desktop\EVERYTHING\MUNs`). Don't overdo it.
- German blackletter is an accent: rail numerals, a few tape words, a couple of headings. Not every counter and label.
