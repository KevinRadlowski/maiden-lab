# Architecture Decision Records

Un Architecture Decision Record (ADR) consigne une décision technique ou produit significative, avec son contexte, ses conséquences et les alternatives étudiées. Les ADR constituent une trace durable pour les futurs contributeurs et relecteurs.

## Quand rédiger un ADR

Créez un ADR lorsqu'une décision :

- affecte l'architecture, l'outillage ou la stratégie de déploiement ;
- est difficile ou coûteuse à inverser ;
- comporte des compromis qui méritent d'être documentés ;
- doit être comprise par quelqu'un qui n'était pas présent au moment où elle a été prise.

Ne **pas** créer d'ADR pour des choix triviaux ou pour des technologies pas encore validées.

## Nommage des fichiers

```
ADR-XXX-short-descriptive-title.md
```

- `XXX` est un numéro séquentiel zero-padded (ex. `001`, `012`).
- Le segment titre reste en kebab-case anglais, par convention technique.
- Exemple : `ADR-001-portfolio-product-strategy.md`

## Valeurs de statut

| Statut       | Signification                                               |
| ------------ | ----------------------------------------------------------- |
| **Proposé**  | En discussion ; pas encore adopté.                          |
| **Accepté**  | Décision active et à suivre.                                |
| **Remplacé** | Supplanté par un ADR plus récent ; lier vers le successeur. |
| **Déprécié** | Plus pertinent ; conservé pour l'historique.                |

## Workflow

1. Copier [ADR-000-template.md](./ADR-000-template.md).
2. Attribuer le prochain numéro disponible.
3. Remplir toutes les sections honnêtement — y compris les alternatives rejetées.
4. Mettre le statut à **Proposé** et ouvrir à la relecture, ou **Accepté** si la décision est prise unilatéralement (projet personnel).
5. Lors du remplacement d'une décision, mettre à jour le statut de l'ancien ADR et créer des liens réciproques.

## Index

| ADR                                                | Titre                          | Statut  |
| -------------------------------------------------- | ------------------------------ | ------- |
| [ADR-000](./ADR-000-template.md)                   | Template                       | —       |
| [ADR-001](./ADR-001-portfolio-product-strategy.md) | Stratégie produit du portfolio | Accepté |
| [ADR-002](./ADR-002-documentation-language.md)     | Langue de la documentation     | Accepté |
| [ADR-003](./ADR-003-angular-foundation.md)         | Fondations Angular             | Accepté |
| [ADR-004](./ADR-004-rendering-strategy.md)         | Stratégie de rendu             | Accepté |
| [ADR-005](./ADR-005-package-manager.md)            | Gestionnaire de packages       | Accepté |
| [ADR-006](./ADR-006-design-system-foundation.md)   | Fondations du design system    | Accepté |
| [ADR-007](./ADR-007-theme-strategy.md)             | Stratégie de thème global      | Accepté |
