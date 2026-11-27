---
name: Nakul Bhadade
description: A cinematic, chaptered dark portfolio in two scripts, Latin caps and blackletter numerals, cut by one blood red.
colors:
  ink: "#0b0b0c"
  ink-2: "#141416"
  ink-3: "#1c1c1f"
  bone: "#efe7dc"
  blood: "#c8102a"
  blood-hi: "#ff4255"
  tape-red: "#b3102a"
  tape-deep: "#3b0910"
  paper: "#f3ece4"
  paper-ink: "#1b1715"
  paper-mute: "#6b625b"
typography:
  display:
    fontFamily: "Aostala, Georgia, serif"
    fontSize: "clamp(3.4rem, 9vw, 8.5rem)"
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Aostala, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.2vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Aostala, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "General, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 4.4rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "General, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Aostala, Georgia, serif"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.22em"
  numeral:
    fontFamily: "Grenze Gotisch, Georgia, serif"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0em"
rounded:
  screen: "12px"
  panel: "16px"
  sheet: "28px"
  pill: "9999px"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  rail: "120px"
  rail-offset: "144px"
  section: "clamp(110px, 18vh, 200px)"
  row: "20px"
  cell: "32px 24px"
  container: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.blood}"
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-bone:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-bone-hover:
    backgroundColor: "{colors.blood}"
    textColor: "{colors.bone}"
  button-ghost:
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  menu-button:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.bone}"
    rounded: "{rounded.panel}"
    size: "48px"
  chapter-rail:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    rounded: "{rounded.panel}"
    padding: "20px 16px"
    width: "112px"
  chapter-rail-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
  tape:
    backgroundColor: "{colors.tape-red}"
    textColor: "{colors.bone}"
    padding: "0.55em 0"
  tape-deep:
    backgroundColor: "{colors.tape-deep}"
    textColor: "{colors.blood-hi}"
    padding: "0.55em 0"
  project-sheet:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.bone}"
    rounded: "{rounded.sheet}"
    padding: "40px"
  stat-cell:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    padding: "{spacing.cell}"
  field:
    textColor: "{colors.bone}"
    typography: "{typography.body}"
    padding: "0 0 8px 0"
---

# Design System: Nakul Bhadade

## Overview

**Creative North Star: "The Chaptered Night Reel"**

The site plays like a film reel cut into numbered chapters on a near-black ground. Each chapter opens on a giant caps title in a wedge serif, paired with one German word in red, and the reader moves through them on a fixed rail of blackletter numerals. The grammar comes from a cinematic samurai portfolio that the user pinned, carried over into a German setting: blackletter takes the place of kanji, and red tape bands with running text cross behind a cut-out portrait.

Density is low and the drama comes from scale. Display type runs from 2.6rem to 34rem. Body copy is short, set in a quiet grotesque at 17px, and sits in narrow measures (22 to 62ch). Hairline rules and tonal steps of near-black do the structural work that cards would do elsewhere. The palette has one exception: a single warm-paper interlude with a red sun, used for the method chapter.

Motion is part of the world. Chapters pin and scrub, words brighten as the reader scrolls, sheets stack and recede, and a counter preloader lifts like a curtain. On phones, and whenever the reader prefers reduced motion, the same content arrives as plain stacked lists.

**Key Characteristics:**
- Near-black tonal ground (ink, ink-2, ink-3) with bone text, and one red (blood) as the only chroma.
- Two scripts: Aostala caps for Latin display, Grenze Gotisch for every numeral, ordinal and chapter word.
- Bilingual chapter headings, with the English title in bone and the German word in red.
- Crossing red tapes with running text, a giant outline name, and outline/fill marquee rows.
- Hairline lists and gap-px stat grids in place of card walls.
- Rounded pill actions, 16px panels, 28px project sheets.
- Pinned, scrubbed chapters only at 1024px and up with motion allowed. Plain stacks everywhere else.

## Colors

A night palette: three steps of near-black, one warm bone for text, and one red, with a single warm-paper interlude.

### Primary
- **Blood Red** (blood): Fills and large type. Used for the primary pill action, the active rail numeral, the German word in every bilingual heading, the second line of the logotype, the method sun, the pipeline path, the preloader rule and the scrollbar thumb. On ink it measures about 3.3:1, so it is used for large type and fills only, never for small reading text. The CSS custom property name is `--red`.
- **Lit Red** (blood-hi): The legible red for small text on ink (about 5.8:1). Used for units, figure captions, tool lists, honours placings, the "In progress" heading, row hover text and the focus ring. The CSS custom property name is `--red-hi`.

