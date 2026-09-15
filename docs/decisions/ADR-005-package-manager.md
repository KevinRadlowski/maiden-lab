# ADR-005 — Gestionnaire de packages

## Statut

Accepté

## Date

2026-09-15

## Contexte

Maiden Lab nécessite un gestionnaire de packages pour installer Angular, la toolchain qualité et les dépendances de développement. Le choix doit minimiser la friction pour un recruteur ou un développeur clonant le dépôt.

## Décision

Utiliser **npm** comme gestionnaire de packages unique, avec **`package-lock.json`** versionné.

## Conséquences

### Positives

- Livré avec Node.js ; aucune installation supplémentaire pour un relecteur.
- Lockfile déterministe pour des installs reproductibles.
- Compatible avec l'écosystème Angular CLI sans configuration monorepo.
- Scripts npm simples (`npm install`, `npm start`, `npm run check`).

### Négatives / compromis

- npm est parfois plus lent que pnpm sur de gros monorepos — non pertinent à l'échelle actuelle.
- Pas de workspaces avancés ; suffisant pour un portfolio single-app.

## Alternatives étudiées

### pnpm

Performances et économie disque via store centralisé.

**Rejeté :** friction supplémentaire (activation Corepack, habitudes différentes) sans bénéfice décisif pour ce projet.

### Yarn

Alternative historique à npm.

**Rejeté :** npm suffit ; éviter la multiplication des lockfiles et conventions.

### Bun

Runtime et package manager émergent.

**Rejeté :** compatibilité Angular moins universelle ; risque pour un reviewer utilisant Node standard.
