# SEO — Metadata & Discoverability

> All metadata is implemented in `src/app/layout.tsx` (root) and supplemented per-page if routes are added.

---

## Page Title Pattern

**Format:** `[Name] — [Primary Role]`

**Final value:** `Sushil Kumar — Full-Stack Developer`

**Rules:**
- Max 60 characters (including spaces)
- Name first — personal brand takes priority
- No pipe (`|`) separators — em dash feels more intentional
- Do not append the site name again (this IS the site)

---

## Meta Description Formula

**Format:** `Portfolio of [Name], a [role] specializing in [top 3 skills]. [One differentiator].`

**Final value:**
> `Portfolio of Sushil Kumar, a full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture. Open to full-time roles and freelance projects.`

**Rules:**
- 140–160 characters (Google truncates at ~155)
- Include primary keywords naturally: "full-stack developer", "React", "Node.js"
- End with a soft CTA or differentiator
- Must match the hero copy tone — not generic

---

## Open Graph (OG) Image Spec

**Dimensions:** 1200 × 630px (2:1.05 ratio)
**Format:** PNG or WebP
**Path:** `/public/og-image.png`

**Content:** (generate in Phase 4)
- Background: `--color-bg` (#0D1117)
- Left: Name in `--text-display` Geist Sans, white
- Below name: Role line in `--text-xl`, `--color-text-secondary`
- Right: Minimal geometric accent or monogram (no profile photo — photo doesn't read well at this size)
- Bottom left: `sushilkumar.dev` or deployment URL in Geist Mono, muted

**Meta tags implementation:**
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://[your-domain]/" />
<meta property="og:title" content="Sushil Kumar — Full-Stack Developer" />
<meta property="og:description" content="Portfolio of Sushil Kumar, a full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture." />
<meta property="og:image" content="https://[your-domain]/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Sushil Kumar — Full-Stack Developer portfolio" />
<meta property="og:locale" content="en_US" />
```

---

## Twitter / X Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Sushil Kumar — Full-Stack Developer" />
<meta name="twitter:description" content="Portfolio of Sushil Kumar, a full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture." />
<meta name="twitter:image" content="https://[your-domain]/og-image.png" />
<meta name="twitter:image:alt" content="Sushil Kumar — Full-Stack Developer portfolio" />
```

> ⚠️ If Sushil has a Twitter/X handle, add: `<meta name="twitter:creator" content="@handle" />`

---

## JSON-LD Person Schema

Add inside `src/app/layout.tsx` as a `<script type="application/ld+json">`:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sushil Kumar",
  "url": "https://[your-domain]/",
  "image": "https://[your-domain]/images/profile.jpg",
  "jobTitle": "Full-Stack Developer",
  "description": "Full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture.",
  "sameAs": [
    "https://github.com/sushilbyte7",
    "https://www.linkedin.com/in/sushilbyte7"
  ],
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Pimpri Chinchwad University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressCountry": "IN"
      }
    }
  ],
  "knowsAbout": [
    "React.js",
    "Node.js",
    "TypeScript",
    "Docker",
    "AWS",
    "Android Development",
    "Machine Learning"
  ]
}
```

> ⚠️ Replace `[your-domain]` with confirmed deployment URL before Phase 4.
> ⚠️ Add Twitter/X URL to `sameAs` array if handle is confirmed.

---

## Sitemap

**Path:** `public/sitemap.xml`

Since this is a single-page site (no routing), the sitemap has one entry:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://[your-domain]/</loc>
    <lastmod>2026-10-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

> Note: If using Next.js App Router, prefer `src/app/sitemap.ts` (dynamic generation) over a static file.

```ts
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://[your-domain]/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

---

## robots.txt

**Path:** `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://[your-domain]/sitemap.xml
```

> Note: If using Next.js App Router, prefer `src/app/robots.ts`:

```ts
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://[your-domain]/sitemap.xml',
  }
}
```

---

## Canonical URLs

Add in root layout:

```html
<link rel="canonical" href="https://[your-domain]/" />
```

For Next.js App Router, use the `metadata` export:

```ts
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://[your-domain]'),
  alternates: {
    canonical: '/',
  },
};
```

---

## Social Preview Checklist

Run before deploying (Phase 4). Use these tools to validate:

| Platform | Validation Tool |
|---|---|
| General OG | https://opengraph.xyz |
| Facebook / LinkedIn | https://developers.facebook.com/tools/debug/ |
| Twitter / X | https://cards-dev.twitter.com/validator |
| WhatsApp | Share URL in WhatsApp — preview generates automatically |
| Slack | Paste URL in Slack message — preview generates automatically |

**Checklist:**
- [ ] OG title renders correctly (no truncation)
- [ ] OG description renders correctly (no truncation at 155 chars)
- [ ] OG image displays at full size (not cropped or missing)
- [ ] Twitter card type is `summary_large_image`
- [ ] LinkedIn preview shows image + title + description
- [ ] WhatsApp preview shows image + title

---

## Next.js Metadata Implementation (App Router)

Complete metadata export for `src/app/layout.tsx`:

```ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sushil Kumar — Full-Stack Developer',
  description: 'Portfolio of Sushil Kumar, a full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture. Open to full-time roles and freelance projects.',
  metadataBase: new URL('https://[your-domain]'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Sushil Kumar — Full-Stack Developer',
    description: 'Portfolio of Sushil Kumar, a full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sushil Kumar — Full-Stack Developer portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushil Kumar — Full-Stack Developer',
    description: 'Portfolio of Sushil Kumar, a full-stack developer and MCA student specializing in React, Node.js, and cloud-native architecture.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};
```
