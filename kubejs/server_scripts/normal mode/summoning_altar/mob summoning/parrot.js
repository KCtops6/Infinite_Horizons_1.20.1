// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * PARROT
     * 'kubejs:parrot_catalyst'
     * '#forge:seeds'
     * '#minecraft:music_discs'
     * 'minecraft:cocoa_beans'
     * 'minecraft:jukebox'
     */
    event.recipes.summoningrituals
    .altar('kubejs:parrot_catalyst')
    .input('#forge:seeds')
    .input('#minecraft:music_discs')
    .input('minecraft:cocoa_beans')
    .mobOutput(SummoningOutput.mob('parrot').count(18).offset(0, 3, 0).spread(9, 0, 9))
    .blockBelow('minecraft:jukebox')
    .recipeTime(1000);
})