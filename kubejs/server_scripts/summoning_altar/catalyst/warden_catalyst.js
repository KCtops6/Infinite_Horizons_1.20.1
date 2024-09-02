/**
 * https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
 */
ServerEvents.recipes(event => {
    /**
     * 'kubejs:warden_catalyst'
     * 'kubejs:dark_matter'
     * 'kubejs:weak_echo_shard'
     * 'mysticalagradditions:insanium_essence'
     * 'mysticalagriculture:soulium_gemstone'
     * 'mysticalagriculture:soulium_block'
     */
    event.recipes.summoningrituals
    .altar('mysticalagriculture:soulium_gemstone')
    .input('kubejs:dark_matter')
    .input('kubejs:weak_echo_shard')
    .input('mysticalagradditions:insanium_essence')
    .itemOutput('kubejs:warden_catalyst')
    .blockBelow('mysticalagriculture:soulium_block')
    .recipeTime(1000);
}) 