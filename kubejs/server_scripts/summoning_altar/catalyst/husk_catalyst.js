/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:husk_catalyst'
     * 'mysticalagriculture:fire_essence'
     * 'mysticalagriculture:air_essence'
     * 'mysticalagriculture:zombie_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:air_essence')
    .input('mysticalagriculture:zombie_essence')
    .input('mysticalagriculture:fire_essence')
    .itemOutput('kubejs:husk_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 