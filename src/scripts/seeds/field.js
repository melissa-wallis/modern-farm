
//this array will store all the plants growing in the field:
const plants = []

//this function takes seedObject as input and will add the seed to the field by pushing it to the plants array. 
//if seedObj is an array (like corn) the objects inside will be pushed into plant array. 
//else all other objects pushed into plants array

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const obj of seedObject)
        plants.push(obj)
    }
    else {
    plants.push(seedObject)
}
}

//returns a copy of the array of plants
export const usePlants = () => {
    return plants.map(plant => ({ ...plant }))
}
