// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    event.recipes.summoningrituals
    .altar('kubejs:slime_catalyst')
    .input('minecraft:slime_ball')
    .input('minecraft:slime_ball')
    .input('minecraft:slime_ball')
    .mobOutput(SummoningOutput.mob('slime').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:slime_block')
    .recipeTime(1000);
})