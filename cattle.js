import { database } from "./database.js"

export const roundup = (herdSize) => {
    const cattle = []
    const types = database.cattleTypes

    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal.breed)
    }

    return cattle
}

