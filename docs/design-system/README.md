# Design system — MAIDEN/LAB

Documentation du design system fondamental (LOT 02). Direction : **Editorial Tech / Digital Studio**.

## Philosophie

MAIDEN/LAB doit évoquer un studio numérique ou une agence expérimentée : rigueur, précision typographique, espace négatif, traits fins, numérotation technique. Les effets graphiques restent secondaires.

### Anti-patterns explicitement évités

- Dégradés bleu/violet omniprésents, blobs, glow permanent
- Glassmorphism généralisé, cartes flottantes partout
- Border-radius excessif façon SaaS
- Animations décoratives par défaut
- Couleurs primitives hardcodées dans les composants
- Inter/Arial comme seule identité typographique

Le slash `/` fait partie du vocabulaire graphique (MAIDEN/LAB, `01 / MCPrévention`) mais reste discret.

## Architecture SCSS

```
src/styles/
  tokens/
    _color.scss       — primitifs + sémantiques light/dark
    _typography.scss  — familles, échelle fluide
    _spacing.scss     — échelle d'espacement
    _layout.scss      — containers, grille éditoriale
    _radius.scss      — rayons
    _shadow.scss      — ombres (usage limité)
    _motion.scss      — durées, easing, reduced-motion
    _z-index.scss     — échelle de superposition
  base/
    _reset.scss
    _document.scss    — body, headings, focus, utilitaires texte
```

Point d'entrée : `src/styles.scss` (tokens + base). Polices chargées via `angular.json` (Fontsource).

## Primitifs vs sémantiques

| Type        | Exemples                                   | Usage                         |
| ----------- | ------------------------------------------ | ----------------------------- |
| Primitifs   | `--blue-500`, `--neutral-900`, `--space-4` | Définition des tokens, `/lab` |
| Sémantiques | `--color-text`, `--color-surface-muted`    | Composants et pages           |

**Règle :** dans un composant, préférer `var(--color-text-link)` à `var(--blue-600)`.

## Palette

### Primitifs principaux

| Token           | Valeur    | Rôle                  |
| --------------- | --------- | --------------------- |
| `--neutral-50`  | `#F7F7F4` | Fond clair            |
| `--neutral-100` | `#EFEFEB` | Surface muted claire  |
| `--neutral-900` | `#17171A` | Texte principal clair |
| `--neutral-500` | `#66666F` | Texte secondaire      |
| `--blue-500`    | `#315CF5` | Bleu signature        |
| `--blue-600`    | `#2444C7` | Bleu profond / liens  |
| `--violet-500`  | `#7557E8` | Violet signature      |
| `--violet-600`  | `#5637BC` | Violet profond        |
| `--neutral-950` | `#111114` | Fond dark             |

### Tokens sémantiques (extrait)

| Token                 | Light           | Dark (override) |
| --------------------- | --------------- | --------------- |
| `--color-background`  | `--neutral-50`  | `--neutral-950` |
| `--color-surface`     | `--neutral-0`   | `#18181D`       |
| `--color-text`        | `--neutral-900` | `#F2F2F4`       |
| `--color-text-muted`  | `--neutral-500` | `#A0A0AA`       |
| `--color-interactive` | `--blue-600`    | `--blue-400`    |
| `--color-accent`      | `--violet-500`  | `--violet-400`  |
| `--color-focus-ring`  | `--blue-500`    | `--blue-400`    |

Surfaces limitées : background, surface, surface-muted, surface-elevated (si nécessaire).

## Contrastes vérifiés (WCAG 2.2 AA)

Ratios calculés (contraste relatif luminance) :

| Combinaison                           | Ratio  | Cible   | Statut                                 |
| ------------------------------------- | ------ | ------- | -------------------------------------- |
| Texte `#17171A` sur fond `#F7F7F4`    | 16.7:1 | ≥ 4.5:1 | OK                                     |
| Texte muted `#66666F` sur `#F7F7F4`   | 5.3:1  | ≥ 4.5:1 | OK                                     |
| Lien `#2444C7` sur `#F7F7F4`          | 7.2:1  | ≥ 4.5:1 | OK                                     |
| Blanc `#FFFFFF` sur bouton `#315CF5`  | 5.3:1  | ≥ 4.5:1 | OK                                     |
| Texte `#F2F2F4` sur fond `#111114`    | 16.9:1 | ≥ 4.5:1 | OK                                     |
| Texte muted `#A0A0AA` sur `#111114`   | 7.3:1  | ≥ 4.5:1 | OK                                     |
| Lien `#4D74F7` sur `#111114`          | 4.6:1  | ≥ 4.5:1 | OK                                     |
| Texte `#F2F2F4` sur surface `#18181D` | 15.8:1 | ≥ 4.5:1 | OK                                     |
| Texte subtle `#8A8A94` sur `#F7F7F4`  | 3.2:1  | ≥ 4.5:1 | Caption uniquement (grand texte ≥ 3:1) |

`--color-text-subtle` ne doit pas porter de paragraphes longs ; réservé aux captions, repères techniques et métadonnées courtes.

## Typographie