### Secondary
- **Tape Red** (tape-red): The front tape's band, a slightly darker red chosen so bone running text reads on it.
- **Tape Oxblood** (tape-deep): The rear tape's band, carrying lit-red running text. It sits behind the front tape for depth.

### Neutral
- **Ink** (ink): The page ground, the rail plate, menu overlay, preloader and stat cells.
- **Ink Raised** (ink-2): Project sheets and the menu button. It is one step up from the ground.
- **Ink Well** (ink-3): The media well inside project sheets and the render tiles' placeholder.
- **Bone** (bone): All text on ink. Secondary text uses bone at reduced opacity (85, 75, 70, 60 and 55 percent). Hairlines are bone at 10 to 25 percent.
- **Warm Paper** (paper): The ground of the method interlude only. The rail plate and top-right actions flip to it while that chapter is active.
- **Paper Ink** (paper-ink): Text on paper.
- **Paper Mute** (paper-mute): Quiet labels on paper.

### Named Rules
**The One Blood Rule.** Red is the only hue in the system. No second accent, no gradients between hues, no tinted neutrals beyond bone's warmth.

**The Lit Red Rule.** Small text in red uses blood-hi. Blood is reserved for fills, rules and type 1.5rem or larger.

**The Paper Interlude Rule.** Warm paper appears once, as an interlude chapter. While it is on screen, the fixed chrome (rail, résumé pill, menu button) flips to paper and paper-ink, so the chrome never floats dark on a light ground.

## Typography

**Display Font:** Aostala (with Georgia, serif)
**Body Font:** General Book 400 and General Light 300 (with Segoe UI, system-ui, sans-serif)
**Numeral Font:** Grenze Gotisch (with Nirmala UI, serif), German blackletter (OFL)

**Character:** Aostala is a caps-only wedge serif that reads as a film title card. General is a neutral grotesque that stays out of its way. Tiro carries the second script and makes every count on the page bilingual.

### Hierarchy
- **Display** (400, clamp(3.4rem, 9vw, 8.5rem), 0.85): Section titles such as "Selected work", the KPMG chapter titles, menu items (5.5rem) and marquee rows (up to 15rem). The giant outline name runs at 13.4vw with 0.8 leading.
- **Headline** (400, clamp(2.6rem, 5.2vw, 5.4rem), 0.92): Project sheet titles, the pipeline heading and honours entries.
- **Title** (400, clamp(1.5rem, 2.6vw, 2.2rem), 0.92): The English half of bilingual chapter headings, list-row names (experience, contact links) and pipeline stages.
- **Statement** (300, clamp(2rem, 4.6vw, 4.4rem), 1.08, -0.02em): The large light-weight voice of the About statement and the KPMG shipped line. Keep it to 22 to 30ch.
- **Body** (400, 17px base, 1.6): Section copy runs from 0.95rem to 1.05rem with relaxed leading, held to 34 to 62ch. Meta lines run from 0.85rem to 0.92rem at bone 55 to 65 percent.
- **Label** (400, 0.72rem, 0.22em tracking, uppercase): Aostala small caps for field labels, stat units, fact keys, edge labels, footer actions and the résumé pill.
- **Numeral** (400, 1.1 leading): Every ordinal, counter and chapter word. Sizes range from 15px on the rail to 40rem for the ghost chapter numbers.

### Named Rules
**The Two Scripts Rule.** Every number a reader counts is set in blackletter: chapter ordinals, project "01 / 08" counters, honours indices, pipeline stage nodes, the year. Latin figures stay only where the value is data (stat figures, dates, wpm), and those use tabular numerals.

**The Bilingual Heading Rule.** A chapter heading pairs an English display title in bone with one German word in blood, baseline-aligned. The German word is a translation or gloss, never decoration.

**The Caps Display Rule.** Aostala is caps-only. Use it for titles and labels only, never for running text. Keep tracking at -0.01em for display and 0.22em for labels. Blackletter inside a label resets to normal tracking.

## Layout

The page is a single scroll of full-bleed chapters on ink. Content sits in a shell that is 1320px wide at most, with a fluid gutter of clamp(20px, 5vw, 64px). At 1024px and up, the shell's left padding grows to rail plus 24px (144px), so content never runs under the fixed chapter rail.

Section rhythm is clamp(110px, 18vh, 200px) top and bottom. KPMG, renders and contact use slightly shorter variants (90 to 180px). Lists breathe at 20px per row. Stat cells use 32px by 24px. Headings sit 40px above their content.

Composition is asymmetric. Intro copy is right-aligned against large left titles, sheets split 1fr to 1.15fr between text and media, and the record chapter keeps a sticky left column (0.8fr) beside a scrolling honours list (1.2fr).

