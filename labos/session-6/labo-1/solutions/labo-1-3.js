const hueInput = document.querySelector("#hue")
const button = document.querySelector("#generate")
const swatches = document.querySelector("#swatches")

button.addEventListener("click", () => {
  const hue = Number(hueInput.value)
  if (hue < 0 || hue > 360) {
    swatches.innerHTML = `<p class="error">Teinte entre 0 et 360</p>`
  } else {
    let html = ""
    for (let light = 90; light >= 10; light -= 10) {
      const style = `background: hsl(${hue}, 60%, ${light}%)`
      html += `<div class="swatch" style="${style}">${light} %</div>`
    }
    swatches.innerHTML = html
    console.log(`Teinte ${hue} : nuancier généré`)
  }
})
