const archive = [
  { title: "App resto", category: "UX", hours: 40 },
  { title: "Logo boulangerie", category: "Branding", hours: 12 },
  { title: "Dashboard santé", category: "UX", hours: 65 },
  { title: "Affiche festival", category: "Branding", hours: 8 },
  { title: "Site vitrine", category: "UI", hours: 30 },
]

const longestText = document.querySelector("#longest")
const stats = document.querySelector("#stats")

let longest = archive[0]
const counts = {}
for (const project of archive) {
  if (project.hours > longest.hours) {
    longest = project
  }
  const category = project.category
  counts[category] = (counts[category] || 0) + 1
}

const { title, hours } = longest
longestText.textContent = `Le plus long : ${title} (${hours} h)`

const lines = []
for (const category in counts) {
  lines.push(`<li>${category} : ${counts[category]} projet(s)</li>`)
}
stats.innerHTML = lines.join("")
console.log(counts)
