ServerEvents.recipes(event => {
    const recipes = [
        {
            pattern: [
                'AAA',
                'ABA',
                'AAA'
            ],
            keys: {
                A: '#forge:stone',
                B: 'kubejs:forbidden_transmutation_matter',
            },
            output: 'forbidden_arcanus:darkstone',
            count: 8
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
