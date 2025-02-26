ServerEvents.recipes(event => {
    const recipes = [
        {
            pattern: [
                'ABA',
                'BCB',
                'ABA'
            ],
            keys: {
                A: 'kubejs:iron_plate',
                B: 'quark:framed_glass',
                C: 'kubejs:tin_gear'
            },
            output: 'thermal:machine_frame',
            count: 1
        }
    ];

    recipes.forEach(recipe => {
        event.shaped(
            Item.of(recipe.output, recipe.count),
            recipe.pattern,
            recipe.keys
        );
    });
});