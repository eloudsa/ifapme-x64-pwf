const poster = 24.9 
const stickers = 4.95 
const toteBag = 12.5 
const discountRate = 0.1 
const vatRate = 0.21 
 
const subtotal = poster + stickers + toteBag 
const discount = subtotal * discountRate 
const total = (subtotal - discount) * (1 + vatRate) 
console.log(`Économie : ${discount} €`) 
console.log(`Total TVAC : ${total} €`) 
 
console.log(0.1 + 0.2) 
console.log((10 + 20) / 100)