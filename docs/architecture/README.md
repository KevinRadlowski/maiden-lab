# Documentation d'architecture

Index de la documentation d'architecture détaillée. Les sujets listés ci-dessous seront rédigés au fur et à mesure du bootstrap de l'application et de la validation des décisions.

## Sujets prévus

| Sujet                    | Description                                                  | Statut |
| ------------------------ | ------------------------------------------------------------ | ------ |
| Architecture applicative | Couches, frontières de modules, flux de dépendances          | Prévu  |
| Routing                  | Structure des routes, lazy loading, guards                   | Prévu  |
| Stratégie de rendu       | CSR, SSR, SSG ou approche hybride                            | Prévu  |
| Architecture du contenu  | Stockage et chargement du contenu des pages et études de cas | Prévu  |
| SEO                      | Meta tags, données structurées, sitemap                      | Prévu  |
| Accessibilité            | Cibles WCAG, approche de test, patterns de composants        | Prévu  |
| Performance              | Budgets, lazy loading, stratégie d'assets                    | Prévu  |
| Tests                    | Stratégie unitaire, intégration, E2E                         | Prévu  |
| Déploiement              | Hébergement, CDN, configuration d'environnement              | Prévu  |
| Sécurité                 | Headers, CSP, hygiène des dépendances                        | Prévu  |
| Observabilité            | Logging, suivi d'erreurs, analytics (le cas échéant)         | Prévu  |

## Documents associés

- [ARCHITECTURE.md](../../ARCHITECTURE.md) — architecture cible et état actuel, vue d'ensemble
- [../decisions/](../decisions/) — Architecture Decision Records

## Conventions

- Chaque sujet obtiendra son propre fichier markdown dans ce répertoire lors de son implémentation.
- Les choix significatifs au sein d'un sujet sont renvoyés vers l'ADR correspondant.
- Les documents distinguent **l'implémentation actuelle** du travail **prévu**.
