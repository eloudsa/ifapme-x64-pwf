const nameInput = document.querySelector("#fullname")
const avatar = document.querySelector("#avatar")
const displayName = document.querySelector("#display-name")

nameInput.addEventListener("input", () => {
  const words = nameInput.value.toLowerCase().split(" ")
  const names = []
  let initials = ""

  for (const word of words) {
    if (word === "") {
      continue
    }
    names.push(word[0].toUpperCase() + word.slice(1))
    initials += word[0].toUpperCase()
  }

  displayName.textContent = names.join(" ")
  avatar.textContent = initials.slice(0, 2)
})

const shuffleButton = document.querySelector("#shuffle")
const palette = [
  "#4A72B8", "#F2994A", "#2E9E5B", "#C0392B", "#7C3AED"
]
let lastIndex = -1

shuffleButton.addEventListener("click", () => {
  let index = Math.floor(Math.random() * palette.length)
  while (index === lastIndex) {
    index = Math.floor(Math.random() * palette.length)
  }
  lastIndex = index
  avatar.style.background = palette[index]
  console.log(`Couleur : ${palette[index]}`)
})
