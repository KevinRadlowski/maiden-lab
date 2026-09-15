# ADR-003 — Fondations Angular

## Statut

Accepté

## Date

2026-09-15

## Contexte

Maiden Lab nécessite une base applicative moderne, maintenable et crédible pour un portfolio orienté Angular. Le framework, la version et les options de bootstrap doivent être choisis au moment de l'exécution, à partir des versions stables disponibles, et documentés explicitement.

## Décision

Bootstrap de Maiden Lab avec **Angular 22.1.6** et **Angular CLI 22.1.8**, avec les options suivantes :

| Option             | Valeur                                             |
| ------------------ | -------------------------------------------------- |
| Architecture       | Standalone (sans NgModule applicatif)              |
| Routing            | Activé                                             |
| Styles             | SCSS                                               |
| TypeScript         | Mode strict (`strict`, `strictTemplates`)          |
| SSR / prerender    | Support activé via `@angular/ssr`                  |
| Test runner        | Vitest (défaut Angular 22)                         |
| Selector racine    | `app-root`                                         |
| Préfixe composants | `app`                                              |
| Nommage fichiers   | Style guide **2025** (défaut Angular 22)           |
| Classes composants | Sans suffixe `Component` (`App`, `HomePage`, etc.) |

**Justification du choix Angular :**

- Alignement avec l'expérience professionnelle principale de l'auteur.
- Écosystème mature pour routing, prerender, accessibilité et tests.
- Le portfolio lui-même doit démontrer une maîtrise Angular crédible.

## Conséquences

### Positives

- Base moderne alignée sur la version stable courante.
- Standalone simplifie la structure et la lecture du code.
- SCSS prépare l'intégration du design system au LOT 02.
- Strict mode et ESLint renforcent la qualité dès le bootstrap.

### Négatives / compromis

- Angular 22 exige Node.js `^22.22.3`, `^24.15.0` ou `>=26.0.0`.
- Le style guide 2025 diffère de l'ancienne convention `*.component.ts` / `*Component`.
- Vitest remplace Karma/Jasmine : convention à documenter pour les contributeurs habitués à l'ancien stack.

### Suivi

- Le design system visuel reste au LOT 02.
- Les décisions SEO avancées et contenu réel des études de cas viendront dans des lots ultérieurs.

## Alternatives étudiées

### React / Next.js

Stack populaire pour portfolios statiques.

**Rejeté :** ne correspond pas au positionnement professionnel Angular/Java Spring de l'auteur ; le portfolio doit refléter la stack réellement maîtrisée.

### Angular sans prerender

Application CSR pure servie par un hôte statique.

**Rejeté :** contenu public déterministe ; le prerender améliore SEO, performance perçue et compatibilité hébergement statique. Voir [ADR-004-rendering-strategy.md](./ADR-004-rendering-strategy.md).

### Angular Material ou librairie UI

Accélération visuelle via composants préfabriqués.

**Rejeté :** le design system MAIDEN/LAB sera conçu sur mesure au LOT 02 ; aucune dépendance UI prématurée.
