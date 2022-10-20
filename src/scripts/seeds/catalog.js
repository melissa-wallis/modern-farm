//this function takes the harvested plants array as input
//first for loop iterates over all objects
//second for loop iterates over every element within the objects
export const Catalog = (harvestedPlants) => {
    let plantsHTML = ''
    for (const foodObjects of harvestedPlants) {
        //for (var i = 0; i < foodObjects; i++ ) {
            plantsHTML += `<section class="plant">${foodObjects.type}</section>`
        //}
    }
   return plantsHTML
}