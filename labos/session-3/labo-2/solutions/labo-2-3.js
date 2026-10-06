const dailyRate = 450
const vatRate = 0.21

const clientInput = document.querySelector("#client")
const designInput = document.querySelector("#design-days")
const devInput = document.querySelector("#dev-days")
const computeButton = document.querySelector("#compute")
const daysText = document.querySelector("#days-total")
const priceText = document.querySelector("#price")
const debugText = document.querySelector("#debug")

computeButton.addEventListener("click", () => {
  const client = clientInput.value
  const designDays = Number(designInput.value)
  const devDays = Number(devInput.value)
  const totalDays = designDays + devDays
  const price = totalDays * dailyRate * (1 + vatRate)

  daysText.textContent = totalDays
  priceText.textContent =
    `Devis pour ${client} : ${totalDays} jours, ${price} € TVAC`
  debugText.textContent =
    `design : ${typeof designInput.value} → ${typeof designDays}`
  console.log(client, totalDays, price)
})

// Champ vide : Number("") vaut 0, sans aucune erreur
