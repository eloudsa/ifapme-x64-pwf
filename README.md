# Programmation Web Frontend — Labos

Ce dépôt contient les labos du cours **Programmation Web Frontend**, destiné aux apprenants de 2ème année de la formation **UX/UI Designer** de l'IFAPME : les pages de départ et, après chaque session, les résolutions.

## Organisation

Les labos sont regroupés par session de formation. Le dossier d'une session est ajouté au dépôt au moment où elle est vue en cours.

```
slides/                      les slides de chaque session (PDF)
labos/
  session-1/                 sessions 1 et 2 : JavaScript dans la console
    ..._Session_1_labos.pdf  les énoncés des labos de la session
    labo-2/
      labo-2-1.js
      ...
  session-2/
    ...
  session-3/                 à partir de la session 3 : JavaScript dans la page
    labo-1/
      index.html             la page (fournie)
      style.css              sa mise en forme (fournie)
      main.js                les consignes, en commentaires : c'est ici que vous codez
      solutions/             ajouté après la session
        labo-1-1.js
        labo-1-2.js
        labo-1-3.js
```

- Le dossier `slides/` contient un PDF de slides par session.
- Un dossier `labos/session-N/` par session de formation, avec le PDF des énoncés de ses labos.
- Un dossier `labo-X/` par labo vu durant la session.
- Un fichier `labo-X-Y.js` par niveau (ou exercice) du labo.

Les exercices sont écrits en JavaScript « vanilla », sans dépendance ni étape de compilation.

## Récupérer les labos

Le dépôt a été cloné une fois avec `git clone`. Avant chaque session, dans le dossier du clone :

```sh
git pull
```

Copiez ensuite le dossier du labo dans votre propre dossier de travail et travaillez sur cette copie : votre clone reste identique au dépôt, et le prochain `git pull` ne sera pas bloqué par vos modifications.

### Si `git pull` échoue

Si `git pull` affiche une erreur (modifications locales, historiques divergents…), remettez votre clone à l'identique du dépôt :

```sh
git fetch
git reset --hard origin/main
```

Attention : cette commande efface toutes les modifications faites dans le clone. C'est pourquoi il faut travailler sur une copie du labo, en dehors du clone.

## Sessions 3 et suivantes : une page avec Live Server

1. Dans VS Code, ouvrez le dossier du labo (Fichier › Ouvrir le dossier).
2. Clic droit sur `index.html` › **Open with Live Server** (extension de Ritwick Dey).
3. Le navigateur s'ouvre sur `http://127.0.0.1:5500/index.html` ; ouvrez la console avec F12.
4. Écrivez votre code dans `main.js` et enregistrez : la page se recharge seule.

Pour tester une solution, copiez le contenu de `solutions/labo-X-Y.js` dans `main.js`.

## Sessions 1 et 2 : un fichier dans la console

Avec [Node.js](https://nodejs.org/) installé, depuis la racine du projet :

```sh
node labos/session-2/labo-1/labo-1-1.js
```

Dans VS Code, l'extension **Code Runner** permet aussi d'exécuter le fichier ouvert directement dans le panneau de sortie.
