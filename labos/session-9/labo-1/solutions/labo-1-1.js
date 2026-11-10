const project = {
  title: "App resto",
  client: "Chez Léon",
  year: 2026,
  isFavorite: true,
}

const title = document.querySelector("#title")
const meta = document.querySelector("#meta")
const fav = document.querySelector("#fav")

title.textContent = project.title
meta.textContent = `${project.client} (${project.year})`
fav.textContent = project.isFavorite ? "★ Favori" : "☆ Pas encore favori"
console.log(project.title)
