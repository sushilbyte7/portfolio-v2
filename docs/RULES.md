# RULES — Non-Negotiables (Agent Contract)

> These rules are absolute. They apply to every code change, every session, without exception.
> If a rule conflicts with a user request, flag the conflict — do not silently break the rule.

---

1. **Mono font for labels only — never body prose.**
   Geist Mono is permitted on: section eyebrows, `TechTag` chips, stat labels, dates in metadata lines, code blocks. It is forbidden in: bio text, project descriptions, experience bullets, any paragraph content.

2. **Glass effect on Nav and maximum one (1) other floating element.**
   `backdrop-filter` + semi-transparent background may only appear on the sticky `Nav` and the `ContactCard`. All other surfaces use solid `--color-surface` or `--color-surface-2`. No exceptions.

3. **No inline hex values — use tokens only.**
   Every color must reference a CSS custom property from `tokens.css` (e.g. `var(--color-accent)`). Hardcoding `#3FB950` or `rgba(22,27,34,0.72)` inline is forbidden. The only exception is inside `tokens.css` itself.

4. **All images via `next/image` — never raw `<img>` tags.**
   All images must use the Next.js `<Image>` component with explicit `width`, `height` (or `fill`), `alt`, and `sizes` props. This is required for LCP, CLS, and accessibility compliance.

5. **Respect `prefers-reduced-motion` on every animation.**
   All Framer Motion animations must be gated with `useReducedMotion()`. When reduced motion is preferred, entrance animations are disabled entirely (not just slowed). Hover state changes (opacity, color) may persist since they are user-triggered.

6. **Semantic HTML only — no div soup.**
   Use `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<main>`, `<ul>`, `<ol>`, `<li>`, `<time>`, `<address>` appropriately. Never use nested `<div>` as the primary structural element when a semantic element exists.

7. **No `any` in TypeScript — ever.**
   `any` is forbidden. Use `unknown` and narrow, or define a proper type. `@ts-ignore` is also forbidden. `@ts-expect-error` is permitted only with a comment explaining why and a tracking note.

8. **No `console.log` in production builds.**
   `console.log`, `console.warn`, `console.error` in component or page code must be removed before any commit to `main`. Dev-only debugging via `console.*` must be wrapped in `if (process.env.NODE_ENV === 'development')`.

9. **No new dependencies without explicit approval.**
   Before installing any new package, state the package name, version, size, and why it cannot be solved with existing dependencies. The user must approve before `pnpm add` is run.

10. **Follow DESIGN.md tokens exactly — do not improvise colors or spacing.**
    If a token doesn't exist for the required value, propose a new token and add it to `tokens.css` first. Do not use arbitrary Tailwind values (e.g. `text-[13px]`, `bg-[#abc]`) — use token-mapped utilities only.

11. **All external links must have `target="_blank"` and `rel="noopener noreferrer"`.**
    Every link that opens a new tab must have both attributes. No exceptions. The `Link` component handles this automatically — use it for all external links.

12. **One `<h1>` per page — enforce heading hierarchy.**
    The Hero `<h1>` is the page's single heading level 1. All section titles are `<h2>`. Card titles are `<h3>`. Never skip heading levels.

13. **All form inputs must have associated `<label>` elements.**
    Placeholder text is not a substitute for a label. Every `<input>` and `<textarea>` must have a `<label>` with a matching `for`/`htmlFor` attribute, or be wrapped with the label.

14. **Content must come from `src/data/` — never hardcoded in JSX.**
    No string literals for names, descriptions, URLs, dates, or copy inside component files. All content is imported from the data modules in `src/data/`. This ensures CONTENT.md remains the single source of truth.

15. **Read `docs/README.md` and all linked docs at the start of every session.**
    Before writing a single line of code, verify the current phase in `BUILD_PLAN.md`, check DESIGN.md for the relevant tokens, and check COMPONENTS.md for the component contract. Working from memory between sessions is not acceptable.
