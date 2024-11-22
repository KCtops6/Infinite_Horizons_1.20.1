// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    event.recipes.summoningrituals
    .altar('mysticalagradditions:insanium_essence')
    .input('mysticalagriculture:end_essence')
    .input('mysticalagriculture:enderman_essence')
    .input('mysticalagriculture:obsidian_essence')
    .itemOutput('3x mysticalagriculture:dragon_egg_essence')
    .recipeTime(1000);
})