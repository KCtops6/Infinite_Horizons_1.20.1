/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:drowned_catalyst'
     * 'mysticalagriculture:copper_essence'
     * 'mysticalagriculture:zombie_essence'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:copper_essence')
    .input('mysticalagriculture:zombie_essence')
    .input('mysticalagriculture:water_essence')
    .itemOutput('kubejs:drowned_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 