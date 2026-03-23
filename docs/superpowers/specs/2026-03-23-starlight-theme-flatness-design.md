# Starlight Flatness Refinement Design

## Goal

Apply a hard-flat refinement pass to the existing Gruvbox theme so dark and light modes remove remaining depth cues (shadows/glows) while preserving color identity, readability, and structure.

## Why This Follow-Up Exists

The prior theme pass established palette/token mapping and component retone, but runtime validation showed lingering depth in some Starlight component styles. The user explicitly wants a harder flat aesthetic.

## Scope

- Modify only `src/styles/site.css`.
- Keep current Gruvbox token system and component mapping.
- Do not introduce JavaScript, layout rewrites, or content changes.

## Out of Scope

- New component designs.
- Typography changes beyond existing setup.
- Any non-theme behavior changes.

## Approach (Hard-Flat, Token-First)

1. Add a flatness token layer for shadow-related values and set them to neutral (`none`, `0`, or transparent where appropriate).
2. Apply targeted safety overrides for components that commonly carry residual depth in Starlight:
   - cards and card icons
   - sidebar/nav wrappers
   - asides/callouts
   - code block containers
   - pagination and button-like controls
   - search/dialog wrappers
3. Keep borders and contrast transitions for affordance, replacing depth with crisp edge definition.
4. Reduce decorative texture so it reads as terminal atmosphere, not visual depth.

## Targeted Selector Families

- `.card`, `.card-grid`, `.home-projects .card-grid`
- `.sidebar-pane`, `.sidebar-content a`, `.pagination-links a`
- `.starlight-aside`
- `pre`, `.astro-code`, `.expressive-code`
- Search/dialog containers rendered by Starlight header/search controls

Exact selectors may be adjusted to match current emitted markup but must stay tightly scoped to Starlight surfaces.

## Acceptance Criteria

- No visible drop shadows or glow halos on primary surfaces in dark mode.
- Light mode preserves readability and consistent flat styling.
- Focus indicators remain clearly visible via borders/outlines, not glow effects.
- `npm run build` passes.
- Manual check on `/`, `/forge/`, `/forge/db-transaction/` confirms hard-flat feel with no obvious depth artifacts.

## Risk Notes and Mitigation

- Risk: removing shadow can reduce perceived interactivity.
  - Mitigation: retain strong border contrast and hover/focus color deltas.
- Risk: over-flattening may make sections blend together.
  - Mitigation: preserve hierarchy through border tone and background value steps.

## Verification Checklist

- Desktop dark/light checks on `/`, `/forge/`, `/forge/db-transaction/`
- Mobile checks around 375-430 width for sidebar/nav/card readability
- Focus-visible states remain keyboard-discernible
- Build completes without CSS regressions
