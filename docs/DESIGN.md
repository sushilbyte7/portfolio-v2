# DESIGN — Design System & Direction

## Direction Statement

> **"Minimalism with a mono-type signature and surgical Glassmorphism accents — deployed through a Bento Grid layout."**

This is the locked creative brief. Every visual decision is evaluated against it. If a proposed element cannot be justified by one of the four terms (minimalism, mono-type, surgical glass, bento grid), it does not ship.

---

## Rejected Styles

| Style | Reason rejected |
|---|---|
| Skeuomorphism | Dated, high maintenance, fights flat digital context |
| Neumorphism | Low contrast by design — fails WCAG AA, inaccessible |
| Claymorphism | Playful, not technical; conflicts with mono-type signal |
| Brutalism | Confrontational — right message for art, wrong for hiring |
| Maximalism | Information overload; competes with the content itself |
| Liquid Glass (Apple 2025) | Trendy, impractical for text-heavy content, dates in 12 months |
| Spatial UI | Requires depth hardware context; meaningless on 2D screens |

---

## Design Principles

1. **Clarity over cleverness** — If a visitor has to think about the design, the design has failed.
2. **Content is the portfolio** — The work speaks. Design is the silent frame around it.
3. **Constraint ages better than excess** — Every removal is a design decision. Additions need justification.
4. **Mono = technical signal** — Monospace type on labels and tags instantly reads as "engineer." Use it deliberately, never decoratively.
5. **Glass = surgical, not atmospheric** — One glass surface per page context maximum. It must serve a functional purpose (floating, layered context), not aesthetic padding.

---

## Color System

### Philosophy
Single-temperature palette: warm near-black background, near-white text, one chromatic accent. No gradients in the palette. Gradients only as micro-accents (border glow, not fill).

### Tokens

```css
/* Background & Surface */
--color-bg:          #0D1117;  /* oklch(10% 0.01 260) — warm near-black */
--color-surface:     #161B22;  /* oklch(14% 0.01 260) — card surface */
--color-surface-2:   #1C2128;  /* oklch(17% 0.01 260) — elevated surface */
--color-border:      #30363D;  /* oklch(25% 0.01 260) — subtle border */
--color-border-muted:#21262D;  /* oklch(19% 0.01 260) — hairline border */

/* Text */
--color-text-primary:   #E6EDF3;  /* oklch(92% 0.01 260) — primary prose */
--color-text-secondary: #8B949E;  /* oklch(62% 0.01 260) — secondary/meta */
--color-text-muted:     #484F58;  /* oklch(38% 0.01 260) — disabled/placeholder */

/* Accent — Option A: Terminal Green (recommended for developer signal) */
--color-accent:         #3FB950;  /* oklch(69% 0.17 145) — GitHub green */
--color-accent-muted:   #0F2B15;  /* oklch(16% 0.06 145) — accent background */

/* Accent — Option B: Subtle Indigo (more subdued, elegant) */
/* --color-accent:      #7C6FCD;  oklch(55% 0.12 285) */
/* --color-accent-muted:#1A1730;  oklch(15% 0.06 285) */

/* Glass */
--color-glass-bg:    rgba(22, 27, 34, 0.72);  /* surface at 72% opacity */
--color-glass-border:rgba(48, 54, 61, 0.50);  /* border at 50% opacity */

/* Semantic */
--color-error:       #F85149;  /* oklch(62% 0.22 25) */
--color-warning:     #E3B341;  /* oklch(78% 0.16 80) */
--color-success:     #3FB950;  /* same as accent-A */
```

> ⚠️ **DECISION NEEDED:** Accent Option A (terminal green) vs Option B (indigo). Terminal green is a stronger developer signal and pairs cleanly with the warm-dark background. Indigo is more refined but closer to the old purple palette. Default assumption: **Option A** until overridden.

---

## Typography

### Font Stack

| Role | Font | Fallback |
|---|---|---|
| Sans (body, headings) | Geist Sans | system-ui, sans-serif |
| Mono (labels, tags, eyebrows) | Geist Mono | "Courier New", monospace |

**Rule:** Mono is used for: section eyebrows, tech tags, stat labels, code, dates in labels. **Never** for body prose, project descriptions, or bio text.

