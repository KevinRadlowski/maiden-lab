# ADR-007 — Stratégie de thème global

## Statut

Accepté (LOT 03 — en attente de validation visuelle humaine)

## Date

2026-09-15

## Contexte

Le LOT 02 a préparé les tokens light/dark via `[data-theme='dark']` avec un toggle local sur `/lab`. Le LOT 03 doit globaliser le thème pour l'ensemble du shell, persister le choix utilisateur et éviter un flash de thème incorrect au premier rendu, tout en restant compatible avec le prerender statique Angular.

## Décision

### Application du thème

1. **Script inline minimal** dans `src/index.html` (avant bootstrap Angular) :
   - lit `localStorage['maidenlab-theme']` ;
   - si absent, suit `prefers-color-scheme` ;
   - applique `data-theme="dark"` sur `<html>` si nécessaire ;
   - encapsulé dans `try/catch` (prerender / storage indisponible).

2. **`ThemeService`** (`src/app/core/theme/`) :
   - synchronise l'état Angular avec le DOM ;
   - persiste le choix explicite (`light` | `dark`) ;
   - continue de suivre le système tant qu'aucune préférence n'est enregistrée ;
   - API minimale : `resolvedTheme`, `setTheme`, `toggleTheme`.

3. **Contrôle global** dans le header via `ThemeToggle` (accessible name explicite).

### Focus après navigation

`NavigationFocusService` place le focus sur `#main-content` après chaque `NavigationEnd`, **sauf la navigation initiale**, pour préserver le skip link au premier Tab.

### Skip link

Lien « Aller au contenu principal » placé dans `index.html` (avant `<app-root>`) pour être le premier élément focusable du document.

## Conséquences

### Positives

- Pas de FOUC perceptible en conditions normales.
- Prerender compatible (pas d'accès `window` côté services pendant le rendu serveur).
- Un seul système de thème ; `/lab` n'a plus de toggle local.

### Négatives / compromis

- Script inline à maintenir en cohérence avec `ThemeService`.
- CSP stricte future nécessitera une nonce ou un hash documenté.

## Références

- [docs/design-system/README.md](../design-system/README.md)
- Clé de stockage : `maidenlab-theme`
