# PRD — Product Requirements Document

## Project Overview

**Product:** Sushil Kumar — Personal Developer Portfolio (v2)
**Owner:** Sushil Kumar (`github.com/sushilbyte7`, `linkedin.com/in/sushilbyte7`)
**Type:** Static single-page portfolio website
**Previous version:** React + CRA + Three.js + styled-components, deployed ~2 years ago. Codebase in `content/portfolio-data.md` for reference.

The old site served its purpose but accumulated technical debt and design drift. It relied on heavy 3D canvas effects, a loud purple gradient identity, and had multiple content integrity issues (project repos pointing to another developer's GitHub, stale meta tags, broken social links). This redesign starts fresh with a locked design direction, correct content, and a modern, low-maintenance stack.

## Goals

1. **Pass the 10-second recruiter test** — Name, role, top 3 skills, and a project should all be legible without scrolling.
2. **Feel technical and intentional** — The design itself should signal engineering taste, not just use of a template.
3. **Last 2–3 years without redesign** — Minimalism ages; trendy effects don't. Every design decision is evaluated for longevity.
4. **Load fast and score high** — Lighthouse ≥ 95 on all metrics; LCP < 2s on a 4G connection.
5. **Accurate, verified content only** — All old template-copy data (project repos, member links) must be replaced with real data before launch.

## Non-Goals (v1)

- No blog CMS or markdown-rendered articles
- No authentication, user accounts, or admin dashboard
- No 3D WebGL/Three.js scenes (removed — too heavy, dates quickly)
- No skeuomorphism, neumorphism, claymorphism, or liquid glass effects
- No dark/light mode toggle (single dark theme locked)
- No analytics dashboard or real-time data
- No i18n / multi-language support
- No PWA / service worker
- No gimmick effects (typewriter on every page, confetti, cursor trails)

## Target Audience

| Audience | What they look for |
|---|---|
| Recruiters | Role clarity, tech stack, timeline, contact |
| Hiring managers | Quality of work, problem-solving signal, communication |
| Potential clients | Capability breadth, project outcomes, reliability |
| Peer developers | Stack choices, project architecture, GitHub links |

## Success Metrics

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | 100 |
| Lighthouse Best Practices | ≥ 95 |
| LCP (Largest Contentful Paint) | < 2s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Contact form submissions | Trackable via EmailJS |
| Resume link clicks | Trackable via URL params or analytics |
| Qualitative | "Feels current and made by an engineer" |

## Sections Required

| Section | Priority | Notes |
|---|---|---|
| Hero | P0 | Name, role, one-line tagline, CTA buttons |
| About | P0 | Short bio — NEW: currently merged into Hero in old site |
| Skills | P0 | Grouped by category, primary skills highlighted |
| Projects | P0 | Bento grid layout — flagship feature of redesign |
| Experience | P0 | Timeline, 6 entries from old site (verify content) |
| Education | P1 | 3 entries |
| Testimonials | P2 | MISSING — none in old site; include slot if added later |
| Contact | P0 | Form + social links |
| Footer | P1 | Nav links, copyright, social |

## Out of Scope — v1

- CMS integration (Sanity, Contentful, Notion)
- Dark/light mode toggle
- Analytics dashboard (GA4, Plausible)
- Blog or articles section
- Animations beyond subtle entrance/hover effects

## Constraints

- **Responsive:** Mobile-first; must work from 320px to 1440px+
- **WCAG 2.2 AA:** All interactive elements, contrast, keyboard navigation
- **SEO:** Semantic HTML, JSON-LD Person schema, OG tags, sitemap
- **Deployable to Vercel** with zero-config CI on `main` push
- **TypeScript strict mode** — no `any`, no implicit `any`
- **No hardcoded hex values** — all colors via design tokens

## Phases

| Phase | Description | Status |
|---|---|---|
| 1 — Content | Extract all old content verbatim | ✅ Done |
| 2 — Design system | tokens.css, type scale, spacing, component anatomy | ⏳ Next |
| 3 — Build | Section by section in order (see BUILD_PLAN.md) | ⏳ Pending |
| 4 — Polish | a11y audit, Lighthouse, OG image, favicon, 404 | ⏳ Pending |
| 5 — Deploy | Vercel project, domain, redirects from old URL | ⏳ Pending |

## Open Questions

1. 📋 **Project GitHub URLs** — All projects in `CONTENT.md` are kept as **design templates** for Phase 3. GitHub URLs are placeholders (`⚠️ MISSING`). Fill them in with your own repo links before final deploy. Not a build blocker.
2. ⚠️ **Deployment domain** — What is the final URL? (`sushilkumar.dev`, `sushilbyte7.vercel.app`, custom domain?)
3. ⚠️ **Profile photo** — New photo for redesign, or use existing `src/images/HeroImage.jpeg`?
4. ⚠️ **Testimonials** — Any real recommendations (LinkedIn, colleagues) to add?
5. ⚠️ **Email** — Public contact email to display alongside form?
6. ⚠️ **Certifications** — Any AWS, GCP, Coursera, or other certs to add under Education?
7. ⚠️ **Twitter/X** — Handle to display, or remove icon entirely?
8. ⚠️ **Instagram/Facebook** — Real URLs, or remove those social icons?
9. ⚠️ **New resume** — Is the Drive link current? Or uploading to `/public/resume.pdf`?
10. ⚠️ **Hero tagline** — Keep "I'm an MCA student..." or rewrite for the new design?
