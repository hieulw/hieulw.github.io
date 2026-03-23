# Hieu's Knowledge Base

Personal documentation site built with Astro + Starlight.

## Local development

- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Build production output: `npm run build`
- Preview built site: `npm run preview`

## Content structure

All docs content lives in `src/content/docs/`.

- `index.mdx` - docs landing page
- `forge/` - Forge notes and implementation docs

## Writing guidelines

- Keep article titles short and concise.
- Do not repeat folder/category names in article titles when context is already clear from the path (for example, docs under `forge/` should not include `Forge` in the title).

Project-specific content rules live in `AGENTS.md`.

## Deployment

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.

On each push to `main`, GitHub Actions builds the site and publishes `dist/` to Pages.
