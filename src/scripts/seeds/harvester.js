//takes the plants array (usedPlant) as Input

//creates harvestPlants function that iterates over the plants array created in field.js 
//new empty array seedObjects created
//first for loop iterates over the objects in plants array, second for loop iterates over each element within each object starting at 0th index. As long as i is less than the output of each plant it is looping over, it will continue to push that plant objecy into the empty seedObjects array
//this function returns completed seedObjects array

export const harvestPlants = (plantsArray) => {
    let seedObjects = []
    for (const plants of plantsArray) {
        for (var i = 0;i < plants.output; i++ ) {
            seedObjects.push(plants)
        }
        }
        return seedObjects
    }



