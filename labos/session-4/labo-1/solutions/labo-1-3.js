const qtyField = document.querySelector("#qty")
const computeButton = document.querySelector("#compute")
const offerText = document.querySelector("#offer")
const priceText = document.querySelector("#price")
const price = 12

computeButton.addEventListener("click", () => {
  const qty = Number(qtyField.value)
  const free = (qty - qty % 3) / 3
  const total = (qty - free) * price
  offerText.textContent = `${qty} affiches, dont ${free} offerte(s)`
  priceText.textContent = `À payer : ${total} €`
  console.log(qty, qty % 3, free, total)
})
