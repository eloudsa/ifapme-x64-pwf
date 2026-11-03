// Labo 4 : la boîte à outils du designer
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Niveau 1 =====
// 1. Écrivez pxToRem(px) (base 16) et slugify(title) : chacune RENVOIE son résultat
// 2. Une fonction updateRem affiche « 1.5rem » dans #rem ; updateSlug affiche le slug dans #slug
// 3. Branchez-les par leur nom sur l'événement input de #px et de #title

// ===== Niveau 2 =====
// 1. Réécrivez les outils en fonctions fléchées ; pxToRem(px, base = 16)
// 2. round2(n) arrondit à deux décimales ; formatRem(px) combine les deux et renvoie « 0.88rem »
// 3. Avec forEach, affichez dans #sizes la conversion de [12, 14, 16, 20, 24, 32]

// ===== Niveau 3 =====
// 1. getLevel(ratio, isLarge) renvoie « AAA », « AA » ou « Échec » (retours anticipés)
// 2. checkContrast lit #ratio et #large, affiche le niveau dans #level avec la classe pass ou fail
// 3. Branchez checkContrast par son nom sur l'input de #ratio ET le clic sur #large
