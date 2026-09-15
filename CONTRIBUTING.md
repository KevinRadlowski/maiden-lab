# Contributing to Maiden Lab

Thank you for your interest in this project. Maiden Lab is primarily a personal portfolio, but the repository is structured to be readable and maintainable by any developer who might review or contribute.

## Development philosophy

Code in this repository should prioritize:

- **Readability** — another developer should understand intent without guessing.
- **Simplicity** — the simplest correct solution wins.
- **Explicit responsibilities** — each module, service, or component has a clear role.
- **Descriptive naming** — names reveal purpose, not implementation details.
- **Small, testable units** — logic that can be verified in isolation.
- **Strict types** — TypeScript strict mode; no implicit `any`.
- **No premature abstraction** — extract patterns only when repetition is proven.

### Comments explain why, not what

A comment should not paraphrase an obvious line of code. Use comments to explain non-obvious business rules, trade-offs, or constraints that the code alone cannot convey.

```typescript
// Bad: increment the counter
counter++;

// Good: debounce window must exceed the animation duration to avoid layout thrashing
const DEBOUNCE_MS = 350;
```

## Git workflow

### Canonical branch

`main` is the canonical branch.

### Branch naming (future convention)

Do not create branches unless explicitly requested for a given task. When branching is needed, use:

| Prefix | Use case |
|--------|----------|
| `feat/<scope>` | New feature |
| `fix/<scope>` | Bug fix |
| `docs/<scope>` | Documentation only |
| `chore/<scope>` | Maintenance, tooling setup |
| `refactor/<scope>` | Refactoring without behavior change |
| `test/<scope>` | Test additions or improvements |

Examples:

- `feat/projects-case-study-layout`
- `fix/contact-form-validation`
- `docs/adr-ssr-strategy`

## Commit convention

Commits follow [Conventional Commits](https://www.conventionalcommits.org/):

| Type | Description |
|------|-------------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation change |
| `refactor:` | Code change without feature or fix |
| `test:` | Test additions or corrections |
| `chore:` | Maintenance, dependencies, tooling |
| `perf:` | Performance improvement |
| `ci:` | CI/CD configuration |

Examples specific to Maiden Lab:

```
docs: add ADR for Angular version selection
feat(projects): add case study detail route
fix(a11y): correct heading hierarchy on home page
chore: configure ESLint and Prettier
perf(images): lazy-load project thumbnails
```

Keep commits focused. One logical change per commit when possible.

## Pull requests

When opening a pull request:

1. **Limit scope** — one concern per PR; avoid mixing unrelated changes.
2. **Write a clear description** — what changed, why, and how to verify.
3. **Include tests** — when applicable and once the test toolchain exists.
4. **Add screenshots** — for any visual change affecting the UI.
5. **Note accessibility impacts** — keyboard navigation, contrast, ARIA, semantics.
6. **Note performance impacts** — bundle size, render cost, network requests.
7. **Update documentation** — when behavior, architecture, or setup changes.

### Review expectations

Reviewers (or the author during self-review) should verify:

- Code matches stated intent.
- No secrets or credentials are included.
- Documentation reflects the change.
- Accessibility and performance are not regressed without justification.

## Definition of Done

Use this checklist as a general guide. Items marked *planned* apply once the corresponding tooling exists.

- [ ] Code compiles and runs locally *(once application exists)*
- [ ] Lint passes *(planned)*
- [ ] Formatting is consistent *(planned)*
- [ ] Type checking passes *(planned)*
- [ ] Unit tests pass for affected logic *(planned)*
- [ ] E2E tests pass for affected flows *(planned, when relevant)*
- [ ] Accessibility checked for UI changes *(planned tooling; manual review in the meantime)*
- [ ] Performance impact considered for UI or data changes
- [ ] Documentation updated if behavior or architecture changed
- [ ] ADR created or updated for significant technical decisions
- [ ] No secrets, tokens, or credentials committed
- [ ] PR description is complete and accurate

## Questions

For questions about scope or direction, refer to [ARCHITECTURE.md](./ARCHITECTURE.md) and [docs/decisions/](./docs/decisions/) before introducing new patterns or dependencies.