### Type Scale

| Token | Size | Weight | Line-height | Letter-spacing | Usage |
|---|---|---|---|---|---|
| `--text-display` | 4rem / 64px | 700 | 1.05 | -0.03em | Hero name only |
| `--text-h1` | 3rem / 48px | 700 | 1.1 | -0.02em | Section titles |
| `--text-h2` | 2rem / 32px | 600 | 1.2 | -0.01em | Card titles, sub-sections |
| `--text-h3` | 1.5rem / 24px | 600 | 1.3 | 0 | Card headings |
| `--text-xl` | 1.25rem / 20px | 400 | 1.5 | 0 | Lead paragraph |
| `--text-base` | 1rem / 16px | 400 | 1.65 | 0 | Body prose |
| `--text-sm` | 0.875rem / 14px | 400 | 1.5 | 0 | Secondary text, captions |
| `--text-xs` | 0.75rem / 12px | 500 | 1.4 | 0.04em | Mono labels, tags (Geist Mono) |
| `--text-caption` | 0.6875rem / 11px | 400 | 1.4 | 0.06em | Timestamps, metadata |

---

## Spacing & Layout

### Spacing Scale (4px base)

```
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128
```

### Container

```
max-width: 1200px
padding-x: 24px (mobile) → 48px (tablet) → 64px (desktop)
```

### Grid

- **Desktop:** 12-column CSS Grid, gap 24px
- **Tablet (768px):** 8-column, gap 16px
- **Mobile (< 640px):** 1-column, full-width sections

### Section Rhythm

```
padding-top: 96px (desktop) / 64px (mobile)
padding-bottom: 96px (desktop) / 64px (mobile)
section-gap (between sections): 16px
```

---

## Radii & Elevation

### Border Radius Scale

```css
--radius-sm:  4px   /* Inline tags, badges */
--radius-md:  8px   /* Buttons, inputs */
--radius-lg:  12px  /* Cards */
--radius-xl:  16px  /* Bento tiles, modals */
--radius-2xl: 24px  /* Full-width feature cards */
```

### Shadow Tokens

```css
--shadow-sm:  0 1px 2px rgba(0,0,0,0.4);
--shadow-md:  0 4px 12px rgba(0,0,0,0.5);
--shadow-lg:  0 8px 32px rgba(0,0,0,0.6);
--shadow-glow: 0 0 20px rgba(63,185,80,0.15);  /* accent glow, use sparingly */
```

---

## Glassmorphism Rules

### Where glass is allowed

1. **Sticky navigation bar** — always glass
2. **Maximum one (1) other floating element** per page context — e.g. a contact card, an active project modal

### Where glass is forbidden

- Project cards (use solid `--color-surface`)
- Section backgrounds
- Hero background overlay
- Any element that sits directly on `--color-bg` without layering context

### Glass CSS Recipe

```css
.glass {
  background: var(--color-glass-bg);             /* rgba(22,27,34,0.72) */
  backdrop-filter: blur(12px) saturate(1.4);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  border: 1px solid var(--color-glass-border);   /* rgba(48,54,61,0.50) */
  border-radius: var(--radius-xl);
}

/* Solid fallback for no-backdrop-filter browsers */
@supports not (backdrop-filter: blur(1px)) {
  .glass {
    background: var(--color-surface-2);
    border: 1px solid var(--color-border);
  }
}
```

### Contrast Check

