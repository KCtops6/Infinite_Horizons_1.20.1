/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:turtle_catalyst'
     * 'mysticalagriculture:coral_essence'
     * 'mysticalagriculture:nature_essence'
     * 'mysticalagriculture:water_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('mysticalagriculture:coral_essence')
    .input('mysticalagriculture:nature_essence')
    .input('mysticalagriculture:water_essence')
    .itemOutput('kubejs:turtle_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 