// https://github.com/AlmostReliable/summoningrituals/wiki/Recipes
ServerEvents.recipes(event => {
    const recipes = [
        {
            catalyst: 'kubejs:piglin_catalyst',
            mob: 'irons_spellbooks:apothecarist',
            inputs: [
                'minecraft:brown_mushroom', 'minecraft:red_mushroom', 'minecraft:lantern',
                'minecraft:glow_berries', 'minecraft:sweet_berries', 'minecraft:book',
                'minecraft:azure_bluet', 'minecraft:red_tulip', 'minecraft:warped_fungus'
            ]
        },
        {
            catalyst: 'kubejs:wither_skeleton_catalyst',
            mob: 'irons_spellbooks:dead_king',
            inputs: [
                'minecraft:emerald', 'minecraft:diamond', 'minecraft:iron_ingot',
                'minecraft:soul_lantern', 'minecraft:wheat', 'minecraft:candle',
                'minecraft:book', 'minecraft:skeleton_skull', 'minecraft:blaze_rod'
            ]
        },
        {
            catalyst: 'kubejs:evoker_catalyst',
            mob: 'irons_spellbooks:archevoker',
            inputs: [
                'minecraft:emerald', 'minecraft:raw_iron', 'minecraft:arrow',
                'minecraft:wheat', 'minecraft:experience_bottle', 'minecraft:book',
                'minecraft:lantern', 'minecraft:candle', 'minecraft:paper'
            ]
        },
        {
            catalyst: 'kubejs:stray_catalyst',
            mob: 'irons_spellbooks:cryomancer',
            inputs: [
                'minecraft:book', 'minecraft:paper', 'minecraft:candle',
                'minecraft:amethyst_shard', 'minecraft:blue_orchid', 'minecraft:emerald',
                'minecraft:soul_lantern', 'irons_spellbooks:frozen_bone', 'minecraft:blaze_rod'
            ]
        },
        {
            catalyst: 'kubejs:blaze_catalyst',
            mob: 'irons_spellbooks:pyromancer',
            inputs: [
                'minecraft:book', 'minecraft:paper', 'minecraft:candle',
                'minecraft:amethyst_shard', 'minecraft:blue_orchid', 'minecraft:emerald',
                'minecraft:soul_lantern', 'irons_spellbooks:frozen_bone', 'minecraft:blaze_rod'
            ]
        }
    ];
    recipes.forEach(recipe => {
        event.recipes.summoningrituals.altar(recipe.catalyst)
            .mobOutput(SummoningOutput.mob(recipe.mob).count(3).offset(5, 2, 3).spread(3, 0, 3))
            .input(...recipe.inputs);
    });
});
