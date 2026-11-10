const emailInput = document.querySelector("#email")
const emailPreview = document.querySelector("#email-preview")
const message = document.querySelector("#email-message")

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim().toLowerCase()
  emailPreview.textContent = email

  const valid = email.includes("@") && email.includes(".")
    && !email.startsWith("@")

  if (valid) {
    message.textContent = "Adresse valide"
    message.classList.add("ok")
    message.classList.remove("error")
  } else {
    message.textContent = "Adresse incomplète"
    message.classList.add("error")
    message.classList.remove("ok")
  }
})
