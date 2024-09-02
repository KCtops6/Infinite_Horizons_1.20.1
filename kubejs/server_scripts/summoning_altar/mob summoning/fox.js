// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * FOX
     * 'kubejs:fox_catalyst'
     * 'minecraft:sweet_berries'
     * 'minecraft:glow_berries'
     * 'minecraft:lead'
     * 'minecraft:grass_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:fox_catalyst')
    .input('minecraft:sweet_berries')
    .input('minecraft:glow_berries')
    .input('minecraft:lead')
    .mobOutput(SummoningOutput.mob('fox').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:grass_block')
    .recipeTime(1000);
})