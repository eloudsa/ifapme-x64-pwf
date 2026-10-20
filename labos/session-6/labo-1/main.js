// Labo 1 : le nuancier
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Niveau 1 =====
// 1. Sélectionnez #swatches et déclarez let html = ""
// 2. Avec une boucle for, faites varier une luminosité light de 10 à 90, de 10 en 10
// 3. À chaque tour, ajoutez à html une div.swatch de fond hsl(220, 60%, light%) et le texte « 10 % »
// 4. Après la boucle, écrivez html dans #swatches

// ===== Niveau 2 =====
// 1. Déclarez un tableau colors de cinq couleurs hexadécimales
// 2. Parcourez-le avec un for à index : un <li> par couleur, avec une pastille span.chip et « 1. #4A72B8 »
// 3. Affichez la liste dans #palette et « 5 couleurs » dans #count

// ===== Niveau 3 =====
// 1. Au clic sur #generate, lisez la teinte saisie dans #hue (un nombre)
// 2. Teinte hors de 0 à 360 : un message d'erreur dans #swatches, et rien d'autre
// 3. Sinon, générez le nuancier du plus clair (90 %) au plus foncé (10 %)
