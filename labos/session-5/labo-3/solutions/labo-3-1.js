const palette = ["#4A72B8", "#F2994A", "#2E9E5B", "#C0392B"]
const open = `<span class="swatch" style="background: `
const close = `"></span>`

const swatches = document.querySelector("#palette")
const main = document.querySelector("#main")
const colorInput = document.querySelector("#color")
const addButton = document.querySelector("#add")

swatches.innerHTML = open + palette.join(close + open) + close
main.textContent = palette.slice(0, 3).join(" · ")

addButton.addEventListener("click", () => {
  palette.push(colorInput.value)
  swatches.innerHTML = open + palette.join(close + open) + close
  main.textContent = palette.slice(0, 3).join(" · ")
  colorInput.value = ""
})
