# Design system

Principles and direction for the Maiden Lab visual identity. **No CSS, tokens, or components exist yet.** This document defines the target approach only.

## Brand direction

**MAIDEN / LAB**

Positioning: personal digital studio / engineering portfolio.

The visual language should feel editorial, premium, and human — not like a template assembled from common developer-portfolio tropes.

## Explicitly avoided clichés

Do not default to patterns that signal "generic dev portfolio":

- omnipresent purple gradients
- systematic glassmorphism
- decorative blobs with no purpose
- gratuitous motion
- fake terminal interfaces
- logo walls with no narrative
- generic copy such as "I build digital experiences."

Every visual choice should serve readability, hierarchy, or brand recognition.

## Design principles

- **Editorial** — content-led layout with strong typographic hierarchy.
- **Premium** — restrained palette, generous spacing, considered details.
- **Restrained** — fewer elements, each with clear purpose.
- **Human** — approachable tone in copy; no corporate boilerplate.
- **Typographic precision** — deliberate type scale, line height, and measure.
- **Generous whitespace** — let content breathe.
- **Controlled grid** — consistent rhythm with room for intentional asymmetry.
- **Discrete graphic details** — accent motifs used sparingly.

## Planned identity elements

| Element | Direction |
|---------|-----------|
| Background | Warm ivory / off-white base |
| Text | Graphite tones for body and headings |
| Accent | Indigo/violet used sparingly for emphasis and interaction |
| Motif | Slash `/` as a potential graphic element (MAIDEN/LAB) |
| Dark theme | Designed separately — not a simple color inversion of light mode |

Final values will be defined as design tokens during the UI implementation lot.

## Future token categories

Tokens will be organized into the following categories. **No values are defined in this lot.**

| Category | Purpose |
|----------|---------|
| `color` | Background, text, accent, semantic states |
| `typography` | Font families, sizes, weights, line heights |
| `spacing` | Margin, padding, gap scale |
| `radius` | Border radius scale |
| `shadow` | Elevation and depth |
| `motion` | Duration, easing, reduced-motion alternatives |
| `breakpoints` | Responsive layout thresholds |
| `z-index` | Layering scale for overlays, navigation, modals |

Implementation will live under `src/styles/tokens/` once the application exists. See [../architecture/README.md](../architecture/README.md) for related architecture topics.

## Accessibility and motion

- Respect `prefers-reduced-motion`.
- Maintain sufficient color contrast in both light and dark themes.
- Focus states must be visible and consistent.
- Motion supports understanding; it does not decorate idle screens.

## Related documentation

- [ARCHITECTURE.md](../../ARCHITECTURE.md) — styles directory structure
- [../case-studies/README.md](../case-studies/README.md) — case study presentation guidelines
