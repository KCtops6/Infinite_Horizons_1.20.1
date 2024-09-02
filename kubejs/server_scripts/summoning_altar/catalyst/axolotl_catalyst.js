/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:axolotl_catalyst'
     * 'mysticalagriculture:dye_essence'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:dye_essence')
    .input('mysticalagriculture:nature_essence')
    .input('mysticalagriculture:water_essence')
    .itemOutput('kubejs:axolotl_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 