// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * DROWNED
     * 'kubejs:drowned_catalyst'
     * 'minecraft:rotten_flesh'
     * 'minecraft:copper_ingot'
     * Item.of('minecraft:fishing_rod', '{Damage:0}')
     * 'minecraft:mossy_stone_bricks'
     */
    event.recipes.summoningrituals
    .altar('kubejs:drowned_catalyst')
    .input('minecraft:rotten_flesh')
    .input('minecraft:copper_ingot')
    .input(Item.of('minecraft:fishing_rod', '{Damage:0}'))
    .mobOutput(SummoningOutput.mob('drowned').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .itemOutput(Item.of('minecraft:coast_armor_trim_smithing_template').withChance(0.16))
    .blockBelow('minecraft:mossy_stone_bricks')
    .recipeTime(1000);
})