/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:pillager_catalyst'
     * 'mysticalagriculture:emerald_essence'
     * 'mysticalagriculture:supremium_essence'
     * 'mysticalagriculture:nature_essence'
     * 'kubejs:evoker_catalyst'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:pillager_catalyst')
    .input('mysticalagriculture:emerald_essence')
    .input('mysticalagriculture:supremium_essence')
    .input('mysticalagriculture:nature_essence')
    .itemOutput('kubejs:evoker_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 