- Text on glass surface must achieve ≥ 4.5:1 against `--color-glass-bg` at its most transparent state. This is satisfied by `--color-text-primary` (#E6EDF3) against the glass at 72% opacity over `--color-bg` (#0D1117).

---

## Bento Grid — Projects Layout Spec

### Philosophy
Bento replaces the flat card grid from the old site. It creates visual hierarchy without requiring featured/non-featured flags. The layout itself communicates importance.

### Tile Sizes

| Size | Grid span | Usage |
|---|---|---|
| `large` | 8 cols × 2 rows | 1 flagship project (most technically complex) |
| `wide` | 8 cols × 1 row | 1 secondary project (strong outcome / visual) |
| `standard` | 4 cols × 1 row | Remaining projects (max 4 visible, rest behind "Show more") |

### Desktop Layout (12-col grid)

```
[ large (8)          ] [ standard (4) ]
[ large (8)          ] [ standard (4) ]
[ wide (8)           ] [ standard (4) ]
[ standard (4) ] [ standard (4) ] [ standard (4) ]  ← "Show more" boundary
```

### Breakpoint Behavior

| Breakpoint | Layout |
|---|---|
| ≥ 1200px | Full Bento (above) |
| 768–1199px | 2-column grid, no size distinction |
| < 768px | 1-column stack, all cards equal |

### Mobile Collapse

- `large` → full-width card
- `wide` → full-width card
- `standard` → full-width card
- Order: preserve Bento visual order (large first)

### Tile Content

Each tile shows: thumbnail (object-fit cover), title, one-line hook, tech tags (mono), GitHub + live link icons. Hover: subtle lift (`translateY(-2px)`) + border glow.

---

## Motion

### Principles

1. **Subtle** — Animations should be felt, not seen.
2. **Purposeful** — Every animation communicates state or guides attention.
3. **Respect `prefers-reduced-motion`** — All entrance animations disabled, hover states remain as opacity-only.

### Timing Tokens

```css
--duration-fast:   150ms   /* Hover, focus state changes */
--duration-base:   250ms   /* Card transitions, nav underline */
--duration-slow:   400ms   /* Entrance animations, modal open */
--ease-out:        cubic-bezier(0.16, 1, 0.3, 1)   /* Entrance */
--ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1)    /* State change */
```

### What Animates

| Element | Animation | Duration |
|---|---|---|
| Section entrance | `opacity 0→1` + `translateY 16px→0` | 400ms, ease-out |
| Nav link active | Underline width 0→100% | 250ms, ease-out |
| Project tile hover | `translateY -2px` + glow shadow | 150ms |
| Button hover | Background shift | 150ms |
| Contact form submit | Spinner + success state | 250ms |

### What Does NOT Animate

- Section titles (static — reduces distraction)
- Text content (never typewriter in section body)
- Background (no particle systems, no galaxy canvas)
- Page transitions (single-page scroll, no route animation)

---

## Accessibility Targets

(Full checklist in `ACCESSIBILITY.md` — summary here)

- Text contrast: ≥ 4.5:1 (normal), ≥ 3:1 (large / UI)
- Focus: `focus-visible` ring `2px solid --color-accent` with `2px offset`
- Keyboard: all interactive elements reachable via Tab in DOM order
- Reduced motion: `prefers-reduced-motion: reduce` disables all entrance animations
- Semantics: one `<h1>` per page, landmark regions, `alt` on all images

---

## Component Inventory

Full contracts in `COMPONENTS.md`. Listed here for cross-reference:

| Component | Type | Glass? |
|---|---|---|
| `Nav` | Layout | Yes — sticky glass |
| `Hero` | Section | No |
| `SectionHeader` | Typography | No |
| `Eyebrow` | Typography | No |
| `ProjectCard` (large / wide / standard) | Content | No — solid surface |
| `TechTag` | Inline | No — mono chip |
| `TimelineItem` | Content | No |
| `ContactCard` | Interactive | Yes — 1 allowed glass instance |
| `StatBlock` | Display | No |
| `Button` | Interactive | No |
| `Link` | Interactive | No |
| `Footer` | Layout | No |

---

## Do / Don't — Quick Reference

| Do | Don't |
|---|---|
| Use `--color-*` tokens for every color value | Hardcode any hex value inline |
| Use Geist Mono for labels and tags | Use Geist Mono for body paragraphs |
| Apply glass only to Nav + 1 floating element | Apply glass to every card surface |
| Use `next/image` for all images | Use `<img>` tags directly |
| Add `prefers-reduced-motion` checks | Ship animations that can't be disabled |
| Write semantic HTML (`<section>`, `<article>`, `<nav>`) | Nest `<div>` inside `<div>` as structure |
| Keep motion subtle (≤ 16px translate, ≤ 400ms) | Use bounce, spin, or loop animations |
| Use `--radius-*` tokens for border radius | Set arbitrary pixel radii inline |
| One accent color maximum | Introduce secondary accent colors |
| Test contrast before every new text+bg pairing | Assume contrast is fine without checking |
