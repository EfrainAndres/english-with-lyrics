# Brand Assets

## Purpose

This document tracks the real brand assets available for Sing Pronounce Repeat / English with Lyrics and how to use them in the web product.

## Available Assets

All current brand files live in `public/brand/`.

- `favicon.png`
- `faviconx48.png`
- `logo-claro.svg`
- `logo-oscuro.svg`
- `logo-fondo-transparente-B.png`
- `logo-fondo-transparente-N.png`

## Recommended Usage

Use the SVG files for UI whenever possible because they scale cleanly.

- Navbar on dark backgrounds: `logo-claro.svg`
- Footer on dark backgrounds: `logo-claro.svg`
- Light backgrounds: `logo-oscuro.svg`
- Fallback bitmap on light or transparent use cases: `logo-fondo-transparente-N.png`
- Fallback bitmap on dark or transparent use cases: `logo-fondo-transparente-B.png`

The current Phase 0 landing uses `logo-claro.svg` in the navbar and footer because the page background is dark.

## Favicon Usage

Use:

- Primary favicon: `/brand/favicon.png`
- 48x48 favicon: `/brand/faviconx48.png`

These are referenced from `src/app/layout.tsx` metadata.

## Logo Handling Rules

Do not:

- Distort the logo.
- Recolor the logo in code.
- Stretch it outside its original aspect ratio.
- Crop the logo.
- Manually edit the SVG or PNG files in code.
- Recreate the logo with CSS shapes.

Do:

- Keep the original aspect ratio.
- Use accessible alt text: `Sing Pronounce Repeat / English with Lyrics logo`.
- Leave enough spacing around the logo.
- Use the light logo on dark backgrounds and the dark logo on light backgrounds.

## Pending Assets

A dedicated OG/social sharing image can be added later when the Phase 0 landing is closer to launch.
