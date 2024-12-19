// https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060
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
            input2: "enderio:enderman_head",
            input3: "kubejs:infinitium_ingot",
            input4: 'extendedcrafting:enhanced_ender_catalyst',
            input5: "enderio:octadic_capacitor",
            input6: 'extendedcrafting:enhanced_ender_catalyst',
            output: 'kubejs:e-logic_controller',
            energy: 100000
        }
    ];
    recipes.forEach(recipe => {
        event.recipes.enderio.slicing(
            recipe.output, 
            [
                recipe.input1,
                recipe.input2,
                recipe.input3,
                recipe.input4,
                recipe.input5,
                recipe.input6
            ]
        ).energy(recipe.energy);
    });
});