**Responsive behaviour.** Breakpoints are 420 (xs), 640, 768, 1024 and 1280px. The rail, horizontal KPMG chapters, pinned method stage and pinned render strip exist only at 1024px and up with motion allowed. Below that, and under reduced motion, every sequence becomes a vertical stack. Method becomes a plain list with the German word above each move, KPMG chapters stack with top hairlines, and renders become a one- or two-column grid. The hero portrait drops to 58svh on phones, and the role copy moves to the top.

### Named Rules
**The Desktop Motion Rule.** Pinning and scrubbing run only under `(min-width: 1024px) and (prefers-reduced-motion: no-preference)`. Light reveals (fade, rise) may run at any width when motion is allowed. Nothing pins on a phone.

**The Rail Offset Rule.** At desktop width, any left-anchored element uses the 144px rail offset, not the plain gutter.

## Elevation & Depth

The system is flat and tonal. Depth comes from stepping ink to ink-2 to ink-3, from hairlines in bone at 10 percent, from a fractal-noise grain overlay (6 percent, overlay blend) on the hero and KPMG opener, and from layered scale: tapes behind the portrait, and the outline name behind both. Grayscale portraits (grayscale 1, contrast 1.12, brightness 0.92) push people back into the ground until hover returns their colour.

### Shadow Vocabulary
- **Floating media** (`box-shadow: 0 30px 60px -20px rgba(0,0,0,0.8)`): The project screenshot inside a sheet's media well, which tilts with scroll velocity.
- **Floating action** (`box-shadow: 0 24px 48px -18px rgba(0,0,0,0.9)`): The magnetic contact action that sits over the marquee.

### Named Rules
**The Soft Drop Rule.** Shadows are long, blurred and black, and they appear only under media or an action that floats over moving type. There are no offset hard shadows and no coloured glows.

## Shapes

The form language has four radii and a circle. Actions are full pills. Panels (the chapter rail, menu button, stat grids, render tiles, lightbox close) use 16px. Project sheets use 28px. Screens and media inside them use 12px. Circles carry the sun, the pipeline stage nodes, play buttons, the live dot and the spinning Spotify disc.

Borders are 1px hairlines in bone at 10 to 25 percent, or paper-ink at 10 to 25 percent on paper. Stat grids are drawn with a gap-px grid over a bone/10 fill, so the hairlines are the gaps between cells. Icons are a single family: 16-unit SVG arrows, a close cross and a play triangle, with 1.5px strokes and square caps.

## Components

### Buttons
Tactile pills, quiet until touched.
- **Shape:** Full pill (9999px).
- **Primary:** Blood fill, bone text, 12px by 20px, 0.9rem General, with a trailing 1.5px arrow. This is the hero's "Read the KPMG story" action. The contact action is the same pill at 20px by 32px and up to 1.2rem, with the floating-action shadow and a magnetic pull toward the pointer. On hover the fill deepens to oxblood #8e0d1e, which keeps bone text above 4.5:1.
- **Bone:** Bone fill, ink text, 10px by 20px. It turns blood with bone text on hover. Used for "Visit" on project sheets and "Send" on the form.
- **Ghost:** Transparent with a bone/20 hairline, 10px by 20px. On hover the hairline goes to full bone, or the button fills blood on the KPMG closing action. Used for "Code", lightbox previous/next, and the résumé pill (set in label type).
- **Focus:** A 2px lit-red outline at a 4px offset, globally.

### Navigation
- **Chapter rail:** A fixed plate (112px wide, 16px radius, ink fill, bone/10 hairline), vertically centred at the left edge, at 1024px and up only. It lists the blackletter ordinals 0 to 7. The active ordinal turns blood, and its label slides in beside it in label type. Hovering another ordinal previews its label at 60 percent. On the paper interlude the plate turns paper.
- **Top-right actions:** The résumé ghost pill (hidden below 640px) and a 48px menu button with a 16px radius. The menu button has an ink-2 fill at 80 percent with backdrop blur and two 1.5px bars that cross into an X.
- **Menu overlay:** A full-screen ink sheet revealed top-down by clip-path (0.7s expo.inOut). Items are display type at 13vw (5.5rem on desktop), each with a blood blackletter ordinal and a bone/10 hairline. Items rise in at a 0.05s stagger and turn blood on hover. Underlined label links sit at the foot.

### Tapes
The signature device. Two bands cross the hero at -11° and 7°, each 130 percent of the viewport wide. Each carries running text that alternates Aostala caps and Grenze Gotisch German words, separated by small round dots. The front tape is tape-red with bone text and runs 38s. The rear tape is tape-deep with lit-red text and runs 46s in reverse. On scroll-out they swing apart. Under reduced motion they stop.

