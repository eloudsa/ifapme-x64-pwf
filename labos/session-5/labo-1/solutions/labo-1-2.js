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
