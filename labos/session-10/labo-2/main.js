// Labo 2 : la première requête
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Données fournies =====
const api = "https://jsonplaceholder.typicode.com"

// ===== Niveau 1 =====
// 1. Une fonction async loadUser() demande /users/1 : affichez l'objet reçu dans la console
// 2. Écrivez le nom dans #name : « Leanne Graham »
// 3. Écrivez l'e-mail et la ville dans #meta : « Sincere@april.biz · Gwenborough »

// ===== Niveau 2 =====
// 1. loadUser(id) reçoit le numéro de l'auteur : /users/${id}
// 2. Au clic sur #load, chargez l'auteur dont le numéro est saisi dans #userId
// 3. Écrivez le nom de l'entreprise dans #company : user.company.name
// 4. Entourez les await d'un try…catch : « Connexion impossible » dans #name

// ===== Niveau 3 =====
// 1. Une fonction async loadTodos(id) demande /todos?userId=… : affichez leur nombre dans la console
// 2. Un <li> par tâche dans #todos : « ✓ » ou « ○ » selon completed, puis le titre
// 3. Comptez les tâches terminées : « 11 tâches sur 20 terminées » dans #todo-count
