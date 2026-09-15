# Études de cas

Guide éditorial pour les études de cas des projets Maiden Lab. Aucun contenu d'étude de cas n'existe encore.

## Objectif

Les études de cas sont le principal moyen par lequel Maiden Lab démontre un travail réel. Chaque étude doit permettre au lecteur de comprendre le contexte, les décisions, les compromis et les résultats — pas seulement de voir des captures d'écran.

## Structure cible

Chaque étude de cas suit le plan suivant :

1. **Contexte** — Quel est le projet ? Pour qui ? Quel était le rôle de l'auteur ?
2. **Problème** — Qu'est-ce qui devait être résolu ? Pourquoi était-ce important ?
3. **Périmètre** — Qu'était in scope et out of scope ? Quelles contraintes de calendrier ?
4. **Produit** — Fonctionnalités clés et parcours utilisateur (uniquement ce qui existe ou a existé).
5. **Architecture** — Structure technique de haut niveau ; schémas si utiles.
6. **Décisions d'ingénierie** — Choix notables et raisons qui les motivent.
7. **Qualité** — Mesures réelles de tests, accessibilité, performance (pas d'intentions vagues).
8. **Difficultés rencontrées** — Obstacles et façon dont ils ont été traités.
9. **Ce que j'en ai appris** — Enseignements honnêtes.
10. **Prochaines étapes** — Améliorations prévues ou limites connues.

Adaptez la profondeur de chaque section au projet. Toutes les sections n'ont pas besoin d'être de longueur égale.

## Projets prévus

Les candidats suivants feront l'objet d'études de cas complètes :

- MCPrévention
- XNOSWEET / XBASE
- RideTogether
- La Pax Horizon

## Règles de crédibilité

Ces règles ne sont pas négociables :

- **Ne jamais inventer de métriques** — pas de chiffres de performance, d'utilisateurs ou d'impact business fabriqués.
- **Ne jamais prétendre qu'une feature existe si elle est seulement prévue** — labelliser explicitement le travail futur.
- **Différencier contribution personnelle et travail d'équipe** — préciser ce que vous avez construit vs. ce que l'équipe a livré.
- **Identifier les dépôts privés** — si le code ne peut pas être montré, le dire et expliquer ce qui peut l'être.
- **Ne jamais publier de secrets** — credentials, clés API, URLs internes ou données confidentielles restent hors du dépôt.
- **Ne jamais exposer d'informations confidentielles** — noms de clients, features non publiées ou détails propriétaires nécessitent une autorisation explicite.
- **Utiliser uniquement des captures réelles** — pas de maquettes présentées comme UI de production sauf mention explicite.
- **Expliquer les compromis techniques** — pourquoi cette approche plutôt qu'une alternative.
- **Présenter les limites et axes d'amélioration** — la crédibilité vient de l'honnêteté, pas de la perfection.

## Libellés de statut

Utilisez des libellés clairs tout au long du contenu :

| Libellé | Signification |
|---------|---------------|
| **En production** | Déployé ou accessible publiquement |
| **En cours** | Développement actif |
| **Prévu** | Intention confirmée, pas encore démarré |
| **Archivé** | Plus maintenu |

## Documentation associée

- [../decisions/ADR-001-portfolio-product-strategy.md](../decisions/ADR-001-portfolio-product-strategy.md) — ADR stratégie produit
- [../design-system/README.md](../design-system/README.md) — principes de présentation visuelle
