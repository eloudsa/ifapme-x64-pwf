const project = { title: "App resto", client: "Chez Léon", year: 2025, draft: true }

project.year = 2026
project.tools = ["Figma", "FigJam", "Notion"]
delete project.draft

const items = []
project.tools.forEach((tool) => {
  items.push(`<li>${tool}</li>`)
})
document.querySelector("#title").textContent = project.title
document.querySelector("#meta").textContent = `${project.client} (${project.year})`
document.querySelector("#tools").innerHTML = items.join("")
console.log(project)
