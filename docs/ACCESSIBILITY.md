# ACCESSIBILITY — WCAG 2.2 AA Checklist

> Standard: WCAG 2.2, Level AA
> Testing tools: axe DevTools (browser extension), Lighthouse, manual keyboard navigation, NVDA (Windows) or VoiceOver (Mac)

---

## Contrast Targets

| Context | Minimum Ratio | Token Pair to Verify |
|---|---|---|
| Normal text (< 18px or < 14px bold) | 4.5:1 | `--color-text-primary` on `--color-bg` |
| Normal text on surface | 4.5:1 | `--color-text-primary` on `--color-surface` |
| Secondary text | 4.5:1 | `--color-text-secondary` on `--color-bg` |
| Large text (≥ 18px regular or ≥ 14px bold) | 3:1 | `--color-text-primary` on any bg |
| UI components (borders, icons, buttons) | 3:1 | `--color-border` on `--color-bg` |
| Accent / focus ring | 3:1 | `--color-accent` on `--color-bg` |
| Text on glass surface | 4.5:1 | `--color-text-primary` on `--color-glass-bg` over `--color-bg` |
| `TechTag` text | 4.5:1 | `--color-text-secondary` on `--color-surface-2` |
| Button text | 4.5:1 | `--color-bg` on `--color-accent` |
| Muted text (metadata, captions) | **Advisory only** | Check — muted text should be supplementary |

**Pre-verified token pairs (approximate ratios with DESIGN.md values):**
- `#E6EDF3` on `#0D1117` → ~14:1 ✅
- `#8B949E` on `#0D1117` → ~5.8:1 ✅ (just above 4.5:1)
- `#3FB950` on `#0D1117` → ~5.5:1 ✅ (accent passes for large text and UI; verify for small text)
- `#484F58` (`--color-text-muted`) on `#0D1117` → ~3.5:1 — ⚠️ fails 4.5:1 for normal body text. Use muted only for truly supplementary content (timestamps, metadata).

---

## Focus Management

- [ ] Every interactive element (link, button, input, select) must show a visible `:focus-visible` ring
- [ ] Focus ring style: `outline: 2px solid var(--color-accent)` with `outline-offset: 2px`
- [ ] Do **not** use `outline: none` without providing an equivalent custom focus indicator
- [ ] Focus must be trapped inside modals and mobile nav drawer while open
- [ ] On modal/drawer close, focus returns to the trigger element
- [ ] Skip-to-main-content link: `<a href="#main-content">` as the first focusable element in the DOM, visible on focus

---

## Keyboard Navigation Order

Tab order must follow visual reading order (top-left to bottom-right):

1. Skip to main content link
2. Nav — logo, then nav links left to right, then GitHub button
3. Hero — heading (not focusable), then CTA buttons
4. Each section — `SectionHeader` (not focusable), then interactive elements in DOM order
5. Projects — cards are focusable (Enter/Space to expand), GitHub and Live links inside
6. Experience/Education timeline — cards are read in order, not interactively focusable
7. Contact — form fields in order: email → name → subject → message → submit
8. Footer — nav links, then social icon links

**No focus traps outside of:** mobile nav drawer (open), modals (if any).

---

## Alt Text Policy

| Element | Alt text rule |
|---|---|
| Profile photo | `"Sushil Kumar — Full-Stack Developer"` |
| Project thumbnails | `"Screenshot of [project title]"` |
| Company logos (Experience) | `"[Company name] logo"` |
| Education institution logos | `"[Institution name] logo"` |
| Decorative images (if any) | `alt=""` — empty string, not omitted |
| Icons with adjacent visible label | `aria-hidden="true"` on icon, no alt needed |
| Icons without adjacent label (social links) | `aria-label` on the `<a>` element (e.g. `aria-label="GitHub profile"`) |

**Rule:** Never use the file path or image URL as alt text. Never use "image of" or "photo of" — screen readers announce "image" automatically.

---

## Reduced Motion

All animations must respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

In Framer Motion components:
```tsx
const prefersReducedMotion = useReducedMotion();

const variants = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
  visible: { opacity: 1, y: 0 },
};
```

**What is disabled under reduced motion:**
- Entrance animations (translateY + opacity fade-in)
- Staggered card reveal in Bento grid
- Timeline item stagger

**What stays active under reduced motion:**
- Hover state color/opacity changes (user-triggered, instantaneous)
- Focus ring appearance
- Form submit loading state

---

## Semantic Landmark Regions

Every page must have these landmarks, in this order in the DOM:

```html
<header>          <!-- Nav component — contains <nav> -->
  <nav aria-label="Main navigation">
    ...
  </nav>
</header>
<main id="main-content">
  <section aria-labelledby="hero-heading">     <!-- Hero -->
  <section aria-labelledby="about-heading">    <!-- About -->
  <section aria-labelledby="skills-heading">   <!-- Skills -->
  <section aria-labelledby="projects-heading"> <!-- Projects -->
  <section aria-labelledby="experience-heading"><!-- Experience -->
  <section aria-labelledby="education-heading"> <!-- Education -->
  <section aria-labelledby="contact-heading">  <!-- Contact -->
</main>
<footer>          <!-- Footer component -->
</footer>
```

**Rules:**
- Each `<section>` is labelled by its `<h2>` ID via `aria-labelledby`
- `<main>` has `id="main-content"` for skip link target
- `<header>` wraps the Nav (not the Hero section)
- There is exactly **one** `<h1>` (Hero name)

---

## Testing Checklist

Run after Phase 4 polish — before deploying.

### Automated (axe DevTools)
- [ ] Install axe DevTools browser extension
- [ ] Open each section in isolation, run axe scan — fix all violations (errors and warnings)
- [ ] Run Lighthouse Accessibility on full page — target ≥ 95

### Manual Keyboard Test
- [ ] Tab through entire page — verify every interactive element is reachable
- [ ] Verify no focus traps exist (except intentional ones: mobile nav, modals)
- [ ] Verify Escape key closes mobile nav drawer
- [ ] Verify Enter/Space activates buttons and links
- [ ] Verify skip-to-content link appears on first Tab press

### Screen Reader Test (spot-check)
- [ ] **NVDA (Windows) + Chrome:** Navigate by headings (H key) — verify heading hierarchy
- [ ] **NVDA:** Navigate by landmarks (D key) — verify all sections are reachable
- [ ] **NVDA:** Navigate to contact form — verify all fields are announced correctly
- [ ] **VoiceOver (Mac) + Safari (if available):** Hero and Projects section check

### Contrast Check
- [ ] Use browser DevTools contrast checker on every text+bg pairing
- [ ] Pay special attention to: `TechTag` chips, secondary text, glass surface text, muted metadata

### Reduced Motion Test
- [ ] In Chrome DevTools → Rendering → Emulate prefers-reduced-motion: reduce
- [ ] Verify all entrance animations are disabled
- [ ] Verify hover states still work (opacity/color changes)
