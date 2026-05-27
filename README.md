# Sneakky Klean

Premium sneaker cleaning & restoration — front end built with Next.js 15, React 19, Tailwind v4, and the Inter typeface.

## Brand

- **Colors:** Brand blue `#19a1c2` (with a full 50–950 scale), white, ink (neutral) scale
- **Type:** Inter — Light · Regular · Medium · Semibold · Bold
- **Voice:** Premium but approachable. Confident. Culturally relevant. Expert without being technical. Luxury without arrogance.
- **Aesthetic:** Apple-style retail minimalism — lots of whitespace, restrained color, hairlines, gentle motion, large display type.

## Getting started

You'll need **Node.js 20+**. Install from [nodejs.org](https://nodejs.org/) (or via `brew install node` on macOS).

```bash
# install dependencies
npm install

# run dev server (http://localhost:3000)
npm run dev

# production build
npm run build
npm run start
```

## Routes

All routes from the IA spec are implemented:

| Section | Routes |
|---|---|
| Main | `/` |
| Services | `/services` and 22 dynamic `/services/[slug]` pages |
| Locations | `/locations`, `/locations/miami`, `/locations/new-york`, `/locations/saskatoon` |
| Klean Club | `/klean-club`, `/klean-club/join` |
| Shop | `/shop`, `/shop/sneakky-klean-wipes`, `/shop/sneaker-care-kits` |
| Company | `/about`, `/blog`, `/reviews` |
| Support | `/help`, `/help/faqs` |
| Business | `/franchise`, `/contact` |
| User | `/app`, `/book`, `/quote`, `/account` |
| Legal | `/legal/privacy-policy`, `/legal/terms-and-conditions`, `/legal/cookie-policy`, `/legal/refund-policy` |

## Project structure

```
src/
├── app/                # App Router pages (one folder per route)
├── components/         # Shared UI — Header, Footer, Button, Logo, etc.
└── data/               # Typed content sources for services, locations, shop
```

The 22 service detail pages and 3 location pages are driven by typed data in `src/data/` rendered by `[slug]/page.tsx` templates. To edit copy, change the data files.

## Design system

The design system is defined in `src/app/globals.css` via Tailwind v4's `@theme` block. To adjust the brand color, update `--color-brand-*`. To change the type scale, update the `--text-*` variables.
