const themeButton = document.querySelector("#theme")
const body = document.querySelector("body")
let isDark = false

themeButton.addEventListener("click", () => {
  isDark = !isDark
  body.classList.toggle("dark")
  themeButton.textContent = isDark ? "Mode clair" : "Mode sombre"
  console.log(`Mode sombre : ${isDark}`)
})
