const tags = ["ux", "mobile"]

const tagInput = document.querySelector("#tag")
const tagList = document.querySelector("#tags")
const message = document.querySelector("#message")
const addButton = document.querySelector("#add")
const removeLastButton = document.querySelector("#remove-last")

tagList.innerHTML = "<li>" + tags.join("</li><li>") + "</li>"

addButton.addEventListener("click", () => {
  tags.push(tagInput.value)
  tagList.innerHTML = "<li>" + tags.join("</li><li>") + "</li>"
  tagInput.value = ""
  console.log(tags)
})

removeLastButton.addEventListener("click", () => {
  const removed = tags.pop()
  tagList.innerHTML = "<li>" + tags.join("</li><li>") + "</li>"
  message.textContent = `Tag retiré : ${removed}`
})
