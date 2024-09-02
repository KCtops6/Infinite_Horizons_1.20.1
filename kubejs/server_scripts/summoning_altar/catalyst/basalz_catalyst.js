/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:fire_essence'
     * 'mysticalagriculture:nether_essence'
     * 'mysticalagriculture:coal_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     * 'kubejs:basalz_catalyst'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:fire_essence')
    .input('mysticalagriculture:nether_essence')
    .input('mysticalagriculture:coal_essence')
    .itemOutput('kubejs:basalz_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 