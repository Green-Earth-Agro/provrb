---
name: PROVRB
description: Satellite-based EUDR compliance monitoring for agricultural supply chains — environmental proof, delivered from space.
colors:
  canopy-ink: "oklch(27% 0.09 146)"
  canopy: "oklch(34% 0.094 146)"
  canopy-mid: "oklch(43% 0.088 146)"
  amber-ink: "oklch(53% 0.115 65)"
  signal-amber: "oklch(63% 0.128 66)"
  amber-bright: "oklch(79% 0.148 84)"
  orbital-slate: "oklch(20% 0.03 264)"
  paper: "oklch(98.5% 0.007 130)"
  cloudless-white: "oklch(99.5% 0.004 130)"
  sage: "oklch(91% 0.02 107)"
  sage-mist: "oklch(95% 0.019 130)"
  sage-shadow: "oklch(80% 0.034 131)"
  text-primary: "oklch(19% 0.042 146)"
  text-secondary: "oklch(27% 0.038 146)"
  text-muted: "oklch(44% 0.025 153)"
  text-inverse: "oklch(98.5% 0.005 146)"
  text-on-dark: "oklch(92% 0.012 146)"
  heading-on-dark: "oklch(98% 0.008 146)"
  success: "oklch(62% 0.17 151)"
  warning: "oklch(74% 0.15 80)"
  danger: "oklch(52% 0.2 22)"
  info: "oklch(56% 0.19 264)"
  footer-bg: "oklch(16% 0.048 146)"
  footer-text: "oklch(80% 0.025 146)"
  verified-green: "#1DC767"
typography:
  display:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.75rem + 5vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.01em"
rounded:
  sm: "8px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.amber-bright}"
    textColor: "{colors.canopy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-amber}"
    textColor: "{colors.canopy-ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-inverse}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  chip:
    backgroundColor: "rgba(255,255,255,0.08)"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1rem"
    height: "44px"
---

# Design System: PROVRB

## 1. Overview

**Creative North Star: "The Compliance Observatory"**

PROVRB is what a control room looks like when the thing under observation is a supply chain instead of a launch. The system reads as institutional infrastructure, not a startup's marketing site: forest-green establishes territorial authority (this is about land, canopy, and continuous watch), amber is rationed to the single act of taking action, and every shadow is tinted toward the brand rather than neutral black, so nothing feels borrowed from a generic UI kit. Precision is the load-bearing quality: crisp Barlow Condensed headings, a body font (Manrope) that reads like a well-typeset report, and interaction feedback (button lift, scroll-reveal, card lift) that confirms an action happened rather than performing for its own sake.

