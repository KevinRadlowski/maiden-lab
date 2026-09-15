# Maiden Lab

Portfolio professionnel et laboratoire numérique de **Kevin Radlowski**.

**Positionnement :** développeur Angular / Java Spring.

Ce dépôt contient le code source du portfolio public disponible sur [https://maidenlab.fr](https://maidenlab.fr). Maiden Lab est conçu comme un produit web — et non comme un simple CV en ligne — à destination des recruteurs non techniques comme des développeurs souhaitant évaluer le niveau technique et les pratiques d'ingénierie.

## À propos

Maiden Lab présente le parcours professionnel, les projets et les réalisations de Kevin Radlowski. L'expérience professionnelle est principalement orientée Angular ; Java / Spring est pratiqué en contexte professionnel et consolidé sur plusieurs projets personnels full-stack.

Le portfolio lui-même constitue une démonstration technique : qualité de code, architecture, accessibilité, performance et documentation sont traités avec le même niveau d'exigence qu'un produit livré en contexte professionnel.

## Objectif

Ce dépôt vise à :

- présenter les projets et réalisations de manière crédible et approfondie ;
- démontrer directement les pratiques d'ingénierie ;
- fournir une base GitHub publique, lisible et maintenable ;
- documenter explicitement les décisions techniques et l'architecture.

## État actuel

**LOT 01 — Bootstrap Angular.** Application Angular fonctionnelle avec routing, prerender, tests, lint et formatage. Pages placeholders uniquement — pas de design final ni de contenu d'études de cas.

- Application Angular : **implémentée** (v22.1.6)
- Design system visuel : **prévu** (LOT 02)
- Pipeline CI/CD : **pas encore implémenté**
- Déploiement : **pas encore configuré**

Voir [CHANGELOG.md](./CHANGELOG.md) pour le suivi des changements.

## Études de cas prévues

Les projets suivants seront documentés sous forme d'études de cas approfondies :

- **MCPrévention**
- **XNOSWEET / XBASE**
- **RideTogether**
- **La Pax Horizon**

Des routes placeholder existent déjà ; le contenu réel viendra dans des lots ultérieurs. Voir [docs/case-studies/README.md](./docs/case-studies/README.md).

## Principes d'ingénierie

- **Clarté plutôt qu'ingéniosité** — un code lisible vaut mieux qu'une abstraction maline.
- **Accessibilité par défaut** — jamais en option ou en fin de projet.
- **Performance comme feature** — mesurée et intentionnelle.
- **Architecture explicite** — couches et responsabilités documentées.
- **Décisions techniques documentées** — les choix significatifs sont consignés en ADR.
- **Maintenabilité** — petites unités testables, responsabilités claires.
- **Progressive enhancement** — lorsque pertinent pour l'expérience utilisateur.
- **Tests adaptés au risque** — couverture là où elle compte, pas pour gonfler des métriques.
- **Aucune dépendance sans justification** — chaque ajout doit se justifier.

Voir [CONTRIBUTING.md](./CONTRIBUTING.md) et [ARCHITECTURE.md](./ARCHITECTURE.md) pour le détail.

## Documentation du dépôt

| Document                                     | Description                         |
| -------------------------------------------- | ----------------------------------- |
| [docs/README.md](./docs/README.md)           | Index de la documentation           |
| [ARCHITECTURE.md](./ARCHITECTURE.md)         | Architecture applicative            |
| [docs/decisions/](./docs/decisions/)         | Architecture Decision Records (ADR) |
| [docs/design-system/](./docs/design-system/) | Principes du design system (prévu)  |
| [docs/case-studies/](./docs/case-studies/)   | Guide éditorial des études de cas   |
| [CONTRIBUTING.md](./CONTRIBUTING.md)         | Guide de contribution               |

## Développement local

**Prérequis :** Node.js `^22.22.3`, `^24.15.0` ou `>=26.0.0` (compatible Angular 22).

```bash
npm install
npm start
```

L'application est disponible sur [http://localhost:4200](http://localhost:4200).

### Scripts utiles

| Commande         | Description                                       |
| ---------------- | ------------------------------------------------- |
| `npm start`      | Serveur de développement                          |
| `npm run build`  | Build production avec prerender                   |
| `npm run check`  | Garde-fou local : format, lint, tests CI, build   |
| `npm run e2e`    | Tests E2E Playwright (navigateur Chromium requis) |
| `npm test`       | Tests unitaires Vitest (mode watch en TTY)        |
| `npm run lint`   | ESLint (TypeScript + templates Angular)           |
| `npm run format` | Formatage Prettier                                |

> **Playwright :** si les navigateurs ne sont pas installés, exécuter `npx playwright install chromium` après `npm install`.

## Stratégie qualité

| Domaine                           | Statut     |
| --------------------------------- | ---------- |
| Lint (ESLint + angular-eslint)    | Implémenté |
| Formatage (Prettier)              | Implémenté |
| Vérification de types (TS strict) | Implémenté |
| Tests unitaires (Vitest)          | Implémenté |
| Tests E2E (Playwright)            | Implémenté |
| Build production + prerender      | Implémenté |
| Contrôles d'accessibilité avancés | Prévu      |
| Audits de performance             | Prévu      |
| CI/CD                             | Prévu      |

## Déploiement

**Pas encore configuré.** Le build produit des artefacts statiques prêts pour un hébergement statique ; la configuration DNS, CDN et règles HTTP 404 sera traitée dans un lot dédié. Voir [ADR-004](./docs/decisions/ADR-004-rendering-strategy.md).

## Licence

**Source available — not open source** _(code source consultable, mais pas open source)_.

Copyright (c) 2026 Kevin Radlowski. Tous droits réservés.

Le code est publiquement consultable à des fins de consultation, d'évaluation professionnelle et d'apprentissage. Toute copie, redistribution, publication, revente ou utilisation commerciale sans autorisation explicite est interdite.

Voir [LICENSE](./LICENSE) pour les conditions complètes.
