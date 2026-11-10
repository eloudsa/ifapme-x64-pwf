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

const grid = document.querySelector("#projects")
const intro = document.querySelector("#intro")

function projectCard(project) {
  const { title, category, year, tools, url } = project
  return `
    <article class="card" data-category="${category}">
      <h2 class="title">${title}</h2>
      <p class="category">${category} · ${year}</p>
      <p class="stack">${tools.join(", ")}</p>
      <a class="link" href="${url}">Voir le projet</a>
    </article>`
}

const cards = []
projects.forEach((project) => {
  cards.push(projectCard(project))
})
grid.innerHTML = cards.join("")
intro.textContent = `${projects.length} projets récents`
console.log(`${cards.length} cartes affichées`)
