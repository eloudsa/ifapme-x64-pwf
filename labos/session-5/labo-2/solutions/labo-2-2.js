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
  tags.push(tagInput.value)
  tagList.innerHTML = "<li>" + tags.join("</li><li>") + "</li>"
  count.textContent = `${tags.length} tags`
  tagInput.value = ""
})

removeLastButton.addEventListener("click", () => {
  const removed = tags.pop()
  tagList.innerHTML = "<li>" + tags.join("</li><li>") + "</li>"
  count.textContent = `${tags.length} tags`
  message.textContent = `Tag retiré : ${removed}`
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
