const fullName = "Sara Lambert"
const job = "Designer UX/UI"
const city = "Liège"

let projects = 12
document.querySelector("#projects").textContent = projects

// Un nouveau projet est livré
projects = projects + 1
document.querySelector("#projects").textContent = projects

document.querySelector("#summary").textContent =
  `${fullName}, ${job} à ${city}`

// job = "Développeuse"
// TypeError: Assignment to constant variable.
