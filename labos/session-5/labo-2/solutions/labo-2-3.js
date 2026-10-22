const tags = ["ux", "mobile"]

const tagInput = document.querySelector("#tag")
const tagList = document.querySelector("#tags")
const message = document.querySelector("#message")
const addButton = document.querySelector("#add")
const removeLastButton = document.querySelector("#remove-last")
const addFirstButton = document.querySelector("#add-first")
const removeFirstButton = document.querySelector("#remove-first")
const count = document.querySelector("#count")

tagList.innerHTML = "<li>" + tags.join("</li><li>") + "</li>"
count.textContent = `${tags.length} tags`

addButton.addEventListener("click", () => {
  const tag = tagInput.value
  if (tag === "") {
    message.textContent = "Écrivez d'abord un tag"
  } else if (tags.includes(tag)) {
    const position = tags.indexOf(tag) + 1
    message.textContent = `${tag} : déjà en position ${position}`
  } else {
    tags.push(tag)
    tagList.innerHTML = "<li>" + tags.join("</li><li>") + "</li>"
    count.textContent = `${tags.length} tags`
    message.textContent = `${tag} ajouté`
  }
  tagInput.value = ""
})

removeLastButton.addEventListener("click", () => {
  if (tags.length === 0) {
    message.textContent = "Plus rien à retirer"
  } else {
    const removed = tags.pop()
    tagList.innerHTML = "<li>" + tags.join("</li><li>") + "</li>"
    count.textContent = `${tags.length} tags`
    message.textContent = `Tag retiré : ${removed}`
  }
})

addFirstButton.addEventListener("click", () => {
  tags.unshift(tagInput.value)
  tagList.innerHTML = "<li>" + tags.join("</li><li>") + "</li>"
  count.textContent = `${tags.length} tags`
  tagInput.value = ""
})

removeFirstButton.addEventListener("click", () => {
  const removed = tags.shift()
  tagList.innerHTML = "<li>" + tags.join("</li><li>") + "</li>"
  count.textContent = `${tags.length} tags`
  message.textContent = `Tag retiré : ${removed}`
})
