// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * WOLF
     * 'kubejs:wolf_catalyst'
     * 'minecraft:mutton'
     * '#minecraft:wool'
     * 'farmersdelight:dog_food'
     * 'minecraft:grass_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:wolf_catalyst')
    .input('minecraft:mutton')
    .input('farmersdelight:dog_food')
    .input('#minecraft:wool')
    .mobOutput(SummoningOutput.mob('wolf').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:grass_block')
    .recipeTime(1000);
})