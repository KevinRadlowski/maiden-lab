# Maiden Lab

Professional portfolio and digital laboratory by **Kevin Radlowski**.

**Positioning:** Angular / Java Spring developer.

This repository contains the source code for the public portfolio at [https://maidenlab.fr](https://maidenlab.fr). Maiden Lab is designed as a web product — not a simple online résumé — serving both non-technical recruiters and developers who want to assess technical depth and engineering practices.

## About

Maiden Lab presents Kevin Radlowski's professional journey, projects, and achievements. Professional experience is primarily Angular-focused; Java / Spring is practiced professionally and reinforced through several personal full-stack projects.

The portfolio itself is a technical deliverable: code quality, architecture, accessibility, performance, and documentation are held to the same standard as a product shipped in a professional context.

## Purpose

This repository aims to:

- present projects and achievements in a credible, in-depth manner
- demonstrate engineering practices directly
- provide a public, readable, and maintainable GitHub base
- document technical decisions and architecture explicitly

## Current status

**LOT 00 — Repository foundation.** At this stage, the repository contains governance documentation and engineering guidelines only.

- Application runtime: **not implemented yet**
- Angular bootstrap: **planned** (LOT 01)
- CI/CD pipeline: **not implemented yet**
- Deployment configuration: **not implemented yet**

See [CHANGELOG.md](./CHANGELOG.md) for tracked changes.

## Planned case studies

The following projects are planned to be documented as in-depth case studies:

- **MCPrévention**
- **XNOSWEET / XBASE**
- **RideTogether**
- **La Pax Horizon**

Case study structure and editorial rules are defined in [docs/case-studies/README.md](./docs/case-studies/README.md).

## Engineering principles

- **Clarity over cleverness** — readable code beats clever abstractions.
- **Accessibility by default** — not an afterthought.
- **Performance as a feature** — measured and intentional.
- **Explicit architecture** — layers and responsibilities are documented.
- **Documented technical decisions** — significant choices are recorded as ADRs.
- **Maintainability** — small, testable units with clear ownership.
- **Progressive enhancement** — when relevant to the user experience.
- **Tests adapted to risk** — coverage where it matters, not for vanity metrics.
- **No dependency without justification** — every addition must earn its place.

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [ARCHITECTURE.md](./ARCHITECTURE.md) for details.

## Repository documentation

| Document | Description |
|----------|-------------|
| [docs/README.md](./docs/README.md) | Documentation index |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Target architecture overview |
| [docs/decisions/](./docs/decisions/) | Architecture Decision Records (ADRs) |
| [docs/design-system/](./docs/design-system/) | Design system principles (planned) |
| [docs/case-studies/](./docs/case-studies/) | Case study editorial guidelines |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Contribution guidelines |

## Local development

**Not available yet.** No application exists at LOT 00. Setup instructions, scripts, and tooling will be added when the Angular bootstrap is introduced in a subsequent lot.

## Quality strategy

The following quality gates are **planned** — none are implemented yet:

| Area | Status |
|------|--------|
| Lint | Planned |
| Formatting | Planned |
| Type checking | Planned |
| Unit tests | Planned |
| E2E tests | Planned |
| Accessibility checks | Planned |
| Performance audits | Planned |
| Production build validation | Planned |

Tooling choices and thresholds will be documented via ADR when implemented.

## Deployment

**Not configured yet.** Deployment strategy and hosting details will be defined and documented in a future lot.

## License

**Source available — not open source.**

Copyright (c) 2026 Kevin Radlowski. All rights reserved.

The code is publicly viewable for consultation, professional evaluation, and learning. Copying, redistribution, publication, resale, or commercial use without explicit authorization is prohibited.

See [LICENSE](./LICENSE) for the full terms.
