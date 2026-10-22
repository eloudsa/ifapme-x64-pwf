const wishes = [
  "Tablette graphique",
  "Nuancier Pantone",
  "Licence Figma",
  "Écran calibré",
]
wishes[1] = "Carnet de croquis"

const count = document.querySelector("#count")
const first = document.querySelector("#first")
const last = document.querySelector("#last")
const list = document.querySelector("#list")

count.textContent = `${wishes.length} envies dans la liste`
first.textContent = `Première : ${wishes[0]}`
last.textContent = `Dernière : ${wishes[wishes.length - 1]}`
list.innerHTML = "<li>" + wishes.join("</li><li>") + "</li>"

console.log(wishes[10])

const wishInput = document.querySelector("#wish")
const replaceButton = document.querySelector("#replace")
const message = document.querySelector("#message")

replaceButton.addEventListener("click", () => {
  if (wishInput.value === "") {
    message.textContent = "Écrivez d'abord une envie"
  } else {
    wishes[0] = wishInput.value
    list.innerHTML = "<li>" + wishes.join("</li><li>") + "</li>"
    first.textContent = `Première : ${wishes[0]}`
    message.textContent = ""
    wishInput.value = ""
  }
})

// wishes = ["Rien"]  → TypeError
