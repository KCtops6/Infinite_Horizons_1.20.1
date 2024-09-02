// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * MOOSHROOM
     * 'kubejs:mooshroom_catalyst'
     * 'minecraft:leather'
     * 'minecraft:beef'
     * 'minecraft:red_mushroom'
     * 'minecraft:mycelium'
     */
    event.recipes.summoningrituals
    .altar('kubejs:mooshroom_catalyst')
    .input('minecraft:leather')
    .input('minecraft:beef')
    .input('minecraft:red_mushroom')
    .mobOutput(SummoningOutput.mob('mooshroom').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:mycelium')
    .recipeTime(1000);
})