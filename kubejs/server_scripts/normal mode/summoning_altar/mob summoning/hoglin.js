// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * HOGLIN
     * 'kubejs:hoglin_catalyst'
     * 'minecraft:porkchop'
     * 'minecraft:leather'
     * 'minecraft:crimson_fungus'
     * 'minecraft:crimson_nylium'
     */
    event.recipes.summoningrituals
    .altar('kubejs:hoglin_catalyst')
    .input('minecraft:porkchop')
    .input('minecraft:leather')
    .input('minecraft:crimson_fungus')
    .mobOutput(SummoningOutput.mob('hoglin').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:crimson_nylium')
    .recipeTime(1000);
})