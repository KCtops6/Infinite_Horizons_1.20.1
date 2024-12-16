ServerEvents.recipes(event => {
    // simple crushing input to output mappings (no chanced outputs)
    const recipes = [
        { input: 'minecraft:sand', output: 'createsifter:dust'},
        { input: 'minecraft:gravel', output: 'createsifter:sand'}
    ]
    recipes.forEach(recipe => {
        event.custom({
            type: "create:milling",
            ingredients: [
                {
                    item: recipe.input
                }
            ],
            processingTime: 800,
            results: [
                {
                    item: recipe.output
                }
            ]
        });
    });
    
    // pams harvestcraft ground meats
    const meats = ['rabbit', 'mutton', 'pork', 'beef', 'chicken'];
    meats.forEach(meat => {
        event.custom({
            type: "create:milling",
            ingredients: [
                {
                    item: `#forge:raw${meat}`
                }
            ],
            processingTime: 800,
            results: [
                {
                    item: `pamhc2foodcore:ground${meat}item`
                }
            ]
        });
    });
    event.custom({
        type: "create:milling",
        ingredients: [
            {
                item: `#forge:fishes`
            }
        ],
        processingTime: 800,
        results: [
            {
                item: `pamhc2foodcore:groundfishitem`
            }
        ]
    });
});