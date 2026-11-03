// Labo 2 : return, des calculs réutilisables
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Niveau 1 =====
// 1. Écrivez addVat(price) qui RENVOIE le prix avec 21 % de TVA (aucun textContent dedans)
// 2. Au clic sur #poster (20 €), #notebook (12 €) et #bag (15 €), affichez le prix TVAC dans #result
// 3. Exemple : « Poster A3 : 24.20 € TVAC »

// ===== Niveau 2 =====
// 1. Écrivez formatPrice(amount) qui renvoie « 24.20 € » (deux décimales)
// 2. Au clic sur #calc, lisez #amount, convertissez-le en nombre
// 3. Affichez « 20.00 € HTVA, soit 24.20 € TVAC » dans #calc-result ; montant invalide : un message

// ===== Niveau 3 =====
// 1. Un total cartTotal (let), une fonction addToCart(price) appelée par les trois boutons
// 2. getShipping(total) renvoie 0 dès 50 €, sinon 4.99 (retour anticipé)
// 3. Une fonction updateCart affiche le total TVAC dans #cart et la livraison dans #shipping
