// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * BLAZE
     * 'minecraft:lightning_rod'
     * 'minecraft:blaze_rod'
     * 'minecraft:blaze_powder'
     * 'kubejs:blitz_catalyst'
     * 'minecraft:sand'
     */
    event.recipes.summoningrituals
    .altar('kubejs:blitz_catalyst')
    .input('minecraft:blaze_rod')
    .input('minecraft:blaze_powder')
    .input('minecraft:lightning_rod')
    .mobOutput(SummoningOutput.mob('thermal:blitz').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:sand')
    .recipeTime(1000);
})