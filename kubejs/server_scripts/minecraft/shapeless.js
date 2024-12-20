ServerEvents.recipes(event => {
    const recipes = [
        {
            inputs: [
                'forbidden_arcanus:arcane_crystal_dust',
                'forbidden_arcanus:mundabitur_dust',
                'forbidden_arcanus:corrupti_dust'
            ],
            output: 'kubejs:forbidden_transmutation_matter',
            count: 1
        },
        {
            inputs: [
                'kubejs:forbidden_transmutation_matter',
                '#forge:sapling'
            ],
            output: 'forbidden_arcanus:growing_edelwood',
            count: 1
        }
    ];
    recipes.forEach(recipe => {
        event.shapeless(Item.of(recipe.output, recipe.count), recipe.inputs);
    });
});