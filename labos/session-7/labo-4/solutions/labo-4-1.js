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
