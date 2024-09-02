/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:elder_guardian_catalyst'
     * 'mysticalagriculture:prismarine_essence'
     * 'kubejs:guardian_catalyst'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:guardian_catalyst')
    .input('mysticalagriculture:prismarine_essence')
    .input('mysticalagriculture:prismarine_essence')
    .input('mysticalagriculture:prismarine_essence')
    .itemOutput('kubejs:elder_guardian_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 