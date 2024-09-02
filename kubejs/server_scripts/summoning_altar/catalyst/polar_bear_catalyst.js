/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:polar_bear_catalyst'
     * 'mysticalagriculture:ice_essence'
     * 'mysticalagriculture:fish_essence'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:ice_essence')
    .input('mysticalagriculture:fish_essence')
    .input('mysticalagriculture:water_essence')
    .itemOutput('kubejs:polar_bear_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 