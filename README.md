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

**LOT 00 — Fondations du dépôt.** À ce stade, le repository contient uniquement la documentation de gouvernance et les règles d'ingénierie.

- Runtime applicatif : **pas encore implémenté**
- Bootstrap Angular : **prévu** (LOT 01)
- Pipeline CI/CD : **pas encore implémenté**
- Configuration de déploiement : **pas encore implémentée**

Voir [CHANGELOG.md](./CHANGELOG.md) pour le suivi des changements.

## Études de cas prévues

Les projets suivants seront documentés sous forme d'études de cas approfondies :

- **MCPrévention**
- **XNOSWEET / XBASE**
- **RideTogether**
- **La Pax Horizon**

La structure éditoriale et les règles de rédaction sont définies dans [docs/case-studies/README.md](./docs/case-studies/README.md).

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

| Document | Description |
|----------|-------------|
| [docs/README.md](./docs/README.md) | Index de la documentation |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Vue d'ensemble de l'architecture cible |
| [docs/decisions/](./docs/decisions/) | Architecture Decision Records (ADR) |
| [docs/design-system/](./docs/design-system/) | Principes du design system (prévu) |
| [docs/case-studies/](./docs/case-studies/) | Guide éditorial des études de cas |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Guide de contribution |

## Développement local

**Pas encore disponible.** Aucune application n'existe au LOT 00. Les instructions d'installation, les scripts et la toolchain seront ajoutés lors du bootstrap Angular, dans un lot ultérieur.

## Stratégie qualité

Les contrôles qualité suivants sont **prévus** — aucun n'est implémenté à ce jour :

| Domaine | Statut |
|---------|--------|
| Lint | Prévu |
| Formatage | Prévu |
| Vérification de types | Prévu |
| Tests unitaires | Prévu |
| Tests E2E | Prévu |
| Contrôles d'accessibilité | Prévu |
| Audits de performance | Prévu |
| Validation du build de production | Prévu |

Les choix d'outillage et les seuils seront documentés via ADR lors de leur mise en place.

## Déploiement

**Pas encore configuré.** La stratégie de déploiement et l'hébergement seront définis et documentés dans un lot ultérieur.

## Licence

**Source available — not open source** *(code source consultable, mais pas open source)*.

Copyright (c) 2026 Kevin Radlowski. Tous droits réservés.

Le code est publiquement consultable à des fins de consultation, d'évaluation professionnelle et d'apprentissage. Toute copie, redistribution, publication, revente ou utilisation commerciale sans autorisation explicite est interdite.

Voir [LICENSE](./LICENSE) pour les conditions complètes.