The system explicitly rejects the sustainability-NGO register: no soft stock photography of nature or people, no earnest mission-statement visual tone as the primary voice, no WordPress-template softness. It also rejects generic SaaS-marketing tropes: no hero-metric-plus-gradient-text blocks, no identical icon-card grids repeated section after section, no decorative glassmorphism beyond the one functional instance (the nav shell's scroll blur). Marketing surfaces default to light — cream/sage, near-white paper — with the dark canopy-green palette reserved for the hero band, the contact section, and the footer, where it reads as a deliberate "this matters" register shift rather than the default theme.

A manual light/dark theme toggle lives in the footer (no system-preference detection; light is always the default for new visitors). Toggling re-themes the light content sections (Problem, Solution, Technology, Why PROVRB, Markets, Why Luxembourg, About) using the dark-surface token overrides already defined in `index.css`. The hero, contact, and footer bands do **not** re-theme: they're a brand register shift, not a light-mode surface, so their background and on-dark text/button colors are pinned to fixed tokens (`--provrb-band-bg`, `--color-provrb-text-on-dark`, `--color-provrb-heading-on-dark`) rather than the reactive `--color-provrb-primary-*` / `--color-provrb-text-inverse` tokens. Anything placed on those bands must use the fixed tokens, not the reactive ones, or it will mis-pair when the toggle flips (the reactive tokens are tuned for a *different* always-dark surface, a staff-console product UI elsewhere in the codebase, not for these marketing bands).

**Key Characteristics:**
- Institutional, not startup-cute: forest green carries brand authority, amber is spent only on action.
- Evidence-tinted shadows: every shadow uses the brand's green (`rgba(42,58,42,…)`) or amber (`rgba(80,58,10,…)`), never neutral black.
- Flat at rest, alive on interaction: cards, buttons, and media only lift, brighten, or reveal in response to hover/scroll — nothing is decoratively animated on load beyond the scroll-reveal entrance.
- Light-pinned marketing, dark-banded moments: the page is light by default; canopy-dark sections (hero, contact, footer) are a deliberate register shift, not a mode toggle.

## 2. Colors

A restrained palette: one authority color (Deep Canopy green), one action color (Signal Amber), and a wide, quiet neutral range (Orbital Slate + Cloudless/Sage) that does the actual page-building.

### Primary
- **Canopy Ink** (`oklch(27% 0.09 146)`): darkest green. Fills for `.bg-provrb-dark` — the hero band, contact section, footer.
- **Deep Canopy** (`oklch(34% 0.094 146)`): the brand primary. Body headings' implicit color, `.text-provrb-primary`, `.bg-provrb-primary`.
- **Canopy Mid** (`oklch(43% 0.088 146)`): hover/active state for primary text and nav-link hover.

### Secondary
- **Amber Ink** (`oklch(53% 0.115 65)`): darkest amber step, reserved for text-on-amber contexts.
- **Signal Amber** (`oklch(63% 0.128 66)`): nav-link underline, inline link accents, the color that says "this is interactive."
- **Amber Bright** (`oklch(79% 0.148 84)`): the primary CTA fill (`btn-gold`). The single most saturated color on the page, and it appears almost nowhere else.

### Tertiary
- **Orbital Slate** (`oklch(20% 0.03 264)`): cool neutral-dark, used sparingly for anything that needs to read as "system" or "data" rather than "brand" (e.g. mono/data labels in dashboard mockups).

### Neutral
- **Cloudless White** (`oklch(99.5% 0.004 130)`): card and panel background.
- **Paper** (`oklch(98.5% 0.007 130)`): page background (`--provrb-bg`).
- **Sage Mist** (`oklch(95% 0.019 130)`): alternate section background (`.bg-provrb-sage`), used to separate page bands without a hard line.
- **Sage** (`oklch(91% 0.02 107)`): default border color (`.border-provrb`).
- **Sage Shadow** (`oklch(80% 0.034 131)`): deepest neutral step; darkest borders/dividers.
- **Verified Green** (`#1DC767`): a bright, saturated signal-green reserved for the hero band and dark-surface "proof" overlays only (live-monitoring pills, alert chips). Never used on light surfaces — it exists to read as "status," not "brand."

### Named Rules
**The Amber Reserve Rule.** Signal Amber and Amber Bright are the only colors used for calls-to-action, links, and interactive underlines. They never fill a section background or serve as decoration — if amber appears, something is clickable.

**The Tinted Shadow Rule.** No shadow in this system uses neutral black. Card and button shadows are always `rgba(42,58,42,…)` (green-tinted) or, for the amber CTA specifically, `rgba(80,58,10,…)` (amber-tinted).

## 3. Typography

**Display Font:** Barlow Condensed (with system-ui, sans-serif fallback)
**Body Font:** Manrope (with system-ui, sans-serif fallback)
**Label/Mono Font:** ui-monospace stack (reserved; not yet used in any shipped component — candidate for dashboard-mockup data readouts)

**Character:** Barlow Condensed's tight, condensed forms carry the authority of a headline built for a control-room display; Manrope's warmth and even weight keep the surrounding report-like body copy readable and human. The pairing is deliberately not a typical SaaS geometric-sans-on-geometric-sans stack.

### Hierarchy
- **Display** (600, `clamp(2.75rem, 1.75rem + 5vw, 4.75rem)`, 1.05 line-height, -0.01em tracking): hero H1 only. Extends the existing `--text-provrb-*` scale, which currently tops out at 3xl (30px) — add this step to the `@theme` block at implementation time rather than hardcoding it inline.
- **Headline** (600, `clamp(2rem, 1.4rem + 3vw, 3rem)`, 1.1 line-height, -0.01em tracking): section H2s (Problem, Solution, Technology, Markets, About). Same scale-extension note as Display.
- **Title** (700, 1.25rem / `--text-provrb-xl`, 1.3 line-height): card headers, H3–H6 (Manrope, not Barlow Condensed — the heading font is reserved for H1/H2 only per `index.css`).
- **Body** (400, 1rem / `--text-provrb-base`, 1.6 line-height): paragraph copy. Cap measure at 65–75ch; the current tokens don't set this, enforce it at the container level.
- **Label** (700, 0.875rem / `--text-provrb-sm`, 0.01em tracking): eyebrows ("THE PROBLEM"), nav links, chip text. The proof-chip component uses a one-off 0.9rem/700/0.01em — close enough to Label that it should be folded into this token rather than kept as a hardcoded exception.

### Named Rules
**The Two-Voice Rule.** Barlow Condensed appears only on H1/H2. Manrope carries everything else, including H3–H6. Never mix the two within a single text block, and never use Barlow Condensed for body copy — it's a headline instrument, not a reading font.

## 4. Elevation

The system is flat by default and treats shadows as a response to interaction, not a resting-state decoration. Static cards, panels, and images carry no shadow at rest; shadows appear on hover (card lift, button lift) or on components that are inherently "floating" above the page (dashboard mockup panels, the sample-report illustration).

### Shadow Vocabulary
- **Ambient Card** (`box-shadow: 0 16px 30px rgba(42, 58, 42, 0.07)`): default resting shadow for panels that are meant to read as elevated documents (dashboard mockups, report cards) — not for ordinary content cards, which stay flat until hovered.
- **Ambient Image** (`box-shadow: 0 18px 36px rgba(42, 58, 42, 0.10)`): slightly heavier version for hero/media illustrations.
- **Card Lift (hover)** (`box-shadow: 0 24px 40px rgba(42, 58, 42, 0.12)`, paired with `translateY(-4px)`): the interactive escalation for `.provrb-card-lift` on hover.
- **CTA Lift (hover)** (`box-shadow: 0 14px 28px rgba(80, 58, 10, 0.14)`, paired with `translateY(-1px)`): amber-tinted, exclusive to the primary button's hover state.

### Named Rules
**The Flat-at-Rest Rule.** Nothing casts a shadow just for sitting on the page. A shadow present at rest means the element is meant to read as a physical document (report, dashboard panel) floating above the page; a shadow that only appears on hover means the element is interactive.

## 5. Components

### Buttons
- **Shape:** 8px radius (`rounded.sm`), consistent across all button variants — no other radius is used for buttons.
- **Primary:** Amber Bright background, Canopy Ink text, weight 800, `14px 24px` padding. This is the only solid-fill button in the system.
- **Hover / Focus:** background shifts to Signal Amber, `translateY(-1px)`, CTA Lift shadow fades in over 180ms with the system's custom ease-out (`cubic-bezier(0.23, 1, 0.32, 1)`). Active state: `scale(0.97)`.
- **Secondary (outline):** transparent fill, 1px border at `rgba(255,255,255,0.28)`, fixed Text-on-Dark label (not the reactive Text Inverse token — see the theme-toggle note in Overview) — used exclusively on dark sections (hero, contact) as the "quieter" of the two hero CTAs. Hover fills to `rgba(255,255,255,0.14)` and brightens the border to fixed Text-on-Dark.
- **Icon button:** `0.5rem` padding, `0.5rem` (8px) radius, Deep Canopy icon color, hover background Sage Mist.

### Chips
- **Style:** pill radius (999px), `rgba(255,255,255,0.08)` background, `rgba(255,255,255,0.18)` border, Text-on-Dark label at Label typography — used exclusively on dark (canopy-ink) sections for proof points and live-status badges ("EUDR ready", "Live monitoring · 12,482 parcels").
- **State:** static; no hover/active state defined — these are informational, not interactive.

### Cards / Containers
- **Corner Style:** inherits the 8px system radius unless the card is a media/report mockup, which may run larger per illustration needs.
- **Background:** Cloudless White on Paper page background, or Sage Mist when a section needs to visually separate from its neighbor.
- **Shadow Strategy:** flat at rest; escalate to Card Lift only on hover (see Elevation).
- **Border:** Sage (`.border-provrb`) when a border is used instead of a shadow to define edges — the two are not combined on the same card.

### Media
- **Style:** `overflow: hidden`, `isolation: isolate` container (`.provrb-media`). Images sit at a 1.01 base scale (never pixel-perfect 1.0, to avoid an anti-aliased edge line) and ease to 1.05 + `saturate(1.05)` on hover over 700ms.
- **Overlay:** a subtle top-white-to-bottom-dark gradient wash fades in on hover (0 → full opacity over 300ms) to add depth without a static filter.

### Navigation
- **Style:** `.provrb-nav-shell` — a glass shell (`backdrop-filter: saturate(140%) blur(14px)`) that transitions background/border/shadow over 180ms, implying a scroll-triggered state change (transparent-over-hero → solid-on-scroll).
- **Links:** Text Secondary by default, Deep Canopy on hover/focus, with an animated Signal-Amber underline (2px, pill-radius) that scales from 35% to 100% width and fades in over 220ms with the system ease-out curve.

### Scroll Reveal (signature component)
- `[data-reveal]`: the default section-entrance treatment — fade + 12px blur + `translate3d(0, 24px, 0)` + `scale(0.985)`, animating to fully visible over 680ms with the system ease-out curve. Supports `--reveal-delay` for staggering.
- Directional variants: `left` / `right` (slide in from ±28px), `image` (heavier: 30px translate + 1.03 scale + 16px blur, for hero/media reveals), `line` (lighter: 18px translate only, for text lines).
- Fully disabled under `prefers-reduced-motion: reduce` — elements render immediately visible, all durations collapse to 0ms.

### Atmosphere Texture (signature component)
- A code-native depth layer for the dark bands: fine SVG `feTurbulence` grain (white noise, ~5% alpha) plus a soft off-center radial glow (16% opacity, green on hero/footer, amber on contact). Absolutely positioned behind section content, zero image requests.
- Never used on light sections — grain and glow are a dark-band-only device, part of the "this matters" register shift, not a general texture applied everywhere.

### Icons
- A bespoke line-icon set (1.6-1.8px stroke, consistent sizing) carries brand-specific marks: the orbit/satellite logo mark, the Why-PROVRB pulse/shield/globe/layers icons, the Luxembourg pin, the LinkedIn mark, checkmarks. These stay hand-drawn SVG.
- **lucide-react** covers generic UI chrome only: nav hamburger/close (`Menu`/`X`), the hero scroll-cue chevron (`ChevronDown`), and the theme toggle (`Sun`/`Moon`). Don't reach for lucide for anything that carries brand meaning — that's the bespoke set's job.

### Theme Toggle
- A single icon button (Moon in light mode, Sun in dark mode) in the footer, next to the Privacy link. No system-preference detection; light is always the default for a first-time visitor. Choice persists to `localStorage` and is applied before paint via an inline script in `index.html` (no flash-of-wrong-theme).
- Only re-themes the light content sections. See the theme-toggle note in Overview for why the hero/contact/footer bands are exempt.

## 6. Do's and Don'ts

### Do:
- **Do** default marketing sections to light (Paper / Cloudless White / Sage Mist); reserve the dark Canopy Ink palette for the hero band, contact section, and footer regardless of the light/dark toggle state.
- **Do** use the fixed on-dark tokens (`--provrb-band-bg`, `--color-provrb-text-on-dark`, `--color-provrb-heading-on-dark`) for anything placed on the hero/contact/footer bands. Never the reactive `--color-provrb-primary-*` or `--color-provrb-text-inverse` tokens there — those are tuned for the separate staff-console dark surface and mis-pair on these bands once the toggle flips.
- **Do** tint every shadow toward the brand hue — green `rgba(42,58,42,…)` by default, amber `rgba(80,58,10,…)` only on the primary CTA's hover state. Never a neutral black shadow.
- **Do** use the `[data-reveal]` scroll system for section entrances rather than introducing a new animation utility or library.
- **Do** hold buttons at 8px radius and chips/pills at 999px — no in-between radius values anywhere in the system.
- **Do** use abstract satellite imagery, world maps, orbit lines, and compliance-dashboard mockups as the system's visual language for illustration.

### Don't:
- **Don't** use stock photography of nature, farms, or people — PROVRB reads as deep-tech infrastructure, not a sustainability consultancy or NGO.
- **Don't** use gradient text, hero-metric-plus-stat-row blocks, or identical icon-card grids — these are the generic SaaS-marketing tropes this system is explicitly built to avoid.
- **Don't** use `border-left`/`border-right` colored stripes as a status or category accent on any card, list item, or alert — use a full border, background tint, or a leading icon instead.
- **Don't** apply glassmorphism decoratively. The nav shell's scroll blur is the one sanctioned instance; don't extend blurred-glass surfaces to cards or panels.
- **Don't** let a card or panel carry a shadow at rest unless it's meant to read as a physical floating document (dashboard mockup, report illustration) — ordinary content cards stay flat until hovered.
