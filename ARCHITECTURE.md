# Architecture

Ce document décrit l'architecture de Maiden Lab et distingue l'**état actuel** (LOT 01) de la **cible** à moyen terme.

## État actuel

**LOT 01 — Application Angular bootstrapée.**

| Élément              | Statut                                     |
| -------------------- | ------------------------------------------ |
| Angular              | 22.1.6 (standalone, routing, SCSS, strict) |
| Prerender            | Activé (`outputMode: static`)              |
| Structure features   | En place (placeholders)                    |
| Design system visuel | Non implémenté (LOT 02)                    |
| CI/CD                | Non implémenté                             |
| Déploiement          | Non configuré                              |

Voir [docs/decisions/](./docs/decisions/) pour les ADR détaillés (Angular, rendu, npm).

## Structure applicative

```
src/app/
    shared/
        layout/
            shell/          # En-tête, navigation, footer, zone principale
    features/
        home/               # Page d'accueil
        projects/           # Liste projets + études de cas placeholder
        journey/            # Parcours professionnel
        lab/                # Lab
        about/              # À propos
        contact/            # Contact informatif
        not-found/          # Page 404 Angular
    app.ts                  # Racine : shell + router-outlet (classe App)
    app.routes.ts           # Routes publiques
    app.routes.server.ts    # Routes prerender

src/styles.scss             # Reset/base minimal (pas de design system final)
```

Les dossiers `core/`, `shared/ui/`, `data/` et `src/styles/tokens/` seront créés lorsque du code réel en aura besoin — pas de dossiers vides versionnés.

### Responsabilités

| Couche                  | Rôle au LOT 01                                                                   |
| ----------------------- | -------------------------------------------------------------------------------- |
| **shared/layout/shell** | Structure de page commune, navigation principale (`routerLink`), HTML sémantique |
| **features/**           | Une page standalone par route ; contenu placeholder minimal                      |
| **app.routes**          | Définition des routes publiques et lazy loading par feature                      |
| **app.routes.server**   | Déclaration des routes à prerender au build                                      |

### Principes appliqués

- **Standalone components** avec `ChangeDetectionStrategy.OnPush`
- **TypeScript strict** + `strictTemplates`
- **Lazy loading** des pages via `loadComponent`
- **Prerender** pour contenu public déterministe
- **HTML sémantique** : `header`, `nav`, `main`, `footer`, `h1`, liens réels
- **Pas de state manager** externe ; pas de NgRx

### Sujets reportés

| Sujet                                       | Statut                    |
| ------------------------------------------- | ------------------------- |
| Design system (tokens, typo, composants UI) | LOT 02                    |
| SEO par route (title, meta dynamiques)      | Lot dédié                 |
| Source de contenu (Markdown, JSON, CMS)     | ADR à venir               |
| Gestion d'état                              | Non nécessaire à ce stade |
| CI/CD GitHub Actions                        | Lot ultérieur             |
| Hébergement et HTTP 404 statique            | Lot déploiement           |

## Architecture cible (rappel)

La cible à moyen terme conserve la même organisation conceptuelle, enrichie progressivement :

- `core/` pour services singleton (interceptors, config) si nécessaire ;
- `shared/ui/` pour composants présentationnels réutilisables ;
- `data/` pour loaders de contenu et modèles ;
- `src/styles/tokens/` pour le design system.

Le détail visuel et composantiel est documenté dans [docs/design-system/README.md](./docs/design-system/README.md).

## Documentation associée

- [docs/architecture/README.md](./docs/architecture/README.md) — index documentation architecture
- [docs/decisions/ADR-003-angular-foundation.md](./docs/decisions/ADR-003-angular-foundation.md)
- [docs/decisions/ADR-004-rendering-strategy.md](./docs/decisions/ADR-004-rendering-strategy.md)
- [docs/decisions/ADR-005-package-manager.md](./docs/decisions/ADR-005-package-manager.md)
