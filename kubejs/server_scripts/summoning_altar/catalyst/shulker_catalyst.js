/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'mysticalagriculture:air_essence'
     * 'mysticalagriculture:end_essence'
     * 'mysticalagriculture:enderman_essence'
     * 'kubejs:shulker_catalyst'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:air_essence')
    .input('mysticalagriculture:end_essence')
    .input('mysticalagriculture:enderman_essence')
    .itemOutput('kubejs:shulker_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 