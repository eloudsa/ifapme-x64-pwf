const titleInput = document.querySelector("#title")
const slugText = document.querySelector("#slug")

titleInput.addEventListener("input", () => {
  const slug = titleInput.value
    .trim()
    .toLowerCase()
    .replaceAll(" ", "-")
  slugText.textContent = slug
})
