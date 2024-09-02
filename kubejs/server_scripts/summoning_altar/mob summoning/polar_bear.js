// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * POLAR BEAR
     * 'kubejs:polar_bear_catalyst'
     * 'minecraft:cod'
     * 'minecraft:salmon'
     * 'minecraft:snowball'
     * 'minecraft:packed_ice'
     */
    event.recipes.summoningrituals
    .altar('kubejs:polar_bear_catalyst')
    .input('minecraft:cod')
    .input('minecraft:salmon')
    .input('minecraft:snowball')
    .mobOutput(SummoningOutput.mob('polar_bear').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:packed_ice')
    .recipeTime(1000);
})