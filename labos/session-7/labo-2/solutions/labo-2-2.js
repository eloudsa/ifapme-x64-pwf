const authorInput = document.querySelector("#author")
const avatar = document.querySelector("#avatar")

authorInput.addEventListener("input", () => {
  const words = authorInput.value.split(" ")
  let initials = ""

  for (const word of words) {
    if (word === "") {
      continue
    }
    initials += word[0]
  }

  avatar.textContent = initials === ""
    ? "?"
    : initials.toUpperCase().slice(0, 2)
})
