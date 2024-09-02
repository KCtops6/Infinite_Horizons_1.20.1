/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:earth_essence'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:prismarine_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     * 'kubejs:guardian_catalyst'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:water_essence')
    .input('mysticalagriculture:earth_essence')
    .input('mysticalagriculture:prismarine_essence')
    .itemOutput('kubejs:guardian_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 