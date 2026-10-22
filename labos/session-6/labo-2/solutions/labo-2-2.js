const checks = document.querySelectorAll(".task-check")
const button = document.querySelector("#progress")
const progressText = document.querySelector("#progress-text")

button.addEventListener("click", () => {
  let done = 0
  for (const check of checks) {
    if (check.checked) {
      done++
    }
  }
  console.log(`Cochées : ${done}`)
  progressText.textContent = done === checks.length
    ? "Projet terminé"
    : `${done} tâches terminées sur ${checks.length}`
})
