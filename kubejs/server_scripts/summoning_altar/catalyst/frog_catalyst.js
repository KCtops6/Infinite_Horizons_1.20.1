/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:frog_catalyst'
     * 'mysticalagriculture:slime_essence'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:water_essence')
    .input('mysticalagriculture:nature_essence')
    .input('mysticalagriculture:slime_essence')
    .itemOutput('kubejs:frog_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 