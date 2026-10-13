# STACK — Tech Stack & Build Decisions

> All decisions are marked **Locked** (do not change without explicit consent) or **Open** (can be revisited before Phase 2 starts).

## Framework

**Decision:** Next.js 15 App Router  
**Status:** Locked  
**Rationale:** Best-in-class for portfolio SEO (SSG), image optimization via `next/image`, built-in font optimization via `next/font`, zero-config Vercel deployment. Astro is lighter but React ecosystem knowledge is a stronger signal. Vite + React loses SSG without extra config.

## Styling

**Decision:** Tailwind CSS v4  
**Status:** Locked  
**Rationale:** v4's CSS-native approach (zero config, `@theme` blocks, `oklch()` colors) aligns perfectly with design-token discipline. No runtime overhead. CSS Modules are too verbose for a small project; vanilla-extract adds build complexity.

## Motion

**Decision:** Framer Motion (via `motion` package, v12+)  
**Status:** Locked  
**Rationale:** Already in old dependencies. Best React integration for scroll-driven entrance animations and layout transitions. CSS-only motion is insufficient for the Bento grid hover states. Motion One is headless but has worse DX for component-level animations. `prefers-reduced-motion` must be respected via `useReducedMotion()` hook.

## Fonts

**Decision:** Self-hosted via `next/font/local`  
**Status:** Locked  
**Rationale:** Eliminates third-party DNS lookup latency. Fonts ship with the build. Zero layout shift (font-display: swap handled by Next.js).

**Font pair:**
- **Sans:** Geist Sans (Vercel, open-source) — body, headings
- **Mono:** Geist Mono (Vercel, open-source) — labels, tags, code, section eyebrows only

**Why Geist over Inter Tight:** Geist is purpose-built for developer tools, has better mono pairing, and is Vercel-native for zero-friction self-hosting.

## Deployment

**Decision:** Vercel  
**Status:** Locked  
**Rationale:** Zero-config Next.js deployment, edge network, automatic preview deploys on PRs, free hobby tier for personal portfolio. Domain connection is one step.

## Package Manager

**Decision:** pnpm  
**Status:** Locked  
**Rationale:** Faster installs, strict hoisting prevents phantom dependency bugs, disk-efficient. `bun` is faster but less mature ecosystem support in CI.

## Node Version

**Decision:** Node 22 LTS  
**Status:** Locked  
**Rationale:** Current LTS as of 2026. Matches Vercel's default runtime.

## TypeScript

**Decision:** Strict mode enabled  
**Status:** Locked  
**Config:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true
  }
}
```

## Linting & Formatting

**Decision:** ESLint (flat config) + Prettier  
**Status:** Locked  
**Config:**
- ESLint: `next/core-web-vitals` + `typescript-eslint/recommended-type-checked`
- Prettier: single quotes, 2-space indent, trailing commas, 100 char print width
- Pre-commit hook via `lint-staged` + `husky`

## Email / Contact

**Decision:** Keep EmailJS (service already configured)  
**Status:** Open — can switch to a Vercel serverless function + Resend if EmailJS limits are hit  
**Config from old site:**
- Service ID: `service_7xnnbty`
- Template ID: `template_g08hj44`
- Public Key: `8Ct0tH03y1dnBu2EN`

## Image Handling

**Decision:** `next/image` for all images, WebP format, `sizes` attribute required  
**Status:** Locked  
**Rationale:** Automatic format optimization, lazy loading, prevents CLS.

## Icon Library

**Decision:** `lucide-react` (tree-shakeable, consistent stroke style)  
**Status:** Open — confirm before Phase 3 starts

## Summary Table

| Layer | Choice | Status |
|---|---|---|
| Framework | Next.js 15 App Router | Locked |
| Styling | Tailwind CSS v4 | Locked |
| Motion | Framer Motion / motion v12 | Locked |
| Sans font | Geist Sans | Locked |
| Mono font | Geist Mono | Locked |
| Hosting | Vercel | Locked |
| Package mgr | pnpm | Locked |
| Node | 22 LTS | Locked |
| TypeScript | Strict mode | Locked |
| Lint/format | ESLint + Prettier | Locked |
| Email | EmailJS | Open |
| Icons | lucide-react | Open |
