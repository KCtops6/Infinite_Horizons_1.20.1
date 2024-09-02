/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:camel_catalyst'
     * 'mysticalagriculture:fire_essence'
     * 'mysticalagriculture:dirt_essence'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:fire_essence')
    .input('mysticalagriculture:nature_essence')
    .input('mysticalagriculture:dirt_essence')
    .itemOutput('kubejs:camel_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 