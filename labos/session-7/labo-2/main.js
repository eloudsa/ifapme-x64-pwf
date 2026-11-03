// Labo 2 : le slug et les initiales
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Niveau 1 =====
// 1. Sélectionnez le champ #title et l'élément #slug
// 2. À chaque frappe, transformez le titre : sans espaces de bord, en minuscules, espaces remplacés par des tirets
// 3. Affichez le résultat dans #slug : « Mon Super Projet » devient mon-super-projet

// ===== Niveau 2 =====
// 1. À chaque frappe dans #author, découpez le nom en mots avec split
// 2. Avec une boucle, gardez la première lettre de chaque mot (ignorez les mots vides)
// 3. Affichez au plus deux initiales en majuscules dans #avatar, ou « ? » si le champ est vide

// ===== Niveau 3 =====
// 1. Rendez le slug robuste : « L'App   Resto 2026 ! » doit donner l-app-resto-2026
// 2. L'apostrophe devient un séparateur, le point d'exclamation disparaît
// 3. Les espaces multiples ne doivent jamais produire deux tirets : split, une boucle, puis join
