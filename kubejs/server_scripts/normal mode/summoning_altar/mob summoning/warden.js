// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * WARDEN
     * 'kubejs:warden_catalyst'
     * 'mysticalagradditions:insanium_essence'
     * 'kubejs:dark_matter'
     * 'kubejs:weak_echo_shard'
     * 'minecraft:sculk'
     */
    event.recipes.summoningrituals
    .altar('kubejs:warden_catalyst')
    .input('mysticalagradditions:insanium_essence')
    .input('kubejs:weak_echo_shard')
    .input('kubejs:dark_matter')
    .mobOutput(SummoningOutput.mob('warden').count(1).offset(0, 3, 0).spread(9, 0, 9))
    .itemOutput(Item.of('minecraft:silence_armor_trim_smithing_template').withChance(0.013))
    .itemOutput(Item.of('minecraft:ward_armor_trim_smithing_template').withChance(0.05))
    .itemOutput(Item.of('minecraft:disc_fragment_5').withChance(0.047))
    .blockBelow('minecraft:sculk')
    .recipeTime(1000);
})