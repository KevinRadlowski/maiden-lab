# Contribuer à Maiden Lab

Merci de l'intérêt porté à ce projet. Maiden Lab est avant tout un portfolio personnel, mais le dépôt est structuré pour être lisible et maintenable par tout développeur amené à le consulter ou à y contribuer.

## Philosophie de développement

Le code de ce dépôt doit privilégier :

- **Lisibilité** — un autre développeur doit comprendre l'intention sans deviner.
- **Simplicité** — la solution correcte la plus simple l'emporte.
- **Responsabilités explicites** — chaque module, service ou composant a un rôle clair.
- **Noms descriptifs** — les noms expriment l'intention, pas l'implémentation.
- **Petites unités testables** — une logique vérifiable de façon isolée.
- **Typage strict** — TypeScript en mode `strict` ; pas de `any` implicite.
- **Pas d'abstraction prématurée** — extraire un pattern seulement lorsque la répétition est avérée.

### Commentaires : expliquer le pourquoi, pas le quoi

Un commentaire doit expliquer pourquoi le code existe ou pourquoi une décision inhabituelle a été prise, plutôt que paraphraser ce que le code fait déjà clairement. Réservez les commentaires aux règles métier non évidentes, aux compromis et aux contraintes que le code seul ne peut pas transmettre.

```typescript
// Mauvais : incrémenter le compteur
counter++;

// Bon : la fenêtre de debounce doit dépasser la durée de l'animation pour éviter le layout thrashing
const DEBOUNCE_MS = 350;
```

## Workflow Git

### Branche canonique

`main` est la branche de référence.

### Nommage des branches (convention future)

Ne créez pas de branche sauf demande explicite pour une tâche donnée. Lorsqu'une branche est nécessaire, utilisez :

| Préfixe | Usage |
|---------|-------|
| `feat/<scope>` | Nouvelle fonctionnalité |
| `fix/<scope>` | Correction de bug |
| `docs/<scope>` | Documentation uniquement |
| `chore/<scope>` | Maintenance, mise en place d'outillage |
| `refactor/<scope>` | Refactoring sans changement de comportement |
| `test/<scope>` | Ajout ou amélioration de tests |

Exemples :

- `feat/projects-case-study-layout`
- `fix/contact-form-validation`
- `docs/adr-ssr-strategy`

## Convention de commits

Les commits suivent [Conventional Commits](https://www.conventionalcommits.org/) :

| Type | Description |
|------|-------------|
| `feat:` | Nouvelle fonctionnalité |
| `fix:` | Correction de bug |
| `docs:` | Modification de documentation |
| `refactor:` | Changement de code sans feature ni fix |
| `test:` | Ajout ou correction de tests |
| `chore:` | Maintenance, dépendances, outillage |
| `perf:` | Amélioration de performance |
| `ci:` | Configuration CI/CD |

Exemples propres à Maiden Lab :

```
docs: add ADR for Angular version selection
feat(projects): add case study detail route
fix(a11y): correct heading hierarchy on home page
chore: configure ESLint and Prettier
perf(images): lazy-load project thumbnails
```

Gardez les commits focalisés : un changement logique par commit lorsque c'est possible.

## Pull requests

Lors de l'ouverture d'une pull request :

1. **Limiter le périmètre** — une préoccupation par PR ; éviter de mélanger des changements sans lien.
2. **Rédiger une description claire** — ce qui change, pourquoi, et comment vérifier.
3. **Inclure des tests** — le cas échéant, une fois la toolchain de test en place.
4. **Ajouter des captures d'écran** — pour toute modification visuelle de l'interface.
5. **Signaler les impacts accessibilité** — navigation clavier, contraste, ARIA, sémantique.
6. **Signaler les impacts performance** — taille du bundle, coût de rendu, requêtes réseau.
7. **Mettre à jour la documentation** — lorsque le comportement, l'architecture ou l'installation changent.

### Attentes en revue

Les relecteurs (ou l'auteur en auto-revue) doivent vérifier :

- Le code correspond à l'intention annoncée.
- Aucun secret ni credential n'est inclus.
- La documentation reflète le changement.
- L'accessibilité et la performance ne régressent pas sans justification.

## Definition of Done

Utilisez cette checklist comme guide général. Les éléments marqués *prévu* s'appliquent une fois l'outillage correspondant en place.

- [ ] Le code compile et s'exécute localement *(une fois l'application existante)*
- [ ] Le lint passe *(prévu)*
- [ ] Le formatage est cohérent *(prévu)*
- [ ] La vérification de types passe *(prévu)*
- [ ] Les tests unitaires passent pour la logique concernée *(prévu)*
- [ ] Les tests E2E passent pour les parcours concernés *(prévu, le cas échéant)*
- [ ] L'accessibilité est vérifiée pour les changements UI *(outillage prévu ; revue manuelle en attendant)*
- [ ] L'impact performance est pris en compte pour les changements UI ou data
- [ ] La documentation est mise à jour si le comportement ou l'architecture change
- [ ] Un ADR est créé ou mis à jour pour les décisions techniques significatives
- [ ] Aucun secret, token ou credential n'est commité
- [ ] La description de la PR est complète et exacte

## Questions

Pour toute question de périmètre ou d'orientation, consultez [ARCHITECTURE.md](./ARCHITECTURE.md) et [docs/decisions/](./docs/decisions/) avant d'introduire de nouveaux patterns ou dépendances.
