// Labo 4 : le portfolio dans la page
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Données fournies =====
const projects = [
  {
    title: "App resto",
    category: "UX",
    year: 2026,
    tools: ["Figma", "FigJam", "Notion"],
    url: "https://exemple.be/app-resto",
    isFavorite: false,
  },
  {
    title: "Logo boulangerie",
    category: "Branding",
    year: 2025,
    tools: ["Illustrator", "Photoshop"],
    url: "https://exemple.be/logo",
    isFavorite: false,
  },
  {
    title: "Site vitrine",
    category: "UI",
    year: 2026,
    tools: ["Figma", "Webflow", "CSS", "Notion"],
    url: "https://exemple.be/site",
    isFavorite: false,
  },
]

// ===== Niveau 1 =====
// 1. Écrivez une fonction projectCard(project) qui renvoie le HTML d'une carte
// 2. Carte : titre, « catégorie · année », outils séparés par des virgules, lien
// 3. Avec forEach, rendez toutes les cartes dans #projects
// 4. Affichez « 3 projets récents » dans #intro

// ===== Niveau 2 =====
// 1. Rangez le rendu dans une fonction render(list)
// 2. Pour chaque bouton .filter, au clic, lisez button.dataset.category
// 3. Rendez uniquement les projets de cette catégorie (« all » : tous)
// 4. Le bouton cliqué reçoit la classe active, et lui seul

// ===== Niveau 3 =====
// 1. Chaque carte a un bouton .fav (☆ ou ★) avec data-index
// 2. Au clic, remplacez le projet par une copie dont isFavorite est inversé (spread)
// 3. Une carte favorite reçoit la classe featured ; #intro compte les favoris
// 4. Après chaque rendu, rebranchez les boutons .fav
