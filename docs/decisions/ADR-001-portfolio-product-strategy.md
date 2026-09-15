# ADR-001 — Stratégie produit du portfolio

## Statut

Accepté

## Date

2026-09-15

## Contexte

Maiden Lab est le portfolio professionnel public de Kevin Radlowski. Il sera consulté par des recruteurs, des hiring managers et des pairs techniques. Un portfolio développeur générique — peu substantiel, chargé de clichés visuels ou surévaluant le périmètre réel — nuit à la crédibilité.

Le dépôt est public sur GitHub et lié à un domaine professionnel. Il doit refléter des pratiques produit et d'ingénierie intentionnelles, et non un assemblage de pages ad hoc.

## Décision

Maiden Lab est traité comme un **produit logiciel professionnel** et comme une **démonstration publique des pratiques d'ingénierie de son auteur**.

Cela implique :

- Un dépôt public maintenu avec le même soin qu'une livraison client.
- Une architecture, des décisions et des compromis documentés explicitement.
- Des études de cas approfondies et honnêtes, pas des résumés marketing.
- Une qualité mesurable : accessibilité, performance et maintenabilité sont des objectifs, pas des slogans.
- Une documentation rédigée pour des relecteurs sans contexte local.
- Des dépendances ajoutées uniquement avec justification claire.
- Une transparence sur les aspects privés des autres projets.
- Aucune fausse démonstration, métrique, feature ou contribution.

## Conséquences

### Positives

- Les relecteurs peuvent évaluer à la fois le résultat et la démarche.
- La documentation apporte un contexte que le code seul ne transmet pas.
- Les standards éditoriaux et techniques limitent la dette documentaire ultérieure.
- Le portfolio devient lui-même une étude de cas crédible.

### Négatives / compromis

- Investissement documentaire initial plus élevé avant une progression UI visible.
- Vélocité initiale plus lente qu'un site statique rapide.
- Les études de cas demandent une maintenance au fil de l'évolution des projets.

### Suivi

- Bootstrap de l'application Angular dans un lot ultérieur.
- Consignation des décisions technologiques (version Angular, stratégie de rendu, hébergement) en ADR distincts une fois validées.
- Application des règles éditoriales définies dans [../case-studies/README.md](../case-studies/README.md).

## Alternatives étudiées

### Site CV statique minimal

Un site HTML/CSS monopage serait livré plus vite.

**Rejeté :** profondeur insuffisante pour démontrer l'expertise Angular/Spring, la réflexion architecturale et la discipline d'ingénierie attendues au niveau visé.

### Dépôt privé avec site déployé uniquement

Garder le code privé ; ne montrer que l'URL en production.

**Rejeté :** la visibilité GitHub est un objectif explicite pour les relecteurs techniques. Un dépôt public bien structuré renforce la crédibilité.

### Licence open source

Utiliser MIT ou équivalent pour maximiser la réutilisation.

**Rejeté pour l'instant :** l'auteur souhaite conserver les droits sur le code et le design du portfolio. Le dépôt est source available pour consultation et évaluation, pas librement réutilisable. Voir [LICENSE](../../LICENSE).
