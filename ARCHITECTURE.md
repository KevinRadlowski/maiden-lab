# Architecture

Ce document décrit l'**architecture cible** de Maiden Lab et la distingue de l'**état actuel** du dépôt.

## État actuel

**LOT 00 — Documentation uniquement.**

- Aucun runtime applicatif n'existe.
- Aucun framework, outil de build ou gestionnaire de dépendances n'est configuré.
- Aucun code source sous `src/`.
- Les décisions d'architecture sur les technologies précises (version Angular, stratégie SSR, hébergement) sont reportées aux lots ultérieurs et seront consignées en ADR.

## Architecture cible

Maiden Lab sera une application Angular moderne, structurée pour la clarté, la testabilité et la maintenabilité à long terme. La version Angular sera choisie au moment du bootstrap à partir de la dernière version stable disponible et documentée via ADR — elle n'est volontairement pas figée dans ce document.

### Structure conceptuelle

```
src/app/
    core/           # Services singleton, guards, interceptors, providers globaux
    shared/
        ui/         # Composants présentationnels réutilisables
        layout/     # Shell, header, footer, wrappers de page
    features/
        home/       # Page d'accueil et point d'entrée principal
        projects/   # Liste des projets et études de cas
        journey/    # Parcours professionnel et expériences
        about/      # Profil, compétences, positionnement
        contact/    # Contact et prise de relation
    data/           # Accès aux données, modèles, mappers, loaders de contenu

src/styles/
    tokens/         # Design tokens (couleur, espacement, typographie, etc.)
    typography/     # Font faces, échelle typographique, utilitaires texte
    utilities/      # Classes utilitaires de layout et helpers
    global/         # Styles de base, resets, overrides globaux
```

Ces répertoires **ne sont pas encore créés**. Ils représentent l'organisation visée une fois le bootstrap de l'application lancé.

### Responsabilités des couches

| Couche | Responsabilité |
|--------|----------------|
| **core** | Singletons applicatifs : helpers d'authentification (si nécessaire), interceptors HTTP, gestion d'erreurs, configuration. Importé une seule fois au bootstrap. |
| **shared/ui** | Blocs UI réutilisables et stateless, sans connaissance métier spécifique à une feature. |
| **shared/layout** | Composants structurels qui encadrent les pages (navigation, footer, shell responsive). |
| **features/** | Modules ou groupes de routes possédant routes, pages et logique propre à une feature. Chaque feature est autonome. |
| **data** | Chargement de contenu, clients API, DTOs et mapping entre données externes et view models. Isole la présentation de la logique de fetch. |
| **styles/** | Implémentation du design system : tokens d'abord, puis typographie, utilitaires et styles globaux. |

### Principes architecturaux

- **Architecture Angular standalone** — composants standalone, imports explicites, usage minimal des NgModules.
- **TypeScript strict** — mode `strict` activé ; types explicites aux frontières.
- **SSR / prerender** — à évaluer et formaliser au lot approprié ; décision consignée en ADR.
- **Lazy loading** — routes de features chargées à la demande lorsque la taille du bundle le justifie.
- **Séparation contenu / présentation** — contenu des études de cas découplé des composants de rendu lorsque c'est pertinent.
- **Design tokens** — valeurs visuelles centralisées ; pas de nombres magiques dispersés dans les composants.
- **Accessibilité** — HTML sémantique, support clavier, ARIA si nécessaire, vérification selon les cibles WCAG.
- **Responsive design** — layout mobile-first avec breakpoints intentionnels.
- **SEO** — meta tags, données structurées et stratégie de rendu alignés sur la découvrabilité.
- **Performance** — lazy loading, optimisation d'images, travail minimal sur le main thread, budgets mesurables.
- **Testabilité** — fonctions et services purs testés isolément ; tests de composants pour l'UI critique.

### Sujets explicitement reportés

| Sujet | Statut |
|-------|--------|
| Version Angular | Décision au bootstrap (LOT 01+) |
| SSR vs SSG vs CSR | ADR à venir |
| Gestion d'état | ADR à venir si la complexité le justifie |
| Hébergement et CDN | Documenté au lot déploiement |
| Source de contenu (Markdown, CMS, JSON statique) | ADR à venir |
| Configuration du framework de tests | Lot bootstrap |
| Pipeline CI | Lot ultérieur |

## Documentation associée

- [docs/architecture/README.md](./docs/architecture/README.md) — index futur de la documentation d'architecture
- [docs/decisions/](./docs/decisions/) — Architecture Decision Records
- [docs/design-system/README.md](./docs/design-system/README.md) — principes visuels et d'interaction
