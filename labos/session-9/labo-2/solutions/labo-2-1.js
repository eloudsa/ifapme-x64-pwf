const summary = document.querySelector("#summary")
const likeButton = document.querySelector("#like")

const card = {
  title: "App resto",
  likes: 12,
  describe() {
    return `${this.title} : ${this.likes} likes`
  },
}

summary.textContent = card.describe()

likeButton.addEventListener("click", () => {
  card.likes++
  summary.textContent = card.describe()
  console.log(card.describe())
})
