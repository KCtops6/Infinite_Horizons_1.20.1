// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes 
ServerEvents.recipes(event => {
    /**
     * AXOLOTL
     * 'kubejs:axolotl_catalyst'
     * 'minecraft:clay_ball'
     * 'minecraft:glow_berries'
     * 'minecraft:tropical_fish_bucket'
     * 'minecraft:moss_block'
     */
    event.recipes.summoningrituals
    .altar('kubejs:axolotl_catalyst')
    .input('minecraft:clay_ball')
    .input('minecraft:tropical_fish_bucket')
    .input('minecraft:glow_berries')
    .mobOutput(SummoningOutput.mob('axolotl').count(6).offset(0, 3, 0).spread(4, 0, 4))
    .blockBelow('minecraft:moss_block')
    .recipeTime(1000);
})