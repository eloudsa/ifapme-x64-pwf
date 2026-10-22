const wishes = [
  "Tablette graphique",
  "Nuancier Pantone",
  "Licence Figma",
  "Écran calibré",
]

const count = document.querySelector("#count")
const first = document.querySelector("#first")
const last = document.querySelector("#last")

count.textContent = `${wishes.length} envies dans la liste`
first.textContent = `Première : ${wishes[0]}`
last.textContent = `Dernière : ${wishes[wishes.length - 1]}`
console.log(wishes)
