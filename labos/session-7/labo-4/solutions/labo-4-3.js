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

const sizeInput = document.querySelector("#size")
const sizeMessage = document.querySelector("#size-message")

sizeInput.addEventListener("input", () => {
  const size = parseInt(sizeInput.value)

  if (Number.isNaN(size)) {
    sizeMessage.textContent = "Entrez un nombre, par exemple 96"
  } else {
    const px = Math.min(Math.max(size, 48), 160)
    avatar.style.width = `${px}px`
    avatar.style.height = `${px}px`
    avatar.style.fontSize = `${Math.round(px / 3)}px`
    sizeMessage.textContent = `Taille : ${px} px`
  }
})
