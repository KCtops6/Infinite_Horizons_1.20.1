/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:parrot_catalyst'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:earth_essence'
     * 'mysticalagriculture:dye_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:dye_essence')
    .input('mysticalagriculture:earth_essence')
    .input('mysticalagriculture:nature_essence')
    .itemOutput('kubejs:parrot_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 