### Bilingual Heading
A baseline-aligned pair with a 12 to 16px gap: an English Aostala title (1.6 to 4.6rem) in bone, and one German word in blood at about 0.8 times its size. In KPMG chapters and the mobile method list the pair stacks, with the German word above at up to 7.5rem in blood.

### Outline Type
Aostala caps with transparent fill and a 1px stroke in bone at 22 percent. Used for the giant hero name along the bottom edge, and as alternating rows in the outline/fill marquees in the renders and contact chapters. A faint German row in blood at 20 percent runs under the contact marquee.

### Hairline Lists
Rows separated by bone/10 bottom borders, 20px vertical padding, with an Aostala name and a General meta line. Experience rows show a right-aligned tabular date. Honours rows use a three-column grid (blackletter index, title with note, lit-red placing) and indent 12px on hover. Contact links use name, note and arrow, and the arrow nudges up and right on hover. Rows enter with an 8 percent slide and 0.07s stagger.

### Project Sheets
Full-viewport sticky sheets that stack. Each is an ink-2 panel with a 28px radius and bone/10 hairline. It is split into a text side (40px padding: German blackletter "02 / 08" counter, headline title, kind and year, body, stack line, pill actions) and an ink-3 media well. The well holds a 12px-radius screenshot with the floating-media shadow. As the next sheet slides over, the previous one scales to 0.9 and dims to 45 percent brightness. Screens tilt up to ±14° on rotateX with scroll velocity. Below 1024px the media well moves above the text at 30svh.

### Stat Row
A gap-px grid of ink cells inside a 16px-radius bone/10 frame: 2 columns on phones, 4 at 1024px and up for KPMG numbers, and 3 for About facts. Each cell holds a display tabular figure (3.2 to 5.6rem) with a lit-red unit in label type, then a General caption. Figures count up once on entry.

### Inputs / Fields
- **Style:** No box. A bone/15 bottom hairline with a label above, transparent ground, 1.1rem General text, bone/30 placeholder and a lit-red caret.
- **Focus:** The hairline turns blood and the label turns lit red.
- **Status:** A polite live region beside the send button, with bone text for success and lit red for failure.

### Pipeline
An SVG path in blood (2.5px, non-scaling) is drawn by scroll over a bone/10 ghost path. It zig-zags between alternating stage bodies. Each stage has a 30px circular node carrying its blackletter ordinal, which fills blood when active, while the stage title brightens from bone/50 to bone. On phones the path becomes a straight bone/10 line at 14px from the left.

### Preloader and Portrait Torch
- **Preloader:** Shown once per session and skipped under reduced motion. It counts from 000 to 100 in display tabular type (up to 12rem), with the blackletter "Prozent" count beside it and a blood rule drawing across. Then "Willkommen" and the counter slide away and the sheet lifts by clip-path (0.9s expo.inOut).
- **Colour torch:** On hover-capable devices, the grayscale hero portrait reveals full colour inside a 190px circle that follows the pointer.

## Do's and Don'ts

### Do:
- **Do** keep red to one hue: blood for fills and large type, blood-hi for small text on ink.
- **Do** number everything a reader counts in blackletter (Grenze Gotisch), and keep Latin tabular figures for data values.
- **Do** open every chapter with a bilingual heading: an Aostala English title in bone and one German word in blood.
- **Do** separate content with 1px bone/10 hairlines and gap-px grids before reaching for a filled card.
- **Do** make actions full pills with a trailing 1.5px square-cap arrow from the shared icon family.
- **Do** gate pins and scrubs behind `(min-width: 1024px) and (prefers-reduced-motion: no-preference)`, and give every pinned sequence a plain stacked fallback with the same content.
- **Do** ease entrances with expo.out (1.2 to 1.6s) and curtains with expo.inOut (0.7 to 0.9s). CSS transitions use cubic-bezier(0.16, 1, 0.3, 1).
- **Do** flip the fixed chrome to paper and paper-ink whenever a paper chapter is on screen.
- **Do** keep every hover state legible at 4.5:1 or better for its text.

### Don't:
- **Don't** build a neon developer-portfolio grid or a card wall of projects. Projects are stacked sheets, and lists are hairline rows.
- **Don't** introduce a second accent hue, coloured glows, or a gradient between hues.
- **Don't** set small reading text in blood (#c8102a) on ink. It falls below 4.5:1.
- **Don't** put small tracked labels above headings as eyebrows or kickers. Labels name fields, units, keys and edges only.
- **Don't** use offset hard shadows. Only the two soft drops in Elevation exist.
- **Don't** set running text in Aostala, or set it in lowercase.
- **Don't** use emoji or icon-font glyphs. Icons are inline 1.5px-stroke SVG.
- **Don't** add a second paper chapter. The warm interlude is singular.
