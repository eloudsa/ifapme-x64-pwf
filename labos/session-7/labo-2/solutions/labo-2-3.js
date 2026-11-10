const titleInput = document.querySelector("#title")
const slugText = document.querySelector("#slug")

titleInput.addEventListener("input", () => {
  const clean = titleInput.value
    .toLowerCase()
    .replaceAll("'", " ")
    .replaceAll("!", "")

  const words = []
  for (const word of clean.split(" ")) {
    if (word !== "") {
      words.push(word)
    }
  }
  slugText.textContent = words.join("-")
})
