const dailyRate = 450
const vatRate = 0.21

const designInput = document.querySelector("#design-days")
const devInput = document.querySelector("#dev-days")
const computeButton = document.querySelector("#compute")
const daysText = document.querySelector("#days-total")
const priceText = document.querySelector("#price")

computeButton.addEventListener("click", () => {
  const totalDays = Number(designInput.value) + Number(devInput.value)
  const price = totalDays * dailyRate
  const priceWithVat = price + price * vatRate

  daysText.textContent = totalDays
  priceText.textContent =
    `${price} € HTVA, soit ${priceWithVat} € TVAC`
})
