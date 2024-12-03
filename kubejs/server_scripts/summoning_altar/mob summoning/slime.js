// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    event.recipes.summoningrituals
    .altar('kubejs:slime_catalyst')
    .input('minecraft:slime_ball')
    .input('hostilenetworks:blank_data_model')
    .itemOutput(Item.of('hostilenetworks:data_model', '{data_model:{data:6,id:"hostilenetworks:slime"}}'))
    .blockBelow('minecraft:slime_block')
    .recipeTime(1000);
})