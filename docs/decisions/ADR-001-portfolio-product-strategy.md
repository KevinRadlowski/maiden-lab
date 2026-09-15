# ADR-001: Portfolio product strategy

## Status

Accepted

## Date

2026-09-15

## Context

Maiden Lab is Kevin Radlowski's public professional portfolio. It will be reviewed by recruiters, hiring managers, and technical peers. A generic developer portfolio — thin on substance, heavy on visual clichés, or misrepresenting scope — undermines credibility.

The repository is public on GitHub and linked from a professional domain. It must therefore reflect intentional product and engineering practices, not ad-hoc page assembly.

## Decision

Maiden Lab is treated as a **professional software product** and as a **public demonstration of its author's engineering practices**.

This means:

- The repository is public and maintained with the same care as a client deliverable.
- Architecture, decisions, and trade-offs are documented explicitly.
- Case studies are in-depth and honest, not marketing summaries.
- Quality is measurable: accessibility, performance, and maintainability are goals, not slogans.
- Documentation is written for reviewers who may not have local context.
- Dependencies are added only with clear justification.
- Private aspects of other projects are acknowledged transparently.
- No false demonstrations, metrics, features, or contributions are presented.

## Consequences

### Positive

- Reviewers can assess both output and process.
- Documentation provides context that code alone cannot.
- Editorial and technical standards reduce rework later.
- The portfolio itself becomes a credible case study.

### Negative / trade-offs

- Higher upfront investment in documentation before visible UI progress.
- Slower initial velocity compared to a quick static site.
- Case studies require ongoing maintenance as projects evolve.

### Follow-up

- Bootstrap the Angular application in a subsequent lot.
- Record technology-specific decisions (Angular version, rendering strategy, hosting) as separate ADRs when validated.
- Apply case study editorial rules defined in [../case-studies/README.md](../case-studies/README.md).

## Alternatives considered

### Minimal static CV site

A single-page HTML/CSS site would ship faster.

**Rejected:** Insufficient depth to demonstrate Angular/Spring expertise, architecture thinking, or engineering discipline expected at the target level.

### Private repository with deployed site only

Keep code private; show only the live URL.

**Rejected:** GitHub visibility is an explicit goal for technical reviewers. A public, well-structured repository adds credibility.

### Open source license

Use MIT or similar to maximize reuse.

**Rejected for now:** The author wishes to retain rights over the portfolio code and design. The repository is source-available for consultation and evaluation, not freely reusable. See [LICENSE](../../LICENSE).
