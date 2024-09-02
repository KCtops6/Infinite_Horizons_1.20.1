/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:air_essence'
     * 'mysticalagriculture:earth_essence'
     * 'mysticalagriculture:fire_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     * 'kubejs:blitz_catalyst'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:air_essence')
    .input('mysticalagriculture:earth_essence')
    .input('mysticalagriculture:fire_essence')
    .itemOutput('kubejs:blitz_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 