| Famille        | Rôle                       | Graisses | Licence |
| -------------- | -------------------------- | -------- | ------- |
| DM Sans        | UI, corps, labels, boutons | 400–600  | OFL 1.1 |
| Source Serif 4 | Display, h1–h3             | 500–600  | OFL 1.1 |

Source : packages npm `@fontsource/dm-sans` et `@fontsource/source-serif-4` ([fontsource.dev](https://fontsource.dev)).

### Échelle

| Classe / élément | Token taille              |
| ---------------- | ------------------------- |
| `.text-display`  | `--font-size-display`     |
| `h1`             | `--font-size-h1`          |
| `h2`             | `--font-size-h2`          |
| `h3`             | `--font-size-h3`          |
| `.text-body-lg`  | `--font-size-body-lg`     |
| body             | `--font-size-body` (1rem) |
| `.text-body-sm`  | `--font-size-body-sm`     |
| `.text-label`    | `--font-size-label`       |
| `.text-caption`  | `--font-size-caption`     |

Mesure de lecture : `--font-measure` (38rem), `--font-measure-wide` (48rem).

## Spacing

Échelle : `--space-1` (0.25rem) à `--space-24` (clamp éditorial). Tokens composés : `--section-gap`, `--stack-gap`.

Ne pas introduire de valeurs arbitraires (ex. `37px`) sans justification documentée.

## Layout

| Classe / composant   | Max-width | Usage                     |
| -------------------- | --------- | ------------------------- |
| `container--narrow`  | 40rem     | Lecture, prose            |
| `container--default` | 76rem     | Pages standard            |
| `container--wide`    | 90rem     | Grilles, laboratoire      |
| `.grid-editorial`    | 12 col.   | Compositions asymétriques |

Gutters : `--gutter` (clamp responsive). Mobile : grille en 1 colonne ; tablette : 6 colonnes.

## Surfaces, bordures, radius, ombres

- **Bordures :** `--color-border-subtle`, `--color-border`, `--color-border-strong`
- **Radius :** `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill` (usage parcimonieux)
- **Ombres :** `--shadow-sm`, `--shadow-md` — uniquement pour une élévation réelle

## Motion

| Token                 | Valeur            |
| --------------------- | ----------------- |
| `--duration-fast`     | 120ms             |
| `--duration-normal`   | 200ms             |
| `--duration-slow`     | 320ms             |
| `--easing-standard`   | cubic-bezier(...) |
| `--easing-emphasized` | cubic-bezier(...) |

`@media (prefers-reduced-motion: reduce)` : durées et transitions réduites à 0.01ms.

## Thèmes

- Défaut : light (`:root`)
- Dark : `[data-theme='dark']` sur `<html>`
- **Thème global (LOT 03)** : contrôle dans le header (`app-theme-toggle`), persistance `localStorage` (`maidenlab-theme`), fallback `prefers-color-scheme` si aucune préférence enregistrée
- **Application pré-bootstrap** : script inline minimal dans `index.html` pour éviter le flash de thème au premier rendu (voir [ADR-007](../decisions/ADR-007-theme-strategy.md))
- `/lab` documente le dark mode mais utilise le même système global — pas de toggle local

## Composants UI

| Composant    | Sélecteur           | API principale                          |
| ------------ | ------------------- | --------------------------------------- |
| Button       | `app-button`        | `variant`, `disabled`, `type`           |
| TextLink     | `app-text-link`     | `href`, `external`, `showArrow`         |
| Tag          | `app-tag`           | `variant`: default / accent / technical |
| SectionLabel | `app-section-label` | `index`, `title`                        |
| Divider      | `app-divider`       | `strong`                                |
| Container    | `app-container`     | `size`: narrow / default / wide         |

### Button

Variantes : `primary`, `secondary`, `ghost`. États : default, hover, active, focus-visible (global), disabled. Min-height 2.75rem pour cible tactile.

### TextLink

Pattern éditorial avec flèche ↗ pour liens externes. Hover : underline + décalage discret.

### Focus

`:focus-visible` global — outline 2px `--color-focus-ring`, offset 2px. Ne jamais supprimer l'outline sans remplacement.

## Accessibilité

- Cible WCAG 2.2 AA
- Contrastes documentés ci-dessus
- Focus visible sur tous les interactifs
- Headings structurés ; labels de section avec titres masqués visuellement si redondants
- `prefers-reduced-motion` respecté
- Icônes décoratives : `aria-hidden="true"` quand pertinent

## Laboratoire `/lab`

Page spécimen (pas un faux portfolio). Sections : Identité, Palette, Typographie, Spacing, Boutons, Liens, Tags, Surfaces, Bordures, Layout/grille, Focus, Dark mode.

## Règles d'utilisation

1. Tokens sémantiques d'abord
2. Peu de surfaces — privilégier espace et typographie
3. Accents bleu/violet avec parcimonie
4. Pas de librairie UI externe
5. Pas de styles inline ni couleurs hardcodées dans les composants
6. Tests unitaires sur les primitives ; E2E sur `/lab`

## Documentation associée

- [ADR-006 — Fondations du design system](../decisions/ADR-006-design-system-foundation.md)
- [ARCHITECTURE.md](../../ARCHITECTURE.md)
