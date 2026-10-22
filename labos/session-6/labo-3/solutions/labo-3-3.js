const sizeInput = document.querySelector("#size")
const button = document.querySelector("#draw")
const board = document.querySelector("#board")

button.addEventListener("click", () => {
  const size = Number(sizeInput.value)
  let html = ""
  for (let row = 0; row < size; row++) {
    html += `<div class="row">`
    for (let col = 0; col < size; col++) {
      const shade = (row + col) % 2 === 0 ? "dark" : ""
      html += `<span class="square ${shade}"></span>`
    }
    html += "</div>"
  }
  board.innerHTML = html
  console.log(`Damier ${size} × ${size} : ${size * size} cases`)
})
