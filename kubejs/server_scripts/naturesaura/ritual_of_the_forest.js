ServerEvents.recipes(event => {
    const recipes = [
        {
            output: 'token_of_the_nether',
            input1: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
            input2: 'naturesaura:depth_ingot',
            input3: 'extendedcrafting:enhanced_redstone_catalyst',
            input4: 'extendedcrafting:enhanced_redstone_catalyst',
            input5: 'minecraft:wither_skeleton_skull',
            input6: 'minecraft:nether_star',
            input7: 'minecraft:crimson_fungus',
            input8: 'minecraft:warped_fungus',
            sapling: 'minecraft:crimson_fungus',
            time: 1000
        },
        {
            output: 'token_of_the_end',
            input1: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
            input2: 'naturesaura:depth_ingot',
            input3: 'extendedcrafting:enhanced_ender_catalyst',
            input4: 'extendedcrafting:enhanced_ender_catalyst',
            input5: 'minecraft:dragon_egg',
            input6: 'minecraft:dragon_breath',
            input7: 'minecraft:chorus_flower',
            input8: 'minecraft:chorus_flower',
            sapling: 'minecraft:chorus_flower',
            time: 2000
        }
    ];
    recipes.forEach(recipe => {
        naturesaura.tree_ritual(
            recipe.output,
            [
                recipe.input1,
                recipe.input2,
                recipe.input3,
                recipe.input4,
                recipe.input5,
                recipe.input6,
                recipe.input7,
                recipe.input8
            ],
            recipe.sapling,
            recipe.time
        );
    });
});