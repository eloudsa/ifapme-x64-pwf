const pickButton = document.querySelector("#pick")
const swatch = document.querySelector("#swatch")
const colorCode = document.querySelector("#color-code")
const palette = [
  "#4A72B8", "#F2994A", "#2E9E5B", "#C0392B", "#7C3AED"
]

pickButton.addEventListener("click", () => {
  const index = Math.floor(Math.random() * palette.length)
  const color = palette[index]
  swatch.style.background = color
  colorCode.textContent = `${color} (index ${index})`
})
