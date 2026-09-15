# Architecture

Ce document décrit l'architecture de MAIDEN/LAB et distingue l'**état actuel** (LOT 03) de la **cible** à moyen terme.

## État actuel

**LOT 03 — Shell, navigation et thème global.**

| Élément       | Statut                                               |
| ------------- | ---------------------------------------------------- |
| Angular       | 22.1.6 (standalone, routing, SCSS, strict)           |
| Prerender     | Activé (`outputMode: static`, 10 routes)             |
| Design system | Fondations LOT 02 (tokens, primitives, `/lab`)       |
| Shell         | Header, footer, nav desktop/mobile, skip link        |
| Thème         | Global light/dark, persistance, script pré-bootstrap |
| CI/CD         | Non implémenté                                       |
| Déploiement   | Non configuré                                        |

Voir [docs/decisions/](./docs/decisions/) pour les ADR détaillés.

## Structure applicative

```
src/app/
    core/
        theme/              # ThemeService — état, persistance, data-theme
        navigation/         # NavigationFocusService — focus après NavigationEnd
    shared/
        layout/
            shell/          # Structure viewport : header + main + footer
            header/         # Marque, nav desktop/mobile, contrôle thème
            footer/         # Pied de page sobre
            brand/          # Lien typographique MAIDEN/LAB
            theme-toggle/   # Bouton accessible de bascule de thème
            navigation/     # PRIMARY_NAV_ITEMS (routes publiques)
        ui/                 # Primitives design system (Button, Container, …)
    features/
        home/               # Page d'accueil (placeholder)
        projects/           # Liste projets + études de cas placeholder
        journey/            # Parcours professionnel
        lab/                # Laboratoire design system
        about/              # À propos
        contact/            # Contact informatif
        not-found/          # Page 404 Angular
    app.ts                  # Racine : shell + router-outlet
    app.routes.ts           # Routes publiques
    app.routes.server.ts    # Routes prerender

src/index.html              # Skip link, script thème pré-bootstrap
src/styles/
    tokens/                 # Design system SCSS
    base/                   # Reset, document, skip link
```

### Responsabilités

| Couche                   | Rôle                                                                     |
| ------------------------ | ------------------------------------------------------------------------ |
| **shared/layout/shell**  | Grille viewport (`min-height: 100dvh`), `<main id="main-content">`       |
| **shared/layout/header** | Navigation principale, menu mobile, marque, thème                        |
| **shared/layout/footer** | Identité, année, liens secondaires minimaux                              |
| **core/theme**           | Résolution light/dark, persistance, synchronisation DOM                  |
| **core/navigation**      | Focus sur `#main-content` après navigation SPA (sauf chargement initial) |
| **features/**            | Contenu par route ; placeholders enveloppés dans `app-container`         |
| **app.routes**           | Routes publiques, lazy loading                                           |
| **app.routes.server**    | Routes prerender au build                                                |

### Principes appliqués

- **Standalone components** avec `ChangeDetectionStrategy.OnPush`
- **TypeScript strict** + `strictTemplates`
- **Lazy loading** des pages via `loadComponent`
- **Prerender** pour contenu public déterministe
- **HTML sémantique** : landmarks, liens réels (`RouterLink`), `aria-current`
- **Accessibilité SPA** : skip link, focus après navigation, menu mobile natif
- **Pas de state manager** externe ; pas de NgRx
- **Pas de librairie UI externe** pour le shell

### Sujets reportés

| Sujet                                        | Statut                    |
| -------------------------------------------- | ------------------------- |
| Contenu final des pages (homepage, projets…) | Lots contenu              |
| SEO par route (title, meta dynamiques)       | Lot dédié                 |
| Source de contenu (Markdown, JSON, CMS)      | ADR à venir               |
| Gestion d'état                               | Non nécessaire à ce stade |
| CI/CD GitHub Actions                         | Lot ultérieur             |
| Hébergement et HTTP 404 statique             | Lot déploiement           |

## Architecture cible (rappel)

La cible à moyen terme conserve la même organisation conceptuelle, enrichie progressivement :

- `data/` pour loaders de contenu et modèles ;
- services `core/` additionnels si nécessaire (interceptors, config) ;
- SEO et métadonnées par route.

Le détail visuel et composantiel est documenté dans [docs/design-system/README.md](./docs/design-system/README.md).

## Documentation associée

- [docs/architecture/README.md](./docs/architecture/README.md) — index documentation architecture
- [docs/decisions/ADR-003-angular-foundation.md](./docs/decisions/ADR-003-angular-foundation.md)
- [docs/decisions/ADR-004-rendering-strategy.md](./docs/decisions/ADR-004-rendering-strategy.md)
- [docs/decisions/ADR-005-package-manager.md](./docs/decisions/ADR-005-package-manager.md)
- [docs/decisions/ADR-006-design-system-foundation.md](./docs/decisions/ADR-006-design-system-foundation.md)
- [docs/decisions/ADR-007-theme-strategy.md](./docs/decisions/ADR-007-theme-strategy.md)
