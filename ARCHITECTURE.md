# Architecture

This document describes the **target architecture** for Maiden Lab and distinguishes it from the **current state** of the repository.

## Current state

**LOT 00 — Documentation only.**

- No application runtime exists.
- No framework, build tool, or dependency manager is configured.
- No source code under `src/`.
- Architecture decisions about specific technologies (Angular version, SSR strategy, hosting) are deferred to future lots and will be recorded as ADRs.

## Target architecture

Maiden Lab will be a modern Angular application structured for clarity, testability, and long-term maintainability. The Angular version will be chosen at bootstrap time from the latest stable release and documented via ADR — it is intentionally not fixed in this document.

### Conceptual structure

```
src/app/
    core/           # Singleton services, guards, interceptors, app-wide providers
    shared/
        ui/         # Reusable presentational components
        layout/     # Shell, header, footer, page wrappers
    features/
        home/       # Landing and primary entry point
        projects/   # Project listings and case studies
        journey/    # Professional timeline and experience
        about/      # Profile, skills, positioning
        contact/    # Contact and outreach
    data/           # Data access, models, mappers, content loaders

src/styles/
    tokens/         # Design tokens (color, spacing, typography, etc.)
    typography/     # Font faces, type scale, text utilities
    utilities/      # Low-level layout and helper classes
    global/         # Base styles, resets, global overrides
```

These directories are **not created yet**. They represent the intended layout once the application bootstrap begins.

### Layer responsibilities

| Layer | Responsibility |
|-------|----------------|
| **core** | Application-wide singletons: authentication helpers (if needed), HTTP interceptors, error handling, configuration. Imported once at bootstrap. |
| **shared/ui** | Stateless, reusable UI building blocks with no feature-specific knowledge. |
| **shared/layout** | Structural components that frame pages (navigation, footer, responsive shell). |
| **features/** | Feature modules or route groups owning routes, pages, and feature-specific logic. Each feature is self-contained. |
| **data** | Content loading, API clients, DTOs, and mapping between external data and view models. Keeps presentation free of fetch logic. |
| **styles/** | Design system implementation: tokens first, then typography, utilities, and global styles. |

### Architectural principles

- **Angular standalone architecture** — standalone components, explicit imports, minimal NgModule usage.
- **Strict TypeScript** — `strict` mode enabled; explicit types at boundaries.
- **SSR / prerender** — to be evaluated and formalized in the appropriate lot; decision recorded via ADR.
- **Lazy loading** — feature routes loaded on demand when bundle size warrants it.
- **Content / presentation separation** — case study content decoupled from rendering components where practical.
- **Design tokens** — visual values centralized; no magic numbers scattered in components.
- **Accessibility** — semantic HTML, keyboard support, ARIA where needed, tested against WCAG targets.
- **Responsive design** — mobile-first layout with deliberate breakpoints.
- **SEO** — meta tags, structured data, and rendering strategy aligned with discoverability goals.
- **Performance** — lazy loading, image optimization, minimal main-thread work, measurable budgets.
- **Testability** — pure functions and services tested in isolation; component tests for critical UI.

### What is explicitly deferred

| Topic | Status |
|-------|--------|
| Angular version | Decided at bootstrap (LOT 01+) |
| SSR vs SSG vs CSR | ADR pending |
| State management approach | ADR pending if complexity warrants |
| Hosting and CDN | Documented at deployment lot |
| Content source (Markdown, CMS, static JSON) | ADR pending |
| Testing framework configuration | Bootstrap lot |
| CI pipeline | Future lot |

## Related documentation

- [docs/architecture/README.md](./docs/architecture/README.md) — future architecture documentation index
- [docs/decisions/](./docs/decisions/) — Architecture Decision Records
- [docs/design-system/README.md](./docs/design-system/README.md) — visual and interaction principles
