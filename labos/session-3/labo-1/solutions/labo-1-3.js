let primaryColor = "#4A72B8"
let secondaryColor = "#F2994A"
console.log("Avant :", primaryColor, secondaryColor)

const temp = primaryColor
primaryColor = secondaryColor
secondaryColor = temp

document.querySelector("#primary").textContent = primaryColor
document.querySelector("#secondary").textContent = secondaryColor
console.log("Après :", primaryColor, secondaryColor)

// Bonus
const projects = 13
document.querySelector("#summary").textContent =
  `${typeof projects} / ${typeof primaryColor}`
