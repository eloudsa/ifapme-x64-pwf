const passwordField = document.querySelector("#password")
const checkButton = document.querySelector("#check")
const strength = document.querySelector("#strength")
const bar = document.querySelector("#bar")

checkButton.addEventListener("click", () => {
  const length = passwordField.value.length
  strength.classList.remove("error", "warning", "ok")

  if (length === 0) {
    strength.textContent = "Saisissez un mot de passe"
    bar.style.width = "0%"
  } else if (length < 8) {
    strength.textContent = "Faible"
    strength.classList.add("error")
    bar.style.width = "33%"
    bar.style.background = "#c0392b"
  } else if (length < 12) {
    strength.textContent = "Moyen"
    strength.classList.add("warning")
    bar.style.width = "66%"
    bar.style.background = "#c77700"
  } else {
    strength.textContent = "Fort"
    strength.classList.add("ok")
    bar.style.width = "100%"
    bar.style.background = "#2e9e5b"
  }
  console.log(strength.textContent)
})
