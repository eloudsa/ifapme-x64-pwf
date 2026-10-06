// Labo 3 : le gestionnaire de palette
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Niveau 1 =====
// 1. Créez un tableau palette de quatre couleurs hexadécimales
// 2. Affichez une pastille par couleur dans #palette (recette ci-dessous)
// 3. Affichez les trois premières couleurs dans #main, séparées par « · »
// 4. Au clic sur #add : ajoutez la couleur du champ #color, réaffichez, videz le champ

// ===== Niveau 2 =====
// 1. Champ vide : un message dans #message, aucun ajout
// 2. Couleur déjà présente : un message, aucun ajout
// 3. Palette pleine (5 couleurs, constante maxColors) : retirez la plus ancienne, avec un message
// 4. Sinon : ajoutez la couleur et confirmez-le dans #message

// ===== Niveau 3 =====
// 1. Au clic sur #favorite : la couleur du champ passe en tête de palette
// 2. Rien à faire si elle est absente ou déjà en tête : un message dans chaque cas
// 3. Au clic sur #remove : retirez la couleur du champ, sans jamais retirer une autre couleur par erreur

// Recette des pastilles :
// const open = `<span class="swatch" style="background: `
// const close = `"></span>`
// swatches.innerHTML = open + palette.join(close + open) + close
