const palette = ["#4A72B8", "#F2994A", "#2E9E5B", "#C0392B"]
const maxColors = 5
const open = `<span class="swatch" style="background: `
const close = `"></span>`

const swatches = document.querySelector("#palette")
const main = document.querySelector("#main")
const colorInput = document.querySelector("#color")
const message = document.querySelector("#message")
const addButton = document.querySelector("#add")
const favoriteButton = document.querySelector("#favorite")
const removeButton = document.querySelector("#remove")

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

favoriteButton.addEventListener("click", () => {
  const color = colorInput.value
  const index = palette.indexOf(color)
  if (index === -1) {
    message.textContent = `${color} n'est pas dans la palette`
  } else if (index === 0) {
    message.textContent = `${color} est déjà en tête`
  } else {
    palette.splice(index, 1)
    palette.unshift(color)
    swatches.innerHTML = open + palette.join(close + open) + close
    main.textContent = palette.slice(0, 3).join(" · ")
    message.textContent = `${color} passe en tête`
  }
})

removeButton.addEventListener("click", () => {
  const index = palette.indexOf(colorInput.value)
  if (index === -1) {
    message.textContent = "Couleur introuvable"
  } else {
    const removed = palette.splice(index, 1)
    swatches.innerHTML = open + palette.join(close + open) + close
    main.textContent = palette.slice(0, 3).join(" · ")
    message.textContent = `${removed[0]} retirée`
  }
})
