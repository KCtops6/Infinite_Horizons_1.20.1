ServerEvents.recipes(event => {
    const recipes = [
        {
            pattern: [
                'AAA',
                'ABA',
                'AAA'
            ],
            keys: {
                A: 'minecraft:stone',
                B: 'kubejs:forbidden_transmutation_matter',
            },
            output: 'forbidden_arcanus:darkstone',
            count: 8
        },
        {
            pattern: [
                ' A ',
                'BCB',
                ' A '
            ],
            keys: {
                A: 'minecraft:emerald',
                B: 'minecraft:crafting_table',
                C: 'cookingforblockheads:recipe_book'
            },
            output: 'cookingforblockheads:crafting_book',
            count: 1
        }
    ];

    // if (expert) {
    //      const expertRecipes = [ ];
    //      recipes.push(expertRecipes);
    // } 

    recipes.forEach(recipe => {
        event.shaped(
            Item.of(recipe.output, recipe.count),
            recipe.pattern,
            recipe.keys
        );
    });
});
