const statusSelect = document.querySelector("#status")
const showButton = document.querySelector("#show")
const orderStatus = document.querySelector("#order-status")
const bar = document.querySelector("#bar")

showButton.addEventListener("click", () => {
  let text
  let progress
  let state

  switch (statusSelect.value) {
    case "received":
    case "printing":
      text = "En préparation"
      progress = 33
      state = "warning"
      break
    case "shipped":
      text = "En route"
      progress = 66
      state = "warning"
      break
    case "delivered":
      text = "Livrée"
      progress = 100
      state = "ok"
      break
    case "cancelled":
    case "refunded":
      text = "Commande annulée"
      progress = 0
      state = "error"
      break
    default:
      text = "Statut inconnu"
      progress = 0
      state = "error"
  }

  orderStatus.textContent = text
  orderStatus.classList.remove("ok", "warning", "error")
  orderStatus.classList.add(state)
  bar.style.width = `${progress}%`
  console.log(`${statusSelect.value} : ${text}`)
})
