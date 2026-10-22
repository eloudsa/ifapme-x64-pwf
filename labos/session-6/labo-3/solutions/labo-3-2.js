const sizes = ["S", "M", "L"]
const colors = ["bleu", "orange"]
const list = document.querySelector("#variants")
const countText = document.querySelector("#variants-count")
let html = ""
let variants = 0

for (const size of sizes) {
  for (const color of colors) {
    if (size === "L" && color === "orange") {
      continue
    }
    html += `<li>T-shirt ${size} ${color}</li>`
    variants++
  }
}

list.innerHTML = html
countText.textContent = `${variants} variantes en vente`
