
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./seeds/field.js"

//function takes yearly plan as input. Iterate over the yearlyPlan arrays and child arrays. As you iterate over the arrays, based on the plant listed (if statements) invoke the corresponding create____ function to get the seed and push that seed to the plants array MUST ACCESS NESTED ARRAYS

export const plantSeeds = (yearlyPlan) => {
    for (const row of yearlyPlan) {
        for (const plantType of row) {
            if (plantType === "Corn") {
                let cornSeed = createCorn()
                addPlant(cornSeed)
            }
            else if (plantType === "Soybean") {
                let soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plantType === "Sunflower") {
               let sunflowerSeed = createSunflower()
               addPlant(sunflowerSeed)
            }
            else if (plantType === "Asparagus") {
                let asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (plantType === "Wheat") {
                let wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
            else if (plantType === "Potato") {
               let potatoSeed = createPotato()
               addPlant(potatoSeed)
            }
        }
    }
}




