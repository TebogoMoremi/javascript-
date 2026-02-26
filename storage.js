import { STRINGS } from "./constants.js"

const savedCounts = []

export function saveCount(value) {
    if (value === 0) return null   // don’t save 0

    savedCounts.push(value)
    return STRINGS.previousEntries + savedCounts.join(" - ")
}