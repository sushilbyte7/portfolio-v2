# BUILD_PLAN — Phased Build Checklist

> Use `- [x]` to mark complete. Never skip tasks — every checkbox is atomic and in dependency order.
> Cross-reference: DESIGN.md for tokens, COMPONENTS.md for contracts, CONTENT.md for copy, STACK.md for tooling.

---

## Phase 1 — Content Extraction ✅ COMPLETE

- [x] Scan entire old codebase (src/, components/, data/, public/)
- [x] Extract all content verbatim to `content/portfolio-data.md`
- [x] Extract structured JSON to `content/portfolio-data.json`
- [x] Flag all data integrity issues (project ownership, broken social links, typos)
- [x] Create `docs/` folder with all planning documents

---

## Phase 2 — Design System

### 2.1 — Project Scaffold

- [ ] Init Next.js 15 App Router project with pnpm: `pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- [ ] Set Node version: create `.nvmrc` with `22`
- [x] Configure `tsconfig.json` — enable strict mode, `noUncheckedIndexedAccess`
- [ ] Configure ESLint flat config + `typescript-eslint/recommended-type-checked`
- [ ] Configure Prettier (single quotes, 100 char, trailing commas)
- [ ] Install `husky` + `lint-staged` — run lint+format on pre-commit
- [ ] Install `framer-motion` (motion v12 package)
- [ ] Install `lucide-react`
- [ ] Install `@emailjs/browser`
- [ ] Create `.env.local` with EmailJS keys (service ID, template ID, public key)
- [x] Create `src/types/index.ts` — define shared types (Project, Experience, Education, NavSection, etc.)

### 2.2 — Fonts

- [x] Download Geist Sans and Geist Mono from `vercel/geist-font` GitHub releases
- [x] Place font files in `public/fonts/`
- [x] Configure `next/font/local` in `src/app/layout.tsx` — expose as CSS variables `--font-sans` and `--font-mono`

### 2.3 — Design Tokens

- [x] Create `src/styles/tokens.css` — define all `--color-*` tokens (from DESIGN.md Color System)
- [x] Define `--text-*` tokens (font sizes from DESIGN.md Type Scale)
- [x] Define `--radius-*` tokens
- [x] Define `--shadow-*` tokens
- [x] Define `--duration-*` and `--ease-*` animation tokens
- [x] Import `tokens.css` in `src/styles/globals.css`

### 2.4 — Tailwind v4 Config

- [ ] Configure `tailwind.config.ts` to use CSS token variables via `@theme` block
- [ ] Map `colors.*` to `--color-*` tokens
- [ ] Map `fontFamily.sans` to `var(--font-sans)`, `fontFamily.mono` to `var(--font-mono)`
- [ ] Map `fontSize.*` to `--text-*` tokens
- [ ] Map `borderRadius.*` to `--radius-*` tokens
- [ ] Map `boxShadow.*` to `--shadow-*` tokens

### 2.5 — Base Layout & Reset

- [ ] Create `src/app/globals.css` — CSS reset, base body styles (`bg`, `color`, `font-family`)
- [ ] Create `src/app/layout.tsx` — root layout with font variables, `<html>`, `<body>`, `<main>`
- [ ] Add `<meta>` tags to root layout: charset, viewport, theme-color
- [ ] Add Open Graph placeholder meta tags (title, description, image — see SEO.md)
- [ ] Add JSON-LD Person schema script (see SEO.md)

### 2.6 — Content Data Module

- [ ] Create `src/data/identity.ts` — identity, CTA, social links
- [ ] Create `src/data/skills.ts` — skills grouped by category, primary flags
- [ ] Create `src/data/projects.ts` — all confirmed projects with Bento size assignments
- [ ] Create `src/data/experience.ts` — all 6 experience entries
- [ ] Create `src/data/education.ts` — all 3 education entries
- [ ] Create `src/data/nav.ts` — nav sections array

---

## Phase 3 — Build Sections (in order)

### 3.1 — Nav Component

- [x] Build `src/components/Nav.tsx` per COMPONENTS.md contract
- [x] Implement glass CSS class from DESIGN.md recipe
- [x] Implement `IntersectionObserver` for active section tracking
- [x] Implement mobile drawer (slide-down, keyboard-closeable)
- [x] Add `aria-current`, `aria-expanded`, keyboard Escape handler
- [ ] Test on 320px, 768px, 1440px viewports

### 3.2 — Hero Section

- [x] Build `src/components/Hero.tsx`
- [x] `<h1>` with name — `--text-display`, font-weight 700
- [x] Role line — static text (or single-word typewriter if approved)
- [x] Tagline — `--text-xl`, `--color-text-secondary`
- [x] Primary CTA: `View Projects` button
- [x] Secondary CTA: `Download Resume` button
- [x] Profile image — `next/image`, circular, `--color-accent` border
- [x] Entrance animation with reduced-motion guard
- [x] Mobile: stack image above text

### 3.3 — About Section

- [x] Build `src/components/About.tsx`
- [x] Section heading with eyebrow + title
- [x] Bio paragraph (from CONTENT.md)
- [x] Highlights list from confirmed About content
- [x] MCA education detail (from CONTENT.md)
- [ ] StatBlock row (4 stats — ⚠️ BLOCKED: confirm stat values first)
- [x] Two-column layout: text left, details right (desktop); stacked (mobile)

### 3.4 — Skills Section

- [x] Build `src/components/sections/Skills.tsx`
- [x] `SectionHeader` with eyebrow + title + subtitle
- [x] Category group cards — each renders a list of `TechTag` components
- [x] Primary skills (top 5) get visual distinction (accent color tag or bold)
- [x] Responsive grid: 3-col desktop → 2-col tablet → 1-col mobile

### 3.5 — Projects Section (Bento)

- [x] Build `src/components/sections/Projects.tsx`
- [x] Build `src/components/ProjectCard.tsx` with `large`, `wide`, `standard` variants
- [x] Implement CSS Grid Bento layout per DESIGN.md spec
- [x] Desktop Bento → tablet 2-col → mobile 1-col collapse
- [x] "Show more" toggle for projects below the fold (if > 6 total)
- [x] Hover state: `translateY(-2px)` + `--shadow-glow`
  - [x] Keep unverified GitHub URLs empty until ownership is confirmed
  - [x] Use token-based fallback styling for missing thumbnails

### 3.6 — Experience Section

- [x] Build `src/components/sections/Experience.tsx`
- [x] Build `src/components/TimelineItem.tsx` with reusable `experience` / `education` variants
- [x] Vertical timeline: stem + dot + card layout
- [x] Company logo fallback initials when logos are absent
- [x] Skills list as `TechTag` chips per entry
- [x] Reduced-motion-safe entrance animation per timeline item

### 3.7 — Education Section

- [x] Build `src/components/sections/Education.tsx`
- [x] Reuse `TimelineItem` (type: `"education"`)
- [x] Add grade display
- [x] Institution logos: use initials fallback until verified assets are available

### 3.8 — Testimonials Section

- [ ] ⚠️ BLOCKED: No testimonials data — section skipped for v1 unless data is provided
- [ ] Build `src/components/sections/Testimonials.tsx` with empty state guard
- [ ] If data provided: avatar, name, role, company, quote card

### 3.9 — Contact Section

- [x] Build `src/components/sections/Contact.tsx`
- [x] Build `src/components/ContactCard.tsx` (glass variant)
- [x] Form with fields: name, email, subject, message
- [x] Form state machine: idle → loading → success / error (see COMPONENTS.md)
- [x] EmailJS REST integration using `.env.local` keys when configured
- [x] Social link icons: GitHub, LinkedIn
- [x] `aria-live` error/success announcements

### 3.10 — Footer

- [x] Build `src/components/Footer.tsx`
- [x] Logo text, nav links, social icons, copyright with `new Date().getFullYear()`
- [x] `<footer>` landmark, `aria-label` on social links

---

## Phase 4 — Polish

### 4.1 — Accessibility Audit

- [ ] Run axe DevTools on every section — fix all violations
- [ ] Tab through entire page manually — verify logical order and no traps
- [ ] Test with NVDA (Windows) or VoiceOver (Mac) — spot-check Nav, Hero, Projects, Contact
- [ ] Verify all images have meaningful `alt` text
- [ ] Verify `prefers-reduced-motion` disables all entrance animations (test in Chrome DevTools)
- [ ] Check every text+bg pair meets 4.5:1 contrast (use contrast checker)

### 4.2 — Lighthouse & Performance

- [ ] Run Lighthouse in production mode (not dev) — target: Performance ≥ 95
- [ ] Optimize all images: WebP, correct `sizes` attribute, lazy loading
- [ ] Verify LCP < 2s (hero image is likely LCP candidate — preload it)
- [ ] Verify CLS < 0.1 — check font loading, image aspect ratios
- [ ] Remove all unused CSS (Tailwind purge)
- [ ] Run Lighthouse Accessibility — fix any remaining issues

### 4.3 — SEO

- [x] Finalize `<title>` tag: `Sushil Kumar — Full-Stack Developer`
- [x] Finalize `<meta name="description">` (see SEO.md formula)
- [ ] Create OG image 1200×630px — save to `/public/og-image.png`
- [x] Add `og:image`, `og:title`, `og:description`, `og:url` meta tags
- [x] Add Twitter Card meta tags (`twitter:card`, `twitter:title`, etc.)
- [x] Add JSON-LD Person schema (see SEO.md)
- [x] Create `public/sitemap.xml`
- [x] Create `public/robots.txt`
- [x] Add canonical `<link rel="canonical">` tag

### 4.4 — Final Assets

- [ ] Create SVG favicon — minimal monogram or symbol
- [ ] Add `<link rel="icon">` and `<link rel="apple-touch-icon">`
- [x] Build 404 page: `src/app/not-found.tsx` — minimal, on-brand, link home
- [ ] Verify all external links open in new tab with `rel="noopener noreferrer"`

### 4.5 — Production Verification

- [x] Run `pnpm lint`
- [x] Run `pnpm exec tsc --noEmit`
- [x] Run `pnpm build`

---

## Phase 5 — Deploy

- [ ] Run `pnpm build` locally — zero errors, zero warnings
- [ ] Verify production build in `pnpm start` — all sections render correctly
- [ ] Create Vercel project — connect GitHub repo
- [ ] Set environment variables in Vercel dashboard (EmailJS keys)
- [ ] Deploy to Vercel — verify production URL
- [ ] ⚠️ MISSING: Connect custom domain (domain not yet confirmed — see PRD.md Open Questions)
- [ ] Set up `www` → apex redirect
- [ ] Test production URL in Chrome, Firefox, Safari, Edge
- [ ] Test on real mobile device (iOS Safari, Android Chrome)
- [ ] Final Lighthouse run on production URL — confirm all scores ≥ 95
- [ ] Set up Vercel preview deploys for future feature branches
