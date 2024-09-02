// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * MAGMA CUBE
     * 'kubejs:magma_cube_catalyst'
     * 'minecraft:blaze_powder'
     * 'minecraft:magma_cream'
     * 'minecraft:slime_ball'
     * 'minecraft:magma_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:magma_cube_catalyst')
    .input('minecraft:blaze_powder')
    .input('minecraft:magma_cream')
    .input('minecraft:slime_ball')
    .mobOutput(SummoningOutput.mob('magma_cube').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:magma_block')
    .recipeTime(1000);
})