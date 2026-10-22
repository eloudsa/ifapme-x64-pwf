const products = ["Poster A3", "Stickers", "Tote bag", "Carnet"]
const prices = [24.9, 4.95, 12.5, 9]
const stocks = [12, 0, 5, 30]
const catalog = document.querySelector("#catalog")
let html = ""

for (let i = 0; i < products.length; i++) {
  const status = stocks[i] === 0 ? "out" : ""
  html += `<li class="${status}">${i + 1}. ${products[i]} : ${prices[i]} €</li>`
}

catalog.innerHTML = html
