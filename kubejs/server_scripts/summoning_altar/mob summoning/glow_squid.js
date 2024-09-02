// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * GLOW SQUID
     * 'kubejs:glow_squid_catalyst'
     * 'minecraft:ink_sac'
     * 'minecraft:glow_ink_sac'
     * 'minecraft:glowstone_dust'
     * 'minecraft:stone'
     */
    event.recipes.summoningrituals
    .altar('kubejs:glow_squid_catalyst')
    .input('minecraft:ink_sac')
    .input('minecraft:glow_ink_sac')
    .input('minecraft:glowstone_dust')
    .mobOutput(SummoningOutput.mob('glow_squid').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:stone')
    .recipeTime(1000);
})