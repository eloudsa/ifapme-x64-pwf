const project = {
  title: "App resto",
  client: "Chez Léon",
  year: 2026,
}
const fieldInput = document.querySelector("#field")
const detail = document.querySelector("#detail")

document.querySelector("#title").textContent = project.title

fieldInput.addEventListener("input", () => {
  const field = fieldInput.value.trim()
  const value = project[field]
  if (value === undefined) {
    detail.textContent = `« ${field} » : propriété inconnue`
  } else {
    detail.textContent = `${field} : ${value}`
  }
})
