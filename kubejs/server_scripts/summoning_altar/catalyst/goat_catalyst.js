/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:goat_catalyst'
     * 'mysticalagriculture:ice_essence'
     * 'mysticalagriculture:stone_essence'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:ice_essence')
    .input('mysticalagriculture:stone_essence')
    .input('mysticalagriculture:nature_essence')
    .itemOutput('kubejs:goat_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 