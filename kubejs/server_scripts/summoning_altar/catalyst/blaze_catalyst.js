/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:fire_essence'
     * 'mysticalagriculture:nether_essence'
     * 'mysticalagriculture:sulfur_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     * 'kubejs:blaze_catalyst'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:fire_essence')
    .input('mysticalagriculture:nether_essence')
    .input('mysticalagriculture:sulfur_essence')
    .itemOutput('kubejs:blaze_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 