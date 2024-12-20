// ServerEvents.recipes(event => {
//     const recipes = [
//         {
//             output: 'kubejs:token_of_the_nether',
//             input1: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
//             input2: 'naturesaura:depth_ingot',
//             input3: 'extendedcrafting:enhanced_redstone_catalyst',
//             input4: 'extendedcrafting:enhanced_redstone_catalyst',
//             input5: 'minecraft:wither_skeleton_skull',
//             input6: 'minecraft:nether_star',
//             input7: 'minecraft:crimson_fungus',
//             input8: 'minecraft:crimson_fungus',
//             sapling: 'minecraft:crimson_fungus',
//             time: 1000
//         },
//         {
//             output: 'kubejs:token_of_the_end',
//             input1: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
//             input2: 'naturesaura:depth_ingot',
//             input3: 'extendedcrafting:enhanced_ender_catalyst',
//             input4: 'extendedcrafting:enhanced_ender_catalyst',
//             input5: 'minecraft:dragon_egg',
//             input6: 'minecraft:dragon_breath',
//             input7: 'minecraft:chorus_flower',
//             input8: 'minecraft:chorus_flower',
//             sapling: 'minecraft:chorus_flower',
//             time: 2000
//         }
//     ];
//     recipes.forEach(recipe => {
//         event.recipes.tree_ritual(
//             recipe.output,
//             [
//                 recipe.input1,
//                 recipe.input2,
//                 recipe.input3,
//                 recipe.input4,
//                 recipe.input5,
//                 recipe.input6,
//                 recipe.input7,
//                 recipe.input8
//             ],
//             recipe.sapling,
//             recipe.time
//         );
//     });
// });
// Temporary Recipe until ritual of the forest recipe can be figured out.
ServerEvents.recipes(event => {
    // Token of the Nether
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "ABB",
            "FFC",
            "EDC",
        ],
        key: {
            A: { item: 'naturesaura:fortress_finder' },
            B: { item: 'naturesaura:depth_ingot' },
            C: { item: 'extendedcrafting:enhanced_redstone_catalyst' },
            D: { item: 'minecraft:wither_skeleton_skull' },
            E: { item: 'minecraft:dragon_breath' },
            F: { item: 'minecraft:crimson_fungus' },
        },
        result: { item: 'kubejs:token_of_the_nether' }
    });

    // Token of the End
    event.custom({
        type: "extendedcrafting:shaped_table",
        pattern: [
            "ABB",
            "FFC",
            "EDC",
        ],
        key: {
            A: { item: 'naturesaura:end_city_finder' },
            B: { item: 'naturesaura:depth_ingot' },
            C: { item: 'extendedcrafting:enhanced_ender_catalyst' },
            D: { item: 'minecraft:dragon_egg' },
            E: { item: 'minecraft:dragon_breath' },
            F: { item: 'minecraft:chorus_flower' },
        },
        result: { item: 'kubejs:token_of_the_end' }
    });
});
