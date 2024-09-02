/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:earth_essence'
     * 'mysticalagriculture:ice_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     * 'kubejs:blizz_catalyst'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:fire_essence')
    .input('mysticalagriculture:nether_essence')
    .input('mysticalagriculture:coal_essence')
    .itemOutput('kubejs:blizz_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 