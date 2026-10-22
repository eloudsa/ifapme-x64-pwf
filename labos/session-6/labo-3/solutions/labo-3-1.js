const grid = document.querySelector("#grid")
let html = ""

for (let row = 1; row <= 3; row++) {
  html += `<div class="row">`
  for (let col = 1; col <= 4; col++) {
    html += `<span class="cell">L${row} C${col}</span>`
  }
  html += "</div>"
}

grid.innerHTML = html
