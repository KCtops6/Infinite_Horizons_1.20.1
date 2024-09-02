// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * GHAST
     * 'kubejs:ghast_catalyst'
     * 'minecraft:ghast_tear'
     * 'minecraft:gunpowder'
     * 'minecraft:soul_lantern'
     * 'minecraft:soul_sand'
     */
    event.recipes.summoningrituals
    .altar('kubejs:ghast_catalyst')
    .input('minecraft:ghast_tear')
    .input('minecraft:gunpowder')
    .input('minecraft:soul_lantern')
    .mobOutput(SummoningOutput.mob('ghast').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:soul_sand')
    .recipeTime(1000);
})