// ServerEvents.recipes(event => {
//     const extrudingRecipes = [
//         'andesite',
//         'deepslate',
//         'diorite',
//         'granite',
//         'netherrack',
//         'tuff'
//     ];

//     const addExtruderRecipe = (material) => {
//         event.recipes.createMechanicalExtruderExtruding(
//             Item.of(`minecraft:${material}`),
//             [Fluid.of('minecraft:lava'), Fluid.of('minecraft:water')]
//         ).withCatalyst(`minecraft:${material}`);
//     };

//     extrudingRecipes.forEach(addExtruderRecipe);
// });

ServerEvents.recipes(event => {
    const blocks = [
        'andesite',
        'deepslate',
        'diorite',
        'granite',
        'netherrack',
        'tuff'
    ];
    blocks.forEach(block => {
        event.custom({
            type: "create_mechanical_extruder:extruding",
            catalyst: {
                item: `minecraft:${block}`
            },
            ingredients: [
                {
                    amount: 1000,
                    fluid: "minecraft:water",
                    nbt: {}
                },
                {
                    amount: 1000,
                    fluid: "minecraft:lava",
                    nbt: {}
                }
            ],
            result: {
                item: `minecraft:${block}`
            }
        });
    });
});