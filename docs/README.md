# Sushil Kumar — Portfolio Redesign

## Project Summary

This is the ground-up redesign of Sushil Kumar's personal developer portfolio. The old site (~2 years old) was built with React, styled-components, Three.js, and a heavy purple/dark theme. The new design is locked to a **Minimalism + mono-type signature + surgical Glassmorphism + Bento Grid** direction. All content has been extracted verbatim from the old codebase and lives in `content/portfolio-data.md` and `content/portfolio-data.json`. The `docs/` folder is the persistent source of truth for every design, build, and content decision in this project.

## Rule for Every Future Session

> **Read every file in `/docs` before any design or code change.** No exceptions. The `.antigravity/rules.md` file enforces this at the agent level.

## Current Status

| Phase | Status |
|---|---|
| Phase 1 — Content extraction | ✅ Complete |
| Phase 2 — Design system (tokens, fonts, layout) | ⏳ Not started |
| Phase 3 — Build sections | ⏳ Not started |
| Phase 4 — Polish (a11y, Lighthouse, SEO, OG) | ⏳ Not started |
| Phase 5 — Deploy (Vercel, domain) | ⏳ Not started |

## Docs Index

| File | Purpose |
|---|---|
| [PRD.md](./PRD.md) | Product requirements — goals, scope, phases, open questions |
| [DESIGN.md](./DESIGN.md) | Locked design system — colors, type, spacing, Bento spec, motion |
| [STACK.md](./STACK.md) | Tech stack decisions — framework, styling, fonts, deployment |
| [CONTENT.md](./CONTENT.md) | Curated content — hero copy, bio, projects, skills, links |
| [COMPONENTS.md](./COMPONENTS.md) | Component contracts — props, variants, states per component |
| [BUILD_PLAN.md](./BUILD_PLAN.md) | Phased checklist — atomic tasks in order, tracked with [ ] |
| [RULES.md](./RULES.md) | Non-negotiables — 15 hard rules the agent must never break |
| [ACCESSIBILITY.md](./ACCESSIBILITY.md) | WCAG 2.2 AA checklist — contrast, focus, keyboard, semantics |
| [SEO.md](./SEO.md) | Metadata and discoverability — OG, JSON-LD, sitemap, robots |

## Source Files (read-only)

| File | Purpose |
|---|---|
| `content/portfolio-data.md` | Verbatim extraction from old codebase |
| `content/portfolio-data.json` | Same data in structured JSON |
