// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * GOAT
     * 'kubejs:goat_catalyst'
     * 'minecraft:milk_bucket'
     * 'minecraft:wheat'
     * 'minecraft:lead'
     * 'minecraft:snow_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:goat_catalyst')
    .input('minecraft:milk_bucket')
    .input('minecraft:wheat')
    .input('minecraft:lead')
    .mobOutput(SummoningOutput.mob('goat').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:snow_block')
    .recipeTime(1000);
})