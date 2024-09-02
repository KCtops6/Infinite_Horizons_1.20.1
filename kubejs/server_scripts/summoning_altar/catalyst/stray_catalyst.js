/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:ice_essence'
     * 'mysticalagriculture:skeleton_essence'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     * 'kubejs:stray_catalyst'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:ice_essence')
    .input('mysticalagriculture:skeleton_essence')
    .input('mysticalagriculture:water_essence')
    .itemOutput('kubejs:stray_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 