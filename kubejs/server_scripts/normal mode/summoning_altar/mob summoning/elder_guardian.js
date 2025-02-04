// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * ELDER GUARDIAN
     * 'kubejs:elder_guardian_catalyst'
     * 'minecraft:prismarine_shard'
     * 'minecraft:prismarine_crystals'
     * '#forge:rawfish'
     * 'minecraft:dark_prismarine'
     */
    event.recipes.summoningrituals
    .altar('kubejs:elder_guardian_catalyst')
    .input('minecraft:prismarine_shard')
    .input('minecraft:prismarine_crystals')
    .input('#forge:rawfish')
    .mobOutput(SummoningOutput.mob('elder_guardian').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .itemOutput(Item.of('minecraft:tide_armor_trim_smithing_template').withChance(0.20))
    .itemOutput('3x minecraft:wet_sponge')
    .blockBelow('minecraft:dark_prismarine')
    .recipeTime(1000);
})