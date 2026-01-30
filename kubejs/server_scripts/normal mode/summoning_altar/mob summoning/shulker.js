// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * SHULKER
     * 'kubejs:shulker_catalyst'
     * 'minecraft:popped_chorus_fruit'
     * 'minecraft:ender_eye'
     * 'minecraft:ender_pearl'
     * 'minecraft:purpur_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:shulker_catalyst')
    .input('minecraft:popped_chorus_fruit')
    .input('minecraft:ender_eye')
    .input('minecraft:ender_pearl')
    .mobOutput(SummoningOutput.mob('shulker').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .itemOutput(Item.of('minecraft:spire_armor_trim_smithing_template').withChance(0.067))
    .blockBelow('minecraft:purpur_block')
    .recipeTime(1000);
})