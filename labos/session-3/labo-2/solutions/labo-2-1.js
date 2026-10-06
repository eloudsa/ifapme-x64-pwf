const designInput = document.querySelector("#design-days")
const devInput = document.querySelector("#dev-days")
const computeButton = document.querySelector("#compute")
const daysText = document.querySelector("#days-total")

computeButton.addEventListener("click", () => {
  console.log(designInput.value + devInput.value)
  console.log(typeof designInput.value)

  const totalDays = Number(designInput.value) + Number(devInput.value)
  daysText.textContent = totalDays
})
