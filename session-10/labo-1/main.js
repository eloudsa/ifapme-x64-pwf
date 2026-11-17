// Labo 1 : explorer l'API
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Données fournies =====
const api = "https://jsonplaceholder.typicode.com"

// ===== Niveau 1 =====
// 1. Une fonction async explorePosts() demande /posts : affichez leur nombre dans la console
// 2. Écrivez « 100 articles » dans #posts-count et les clés du premier article dans #posts-keys
// 3. Une fonction describe(path, selector) : « un objet » ou « un tableau de 10 éléments » (/posts/7, /users/3, /users)

// ===== Niveau 2 =====
// 1. Une fonction showCount(path, selector) : « 10 éléments » pour /posts?userId=3, l'adresse dans la console
// 2. Les commentaires de l'article 7
// 3. Les tâches de l'utilisateur 5, puis les photos de l'album 2
// 4. Les tâches terminées de l'utilisateur 5 : deux paramètres reliés par &

// ===== Niveau 3 =====
// 1. Une fonction checkStatus(path, selector) : « 200 · OK » pour /posts/7, « 404 · introuvable » pour /posts/999
// 2. Les clés de /users/3 dans #user-keys
// 3. La fiche auteur dans #author : nom, e-mail, ville et entreprise
