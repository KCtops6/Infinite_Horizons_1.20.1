/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:glow_squid_catalyst'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:glowstone_essence'
     * 'mysticalagriculture:squid_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:water_essence')
    .input('mysticalagriculture:glowstone_essence')
    .input('mysticalagriculture:squid_essence')
    .itemOutput('kubejs:glow_squid_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 