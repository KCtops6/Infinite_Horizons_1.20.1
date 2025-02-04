// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * LLAMA
     * 'kubejs:llama_catalyst'
     * 'minecraft:chest'
     * 'minecraft:wheat'
     * 'minecraft:lead'
     * 'minecraft:hay_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:llama_catalyst')
    .input('minecraft:chest')
    .input('minecraft:wheat')
    .input('minecraft:lead')
    .mobOutput(SummoningOutput.mob('llama').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:hay_block')
    .recipeTime(1000);
})