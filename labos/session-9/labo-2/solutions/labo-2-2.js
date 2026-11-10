const totalText = document.querySelector("#cart-total")
const posterButton = document.querySelector("#add-poster")
const toteButton = document.querySelector("#add-tote")

const cart = {
  items: [],
  add(name, price) {
    this.items.push({ name, price })
  },
  total() {
    let sum = 0
    for (const item of this.items) {
      sum += item.price
    }
    return sum
  },
}

function showCart() {
  const count = cart.items.length
  const total = cart.total().toFixed(2)
  totalText.textContent = `${count} article(s) · ${total} €`
}

posterButton.addEventListener("click", () => {
  cart.add("Poster A3", 24.9)
  showCart()
})
toteButton.addEventListener("click", () => {
  cart.add("Tote bag", 12.5)
  showCart()
})
