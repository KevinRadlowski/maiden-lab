# Architecture documentation

Index for detailed architecture documentation. Topics listed below will be written as the application is bootstrapped and decisions are validated.

## Planned topics

| Topic | Description | Status |
|-------|-------------|--------|
| Application architecture | Layering, module boundaries, dependency flow | Planned |
| Routing | Route structure, lazy loading, guards | Planned |
| Rendering strategy | CSR, SSR, SSG, or hybrid approach | Planned |
| Content architecture | How case study and page content is stored and loaded | Planned |
| SEO | Meta tags, structured data, sitemap | Planned |
| Accessibility | WCAG targets, testing approach, component patterns | Planned |
| Performance | Budgets, lazy loading, asset strategy | Planned |
| Testing | Unit, integration, E2E strategy | Planned |
| Deployment | Hosting, CDN, environment configuration | Planned |
| Security | Headers, CSP, dependency hygiene | Planned |
| Observability | Logging, error tracking, analytics (if any) | Planned |

## Related documents

- [ARCHITECTURE.md](../../ARCHITECTURE.md) — high-level target architecture and current state
- [../decisions/](../decisions/) — Architecture Decision Records

## Conventions

- Each topic gets its own markdown file in this directory when implemented.
- Significant choices within a topic are cross-referenced from the relevant ADR.
- Documents distinguish **current implementation** from **planned** work.
