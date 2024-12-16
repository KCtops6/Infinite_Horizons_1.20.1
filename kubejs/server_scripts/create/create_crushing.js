// https://kubejs.com/wiki/addons/create#crushing
ServerEvents.recipes(event => {
    // simple crushing input to output mappings (no chanced outputs)
    const recipes = [
        { input: 'minecraft:andesite', output: 'kubejs:andesite_gravel'},
        { input: 'minecraft:diorite', output: 'kubejs:diorite_gravel'},
        { input: 'minecraft:granite', output: 'kubejs:granite_gravel'},
        { input: 'minecraft:gravel', output: 'minecraft:sand'},
        { input: 'minecraft:tuff', output: 'kubejs:tuff_gravel'},
        { input: 'minecraft:sand', output: 'createsifter:dust'},
        { input: 'create:limestone', output: 'kubejs:limestone_gravel'}
    ];
    recipes.forEach(recipe => {
        event.custom({
            type: "create:crushing",
            ingredients: [
                {
                    item: recipe.input
                }
            ],
            processingTime: 400,
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
            type: "create:crushing",
            ingredients: [
                {
                    item: `#forge:raw${meat}`
                }
            ],
            processingTime: 400,
            results: [
                {
                    item: `pamhc2foodcore:ground${meat}item`
                }
            ]
        });
    });
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                item: `#forge:fishes`
            }
        ],
        processingTime: 400,
        results: [
            {
                item: `pamhc2foodcore:groundfishitem`
            }
        ]
    });
});