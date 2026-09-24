const shopName = "Friterie du Coin" 
const customer = "Sara" 
const unitPrice = 4.5 
const quantityInput = "2" 
const saucePrice = 0.8 
const promoCode = null 
const isMember = true 
let pickupTime 
 
let total = unitPrice * Number(quantityInput) 
total = total + saucePrice 
 
console.log("==============================") 
console.log("  " + shopName) 
console.log("==============================") 
console.log(`Client : ${customer}`) 
console.log(`${quantityInput} x Grande frite + sauce`) 
console.log(`Code promo : ${promoCode}`) 
console.log(`Carte fidélité : ${isMember}`) 
console.log(`Retrait : ${pickupTime}`) 
console.log(`Total : ${total} €`) 
console.log("==============================")