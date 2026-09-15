# ADR-004 — Stratégie de rendu

## Statut

Accepté

## Date

2026-09-15

## Contexte

Maiden Lab est principalement composé de contenu public déterministe : accueil, projets, études de cas, parcours, lab, à propos et contact informatif. Le portfolio doit être servissable comme site statique sans runtime Node obligatoire en production, tout en conservant les bénéfices SEO et performance du HTML pré-généré.

## Décision

Adopter une stratégie **prerender / static generation** via les mécanismes officiels Angular :

- `outputMode: "static"` dans `angular.json` ;
- routes serveur déclarées dans `app.routes.server.ts` avec `RenderMode.Prerender` ;
- bootstrap serveur via `main.server.ts` et `app.config.server.ts` (nécessaires au prerender au build) ;
- **aucun** serveur Express ni `src/server.ts` — non requis avec `outputMode: static` ;
- build production produisant uniquement `dist/maiden-lab/browser/` (+ `prerendered-routes.json`).

**Infrastructure conservée pour le prerender :**

| Fichier / package          | Rôle                                         |
| -------------------------- | -------------------------------------------- |
| `@angular/ssr`             | API de rendu et routes serveur               |
| `@angular/platform-server` | Bootstrap côté serveur au build              |
| `main.server.ts`           | Point d'entrée bootstrap prerender           |
| `app.config.server.ts`     | `provideServerRendering(withRoutes(...))`    |
| `app.routes.server.ts`     | Déclaration `RenderMode.Prerender` par route |

**Infrastructure supprimée (LOT 01.1) :**

| Élément                         | Raison                                                     |
| ------------------------------- | ---------------------------------------------------------- |
| `src/server.ts`                 | Serveur Express dynamique — inutile en production statique |
| `express`                       | Dépendance du serveur Node runtime                         |
| `@types/express`                | Types associés                                             |
| `ssr.entry` dans `angular.json` | Point d'entrée serveur Express non requis                  |

**Routes prerendered :**

- `/`, `/projets`, `/projets/mcprevention`, `/projets/xbase`, `/projets/ridetogether`, `/projets/pax-horizon`, `/parcours`, `/lab`, `/a-propos`, `/contact`

## Conséquences

### Positives

- Artefacts 100 % statiques compatibles CDN / hébergement statique.
- Aucune dépendance Express en production ni au build final.
- Contenu placeholder présent dans le HTML généré (vérifié post-build).

### Négatives / compromis

- **404 Angular vs HTTP 404 :** le router Angular affiche `NotFoundPage` en dev ; en hébergement statique, une URL inexistante peut retourner HTTP 404 sans exécuter l'app — à configurer au lot déploiement.
- Toute nouvelle route publique doit être ajoutée à `app.routes.server.ts`.
- Si Maiden Lab devient dynamique (SSR runtime), un serveur Node et Express pourront être réintroduits via ADR.

## Alternatives étudiées

### Conserver Express « parce que ng new l'a généré »

**Rejeté :** avec `outputMode: static`, Angular documente qu'aucun serveur Node n'est requis ; le build le confirme (plus de dossier `dist/.../server/`).

### SSR runtime permanent (Node + Express)

**Rejeté :** complexité disproportionnée pour un contenu statique.
