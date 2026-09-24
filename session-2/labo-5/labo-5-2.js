const guestsInput = "4" 
const menuPrice = 32 
 
const total = Number(guestsInput) * menuPrice 
const label = String(total) + " €" 
console.log(label, typeof label) 
 
console.log(Boolean("")) 
console.log(Boolean("0")) 
console.log(Boolean(0)) 
console.log(Boolean("false"))