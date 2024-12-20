ServerEvents.recipes(event => {
    const recipes = [
        {
            output: 'kubejs:token_of_the_nether',
            inputs: [
                'naturesaura:fortress_finder',
                'naturesaura:depth_ingot',
                'extendedcrafting:enhanced_redstone_catalyst',
                'extendedcrafting:enhanced_redstone_catalyst',
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
            sapling: 'minecraft:chorus_flower',
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