// Labo 3 : ternaire et switch
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Niveau 1 =====
// 1. Sélectionnez le bouton #theme et le body : document.querySelector("body")
// 2. Un booléen isDark (let) qui vaut false au départ
// 3. Au clic : inversez isDark avec !, basculez la classe dark sur le body
// 4. Avec un ternaire, le bouton affiche « Mode clair » ou « Mode sombre »

// ===== Niveau 2 =====
// 1. Au clic sur #show, lisez la valeur du menu #status (comme un champ : .value)
// 2. Un switch choisit le message : received, printing, shipped, delivered
// 3. Un default affiche « Statut inconnu »
// 4. Affichez le message dans #order-status ; testez cancelled

// ===== Niveau 3 =====
// 1. Regroupez received et printing : « En préparation » (cas empilés)
// 2. cancelled et refunded : « Commande annulée »
// 3. Chaque cas fixe aussi une largeur de barre et une classe (warning, ok, error)
// 4. Après le switch : appliquez texte, classe et style.width en une fois
