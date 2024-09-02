// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * STRAY
     * 'minecraft:snow_block'
     * 'minecraft:arrow'
     * 'minecraft:bone'
     * Item.of('minecraft:bow', '{Damage:0}')
     * 'kubejs:stray_catalyst'
     */
    event.recipes.summoningrituals
    .altar('kubejs:stray_catalyst')
    .input('minecraft:arrow')
    .input('minecraft:bone')
    .input(Item.of('minecraft:bow', '{Damage:0}'))
    .mobOutput(SummoningOutput.mob('stray').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:snow_block')
    .recipeTime(1000);
})