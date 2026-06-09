# Color Palette

## Official Brand Palette

Sing Pronounce Repeat / English with Lyrics uses a compact music-style palette:

- Black: `#010101`
- Yellow: `#FEE296`
- Pink: `#FE9CE1`
- Purple: `#CC9DEA`

These colors should drive public-facing UI decisions before adding any secondary colors.

## Current Theme Mapping

Tailwind tokens map the official palette into the app:

- `ink`: `#010101`
- `night`: `#010101`
- `pink`: `#FE9CE1`
- `purple`: `#CC9DEA`
- `cream`: `#FEE296`

Supporting tokens exist only for readability and layered dark surfaces:

- `midnight`: `#100B10`
- `panel`: `#191119`
- `paper`: `#FFF9FE`
- `soft`: `#F7EEF8`

Do not introduce new accent colors unless there is a clear accessibility or product need.

## Usage Guidance

Use black as the primary page and header background.

Use pink for:

- Primary CTAs.
- Pronunciation highlights.
- Important active states.
- Brand glow.

Use yellow for:

- Warm highlights.
- Ebook and guide CTAs.
- Small emphasis labels.
- Selection color.

Use purple for:

- Secondary accents.
- Borders.
- Supportive badges.
- Learning mode cards.
- Subtle glow and depth.

Use `paper` and `soft` only for readable text on dark backgrounds.

## Accessibility Notes

- Keep body text on black, midnight, or panel surfaces as `paper` or `soft`.
- Use black text on yellow CTAs.
- Avoid small white text on pink or purple unless contrast is verified.
- Keep focus rings visible, preferably yellow or purple depending on the surface.
- Review mobile screens because the dark header and logo occupy more visual weight on small screens.

## Guardrails

Do not:

- Reintroduce unrelated blue, teal, green, or orange accents.
- Recolor the official logo files.
- Use gradients that rely on non-brand colors.
- Let decorative color reduce text contrast.

Do:

- Keep the music/karaoke feel with pink, purple, and yellow accents.
- Use opacity and dark surface tints for depth.
- Prefer the official palette for new cards, forms, badges, and CTAs.
