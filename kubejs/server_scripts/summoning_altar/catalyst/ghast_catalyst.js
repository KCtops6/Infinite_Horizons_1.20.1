/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:ghast_catalyst'
     * 'mysticalagriculture:creeper_essence'
     * 'mysticalagriculture:fire_essence'
     * 'mysticalagriculture:nether_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:creeper_essence')
    .input('mysticalagriculture:fire_essence')
    .input('mysticalagriculture:nether_essence')
    .itemOutput('kubejs:ghast_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 