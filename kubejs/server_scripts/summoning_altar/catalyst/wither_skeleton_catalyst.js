/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:nether_essence'
     * 'mysticalagriculture:coal_essence'
     * 'mysticalagriculture:skeleton_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     * 'kubejs:wither_skeleton_catalyst'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:nether_essence')
    .input('mysticalagriculture:coal_essence')
    .input('mysticalagriculture:skeleton_essence')
    .itemOutput('kubejs:wither_skeleton_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 