const colors = ["#4A72B8", "#F2994A", "#2E9E5B", "#C0392B", "#7C3AED"]
const palette = document.querySelector("#palette")
const count = document.querySelector("#count")
let html = ""

for (let i = 0; i < colors.length; i++) {
  const chip = `<span class="chip" style="background: ${colors[i]}"></span>`
  html += `<li>${chip} ${i + 1}. ${colors[i]}</li>`
}

palette.innerHTML = html
count.textContent = `${colors.length} couleurs`
