// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * FROG
     * 'kubejs:frog_catalyst'
     * 'minecraft:lily_pad'
     * 'minecraft:big_dripleaf'
     * 'minecraft:small_dripleaf'
     * 'minecraft:mud'
     */
    event.recipes.summoningrituals
    .altar('kubejs:frog_catalyst')
    .input('minecraft:lily_pad')
    .input('minecraft:big_dripleaf')
    .input('minecraft:small_dripleaf')
    .mobOutput(SummoningOutput.mob('frog').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:mud')
    .recipeTime(1000);
})