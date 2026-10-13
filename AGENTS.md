# AGENTS.md — Agent Contract for Sushil Kumar Portfolio

> This file is read by all AI coding agents before any action.
> Last updated: 2026-10-13

---

<!-- BEGIN: nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file
structure may all differ from your training data. Read the relevant
guide in `node_modules/next/dist/docs/` before writing any code.
Heed deprecation notices.
<!-- END: nextjs-agent-rules -->

---

## Mandatory First Step

Before writing any code or making any change:

1. Read `docs/README.md`
2. Read every file linked from it (`docs/PRD.md`, `docs/DESIGN.md`, `docs/STACK.md`, `docs/CONTENT.md`, `docs/COMPONENTS.md`, `docs/BUILD_PLAN.md`, `docs/RULES.md`, `docs/ACCESSIBILITY.md`, `docs/SEO.md`)
3. Check `docs/BUILD_PLAN.md` for the current phase and next unchecked task

No exceptions. These files are the single source of truth.

---

## Hard Rules (short version — full list in docs/RULES.md)

- **No inline hex values** — use CSS tokens only (`var(--color-*)`)
- **No `any` in TypeScript** — strict mode is enforced
- **Mono font for labels only** — never body prose
- **Glass effect only on** sticky nav + max 1 floating element
- **All images via** `next/image` — no raw `<img>` tags
- **Semantic HTML only** — no div soup
- **Respect `prefers-reduced-motion`** — all animations must check this
- **No `console.log` in production** — use proper logging or remove
- **No new npm dependencies without asking first**
- **Follow `docs/DESIGN.md` tokens exactly** — do not improvise

---

## Project Stack (locked — see docs/STACK.md for rationale)

- **Framework:** Next.js 15 App Router
- **Styling:** Tailwind CSS v4
- **Motion:** Framer Motion (respect `prefers-reduced-motion`)
- **Fonts:** Self-hosted via `next/font` (Geist Sans + Geist Mono)
- **Deployment:** Vercel
- **Package manager:** pnpm
- **TypeScript:** strict mode (`"strict": true`)

---

## Content Source of Truth

- All copy lives in `docs/CONTENT.md`
- Do not invent, paraphrase, or shorten content without instruction
- All project GitHub URLs are placeholder — do not fabricate URLs
- All image paths are relative to `/public/`
