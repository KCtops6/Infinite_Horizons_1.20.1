ServerEvents.recipes(event => {
    const recipes = [
        {
            output: 'kubejs:token_of_the_nether',
            inputs: [
                'naturesaura:fortress_finder',
                'naturesaura:depth_ingot',
                'mysticalagriculture:wither_skeleton_essence',
                'mysticalagriculture:wither_skeleton_essence',
                'minecraft:wither_skeleton_skull',
                'minecraft:nether_star',
                'minecraft:crimson_fungus',
                'minecraft:crimson_fungus'
            ],
            sapling: 'minecraft:crimson_fungus',
            time: 1000
        },
        {
            output: 'kubejs:token_of_the_end',
            inputs: [
                'naturesaura:end_city_finder',
                'naturesaura:depth_ingot',
                'extendedcrafting:enhanced_ender_catalyst',
                'extendedcrafting:enhanced_ender_catalyst',
                'minecraft:dragon_egg',
                'minecraft:dragon_breath',
                'minecraft:chorus_flower',
                'minecraft:chorus_flower'
            ],
            sapling: 'minecraft:warped_fungus',
            time: 2000
        }
    ];

    recipes.forEach(recipe => {
        event.recipes.naturesaura.tree_ritual(
            recipe.output, // Output item
            recipe.inputs, // Array of inputs
            recipe.sapling, // Sapling
            recipe.time // Time (optional)
        );
    });
});