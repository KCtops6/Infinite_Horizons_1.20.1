/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:squid_catalyst'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:earth_essence'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:water_essence')
    .input('mysticalagriculture:earth_essence')
    .input('mysticalagriculture:nature_essence')
    .itemOutput('kubejs:squid_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 