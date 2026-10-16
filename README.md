# Construcastor

Almacén de materiales para construcción. Static marketing site built with **Astro** and **Tailwind CSS**.

> Migrated from Gatsby + Chakra UI. Content and visual design were preserved.

## Stack

- [Astro](https://astro.build) — static site generator (zero JS by default)
- [Tailwind CSS](https://tailwindcss.com) — styling
- Markdown content collections for brand pages
- Netlify CMS (`/admin`) for editing brand content

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `http://localhost:4321`  |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Project structure

```
public/
  img/            Brand logos & gallery images (referenced as /img/... in markdown)
  images/         Home carousel/hero images + favicon + logo SVG
  admin/          Netlify CMS (config.yml + index.html)
src/
  content/
    brands/       One markdown file per brand (frontmatter: title, brandLogo, categories, gallery)
    config.ts     Content collection schema
  components/     Astro components (Header, Footer, Carousel, About, HowItWorks, GoogleMap)
  layouts/
    Layout.astro  Base HTML shell: SEO meta, gtag analytics, Header + Footer
  pages/
    index.astro          Home
    catalogo.astro       Brand index (sorted list)
    catalogo/[slug].astro Dynamic brand detail pages
    404.astro
  styles/global.css      Tailwind entry + fonts + base reset
```

## Content

Brand pages are generated from `src/content/brands/*.md`. Each file's frontmatter drives
the detail page at `/catalogo/<filename>`. Edit via the Netlify CMS at `/admin` or directly
in markdown.

## SEO

- `astro.config.mjs` sets `site: https://construcastor.com` (update if the domain changes).
- A sitemap is generated at `/sitemap-index.xml` via `@astrojs/sitemap`.
- `public/robots.txt` allows crawling and points to the sitemap (disallows `/admin/`).
- Each page emits a canonical URL, Open Graph tags (incl. `og:image`), and a unique description.

## Brand theme

Colors are preserved from the original design in `tailwind.config.mjs`:

- `brand.blue` — `#0000cc`
- `brand.yellow` — `#ffdd11`
