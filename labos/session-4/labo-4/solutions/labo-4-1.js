const sizeField = document.querySelector("#size")
const boldBox = document.querySelector("#bold")
const ratioField = document.querySelector("#ratio")
const checkButton = document.querySelector("#check")
const badge = document.querySelector("#badge")

checkButton.addEventListener("click", () => {
  const size = Number(sizeField.value)
  const ratio = Number(ratioField.value)
  const isLarge = size >= 24 || (size >= 18.66 && boldBox.checked)
  const required = isLarge ? 3 : 4.5
  console.log(size, ratio, isLarge, required)

  if (ratio >= required) {
    badge.textContent = "AA : conforme"
    badge.classList.remove("error")
    badge.classList.add("ok")
  } else {
    badge.textContent = "AA : échec"
    badge.classList.remove("ok")
    badge.classList.add("error")
  }
})
