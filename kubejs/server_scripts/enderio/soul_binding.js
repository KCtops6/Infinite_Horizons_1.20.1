ServerEvents.recipes(event => {
    const recipes = [
        {
            energy: 50000,
            entity_type: 'minecraft:wither',
            experience: 50,
            input: 'kubejs:wither_skeletal_contractor',
            output: 'kubejs:wither_controller'
        },
        {
            energy: 50000,
            entity_type: 'minecraft:enderman',
            experience: 100,
            input: 'kubejs:ender_contractor',
            output: 'kubejs:ender_controller'
        }
    ];
    recipes.forEach(recipe => {
        event.custom({
            type: "enderio:soul_binding",
            energy: recipe.energy,
            entity_type: recipe.entity_type,
            experience: recipe.experience,
            input: {
                item: recipe.input
            },
            output: {
                count: 1,
                item: recipe.output
            }
        });
    });
});