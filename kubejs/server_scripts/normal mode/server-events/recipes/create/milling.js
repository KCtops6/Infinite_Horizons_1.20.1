ServerEvents.recipes(event => {
    // Simple crushing input to output mappings (no chanced outputs)
    const recipes = [
        { input: 'minecraft:andesite', output: 'kubejs:andesite_gravel' },
        { input: 'minecraft:diorite', output: 'kubejs:diorite_gravel' },
        { input: 'minecraft:granite', output: 'kubejs:granite_gravel' },
        { input: 'minecraft:gravel', output: 'minecraft:sand' },
        { input: 'minecraft:tuff', output: 'kubejs:tuff_gravel' },
        { input: 'minecraft:sand', output: 'createsifter:dust' },
        { input: 'minecraft:cobbled_deepslate', output: 'kubejs:deepslate_gravel' },
        { input: 'minecraft:basalt', output: 'kubejs:basalt_gravel' },
        { input: 'create:limestone', output: 'kubejs:limestone_gravel' },
        { input: 'forbidden_arcanus:darkstone', output: 'kubejs:darkstone_gravel' },
        { input: 'minecraft:ender_pearl', output: 'kubejs:ender_pearl_dust' }
    ];

    recipes.forEach(recipe => {
        event.custom({
            type: "create:milling",
            ingredients: [{ item: recipe.input }],
            processingTime: 800,
            results: [{ item: recipe.output }]
        }).id(`kubejs:milling/${recipe.output.replace(':', '_')}`);
    });

    // Pam's HarvestCraft ground meats
    const meats = ['rabbit', 'mutton', 'pork', 'beef', 'chicken'];
    meats.forEach(meat => {
        event.custom({
            type: "create:milling",
            ingredients: [{ tag: `forge:raw_${meat}` }],
            processingTime: 800,
            results: [{ item: `pamhc2foodcore:ground${meat}item` }]
        });
    });

    // Fish milling
    event.custom({
        type: "create:milling",
        ingredients: [{ tag: 'forge:fishes' }],
        processingTime: 800,
        results: [{ item: 'pamhc2foodcore:groundfishitem' }]
    });

    // Calcite milling
    event.custom({
        type: "create:milling",
        ingredients: [{ item: 'minecraft:calcite' }],
        processingTime: 800,
        results: [{ item: 'gtceu:raw_calcite' }]
    });

    event.custom({
        type: "create:milling",
        ingredients: [
            {
                item: 'kubejs:granite_gravel'
            }
        ],
        processingTime: 800,
        results: [
            {
                item: 'minecraft:red_sand'
            }
        ]
    }).id('milling/granite_gravel_to_red_sand');
});
