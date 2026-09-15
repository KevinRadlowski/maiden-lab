# ADR-002 — Langue de la documentation

## Statut

Accepté

## Date

2026-09-15

## Contexte

Maiden Lab est un projet francophone : le portfolio s'adresse prioritairement à un public professionnel francophone, et l'identité éditoriale du projet est ancrée dans cette langue.

Lors du LOT 00, la documentation avait été rédigée en anglais par défaut, ce qui créait une incohérence avec le positionnement du produit et le contenu public prévu sur [maidenlab.fr](https://maidenlab.fr).

Par ailleurs, le code source et les conventions techniques de l'écosystème Angular/TypeScript restent naturellement en anglais. Une règle claire est nécessaire pour éviter que de futurs contributeurs — humains ou agents — ne basculent à nouveau toute la documentation en anglais par habitude.

## Décision

**Le français est la langue canonique de :**

- la documentation du dépôt ;
- l'interface utilisateur du portfolio ;
- le contenu éditorial (pages, études de cas, textes publics) ;
- les explications d'architecture ;
- les commentaires explicatifs dans le code lorsqu'ils apportent du contexte métier ou des compromis non évidents ;
- la documentation des tests lorsqu'un texte libre est nécessaire ;
- les messages d'erreur métier destinés à l'utilisateur final.

**L'anglais reste utilisé pour :**

- le code source (implémentation) ;
- les identifiants (variables, fonctions, classes, interfaces, types TypeScript) ;
- les noms de fichiers et dossiers applicatifs lorsque la convention Angular le justifie ;
- les noms d'API, routes techniques et propriétés de configuration ;
- les clés JSON et noms de packages ;
- les commandes CLI ;
- Conventional Commits et préfixes de branches Git (`feat/`, `fix/`, `docs/`, etc.) ;
- la terminologie technique lorsqu'une traduction serait artificielle ou peu usitée en français (ex. _design tokens_, _pull request_, _runtime_, _build_).

## Conséquences

### Positives

- Cohérence entre documentation, contenu public et identité du projet.
- Documentation plus naturelle pour l'auteur et le public cible francophone.
- Base de code qui reste conventionnelle et lisible pour tout développeur habitué à l'écosystème Angular/TypeScript.
- Règle explicite réduisant les dérives linguistiques futures.

### Négatives / compromis

- Accessibilité internationale de la documentation réduite par rapport à un dépôt entièrement en anglais.
- Nécessité de discipline pour ne pas mélanger français narratif et anglais technique de façon incohérente.
- Les titres de sections Keep a Changelog (`[Unreleased]`, `Added`) peuvent rester en anglais pour compatibilité outillage.

### Suivi

- Toute nouvelle documentation narrative est rédigée en français par défaut.
- Une documentation en anglais n'est introduite que si une nécessité technique ou externe explicite le justifie, et doit alors être consignée ou référencée dans un ADR si elle devient permanente.
- Les ADR existants et futurs suivent le template francisé ([ADR-000-template.md](./ADR-000-template.md)).

## Alternatives étudiées

### Documentation entièrement en anglais

Conserver l'anglais pour maximiser l'audience internationale du dépôt GitHub.

**Rejeté :** incohérent avec le positionnement francophone du produit et le contenu public prévu ; la documentation paraît moins authentique pour le public cible.

### Bilinguisme systématique (FR + EN)

Maintenir chaque document en deux versions.

**Rejeté :** coût de maintenance double disproportionné pour un portfolio personnel ; risque de divergence entre versions.

### Traduction intégrale du code et des identifiants en français

Franciser noms de variables, routes et dossiers applicatifs.

**Rejeté :** contraire aux conventions de l'industrie et de l'écosystème Angular ; nuit à la lisibilité pour les relecteurs techniques.
