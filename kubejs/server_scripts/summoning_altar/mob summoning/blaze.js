// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * BLAZE
     * 'kubejs:blaze_catalyst'
     * 'minecraft:blaze_rod'
     * 'minecraft:blaze_powder'
     * 'gtceu:sulfur_dust'
     * 'minecraft:nether_bricks'
     */
    event.recipes.summoningrituals
    .altar('kubejs:blaze_catalyst')
    .input('minecraft:blaze_rod')
    .input('minecraft:blaze_powder')
    .input('gtceu:sulfur_dust')
    .mobOutput(SummoningOutput.mob('blaze').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .itemOutput(Item.of('minecraft:rib_armor_trim_smithing_template').withChance(0.067))
    .blockBelow('minecraft:nether_bricks')
    .recipeTime(1000);
})