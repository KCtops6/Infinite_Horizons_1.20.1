// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * PANDA
     * 'kubejs:panda_catalyst'
     * 'minecraft:slime_ball'
     * 'minecraft:bamboo'
     * 'minecraft:cocoa_beans'
     * 'minecraft:grass_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:panda_catalyst')
    .input('minecraft:slime_ball')
    .input('minecraft:bamboo')
    .input('minecraft:cocoa_beans')
    .mobOutput(SummoningOutput.mob('panda').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:grass_block')
    .recipeTime(1000);
})