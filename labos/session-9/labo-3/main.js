// Labo 3 : les tableaux d'objets
// Écrivez votre code sous chaque consigne, niveau après niveau.

// ===== Données fournies =====
const team = [
  { name: "Sara", role: "UX designer", contact: { city: "Liège" }, skills: ["Figma", "Recherche"] },
  { name: "Tom", role: "UI designer", contact: { city: "Namur" }, skills: ["Figma", "CSS"] },
  { name: "Inès", role: "Stagiaire", skills: ["Illustrator"] },
]

const archive = [
  { title: "App resto", category: "UX", hours: 40 },
  { title: "Logo boulangerie", category: "Branding", hours: 12 },
  { title: "Dashboard santé", category: "UX", hours: 65 },
  { title: "Affiche festival", category: "Branding", hours: 8 },
  { title: "Site vitrine", category: "UI", hours: 30 },
]

// ===== Niveau 1 =====
// 1. Créez un tableau projects de trois objets : title, category, year
// 2. Avec forEach, construisez un <li> par projet : « 1. App resto · UX (2026) »
// 3. Destructurez l'objet dans les paramètres du callback
// 4. Affichez la liste dans #gallery

// ===== Niveau 2 =====
// 1. Parcourez le tableau team (fourni) et construisez une carte par personne
// 2. Carte : nom, « rôle · ville », compétences séparées par des virgules
// 3. Inès n'a pas de contact : affichez « ville inconnue » sans erreur
// 4. Affichez les cartes dans #team

// ===== Niveau 3 =====
// 1. Parcourez archive (fourni) : trouvez le projet le plus long, affichez-le dans #longest
// 2. Comptez les projets par catégorie dans un objet counts
// 3. Parcourez counts et affichez « UX : 2 projet(s) » dans #stats
