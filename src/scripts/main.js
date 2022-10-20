console.log("Welcome to the main module")

//yearlyPlan is the variable that holds the createPlan() function created in plan.js
import {createPlan} from "./plan.js"
const yearlyPlan = createPlan()
//console.log(yearlyPlan);

import {createCorn} from "./seeds/corn.js"
const cornSeed = createCorn()

import {createSoybean} from "./seeds/soybean.js"
const soybeanSeed = createSoybean()

import {createSunflower} from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()

import {createAsparagus} from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()

import {createWheat} from "./seeds/wheat.js"
const wheatSeed = createWheat()

import {createPotato} from "./seeds/potato.js"
const potatoSeed = createPotato()

//addPlant function takes seedObject as input and will add it to the plants array
import {addPlant} from "./seeds/field.js";
const addedPlant = addPlant()

//returns a copy of the plants array
import {usePlants} from "./seeds/field.js";


//plants the seeds using yearly plan as input 
import {plantSeeds} from "./tractor.js";
plantSeeds(yearlyPlan)

//returns a copy of the plants array
const usedPlant = usePlants()

//harvestPlants function takes usedPlant (plants array) as input and returns the appropriate output (plants listed as many times as their listed output)
import {harvestPlants} from "./seeds/harvester.js";
const harvestedPlants = harvestPlants(usedPlant)
//console.log(harvestedPlants)

import {Catalog} from "./seeds/catalog.js";
const finalCatalog = Catalog(harvestedPlants)
console.log(finalCatalog)

//identifies parent element in HTML
const parentHTMLElement = document.querySelector(".container")

const applicationHTML = `<div>${finalCatalog}</div>`

parentHTMLElement.innerHTML = applicationHTML



