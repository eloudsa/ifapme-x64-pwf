const sizeField = document.querySelector("#size")
const boldBox = document.querySelector("#bold")
const ratioField = document.querySelector("#ratio")
const componentSelect = document.querySelector("#component")
const checkButton = document.querySelector("#check")
const badge = document.querySelector("#badge")
const report = document.querySelector("#report")

checkButton.addEventListener("click", () => {
  const size = Number(sizeField.value)
  const ratio = Number(ratioField.value)
  const isLarge = size >= 24 || (size >= 18.66 && boldBox.checked)
  const required = isLarge ? 3 : 4.5
  let text = ""
  let state = "ok"
  let note = ""

  if (!sizeField.value || !ratioField.value) {
    text = "Taille et ratio obligatoires"
    state = "error"
  } else {
    switch (componentSelect.value) {
      case "logo":
        text = "Logo : exempté de contrôle"
        break
      case "placeholder":
        note = "Un placeholder ne remplace pas un label"
        // pas de break : voulu
      default:
        if (ratio >= required) {
          text = "AA : conforme"
        } else {
          text = `AA : échec, il manque ${required - ratio}`
          state = "error"
        }
    }
  }

  badge.textContent = text
  report.textContent = note
  badge.classList.remove("ok", "error")
  badge.classList.add(state)
  console.log(text)
})
