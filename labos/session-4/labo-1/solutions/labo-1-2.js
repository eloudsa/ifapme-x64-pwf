const addButton = document.querySelector("#add")
const removeButton = document.querySelector("#remove")
const countText = document.querySelector("#count")
const totalText = document.querySelector("#total")
const price = 12
let count = 0
let total = 0

addButton.addEventListener("click", () => {
  count++
  total += price
  countText.textContent = `Articles : ${count}`
  totalText.textContent = `Total : ${total} €`
})

removeButton.addEventListener("click", () => {
  count--
  total -= price
  countText.textContent = `Articles : ${count}`
  totalText.textContent = `Total : ${total} €`
})
