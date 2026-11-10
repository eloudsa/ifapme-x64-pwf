const gallery = document.querySelector("#gallery")

const projects = [
  { title: "App resto", category: "UX", year: 2026 },
  { title: "Logo boulangerie", category: "Branding", year: 2025 },
  { title: "Site vitrine", category: "UI", year: 2026 },
]

const items = []
projects.forEach(({ title, category, year }, index) => {
  items.push(`<li>${index + 1}. ${title} · ${category} (${year})</li>`)
})
gallery.innerHTML = items.join("")
console.log(`${projects.length} projets affichés`)
