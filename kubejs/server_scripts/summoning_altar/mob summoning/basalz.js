// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * BLAZE
     * 'kubejs:basalz_catalyst'
     * 'minecraft:blaze_rod'
     * 'minecraft:blaze_powder'
     * 'minecraft:coal'
     * 'minecraft:basalt'
     */
    event.recipes.summoningrituals
    .altar('kubejs:basalz_catalyst')
    .input('minecraft:blaze_rod')
    .input('minecraft:blaze_powder')
    .input('minecraft:coal')
    .mobOutput(SummoningOutput.mob('thermal:basalz').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:basalt')
    .recipeTime(1000);
})