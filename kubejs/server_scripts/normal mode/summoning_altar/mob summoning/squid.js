// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * SQUID
     * 'kubejs:squid_catalyst'
     * 'minecraft:ink_sac'
     * 'minecraft:seagrass'
     * 'minecraft:kelp'
     * 'minecraft:sand'
     */
    event.recipes.summoningrituals
    .altar('kubejs:squid_catalyst')
    .input('minecraft:ink_sac')
    .input('minecraft:seagrass')
    .input('minecraft:kelp')
    .mobOutput(SummoningOutput.mob('squid').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:sand')
    .recipeTime(1000);
})