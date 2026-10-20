const ageField = document.querySelector("#age")
const terms = document.querySelector("#terms")
const signupButton = document.querySelector("#signup")
const message = document.querySelector("#message")

signupButton.addEventListener("click", () => {
  const age = Number(ageField.value)
  let error = ""

  if (!ageField.value) {
    error = "Indiquez votre âge"
  } else if (age < 16) {
    error = "Il faut avoir 16 ans ou plus"
  } else if (!terms.checked) {
    error = "Acceptez les conditions"
  }

  if (error) {
    message.textContent = error
    message.classList.remove("ok")
    message.classList.add("error")
  } else {
    message.textContent = "Compte créé, bienvenue"
    message.classList.remove("error")
    message.classList.add("ok")
  }
  console.log(error || "OK")
})
