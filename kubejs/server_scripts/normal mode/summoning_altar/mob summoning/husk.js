// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * HUSK
     * 'kubejs:husk_catalyst'
     * 'minecraft:rotten_flesh'
     * 'minecraft:iron_ingot'
     * 'minecraft:cactus'
     * 'minecraft:sand'
     */
    event.recipes.summoningrituals
    .altar('kubejs:husk_catalyst')
    .input('minecraft:rotten_flesh')
    .input('minecraft:iron_ingot')
    .input('minecraft:cactus')
    .mobOutput(SummoningOutput.mob('husk').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:sand')
    .recipeTime(1000);
})