const randomButton = document.querySelector("#random")
const swatch = document.querySelector("#swatch")
const colorCode = document.querySelector("#color-code")

randomButton.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const light = Math.round((r + g + b) / 3)

  swatch.style.background = `rgb(${r}, ${g}, ${b})`
  swatch.style.color = light < 128 ? "white" : "#1a1a1a"
  colorCode.textContent = `rgb(${r}, ${g}, ${b}) · luminosité ${light}`
})
