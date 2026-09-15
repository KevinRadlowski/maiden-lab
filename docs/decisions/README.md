# Architecture Decision Records

An Architecture Decision Record (ADR) captures a significant technical or product decision along with its context, consequences, and alternatives considered. ADRs provide a durable audit trail for future contributors and reviewers.

## When to write an ADR

Create an ADR when a decision:

- affects architecture, tooling, or deployment strategy
- is difficult or costly to reverse
- has trade-offs worth documenting
- needs to be understood by someone who was not present when it was made.

Do **not** create ADRs for trivial choices or for technologies not yet validated.

## File naming

```
ADR-XXX-short-descriptive-title.md
```

- `XXX` is a zero-padded sequential number (e.g. `001`, `012`).
- Use lowercase kebab-case for the title segment.
- Example: `ADR-001-portfolio-product-strategy.md`

## Status values

| Status | Meaning |
|--------|---------|
| **Proposed** | Under discussion; not yet adopted. |
| **Accepted** | Decision is active and should be followed. |
| **Superseded** | Replaced by a newer ADR; link to the successor. |
| **Deprecated** | No longer relevant; kept for historical context. |

## Workflow

1. Copy [ADR-000-template.md](./ADR-000-template.md).
2. Assign the next available number.
3. Fill in all sections honestly — including rejected alternatives.
4. Set status to **Proposed** and open for review, or **Accepted** if decided unilaterally for a personal project.
5. When superseding a decision, update the old ADR's status and link both ways.

## Index

| ADR | Title | Status |
|-----|-------|--------|
| [ADR-000](./ADR-000-template.md) | Template | — |
| [ADR-001](./ADR-001-portfolio-product-strategy.md) | Portfolio product strategy | Accepted |
