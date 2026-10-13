# COMPONENTS — Component Contract

> This file defines the full interface contract for every UI component. Follow these contracts exactly during Phase 3 (Build). No component may deviate from its contract without updating this file first.

**Naming convention:** PascalCase for all components. Files: `ComponentName.tsx` in `src/components/`.

---

## Nav

**Purpose:** Sticky site-wide navigation bar. The only glass surface that is always present.

**Props:**

| Prop | Type | Required | Default | Notes |
|---|---|---|---|---|
| `sections` | `NavSection[]` | Yes | — | Array of `{id, label, href}` |

**NavSection type:**
```ts
type NavSection = {
  id: string;
  label: string;
  href: string;
};
```

**Hardcoded sections (from CONTENT.md):**

| id | label | href |
|---|---|---|
| hero | About | #hero |
| skills | Skills | #skills |
| experience | Experience | #experience |
| projects | Projects | #projects |
| education | Education | #education |
| contact | Contact | #contact |

**Variants:** None — single layout.

**States:**
- `default` — glass background, links at `--color-text-secondary`
- `active section` — link at `--color-text-primary`, `--color-accent` underline
- `scrolled` — glass backdrop-filter intensifies (blur 12px → 16px)
- `mobile open` — slide-down drawer with full-width links
- `mobile closed` — hamburger icon only

**Behavior:**
- Position: `sticky top-0`, `z-index: 100`
- Active section tracked via `IntersectionObserver`
- CTA button: "GitHub Profile" → `https://github.com/sushilbyte7`, right-aligned

**Accessibility:** `<nav>` landmark, `aria-current="page"` on active link, hamburger `aria-expanded`, keyboard-closeable (Escape key).

---

## Hero

**Purpose:** Full-viewport landing section. Name, role, tagline, CTAs, profile image.

**Props:** None — content from CONTENT.md, no runtime props.

**Layout:**
- Left col (8/12): Text block — name, role, tagline, CTAs
- Right col (4/12): Profile image (circular, border `--color-accent`, `--radius-full`)
- Mobile: image above text, stacked

**States:**
- `default` — entrance animation (opacity 0→1 + translateY 16px→0)
- `reduced-motion` — no animation, elements visible immediately

**Content mapping:**

| Element | Content |
|---|---|
| `<h1>` | `Sushil Kumar` |
| Role line | `Full-Stack Developer & MCA Student` (see CONTENT.md for decisions) |
| Tagline | `Building clean software, one commit at a time.` |
| Primary CTA | `View Projects` → `#projects` |
| Secondary CTA | `Download Resume` → resume URL |
| Image | ⚠️ MISSING — new photo needed |
| Image alt | `"Sushil Kumar — Full-Stack Developer"` |

**Accessibility:** Single `<h1>` on the page. `<section aria-label="Introduction">`.

---

## SectionHeader

**Purpose:** Reusable section title block used at the top of every section.

**Props:**

| Prop | Type | Required | Default |
|---|---|---|---|
| `eyebrow` | `string` | No | — |
| `title` | `string` | Yes | — |
| `subtitle` | `string` | No | — |
| `align` | `"left" \| "center"` | No | `"left"` |

**Rendering:**
```
[eyebrow — Geist Mono, --text-xs, --color-accent]
[title — --text-h1, --color-text-primary]
[subtitle — --text-xl, --color-text-secondary]  (if provided)
```

**Example usage:**
```tsx
<SectionHeader
  eyebrow="02. projects"
  title="Selected Work"
  subtitle="A cross-section of what I've built — web, mobile, and ML."
/>
```

**States:** Default only — no interactive states.

---

## Eyebrow

**Purpose:** Small mono-font label used above section titles and as category labels.

**Props:**

| Prop | Type | Required | Default |
|---|---|---|---|
| `children` | `React.ReactNode` | Yes | — |
| `color` | `"accent" \| "muted"` | No | `"accent"` |

**Rendering:** `<span>` with `font-family: Geist Mono`, `--text-xs`, `letter-spacing: 0.04em`, uppercase.

---

## ProjectCard (3 variants)

**Purpose:** Displays a single project in the Bento grid. Three size variants define layout but share the same base component.

### Shared Props

| Prop | Type | Required | Default |
|---|---|---|---|
| `title` | `string` | Yes | — |
| `hook` | `string` | Yes | — |
| `description` | `string` | No | — |
| `tags` | `string[]` | Yes | — |
| `githubUrl` | `string` | No | — |
| `liveUrl` | `string` | No | — |
| `imageSrc` | `string` | Yes | — |
| `imageAlt` | `string` | Yes | — |
| `variant` | `"large" \| "wide" \| "standard"` | Yes | — |
| `category` | `"web app" \| "android app" \| "machine learning"` | Yes | — |

### Variant: `large`

- Grid span: 8 cols × 2 rows
- Image: top 60% of card (cover)
- Content: title, hook, full description, tags, links
- Hover: `translateY(-2px)`, `--shadow-glow`

### Variant: `wide`

- Grid span: 8 cols × 1 row
- Layout: image left (40%), content right (60%)
- Content: title, hook, tags, links (no full description)
- Hover: `translateY(-2px)`, `--shadow-glow`

### Variant: `standard`

- Grid span: 4 cols × 1 row
- Image: top third (cover, fixed height 160px)
- Content: title, hook (truncated to 2 lines), tags (max 3 visible)
- Hover: `translateY(-2px)`, border glow

### States (all variants)

