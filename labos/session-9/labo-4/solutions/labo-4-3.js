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

function projectCard(project, index) {
  const { title, category, year, url, isFavorite } = project
  const star = isFavorite ? "★" : "☆"
  const featured = isFavorite ? "featured" : ""
  return `
    <article class="card ${featured}">
      <button class="fav" data-index="${index}">${star}</button>
      <h2 class="title">${title}</h2>
      <p class="category">${category} · ${year}</p>
      <a class="link" href="${url}">Voir le projet</a>
    </article>`
}

function toggleFavorite(index) {
  const project = projects[index]
  projects[index] = { ...project, isFavorite: !project.isFavorite }
  render()
}

function render() {
  const cards = []
  let favorites = 0
  projects.forEach((project, index) => {
    cards.push(projectCard(project, index))
    if (project.isFavorite) {
      favorites++
    }
  })
  grid.innerHTML = cards.join("")
  intro.textContent = `${favorites} favori(s) sur ${projects.length}`

  const favButtons = document.querySelectorAll(".fav")
  for (const button of favButtons) {
    button.addEventListener("click", () => {
      toggleFavorite(Number(button.dataset.index))
    })
  }
}

render()
