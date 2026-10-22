const palette = ["#4A72B8", "#F2994A", "#2E9E5B", "#C0392B"]
const maxColors = 5
const open = `<span class="swatch" style="background: `
const close = `"></span>`

const swatches = document.querySelector("#palette")
const main = document.querySelector("#main")
const colorInput = document.querySelector("#color")
const message = document.querySelector("#message")
const addButton = document.querySelector("#add")

swatches.innerHTML = open + palette.join(close + open) + close
main.textContent = palette.slice(0, 3).join(" · ")

addButton.addEventListener("click", () => {
  const color = colorInput.value
  if (color === "") {
    message.textContent = "Saisissez une couleur"
  } else if (palette.includes(color)) {
    message.textContent = `${color} est déjà dans la palette`
  } else {
    if (palette.length >= maxColors) {
      const oldest = palette.shift()
      message.textContent = `Palette pleine : ${oldest} retirée`
    } else {
      message.textContent = `${color} ajoutée`
    }
    palette.push(color)
    swatches.innerHTML = open + palette.join(close + open) + close
    main.textContent = palette.slice(0, 3).join(" · ")
  }
  colorInput.value = ""
})
