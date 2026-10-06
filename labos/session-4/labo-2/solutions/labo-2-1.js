const passwordField = document.querySelector("#password")
const checkButton = document.querySelector("#check")
const strength = document.querySelector("#strength")

checkButton.addEventListener("click", () => {
  const length = passwordField.value.length
  console.log(length)

  if (length < 8) {
    strength.textContent = `Trop court : ${length} sur 8`
    strength.classList.remove("ok")
    strength.classList.add("error")
  } else {
    strength.textContent = "Longueur correcte"
    strength.classList.remove("error")
    strength.classList.add("ok")
  }
})
