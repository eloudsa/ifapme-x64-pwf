const hours = [8, 12, 5, 20, 3]
const hoursTotal = document.querySelector("#hours-total")
let total = 0
let count = 0

for (const hour of hours) {
  total += hour
  count++
}

const average = total / count
hoursTotal.textContent = `${total} h pour ${count} tâches (moyenne ${average} h)`
console.log(`Total : ${total}, tâches : ${count}`)
