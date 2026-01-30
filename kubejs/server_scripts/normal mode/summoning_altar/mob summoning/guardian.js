// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * GUARDIAN
     * 'kubejs:guardian_catalyst'
     * 'minecraft:prismarine_shard'
     * 'minecraft:prismarine_crystals'
     * '#forge:rawfish'
     * 'minecraft:prismarine'
     */
    event.recipes.summoningrituals
    .altar('kubejs:guardian_catalyst')
    .input('minecraft:prismarine_shard')
    .input('minecraft:prismarine_crystals')
    .input('#forge:rawfish')
    .mobOutput(SummoningOutput.mob('guardian').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:prismarine')
    .recipeTime(1000);
})