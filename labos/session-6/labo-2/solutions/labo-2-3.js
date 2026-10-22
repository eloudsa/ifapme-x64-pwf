const prices = [12, 0, 25, 0, 18, 40, 9]
const budget = 60
const purchases = document.querySelector("#purchases")
const budgetText = document.querySelector("#budget-text")
let spent = 0
let html = ""

for (const price of prices) {
  if (price === 0) {
    continue
  }
  if (spent + price > budget) {
    html += `<li class="stop">Stop : ${price} € hors budget</li>`
    break
  }
  spent += price
  html += `<li>Ajouté : ${price} € (total ${spent} €)</li>`
}

purchases.innerHTML = html
budgetText.textContent = `Dépensé : ${spent} € sur ${budget} €`
