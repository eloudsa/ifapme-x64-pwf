// Labo 4 : le mini-site
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Données fournies =====
const api = "https://jsonplaceholder.typicode.com"

// ===== Niveau 1 =====
// 1. Une fonction postCard(post) renvoie le HTML d'une carte : photo seed/${id}, titre, texte
// 2. Une fonction render(list) rend les cartes dans #posts et écrit « 12 articles » dans #status
// 3. Une fonction async loadPosts() : « Chargement… », puis /posts?_limit=12 rendu avec render
// 4. Les erreurs : « Erreur 404 » si la réponse n'est pas ok, « Connexion impossible » dans le catch

// ===== Niveau 2 =====
// 1. Une fonction async loadAuthors() demande /users : un bouton « Tous », puis un bouton par auteur dans #authors
// 2. Au clic sur un auteur : loadPosts(userId) demande /posts?userId=… ; « Tous » : toute la liste
// 3. Le bouton cliqué reçoit la classe active, et lui seul
// 4. L'état vide : « Aucun article pour cet auteur »

// ===== Niveau 3 =====
// 1. Au clic sur une carte : ses commentaires dans #comments, « 5 commentaires sur l'article 1 »
// 2. Au clic sur #publish : POST /posts avec le titre et le texte saisis, statut et id dans la console
// 3. La carte créée en tête de liste : « 13 articles »
