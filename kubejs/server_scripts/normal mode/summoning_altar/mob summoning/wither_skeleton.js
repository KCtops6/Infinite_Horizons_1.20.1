// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * DOLPHIN
     * 'kubejs:wither_skeleton_catalyst'
     * 'minecraft:coal'
     * Item.of('minecraft:stone_sword', '{Damage:0}')
     * 'minecraft:bone'
     * 'minecraft:nether_bricks'
     */
    event.recipes.summoningrituals
    .altar('kubejs:wither_skeleton_catalyst')
    .input('minecraft:coal')
    .input(Item.of('minecraft:stone_sword', '{Damage:0}'))
    .input('minecraft:bone')
    .mobOutput(SummoningOutput.mob('wither_skeleton').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:nether_bricks')
    .recipeTime(1000);
})