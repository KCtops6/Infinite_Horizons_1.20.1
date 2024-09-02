/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:pillager_catalyst'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:wood_essence'
     * 'mysticalagriculture:earth_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:wood_essence')
    .input('mysticalagriculture:nature_essence')
    .input('mysticalagriculture:earth_essence')
    .itemOutput('kubejs:pillager_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 