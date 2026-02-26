let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
let savedCounts = []   // store all saved numbers here
const baseText = "Previous entries: "
function increment() {
    count++
    countEl.textContent = count
}

function save() {
    if (count === 0) return  // Don't save if count is zero
    savedCounts.push(count)   // store current count in array
    
    // Render all saved counts with " - " between them
    saveEl.textContent = baseText + savedCounts.join(" - ")
    
    // Reset counter    
    count = 0
    countEl.textContent = count
}