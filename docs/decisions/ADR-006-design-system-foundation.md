# ADR-006 — Fondations du design system

## Statut

Accepté (LOT 02 — en attente de validation visuelle humaine)

## Date

2026-09-15

## Contexte

Le LOT 01 a posé une fondation Angular minimale sans identité visuelle. Le LOT 02 doit formaliser une direction **Editorial Tech / Digital Studio**, une architecture de tokens maintenable, des primitives UI réutilisables et une page `/lab` pour contrôle visuel — sans librairie UI générique ni surcharge décorative.

## Décision

### 1. Architecture des tokens SCSS

Organisation sous `src/styles/` :

| Dossier   | Rôle                                                |
| --------- | --------------------------------------------------- |
| `tokens/` | Primitifs et tokens sémantiques (CSS custom props)  |
| `base/`   | Reset, document, utilitaires typographiques globaux |

Les composants Angular consomment **uniquement les tokens sémantiques** (`--color-text`, `--space-4`, etc.), jamais les primitifs (`--blue-500`) pour un rôle fonctionnel.

### 2. Théming

- Thème clair par défaut sur `:root`.
- Thème sombre via `[data-theme='dark']` sur `<html>`.
- Tokens sémantiques redéfinis en dark — pas une simple inversion noir/blanc.
- Persistance utilisateur et sélecteur global reportés au lot shell/navigation ; `/lab` expose un toggle local pour validation.

### 3. Typographie

Combinaison retenue :

| Rôle              | Famille            | Source                       | Licence |
| ----------------- | ------------------ | ---------------------------- | ------- |
| Interface / corps | **DM Sans**        | `@fontsource/dm-sans` (npm)  | OFL 1.1 |
| Display / titres  | **Source Serif 4** | `@fontsource/source-serif-4` | OFL 1.1 |

- Self-hosted via Fontsource (WOFF2), chargées dans `angular.json` — **aucune requête Google Fonts au runtime**.
- Graisses limitées : 400, 500, 600 (DM Sans) ; 500, 600 (Source Serif 4).
- Échelle fluide via `clamp()` pour display, h1–h3, body-large.

### 4. Primitives UI Angular

Composants standalone sous `src/app/shared/ui/` :

- `Button` — primary / secondary / ghost
- `TextLink` — interne, externe, flèche ↗
- `Tag` — default / accent / technical
- `SectionLabel` — format `01 / Titre`
- `Divider`
- `Container` — narrow / default / wide

Pas de modal, dropdown, carousel, toast, ni form framework dans ce lot (YAGNI).

### 5. Palette

Accents bleu (`#315CF5`) et violet (`#7557E8`) en **rôle d'accent**, pas de décor omniprésent. Surfaces claires ivoire (`#F7F7F4`, `#EFEFEB`), dark dédié (`#111114`, `#18181D`).

## Conséquences

### Positives

- Base visuelle cohérente pour les lots pages et navigation.
- Tokens documentés, auditables, compatibles WCAG 2.2 AA (contrastes vérifiés sur combinaisons clés).
- Aucune dépendance UI lourde ; bundle initial ~289 kB raw / ~78 kB transfer (build production LOT 02).

### Négatives / compromis

- Toggle dark limité au laboratoire `/lab` jusqu'au lot shell.
- Pas de stack/cluster utilitaire dédié : layout via classes globales (`container`, `grid-editorial`) et composant `Container`.
- Validation visuelle humaine obligatoire avant commit.

## Références

- [docs/design-system/README.md](../design-system/README.md)
- Page laboratoire : `/lab`
