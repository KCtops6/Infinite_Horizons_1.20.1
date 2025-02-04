// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * PIGLIN & PIGLIN BRUTE
     * 'kubejs:piglin_catalyst'
     * Item.of('minecraft:golden_sword', '{Damage:0}')
     * Item.of('minecraft:crossbow', '{Damage:0}')
     * 'minecraft:rotten_flesh'
     * 'minecraft:gold_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:piglin_catalyst')
    .input(Item.of('minecraft:golden_sword', '{Damage:0}'))
    .input(Item.of('minecraft:crossbow', '{Damage:0}'))
    .input('minecraft:rotten_flesh')
    .mobOutput(SummoningOutput.mob('piglin').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .mobOutput(SummoningOutput.mob('piglin_brute').count(1).offset(0, 3, 0).spread(4, 0, 4))
    .itemOutput(Item.of('minecraft:snout_armor_trim_smithing_template').withChance(0.50))
    .itemOutput(Item.of('minecraft:netherite_upgrade_smithing_template'))
    .blockBelow('minecraft:gold_block')
    .recipeTime(1000);
})