# Série 1 : variables, types et conversions

**Prérequis** : sessions 1 et 2.
**Notions** : `console.log` / `info` / `warn`, expressions et priorités, commentaires, `const` et `let`, nommage, les cinq types primitifs, template literals, `typeof`, `Number()`, `String()`, `Boolean()`.
**Interdit** : `if`, boucles, fonctions, listes, `Math`, `var`.

Rendez chaque exercice dans `solutions-1/solution-1-X.js` (voir le [README](README.md)).

| Exercice | Titre | Niveau |
|---|---|---|
| [1-1](#exercice-1-1--une-règle-css-générée) | Une règle CSS générée | 1 · Simple |
| [1-2](#exercice-1-2--lexport-dimages) | L'export d'images | 1 · Simple |
| [1-3](#exercice-1-3--la-progression-de-lonboarding) | La progression de l'onboarding | 2 · Modéré |
| [1-4](#exercice-1-4--le-code-cassé) | Le code cassé | 2 · Modéré |
| [1-5](#exercice-1-5--les-paramètres-durl) | Les paramètres d'URL | 2 · Modéré |
| [1-6](#exercice-1-6--la-rotation-de-palette) | La rotation de palette | 3 · Avancé |
| [1-7](#exercice-1-7--prédire-avant-dexécuter) | Prédire avant d'exécuter | 3 · Avancé |
| [1-8](#exercice-1-8--projet--labonnement-de-léquipe) | Projet : l'abonnement de l'équipe | Synthèse |

---

## Exercice 1-1 · Une règle CSS générée

**Niveau** : 1 · Simple
**Fichier** : `solutions-1/solution-1-1.js`
**Notions** : `const`, template literal sur plusieurs lignes, concaténation `+`, calculs

### Contexte

Un design system stocke ses valeurs dans des variables JavaScript. À partir de ces valeurs, votre programme doit écrire le code CSS d'un composant « carte ».

### Données

| Variable | Valeur | Type |
|---|---|---|
| `selector` | .card | texte |
| `widthPx` | 320 | nombre |
| `paddingPx` | 24 | nombre |
| `radiusPx` | 12 | nombre |
| `background` | #F8FAFC | texte |

### Consignes

1. Déclarez les cinq variables du tableau avec `const`, en respectant les noms et les types. Les nombres ne contiennent **pas** l'unité `px` : c'est l'affichage qui l'ajoute.
2. Affichez la règle `.card` (lignes 1 à 6 de la sortie attendue) avec **un seul** `console.log` et **un seul** template literal.
3. Affichez la règle `.card--large` (lignes 7 à 10) avec des **concaténations `+`**, un `console.log` par ligne. Dans cette variante :
   - la largeur vaut 1,5 fois `widthPx` ;
   - le padding vaut `paddingPx` + 8.

### Sortie attendue

```
.card {
  width: 320px;
  padding: 24px;
  border-radius: 12px;
  background: #F8FAFC;
}
.card--large {
  width: 480px;
  padding: 32px;
}
```

> **Indice** : un template literal conserve les sauts de ligne **et** les espaces du début de ligne. Avec `+`, pensez aux parenthèses autour d'une addition.

### Avant d'envoyer

- [ ] Les cinq variables sont des `const`, avec les noms du tableau
- [ ] `widthPx`, `paddingPx` et `radiusPx` sont des nombres, sans guillemets ni `px`
- [ ] La règle `.card` est affichée par un seul `console.log`
- [ ] `480` et `32` n'apparaissent pas dans le code : ils sont calculés
- [ ] Si je remplace `24` par `16`, les deux paddings changent (16px et 24px)

---

## Exercice 1-2 · L'export d'images

**Niveau** : 1 · Simple
**Fichier** : `solutions-1/solution-1-2.js`
**Notions** : nombres, priorités, `const`, template literal

### Contexte

Vous exportez l'image principale (« hero ») d'une page d'accueil au format 16:9. Les écrans haute densité (Retina) demandent aussi des versions deux fois (@2x) et trois fois (@3x) plus grandes. Une vignette de la même image est affichée dans la liste des articles.

Rappel : au format 16:9, `hauteur = largeur / 16 * 9`.

### Données

| Variable | Valeur |
|---|---|
| `ratioWidth` | 16 |
| `ratioHeight` | 9 |
| `heroWidth` | 1440 |
| `thumbnailWidth` | 320 |

### Consignes

1. Déclarez les quatre variables du tableau.
2. Calculez la hauteur du hero dans une `const` nommée `heroHeight`, et celle de la vignette dans une `const` nommée `thumbnailHeight`. Utilisez `ratioWidth` et `ratioHeight`, pas les nombres 16 et 9.
3. Affichez les quatre lignes de la sortie attendue. Les tailles @2x et @3x sont calculées directement dans les `${...}`.

### Sortie attendue

```
Hero : 1440 x 810
Hero @2x : 2880 x 1620
Hero @3x : 4320 x 2430
Vignette : 320 x 180
```

### Avant d'envoyer

- [ ] Les nombres 16 et 9 n'apparaissent qu'une seule fois, dans les déclarations
- [ ] Aucun résultat n'est tapé à la main : `810`, `2880`, `180`… n'apparaissent pas dans le code
- [ ] Si je passe au format 4:3 (`ratioWidth = 4`, `ratioHeight = 3`), j'obtiens `Hero : 1440 x 1080`

---

## Exercice 1-3 · La progression de l'onboarding

**Niveau** : 2 · Modéré
**Fichier** : `solutions-1/solution-1-3.js`
**Notions** : `let` et réassignation, `const`, calculs, `console.info`

### Contexte

À sa première connexion, un utilisateur suit un parcours d'accueil (onboarding) en 5 étapes. Une jauge affiche sa progression en pourcentage, comme la jauge de suivi des cours dans MyIFAPME.

Rappel : `progression = étapes terminées * 100 / nombre total d'étapes`.

### Données

| Variable | Valeur de départ | Change ? |
|---|---|---|
| `totalSteps` | 5 | non |
| `completedSteps` | 0 | oui |
| `progress` | calculée à partir des deux autres | oui |

### Consignes

1. Déclarez les trois variables. Choisissez `const` ou `let` selon la colonne « Change ? ».
2. Affichez l'état de départ (ligne 1 de la sortie attendue).
3. Appliquez les quatre événements suivants. Après **chaque** événement, recalculez `progress`, puis affichez la ligne correspondante :
   - **Événement A** : l'utilisateur crée son profil (+1 étape).
   - **Événement B** : il choisit un thème (+1 étape).
   - **Événement C** : il revient en arrière (-1 étape).
   - **Événement D** : il valide le thème et l'avatar d'un coup (+2 étapes).
4. Affichez le nombre d'étapes restantes avec `console.info`. Ce nombre est calculé, pas stocké dans une variable.

### Sortie attendue

```
Départ : 0/5 étapes (0 %)
Profil créé : 1/5 étapes (20 %)
Thème choisi : 2/5 étapes (40 %)
Retour en arrière : 1/5 étapes (20 %)
Thème et avatar validés : 3/5 étapes (60 %)
Étapes restantes : 2
```

> **Indice** : `progress` ne se met pas à jour toute seule quand `completedSteps` change. Il faut la recalculer après chaque événement.

### Avant d'envoyer

- [ ] `totalSteps` est une `const`, `completedSteps` et `progress` sont des `let`
- [ ] Chaque variable n'est déclarée qu'une seule fois
- [ ] Les pourcentages 20, 40 et 60 ne sont pas tapés à la main
- [ ] La dernière ligne utilise `console.info`
- [ ] Si je passe `totalSteps` à 4, la dernière jauge affiche `3/4 étapes (75 %)`

---

## Exercice 1-4 · Le code cassé

**Niveau** : 2 · Modéré
**Fichier** : `solutions-1/solution-1-4.js`
**Notions** : `SyntaxError`, `TypeError`, nommage, guillemets, template literal, priorité de `+`

### Contexte

Un collègue vous transmet ce programme. Il affiche la facture d'un atelier UX pour un client. Il contient **5 erreurs**.

### Code à corriger

Copiez ce code tel quel dans votre fichier :

```js
const clientName = "Boulangerie Léon"
const workshop-days = 2
const dayRate = 450
const discount = 100
const total = workshopDays * dayRate
total = total - discount

console.log("Client : ${clientName}")
console.log(`Atelier : ${workshopDays} jours x ${dayRate} €`)
console.log("Sous-total : " + workshopDays + dayRate + " €")
console.log(`Remise : -${discount} €`)
console.log(`Total HTVA : ${total} €`)
console.log("Message : "À très vite !"")
```

### Consignes

1. Exécutez le programme et lisez le message d'erreur : il indique le problème **et** la ligne.
2. Corrigez l'erreur, puis exécutez à nouveau. Recommencez jusqu'à ce que le programme tourne.
3. Comparez la sortie avec la sortie attendue. Certaines erreurs ne font **pas** planter le programme : elles affichent simplement un mauvais résultat. Corrigez-les aussi.
4. Au-dessus de chaque ligne corrigée, ajoutez un commentaire `// Erreur N : ...` qui explique, en une phrase, ce qui n'allait pas.

### Sortie attendue

```
Client : Boulangerie Léon
Atelier : 2 jours x 450 €
Sous-total : 900 €
Remise : -100 €
Total HTVA : 800 €
Message : "À très vite !"
```

> **Indice** : une `SyntaxError` empêche le programme de démarrer, même si l'erreur est à la dernière ligne. Vous ne verrez donc pas les 5 erreurs en même temps.

### Avant d'envoyer

- [ ] Le programme s'exécute sans erreur et la sortie est identique à la sortie attendue
- [ ] Les 5 erreurs sont commentées `// Erreur 1` à `// Erreur 5`
- [ ] J'ai distingué dans mes commentaires les erreurs qui plantent (`SyntaxError`, `TypeError`) de celles qui donnent un résultat faux sans planter

---

## Exercice 1-5 · Les paramètres d'URL

**Niveau** : 2 · Modéré
**Fichier** : `solutions-1/solution-1-5.js`
**Notions** : conversion explicite, coercition, `typeof`, `undefined`

### Contexte

Un visiteur ouvre cette adresse de votre portfolio :

```
https://portfolio.be/projets?page=2&dark=0&zoom=0,5&search=%20
```

Le navigateur découpe les paramètres après le `?`. Tous arrivent sous forme de **texte**, même ceux qui ressemblent à des nombres. (`%20` est la façon d'écrire un espace dans une URL.) Un paramètre absent de l'URL, comme `sort`, n'a aucune valeur.

### Données

Recopiez ces valeurs **avec les guillemets** :

| Variable | Valeur | Signification |
|---|---|---|
| `pageParam` | `"2"` | numéro de page |
| `darkParam` | `"0"` | mode sombre : `0` = désactivé, `1` = activé |
| `zoomParam` | `"0,5"` | niveau de zoom |
| `searchParam` | `" "` (un espace) | texte recherché |
| `sortParam` | aucune valeur | ordre de tri, absent de l'URL |

### Consignes

1. Déclarez les cinq variables. `sortParam` est déclarée **sans valeur** : choisissez `const` ou `let` en conséquence.
2. Convertissez `pageParam` en nombre dans une `const` nommée `page`.
3. Affichez les 8 lignes de la sortie attendue, dans l'ordre :
   1. `pageParam` avec son type, puis `page` avec son type ;
   2. la page suivante, calculée à partir de `page` ;
   3. la même addition faite **sans conversion**, avec `pageParam` ;
   4. le mode sombre obtenu avec `Boolean(darkParam)` ;
   5. le mode sombre obtenu correctement, en convertissant **d'abord** en nombre, **puis** en booléen ;
   6. le zoom converti avec `Number()`, suivi de son type ;
   7. `searchParam` converti avec `Number()`, puis avec `Boolean()` ;
   8. `sortParam` avec son type, puis `String(sortParam)` avec son type.
4. Sous le code, répondez en commentaire à ces trois questions :
   - Pourquoi la ligne 4 dit-elle que le mode sombre est activé ?
   - Pourquoi le zoom donne-t-il `NaN` ? Que faudrait-il écrire dans l'URL pour obtenir `0.5` ?
   - Un champ de recherche qui ne contient qu'un espace : est-il vide ? Que répondent `Number()` et `Boolean()` ?

### Sortie attendue

```
page : "2" (string) → 2 (number)
Page suivante : 3
Sans conversion : 21
Mode sombre (naïf) : true
Mode sombre (correct) : false
Zoom : NaN (number)
Recherche : Number → 0, Boolean → true
Tri : undefined (undefined) → "undefined" (string)
```

> **Indice** : le caractère `→` peut être copié depuis cet énoncé. Pour la ligne 5, une conversion peut s'appliquer au résultat d'une autre : `Boolean(Number(...))`.

### Avant d'envoyer

- [ ] Les quatre paramètres présents sont des textes (`typeof` → `string`)
- [ ] `sortParam` est une `let` déclarée sans valeur
- [ ] `3` est calculé à partir de `page`, pas tapé
- [ ] La ligne 5 utilise deux conversions imbriquées
- [ ] Les trois questions ont une réponse en commentaire

---

## Exercice 1-6 · La rotation de palette

**Niveau** : 3 · Avancé
**Fichier** : `solutions-1/solution-1-6.js`
**Notions** : `let`, réassignation, variable temporaire

### Contexte

Au labo 1 de la session 2, vous avez échangé **deux** couleurs. Le client veut maintenant faire tourner **trois** couleurs : chaque couleur prend la place de la précédente.

```
            primary     secondary   accent
Avant :     #1E3A8A     #F59E0B     #10B981
Après :     #F59E0B     #10B981     #1E3A8A
```

### Données

| Variable | Valeur de départ |
|---|---|
| `primary` | `"#1E3A8A"` |
| `secondary` | `"#F59E0B"` |
| `accent` | `"#10B981"` |

### Consignes

1. Déclarez les trois couleurs et affichez-les (ligne « Avant »).
2. Faites la rotation. Contraintes :
   - aucune valeur `"#..."` ne peut être retapée après les déclarations ;
   - vous avez droit à **une seule** variable supplémentaire.
3. Affichez les trois couleurs (ligne « Après »).
4. En commentaire, justifiez le choix `const` ou `let` pour **chacune** des quatre variables.

### Sortie attendue

```
Avant : #1E3A8A / #F59E0B / #10B981
Après : #F59E0B / #10B981 / #1E3A8A
```

> **Indice** : commencez par la couleur qui risque d'être écrasée en premier.

### Avant d'envoyer

- [ ] Chaque code couleur n'apparaît qu'une seule fois dans le fichier
- [ ] Une seule variable en plus des trois couleurs
- [ ] Les quatre choix `const` / `let` sont justifiés en commentaire

---

## Exercice 1-7 · Prédire avant d'exécuter

**Niveau** : 3 · Avancé
**Fichier** : `solutions-1/solution-1-7.js`
**Notions** : priorités, coercition, conversions, `typeof`

### Contexte

Pas de sortie attendue ici : c'est à vous de la prédire. Ce qui compte, c'est votre raisonnement. Aucune de ces expressions n'a été corrigée pendant les labos.

### Consignes

Pour **chaque** expression du tableau, dans l'ordre :

1. Écrivez votre prédiction en commentaire, **avant** d'exécuter.
2. Ajoutez la ligne `console.log(...)` correspondante.
3. Exécutez, puis ajoutez un commentaire `// Résultat : ...` et, si vous vous êtes trompé, `// Pourquoi : ...`.

Format attendu, pour chaque expression :

```js
// Prédiction : 2
console.log(1 + 1)
// Résultat : 2
```

| # | Expression |
|---|---|
| 1 | `"4" + 4 * 2` |
| 2 | `("4" + 4) * 2` |
| 3 | `"10" / "4"` |
| 4 | `"20px" - 4` |
| 5 | `typeof ("20px" - 4)` |
| 6 | `Number("1e3")` |
| 7 | `Number(false) + "1"` |
| 8 | `String(1.50)` |
| 9 | `true + true` |
| 10 | `Boolean(-1)` |
| 11 | `Boolean("" + 0)` |
| 12 | `` `${1 + 1}` + 1 `` |

> **Indice** : repérez d'abord ce qui est calculé en premier (priorités, parenthèses, `${...}`), puis lisez de gauche à droite. Pour la ligne 6, cherchez « notation scientifique ».

### Avant d'envoyer

- [ ] Les 12 expressions ont une prédiction, un `console.log` et un résultat
- [ ] Chaque prédiction fausse a un `// Pourquoi :`
- [ ] Je n'ai pas modifié mes prédictions après avoir exécuté (votre formateur préfère une prédiction fausse bien expliquée à une prédiction corrigée en douce)

---

## Exercice 1-8 · Projet : l'abonnement de l'équipe

**Niveau** : Synthèse (tous les niveaux)
**Fichier** : `solutions-1/solution-1-8.js`
**Notions** : toutes celles des sessions 1 et 2

### Contexte

Votre studio veut abonner toute l'équipe à un outil de design. L'outil propose deux formules :

- **Mensuelle** : on paie chaque mois, pour chaque membre.
- **Annuelle** : on paie une fois par an, et 2 mois sont offerts (on paie donc 10 mois au lieu de 12).

Le nombre de membres a été saisi dans un formulaire : c'est donc un texte. Votre programme compare les deux formules et affiche le récapitulatif de la formule annuelle.

### Données

| Information | Valeur |
|---|---|
| Nom de l'outil | Maquetto Pro |
| Nom de l'équipe | Studio Pixel |
| Nombre de membres (saisi) | `"4"` |
| Prix par membre et par mois | 15 €, soit `1500` centimes |
| Mois offerts en formule annuelle | 2 |
| TVA | 21 % |
| Paiement annuel choisi ? | oui |
| Code promo | aucun, volontairement |
| Date de renouvellement | pas encore connue |

Cette fois, **vous choisissez les noms** des variables (camelCase, en anglais, descriptifs).

### Consignes

**Partie 1 · Obligatoire**

1. Commencez le fichier par un bloc de commentaire `/* ... */` qui décrit le programme, suivi d'une note `// TODO:` rappelant de vérifier le taux de TVA avec le comptable.
2. Déclarez toutes les données en haut du fichier. Pour le code promo et la date de renouvellement, choisissez entre `null` et `undefined` selon le sens de chacun.
3. Convertissez le nombre de membres en nombre.
4. Calculez **en centimes**, chacun dans sa propre `const` :
   - le prix mensuel de l'équipe ;
   - le coût sur un an en formule mensuelle ;
   - le coût de la formule annuelle ;
   - l'économie réalisée avec la formule annuelle ;
   - la TVA sur la formule annuelle ;
   - le total TVAC de la formule annuelle ;
   - ce total ramené à un mois.
5. Divisez par 100 **uniquement** au moment d'afficher.
6. Affichez le récapitulatif de la sortie attendue :
   - l'avant-dernière ligne avec `console.info` ;
   - la dernière ligne avec `console.warn`.

**Partie 2 · Pour aller plus loin**

7. Ajoutez à la fin le prix **par membre et par mois**, hors TVA, en formule annuelle : `Prix par membre : 12.5 € HTVA par mois`.
8. Un cinquième membre rejoint l'équipe. Remplacez `"4"` par `"5"` : le récapitulatif entier doit suivre, **sans toucher à une autre ligne**. Le prix par membre, lui, ne doit pas changer. Expliquez pourquoi en commentaire.

### Sortie attendue (partie 1)

```
Maquetto Pro · Studio Pixel (4 membres)
Mensuel : 60 € / mois, soit 720 € / an
Annuel : 600 € / an (2 mois offerts)
Économie : 120 €
TVA 21 % : 126 €
Total TVAC : 726 €
Soit 60.5 € TVAC par mois
Paiement annuel : true
Code promo : null
Renouvellement : undefined
Offre valable jusqu'au 31 octobre
Le paiement annuel n'est pas remboursable
```

> **Test de robustesse** (partie 2, point 8) : avec `"5"`, vous devez obtenir `Total TVAC : 907.5 €` et `Soit 75.625 € TVAC par mois`. Sans `Math`, on ne peut pas encore arrondir ce dernier montant au centime : on le fera au chapitre sur l'objet `Math`.

### Avant d'envoyer

- [ ] Le fichier commence par un bloc `/* ... */` et une note `// TODO:`
- [ ] La sortie est identique à la sortie attendue
- [ ] Le nombre de membres est converti avec `Number()`
- [ ] Le code promo vaut `null` et la date de renouvellement `undefined`, et je sais expliquer pourquoi
- [ ] Aucun montant n'est tapé à la main : `60`, `720`, `126`, `726`… n'apparaissent pas dans le code
- [ ] Les calculs sont faits en centimes
- [ ] Les deux dernières lignes utilisent `console.info` et `console.warn`
- [ ] Partie 2 : le test de robustesse donne bien `907.5 €`
