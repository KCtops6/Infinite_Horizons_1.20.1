// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * PILLAGER AND ALLAY
     * 'kubejs:pillager_catalyst'
     * 'minecraft:emerald'
     * Item.of('minecraft:crossbow', '{Damage:0}')
     * '3x minecraft:arrow'
     * 'minecraft:sentry_armor_trim_smithing_template'
     * 'minecraft:dark_oak_log'
     */
    event.recipes.summoningrituals
    .altar('kubejs:pillager_catalyst')
    .input('minecraft:emerald')
    .input(Item.of('minecraft:crossbow', '{Damage:0}'))
    .input('3x minecraft:arrow')
    .mobOutput(SummoningOutput.mob('pillager').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .mobOutput(SummoningOutput.mob('allay').count(3).offset(0, 3, 0).spread(7, 0, 7))
    .itemOutput(Item.of('minecraft:sentry_armor_trim_smithing_template').withChance(0.25))
    .blockBelow('minecraft:dark_oak_log')
    .recipeTime(1000);
})