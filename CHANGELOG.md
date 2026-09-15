# Changelog

Toutes les modifications notables de ce projet seront consignées dans ce fichier.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/), et le projet adoptera [Semantic Versioning](https://semver.org/spec/v2.0.0.html) dès que des releases seront publiées.

Aucune version n'a encore été publiée. Les entrées ci-dessous suivent le travail en cours.

## [Unreleased]

### Added

- Gouvernance initiale du dépôt et documentation de fondation.
- ADR-002 — langue canonique de la documentation.
- Bootstrap Angular 22 (standalone, routing, SCSS, strict, prerender).
- Structure applicative par features avec pages placeholders.
- Toolchain qualité : ESLint, Prettier, Vitest, Playwright.
- ADR-003 (fondations Angular), ADR-004 (stratégie de rendu), ADR-005 (npm).

### Changed

- Francisation de l'ensemble de la documentation narrative du dépôt.
- Correction de l'encodage UTF-8 de l'ADR-002.
- Mise à jour du README, ARCHITECTURE et CONTRIBUTING pour refléter l'état LOT 01.

### Changed (LOT 01.1)

- Suppression d'Express et `src/server.ts` (site 100 % statique).
- Alignement sur le style guide de nommage Angular 22 (2025).
- Mise à jour ADR-003 et ADR-004.
