const team = [
  { name: "Sara", role: "UX designer", contact: { city: "Liège" }, skills: ["Figma", "Recherche"] },
  { name: "Tom", role: "UI designer", contact: { city: "Namur" }, skills: ["Figma", "CSS"] },
  { name: "Inès", role: "Stagiaire", skills: ["Illustrator"] },
]

const teamBox = document.querySelector("#team")

const cards = []
team.forEach(({ name, role, contact, skills }) => {
  const city = contact?.city || "ville inconnue"
  cards.push(`
    <div class="card">
      <h3>${name}</h3>
      <p>${role} · ${city}</p>
      <p class="muted">${skills.join(", ")}</p>
    </div>`)
})
teamBox.innerHTML = cards.join("")
console.log(`${team.length} cartes affichées`)
