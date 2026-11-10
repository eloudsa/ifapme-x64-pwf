const nameInput = document.querySelector("#name")
const preview = document.querySelector("#preview")
const count = document.querySelector("#count")

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim()
  preview.textContent = name
  count.textContent = `${name.length} caractères`
})
