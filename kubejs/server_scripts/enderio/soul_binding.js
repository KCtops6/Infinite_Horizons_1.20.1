// https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060
ServerEvents.recipes(event => {
    const recipes = [
        {
            energy: 50000,
            mob: 'wither',
            experience: 50,
            input: 'kubejs:wither_skeletal_contractor',
            output: 'kubejs:wither_controller'
        },
        {
            energy: 50000,
            mob: 'enderman',
            experience: 100,
            input: 'kubejs:e-logic_controller',
            output: 'kubejs:ender_controller'
        }
    ];
    recipes.forEach(recipe => {
        event.recipes.enderio.soul_binding(
            recipe.output,
            recipe.input
        ).entityType(recipe.mob_category).energy(recipe.energy).exp(recipe.experience);
    });
});
