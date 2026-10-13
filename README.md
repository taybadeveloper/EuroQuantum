# EuroQuantum — Trading & Investment Website

Next.js 16 + TypeScript + Tailwind CSS v4 website for **EuroQuantum** (euroquantum-au.com) — an advanced trading & investment platform serving Australia.

## Pages

| Route     | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| `/`       | Home — hero, live ticker, stats, services, features, testimonials, CTA |
| `/about`  | About — story, mission & vision, values, company milestones          |
| `/services` | Services — 6 detailed offerings + onboarding process              |
| `/contact`  | Contact — enquiry form with validation + contact information       |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Tech Stack

- **Next.js 16** (App Router) with TypeScript
- **Tailwind CSS v4** — dark futuristic theme (cyan → violet "quantum" palette)
- Custom SVG icon set (no icon library dependency)
- SEO: per-page metadata, OpenGraph, JSON-LD Organization schema, `robots.txt`, `sitemap.xml`

## Notes

- **Contact form** is a UI demo (no backend). Wire `ContactForm.tsx` to your email service, API route or CRM.
- Contact details (phone, address) are placeholders — replace them with real information.
- `.npmrc` points the npm cache to `D:/npm-cache` because the C: drive is full on this machine.
- Risk warning copy in the footer follows standard practice for trading websites.
