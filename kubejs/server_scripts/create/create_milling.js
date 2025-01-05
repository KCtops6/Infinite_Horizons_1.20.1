ServerEvents.recipes(event => {
    // simple crushing input to output mappings (no chanced outputs)
    const recipes = [
        { input: 'minecraft:sand', output: 'createsifter:dust' },
        { input: 'minecraft:gravel', output: 'createsifter:sand' },
        { input: 'minecraft:netherrack', output: 'kubejs:netherrack_gravel' },
        { input: 'minecraft:basalt', output: 'kubejs:basalt_gravel' },
        { input: 'minecraft:end_stone', output: 'kubejs:end_stone_gravel' },
        { input: 'minecraft:ender_pearl', output: 'kubejs:ender_pearl_dust' }
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

    // calcite
    event.custom({
        type: "create:milling",
        ingredients: [
            {
                item: 'minecraft:calcite'
            }
        ],
        processingTime: 800,
        results: [
            {
                item: 'gtceu:raw_calcite'
            }
        ]
    });
});