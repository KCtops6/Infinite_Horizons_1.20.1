/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:wolf_catalyst'
     * 'mysticalagriculture:skeleton_essence'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:sheep_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:skeleton_essence')
    .input('mysticalagriculture:nature_essence')
    .input('mysticalagriculture:sheep_essence')
    .itemOutput('kubejs:wolf_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 