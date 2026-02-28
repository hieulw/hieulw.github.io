# Hieu's Knowledge Base

Personal documentation site built with Astro + Starlight.

## Local development

- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Build production output: `npm run build`
- Preview built site: `npm run preview`

## Content structure

All docs content lives in `src/content/docs/`.

- `programming/`
- `devops/`
- `tools/`
- `til/`
- `career/`
- `templates/`

## Deployment

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.

On each push to `main`, GitHub Actions builds the site and publishes `dist/` to Pages.
