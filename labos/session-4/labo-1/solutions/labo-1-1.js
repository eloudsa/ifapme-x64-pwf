const likeButton = document.querySelector("#like")
const unlikeButton = document.querySelector("#unlike")
const likesText = document.querySelector("#likes")
let likes = 0

likeButton.addEventListener("click", () => {
  likes++
  likesText.textContent = `Likes : ${likes}`
})

unlikeButton.addEventListener("click", () => {
  likes--
  likesText.textContent = `Likes : ${likes}`
})
