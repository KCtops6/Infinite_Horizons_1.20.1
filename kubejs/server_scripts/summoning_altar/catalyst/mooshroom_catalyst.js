/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:mooshroom_catalyst'
     * 'mysticalagriculture:dirt_essence'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:cow_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:dirt_essence')
    .input('mysticalagriculture:nature_essence')
    .input('mysticalagriculture:cow_essence')
    .itemOutput('kubejs:mooshroom_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 