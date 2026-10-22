const swatches = document.querySelector("#swatches")
let html = ""

for (let light = 10; light <= 90; light += 10) {
  const style = `background: hsl(220, 60%, ${light}%)`
  html += `<div class="swatch" style="${style}">${light} %</div>`
  console.log(`Nuance ${light} %`)
}

swatches.innerHTML = html
