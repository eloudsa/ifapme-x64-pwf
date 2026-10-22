const products = ["Poster A3", "Stickers", "Tote bag", "Carnet"]
const prices = [24.9, 4.95, 12.5, 9]
const stocks = [12, 0, 5, 30]
const chart = document.querySelector("#chart")
let html = ""

for (let i = 0; i < products.length; i++) {
  let bar = ""
  for (let n = 0; n < stocks[i]; n += 2) {
    bar += "█"
  }
  const label = stocks[i] === 0
    ? `<span class="alert">RUPTURE</span>`
    : stocks[i]
  html += `<div class="bar-row">
    <span class="name">${products[i]}</span>
    <span class="bar">${bar}</span> ${label}
  </div>`
}

chart.innerHTML = html
