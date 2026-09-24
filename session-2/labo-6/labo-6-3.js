const shopName = "Friterie du Coin" 
const customer = "Sara" 
const unitPrice = 4.5 
const quantityInput = "2" 
const promoCode = null 
const isMember = true 
 
const quantity = Number(quantityInput) 
const total = unitPrice * quantity 
const line = "=".repeat(30) 
 
console.log(`${line}
  ${shopName}
${line}
Client : ${customer}
${quantity} x Grande frite : ${total} €
Code promo : ${promoCode}
Carte fidélité : ${isMember}
${line}
debug : ${typeof quantityInput} / ${typeof quantity} / ${typeof promoCode}`)