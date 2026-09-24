const containerWidth = 1200 
const columns = 12 
const gap = 24 
 
const totalGaps = (columns - 1) * gap 
const columnWidth = (containerWidth - totalGaps) / columns 
const cardWidth = columnWidth * 4 + gap * 3 
 
console.log(`Gaps : ${totalGaps}px`) 
console.log(`Une colonne : ${columnWidth}px`) 
console.log(`Carte sur 4 colonnes : ${cardWidth}px`)