| State | Description |
|---|---|
| `default` | Solid `--color-surface` background, `--color-border` border |
| `hover` | `translateY(-2px)`, `box-shadow: --shadow-glow` |
| `focus-visible` | `outline: 2px solid --color-accent`, `outline-offset: 2px` |

**Accessibility:** `<article>` element. Image has descriptive `alt`. Links have `aria-label="View [title] on GitHub"`.

---

## TechTag

**Purpose:** Monospace chip for displaying tech stack labels inline.

**Props:**

| Prop | Type | Required | Default |
|---|---|---|---|
| `children` | `string` | Yes | — |
| `size` | `"sm" \| "xs"` | No | `"sm"` |

**Rendering:**
```
font-family: Geist Mono
font-size: --text-xs
background: --color-surface-2
border: 1px solid --color-border
border-radius: --radius-sm
padding: 2px 8px
color: --color-text-secondary
```

**States:** None — display only, not interactive.

---

## TimelineItem

**Purpose:** Single entry in the Experience or Education vertical timeline.

**Props:**

| Prop | Type | Required | Default |
|---|---|---|---|
| `type` | `"experience" \| "education"` | Yes | — |
| `title` | `string` | Yes | — |
| `subtitle` | `string` | Yes | — |
| `date` | `string` | Yes | — |
| `location` | `string` | No | — |
| `description` | `string \| string[]` | Yes | — |
| `skills` | `string[]` | No | — |
| `logoSrc` | `string` | No | — |
| `logoAlt` | `string` | No | — |
| `grade` | `string` | No | — |

**Layout:**
- Left: timeline stem (`--color-border`) + dot (`--color-accent`)
- Right: card with logo, title, subtitle, date, description bullets, skill tags

**States:** Default only — no interactive states. Entrance animation on scroll-into-view.

**Accessibility:** `<li>` inside `<ol aria-label="Experience timeline">`.

---

## ContactCard

**Purpose:** The one allowed glass element (outside Nav). Contains the contact form.

**Props:** None — content and behavior are fixed.

**Layout:**
- Glass surface (`--color-glass-bg`, `backdrop-filter: blur(12px)`)
- Section: title + description text
- Form: email, name, subject, message, submit button
- Social link row: GitHub, LinkedIn, (Twitter/X if available)

**Form State Machine:**

| State | Description |
|---|---|
| `idle` | Default form state |
| `loading` | Submit button shows spinner, fields disabled |
| `success` | Success message replaces form, green accent |
| `error` | Inline error message, form re-enabled |

**Accessibility:** All inputs have `<label>`. Form has `role="form"` and `aria-label`. Error messages use `aria-live="polite"`.

---

## StatBlock

**Purpose:** A single key stat (number + label), used in About section.

**Props:**

| Prop | Type | Required | Default |
|---|---|---|---|
| `value` | `string` | Yes | — |
| `label` | `string` | Yes | — |

**Rendering:**
```
value: --text-h1, font-weight 700, --color-text-primary
label: --text-xs, Geist Mono, --color-text-muted, uppercase
```

**States:** Default only.

---

## Button

**Purpose:** Interactive call-to-action. Two variants for primary/secondary hierarchy.

**Props:**

| Prop | Type | Required | Default |
|---|---|---|---|
| `children` | `React.ReactNode` | Yes | — |
| `variant` | `"primary" \| "secondary"` | No | `"primary"` |
| `href` | `string` | No | — |
| `onClick` | `() => void` | No | — |
| `disabled` | `boolean` | No | `false` |
| `loading` | `boolean` | No | `false` |
| `type` | `"button" \| "submit" \| "reset"` | No | `"button"` |
| `target` | `string` | No | — |
| `rel` | `string` | No | — |

**Variants:**

| Variant | Background | Border | Text |
|---|---|---|---|
| `primary` | `--color-accent` | none | `--color-bg` |
| `secondary` | transparent | `1px solid --color-border` | `--color-text-primary` |

**States:**

| State | Effect |
|---|---|
| `hover` | primary: brightness 1.1; secondary: border `--color-accent`, text `--color-accent` |
| `focus-visible` | `outline: 2px solid --color-accent`, `outline-offset: 2px` |
| `disabled` | opacity 0.4, cursor not-allowed |
| `loading` | spinner icon replaces children, disabled |

**Rendering:** If `href` provided, renders as `<a>`. Otherwise `<button>`.

---

## Link

**Purpose:** Inline text link. Used in prose, footer, and metadata lines.

**Props:**

| Prop | Type | Required | Default |
|---|---|---|---|
| `children` | `React.ReactNode` | Yes | — |
| `href` | `string` | Yes | — |
| `external` | `boolean` | No | `false` |

**Rendering:** `<a>` with underline on hover, `--color-accent` color. External: adds `target="_blank" rel="noopener noreferrer"` and a small external link icon (Lucide `ExternalLink`, 12px).

---

## Footer

**Purpose:** Site-wide footer with nav links, social icons, copyright.

**Props:** None — content is static.

**Layout:**
- Row 1: Logo text (`Sushil Kumar`, `--color-text-primary`)
- Row 2: Nav links (same as Navbar sections)
- Row 3: Social icon row (GitHub, LinkedIn, email, + optional others)
- Row 4: Copyright — `© 2024 Sushil Kumar. All rights reserved.`

> ⚠️ Copyright year should be dynamic: `© ${new Date().getFullYear()} Sushil Kumar.`

**Accessibility:** `<footer>` landmark. Social icons have `aria-label` (e.g. `aria-label="GitHub profile"`).
