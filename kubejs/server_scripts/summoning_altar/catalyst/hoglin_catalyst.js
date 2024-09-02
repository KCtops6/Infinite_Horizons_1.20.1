/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:pig_essence'
     * 'mysticalagriculture:zombie_essence'
     * 'mysticalagriculture:nether_essence'
     * 'kubejs:hoglin_catalyst'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:pig_essence')
    .input('mysticalagriculture:zombie_essence')
    .input('mysticalagriculture:nether_essence')
    .itemOutput('kubejs:hoglin_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 