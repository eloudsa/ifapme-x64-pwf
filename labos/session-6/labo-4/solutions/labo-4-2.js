const products = ["Poster A3", "Stickers", "Tote bag", "Carnet"]
const prices = [24.9, 4.95, 12.5, 9]
const stocks = [12, 0, 5, 30]
let stockValue = 0
let outOfStock = 0
let priciest = 0

for (let i = 0; i < products.length; i++) {
  stockValue += prices[i] * stocks[i]
  if (stocks[i] === 0) {
    outOfStock++
  }
  if (prices[i] > prices[priciest]) {
    priciest = i
  }
}

document.querySelector("#stock-value").textContent =
  `Valeur du stock : ${stockValue} €`
document.querySelector("#out-of-stock").textContent =
  `Ruptures : ${outOfStock}`
document.querySelector("#priciest").textContent =
  `Le plus cher : ${products[priciest]}`
