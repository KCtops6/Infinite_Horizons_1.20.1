ServerEvents.recipes(event => {
    const recipes = [
        {
            input1: "kubejs:infinitium_ingot",
            input2: "minecraft:wither_skeleton_skull",
            input3: "kubejs:infinitium_ingot",
            input4: 'extendedcrafting:enhanced_redstone_catalyst',
            input5: "enderio:octadic_capacitor",
            input6: 'extendedcrafting:enhanced_redstone_catalyst',
            output: 'kubejs:wither_skeletal_contractor',
            energy: 50000
        },
        {
            input1: "kubejs:infinitium_ingot",
            input2: "minecraft:enderman_head",
            input3: "kubejs:infinitium_ingot",
            input4: 'extendedcrafting:enhanced_ender_catalyst',
            input5: "enderio:octadic_capacitor",
            input6: 'extendedcrafting:enhanced_ender_catalyst',
            output: 'kubejs:e-logic_controller',
            energy: 100000
        }
    ];
    recipes.forEach(recipe => {
        event.custom({
            type: "enderio:slicing",
            energy: recipe.energy,
            inputs: [
                {
                    item: recipe.input1
                },
                {
                    item: recipe.input2
                },
                {
                    item: recipe.input3
                },
                {
                    item: recipe.input4
                },
                {
                    item: recipe.input5
                },
                {
                    item: recipe.input6
                }
            ],
            output: {
                count: 1,
                id: recipe.output
            }
        });
    });
});