// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * EVOKER
     * 'kubejs:evoker_catalyst'
     * Item.of('minecraft:iron_axe', '{Damage:0}')
     * Item.of('minecraft:iron_sword', '{Damage:0}')
     * 'minecraft:dark_oak_log'
     * 'minecraft:vex_armor_trim_smithing_template'
     */
    event.recipes.summoningrituals
    .altar('kubejs:evoker_catalyst')
    .input('minecraft:emerald')
    .input(Item.of('minecraft:iron_axe', '{Damage:0}'))
    .input(Item.of('minecraft:iron_sword', '{Damage:0}'))
    .mobOutput(SummoningOutput.mob('evoker').count(1).offset(0, 3, 0).spread(4, 0, 4))
    .itemOutput(Item.of('minecraft:vex_armor_trim_smithing_template').withChance(0.50))
    .blockBelow('minecraft:dark_oak_log')
    .recipeTime(1000);
})