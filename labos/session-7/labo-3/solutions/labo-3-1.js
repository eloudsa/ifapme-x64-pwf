const rollButton = document.querySelector("#roll")
const dice = document.querySelector("#dice")
const historyText = document.querySelector("#history")
const rolls = []

rollButton.addEventListener("click", () => {
  const value = Math.floor(Math.random() * 6) + 1
  dice.textContent = value
  rolls.push(value)
  historyText.textContent = `Historique : ${rolls.join(" · ")}`
})
