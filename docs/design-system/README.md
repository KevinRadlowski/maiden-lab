# Design system

Principes et direction pour l'identité visuelle de Maiden Lab. **Aucun CSS, token ni composant n'existe encore.** Ce document définit uniquement l'approche cible.

## Direction de marque

**MAIDEN / LAB**

Positionnement : studio numérique personnel / portfolio d'ingénierie.

Le langage visuel doit être éditorial, premium et humain — pas un template assemblé à partir des clichés habituels des portfolios développeurs.

## Clichés explicitement évités

Ne pas retomber dans les patterns qui signalent un « dev portfolio générique » :

- dégradés violets omniprésents ;
- glassmorphism systématique ;
- blobs décoratifs sans fonction ;
- animations gratuites ;
- fausses interfaces terminal ;
- murs de logos sans narration ;
- copy générique du type « I build digital experiences ».

Chaque choix visuel doit servir la lisibilité, la hiérarchie ou la reconnaissance de marque.

## Principes de design

- **Éditorial** — mise en page guidée par le contenu, hiérarchie typographique forte.
- **Premium** — palette retenue, espacements généreux, détails travaillés.
- **Sobre** — moins d'éléments, chacun avec un rôle clair.
- **Humain** — ton accessible dans les textes ; pas de boilerplate corporate.
- **Précision typographique** — échelle de tailles, interlignage et césure intentionnels.
- **Espaces généreux** — laisser respirer le contenu.
- **Grille maîtrisée** — rythme cohérent avec place pour une asymétrie intentionnelle.
- **Détails graphiques discrets** — motifs d'accent utilisés avec parcimonie.

## Éléments d'identité prévus

| Élément    | Direction                                                             |
| ---------- | --------------------------------------------------------------------- |
| Fond       | Base ivoire / blanc chaud                                             |
| Texte      | Tons graphite pour corps et titres                                    |
| Accent     | Indigo/violet utilisé avec parcimonie pour l'emphase et l'interaction |
| Motif      | Slash `/` comme élément graphique potentiel (MAIDEN/LAB)              |
| Dark theme | Conçu séparément — pas une simple inversion du mode clair             |

Les valeurs finales seront définies sous forme de design tokens lors du lot d'implémentation UI.

## Catégories de tokens futures

Les tokens seront organisés selon les catégories suivantes. **Aucune valeur n'est définie dans ce lot.**

| Catégorie     | Rôle                                                        |
| ------------- | ----------------------------------------------------------- |
| `color`       | Fond, texte, accent, états sémantiques                      |
| `typography`  | Familles, tailles, graisses, interlignages                  |
| `spacing`     | Échelle de marges, paddings et gaps                         |
| `radius`      | Échelle de border-radius                                    |
| `shadow`      | Élévation et profondeur                                     |
| `motion`      | Durées, easing, alternatives reduced-motion                 |
| `breakpoints` | Seuils de layout responsive                                 |
| `z-index`     | Échelle de superposition pour overlays, navigation, modales |

L'implémentation vivra sous `src/styles/tokens/` une fois l'application existante. Voir [../architecture/README.md](../architecture/README.md) pour les sujets d'architecture associés.

## Accessibilité et motion

- Respecter `prefers-reduced-motion`.
- Maintenir un contraste suffisant en mode clair et en dark theme.
- Les états de focus doivent être visibles et cohérents.
- Le mouvement aide à la compréhension ; il ne décore pas des écrans au repos.

## Documentation associée

- [ARCHITECTURE.md](../../ARCHITECTURE.md) — structure du répertoire `styles/`
- [../case-studies/README.md](../case-studies/README.md) — principes de présentation des études de cas
