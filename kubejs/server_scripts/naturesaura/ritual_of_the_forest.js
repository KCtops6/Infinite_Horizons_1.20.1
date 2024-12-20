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

// Temporary Recipe until ritual of the forest recipe can be figured out.
// ServerEvents.recipes(event => {
//     // Token of the Nether
//     event.custom({
//         type: "extendedcrafting:shaped_table",
//         pattern: [
//             "ABB",
//             "FFC",
//             "EDC",
//         ],
//         key: {
//             A: { item: 'naturesaura:fortress_finder' },
//             B: { item: 'naturesaura:depth_ingot' },
//             C: { item: 'extendedcrafting:enhanced_redstone_catalyst' },
//             D: { item: 'minecraft:wither_skeleton_skull' },
//             E: { item: 'minecraft:dragon_breath' },
//             F: { item: 'minecraft:crimson_fungus' },
//         },
//         result: { item: 'kubejs:token_of_the_nether' }
//     });

//     // Token of the End
//     event.custom({
//         type: "extendedcrafting:shaped_table",
//         pattern: [
//             "ABB",
//             "FFC",
//             "EDC",
//         ],
//         key: {
//             A: { item: 'naturesaura:end_city_finder' },
//             B: { item: 'naturesaura:depth_ingot' },
//             C: { item: 'extendedcrafting:enhanced_ender_catalyst' },
//             D: { item: 'minecraft:dragon_egg' },
//             E: { item: 'minecraft:dragon_breath' },
//             F: { item: 'minecraft:chorus_flower' },
//         },
//         result: { item: 'kubejs:token_of_the_end' }
//     });
// });
