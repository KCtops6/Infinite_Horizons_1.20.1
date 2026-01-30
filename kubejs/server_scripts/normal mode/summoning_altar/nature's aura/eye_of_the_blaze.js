// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    event.recipes.summoningrituals
    .altar('naturesaura:fortress_finder')
    .mobOutput(SummoningOutput.mob('blaze').count(9).offset(0, 3, 0).spread(4, 0, 4))
    .recipeTime(1000);
})