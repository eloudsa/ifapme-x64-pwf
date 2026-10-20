const statusSelect = document.querySelector("#status")
const showButton = document.querySelector("#show")
const orderStatus = document.querySelector("#order-status")

showButton.addEventListener("click", () => {
  let message
  switch (statusSelect.value) {
    case "received":
      message = "Commande reçue, merci"
      break
    case "printing":
      message = "Impression en cours"
      break
    case "shipped":
      message = "Colis en route"
      break
    case "delivered":
      message = "Commande livrée"
      break
    default:
      message = "Statut inconnu"
  }
  orderStatus.textContent = message
  console.log(`${statusSelect.value} : ${message}`)
})
