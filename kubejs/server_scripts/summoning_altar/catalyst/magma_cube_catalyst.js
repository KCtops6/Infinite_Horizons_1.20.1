/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:magma_cube_catalyst'
     * 'mysticalagriculture:nether_essence'
     * 'mysticalagriculture:slime_essence'
     * 'mysticalagriculture:fire_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:nether_essence')
    .input('mysticalagriculture:fire_essence')
    .input('mysticalagriculture:slime_essence')
    .itemOutput('kubejs:magma_cube_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 