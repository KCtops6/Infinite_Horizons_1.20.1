/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:fox_catalyst'
     * 'mysticalagriculture:earth_essence'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:ice_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:ice_essence')
    .input('mysticalagriculture:nature_essence')
    .input('mysticalagriculture:earth_essence')
    .itemOutput('kubejs:fox_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 