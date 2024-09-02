/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:panda_catalyst'
     * 'mysticalagriculture:slime_essence'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:earth_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:slime_essence')
    .input('mysticalagriculture:nature_essence')
    .input('mysticalagriculture:earth_essence')
    .itemOutput('kubejs:panda_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 