const nameInput = document.querySelector("#name")
const preview = document.querySelector("#preview")
const count = document.querySelector("#count")
const max = 20

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim()
  count.textContent = `${name.length} / ${max}`

  if (name.length > max) {
    count.classList.add("error")
  } else {
    count.classList.remove("error")
  }

  preview.textContent = name === "" ? "Votre nom" : name
})
