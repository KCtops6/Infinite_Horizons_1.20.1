// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * BLIZZ
     * 'kubejs:blizz_catalyst'
     * 'minecraft:ice'
     * 'minecraft:packed_ice'
     * 'minecraft:snowball'
     * 'minecraft:snow_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:blizz_catalyst')
    .input('minecraft:ice')
    .input('minecraft:packed_ice')
    .input('minecraft:snowball')
    .mobOutput(SummoningOutput.mob('thermal:blizz').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:snow_block')
    .recipeTime(1000);
})