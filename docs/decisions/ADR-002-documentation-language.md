# ADR-002 â€” Langue de la documentation

## Statut

AcceptÃ©

## Date

2026-09-15

## Contexte

Maiden Lab est un projet francophone : le portfolio s'adresse prioritairement Ã  un public professionnel francophone, et l'identitÃ© Ã©ditoriale du projet est ancrÃ©e dans cette langue.

Lors du LOT 00, la documentation avait Ã©tÃ© rÃ©digÃ©e en anglais par dÃ©faut, ce qui crÃ©ait une incohÃ©rence avec le positionnement du produit et le contenu public prÃ©vu sur [maidenlab.fr](https://maidenlab.fr).

Par ailleurs, le code source et les conventions techniques de l'Ã©cosÃ¨me Angular/TypeScript restent naturellement en anglais. Une rÃ¨gle claire est nÃ©cessaire pour Ã©viter que de futurs contributeurs â€” humains ou agents â€” ne basculent Ã  nouveau toute la documentation en anglais par habitude.

## DÃ©cision

**Le franÃ§ais est la langue canonique de :**

- la documentation du dÃ©pÃ´t ;
- l'interface utilisateur du portfolio ;
- le contenu Ã©ditorial (pages, Ã©tudes de cas, textes publics) ;
- les explications d'architecture ;
- les commentaires explicatifs dans le code lorsqu'ils apportent du contexte mÃ©tier ou des compromis non Ã©vidents ;
- la documentation des tests lorsqu'un texte libre est nÃ©cessaire ;
- les messages d'erreur mÃ©tier destinÃ©s Ã  l'utilisateur final.

**L'anglais reste utilisÃ© pour :**

- le code source (implÃ©mentation) ;
- les identifiants (variables, fonctions, classes, interfaces, types TypeScript) ;
- les noms de fichiers et dossiers applicatifs lorsque la convention Angular le justifie ;
- les noms d'API, routes techniques et propriÃ©tÃ©s de configuration ;
- les clÃ©s JSON et noms de packages ;
- les commandes CLI ;
- Conventional Commits et prÃ©fixes de branches Git (`feat/`, `fix/`, `docs/`, etc.) ;
- la terminologie technique lorsqu'une traduction serait artificielle ou peu usitÃ©e en franÃ§ais (ex. *design tokens*, *pull request*, *runtime*, *build*).

## ConsÃ©quences

### Positives

- CohÃ©rence entre documentation, contenu public et identitÃ© du projet.
- Documentation plus naturelle pour l'auteur et le public cible francophone.
- Base de code qui reste conventionnelle et lisible pour tout dÃ©veloppeur habituÃ© Ã  l'Ã©cosystÃ¨me Angular/TypeScript.
- RÃ¨gle explicite rÃ©duisant les dÃ©rives linguistiques futures.

### NÃ©gatives / compromis

- AccessibilitÃ© internationale de la documentation rÃ©duite par rapport Ã  un dÃ©pÃ´t entiÃ¨rement en anglais.
- NÃ©cessitÃ© de discipline pour ne pas mÃ©langer franÃ§ais narratif et anglais technique de faÃ§on incohÃ©rente.
- Les titres de sections Keep a Changelog (`[Unreleased]`, `Added`) peuvent rester en anglais pour compatibilitÃ© outillage.

### Suivi

- Toute nouvelle documentation narrative est rÃ©digÃ©e en franÃ§ais par dÃ©faut.
- Une documentation en anglais n'est introduite que si une nÃ©cessitÃ© technique ou externe explicite le justifie, et doit alors Ãªtre consignÃ©e ou rÃ©fÃ©rencÃ©e dans un ADR si elle devient permanente.
- Les ADR existants et futurs suivent le template francisÃ© ([ADR-000-template.md](./ADR-000-template.md)).

## Alternatives Ã©tudiÃ©es

### Documentation entiÃ¨rement en anglais

Conserver l'anglais pour maximiser l'audience internationale du dÃ©pÃ´t GitHub.

**RejetÃ© :** incohÃ©rent avec le positionnement francophone du produit et le contenu public prÃ©vu ; la documentation paraÃ®t moins authentique pour le public cible.

### Bilinguisme systÃ©matique (FR + EN)

Maintenir chaque document en deux versions.

**RejetÃ© :** coÃ»t de maintenance double disproportionnÃ© pour un portfolio personnel ; risque de divergence entre versions.

### Traduction intÃ©grale du code et des identifiants en franÃ§ais

Franciser noms de variables, routes et dossiers applicatifs.

**RejetÃ© :** contraire aux conventions de l'industrie et de l'Ã©cosystÃ¨me Angular ; nuit Ã  la lisibilitÃ© pour les relecteurs techniques.

