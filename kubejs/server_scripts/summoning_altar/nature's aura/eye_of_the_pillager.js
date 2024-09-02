// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    event.recipes.summoningrituals
    .altar('naturesaura:outpost_finder')
    .mobOutput(SummoningOutput.mob('pillager').count(9).offset(0, 3, 0).spread(4, 0, 4))
    .recipeTime(1000);
})