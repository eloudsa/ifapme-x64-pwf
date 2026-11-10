const list = document.querySelector("#cart-list")
const totalText = document.querySelector("#cart-total")

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
  clear() {
    this.items = []
  },
  render() {
    const lines = []
    for (const item of this.items) {
      const price = item.price.toFixed(2)
      lines.push(`<li>${item.name} · ${price} €</li>`)
    }
    return lines.join("")
  },
}

function refresh() {
  list.innerHTML = cart.render()
  if (cart.items.length === 0) {
    totalText.textContent = "Panier vide"
  } else {
    const total = cart.total().toFixed(2)
    totalText.textContent = `Total : ${total} €`
  }
}

const posterButton = document.querySelector("#add-poster")
const toteButton = document.querySelector("#add-tote")
const clearButton = document.querySelector("#clear")

posterButton.addEventListener("click", () => {
  cart.add("Poster A3", 24.9)
  refresh()
})
toteButton.addEventListener("click", () => {
  cart.add("Tote bag", 12.5)
  refresh()
})
clearButton.addEventListener("click", () => {
  cart.clear()
  refresh()
})
