// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * TURTLE
     * 'minecraft:sand'
     * 'minecraft:seagrass'
     * 'minecraft:sea_pickle'
     * 'minecraft:kelp'
     * 'kubejs:turtle_catalyst'
     */
    event.recipes.summoningrituals
    .altar('kubejs:turtle_catalyst')
    .input('minecraft:seagrass')
    .input('minecraft:sea_pickle')
    .input('minecraft:kelp')
    .mobOutput(SummoningOutput.mob('turtle').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:sand')
    .recipeTime(1000);
})