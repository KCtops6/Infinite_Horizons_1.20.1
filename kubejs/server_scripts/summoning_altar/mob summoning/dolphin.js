// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * DOLPHIN
     * 'kubejs:dolphin_catalyst'
     * 'minecraft:salmon'
     * 'minecraft:cod'
     * 'minecraft:lead'
     * 'minecraft:sand'
     */
    event.recipes.summoningrituals
    .altar('kubejs:dolphin_catalyst')
    .input('minecraft:salmon')
    .input('minecraft:cod')
    .input('minecraft:lead')
    .mobOutput(SummoningOutput.mob('dolphin').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:sand')
    .recipeTime(1000);
})