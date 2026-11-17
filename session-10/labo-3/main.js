// Labo 3 : la galerie
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Données fournies =====
const api = "https://jsonplaceholder.typicode.com"

// ===== Niveau 1 =====
// 1. Une fonction async loadPhotos() demande /photos?_limit=6 : affichez leur nombre dans la console
// 2. Une fonction photoCard(photo) renvoie le HTML d'une carte : image picsum seed/${id}/600/400 et titre
// 3. Rendez les six cartes dans #photos
// 4. Écrivez « 6 photos » dans #count

// ===== Niveau 2 =====
// 1. loadPhotos(albumId) demande /albums/${albumId}/photos?_limit=6
// 2. Au clic sur un bouton .album, chargez son album (data-album)
// 3. « Chargement… » dans #count avant la requête, puis « 6 photos · album 2 »
// 4. Le bouton cliqué reçoit la classe active, et lui seul

// ===== Niveau 3 =====
// 1. Après chaque rendu, branchez les cartes : au clic, affichez leur data-id dans la console
// 2. Une fonction async showPhoto(id) demande /photos/${id} : grande image et titre dans #detail
// 3. Les états : « Chargement… », « Photo introuvable (erreur 404) », « Connexion impossible »
