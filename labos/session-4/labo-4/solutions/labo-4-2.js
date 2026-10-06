const sizeField = document.querySelector("#size")
const boldBox = document.querySelector("#bold")
const ratioField = document.querySelector("#ratio")
const checkButton = document.querySelector("#check")
const sample = document.querySelector("#sample")
const badge = document.querySelector("#badge")
const report = document.querySelector("#report")

checkButton.addEventListener("click", () => {
  const size = Number(sizeField.value)
  const ratio = Number(ratioField.value)
  const isLarge = size >= 24 || (size >= 18.66 && boldBox.checked)
  const requiredAA = isLarge ? 3 : 4.5
  const requiredAAA = isLarge ? 4.5 : 7

  sample.style.fontSize = `${size}px`
  sample.style.fontWeight = boldBox.checked ? "bold" : "normal"
  badge.classList.remove("ok", "error")

  if (ratio >= requiredAAA) {
    badge.textContent = "AAA"
    badge.classList.add("ok")
  } else if (ratio >= requiredAA) {
    badge.textContent = "AA"
    badge.classList.add("ok")
  } else {
    badge.textContent = "Échec"
    badge.classList.add("error")
  }

  const kind = isLarge ? "Grand texte" : "Texte normal"
  report.textContent = `${kind} · AA ${requiredAA}, AAA ${requiredAAA}`
  console.log(`${size}px : ${badge.textContent}`)
})
