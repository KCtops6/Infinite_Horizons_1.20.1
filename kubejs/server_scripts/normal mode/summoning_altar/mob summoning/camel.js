// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * CAMEL
     * 'kubejs:camel_catalyst'
     * 'minecraft:cactus'
     * 'minecraft:saddle'
     * 'minecraft:lead'
     * 'minecraft:sand'
     */
    event.recipes.summoningrituals
    .altar('kubejs:camel_catalyst')
    .input('minecraft:cactus')
    .input('minecraft:saddle')
    .input('minecraft:lead')
    .mobOutput(SummoningOutput.mob('camel').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:sand')
    .recipeTime(1000);
})