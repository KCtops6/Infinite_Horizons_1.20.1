/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:nether_essence'
     * 'mysticalagriculture:zombie_essence'
     * 'mysticalagriculture:gold_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     * 'kubejs:piglin_catalyst'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:nether_essence')
    .input('mysticalagriculture:zombie_essence')
    .input('mysticalagriculture:gold_essence')
    .itemOutput('kubejs:piglin_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 