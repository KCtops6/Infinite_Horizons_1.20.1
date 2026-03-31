ServerEvents.recipes(event => {
    // 1. Simple crushing input to output mappings
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
            type: "create:crushing",
            ingredients: [{ item: recipe.input }],
            processingTime: 400,
            results: [{ item: recipe.output }]
        }).id(`kubejs:crushing/${recipe.output.replace(':', '_')}`);
    });

    // 2. Netherrack and End Stone
    const flours = [
        { input: 'minecraft:end_stone', output1: 'kubejs:end_stone_gravel', output2: 'kubejs:void_flour'},
        { input: 'minecraft:netherrack', output1: 'kubejs:netherrack_gravel', output2: 'create:cinder_flour'}
    ];

    flours.forEach(flour => {
        event.custom({
            type: "create:crushing",
            ingredients: [{ item: flour.input }],
            processingTime: 400,
            results: [
                { item: flour.output1 },
                { item: flour.output2 },
                { chance: 0.5, item: flour.output2 }
            ]
        }).id(`kubejs:crushing/flour_${flour.input.split(':')[1]}`);
    });

    // 3. Pams Harvestcraft ground meats
    const meats = ['rabbit', 'mutton', 'pork', 'beef', 'chicken'];
    meats.forEach(meat => {
        event.custom({
            type: "create:crushing",
            ingredients: [{ tag: `forge:raw${meat}` }], // Changed 'item' to 'tag' and removed '#'
            processingTime: 400,
            results: [{ item: `pamhc2foodcore:ground${meat}item` }]
        }).id(`kubejs:crushing/ground_${meat}`);
    });

    // 4. Ground Fish
    event.custom({
        type: "create:crushing",
        ingredients: [{ tag: `forge:fishes` }], // Changed 'item' to 'tag' and removed '#'
        processingTime: 400,
        results: [{ item: `pamhc2foodcore:groundfishitem` }]
    }).id('kubejs:crushing/ground_fish');

    // 5. Calcite
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: 'minecraft:calcite' }],
        processingTime: 400,
        results: [
            { item: 'gtceu:raw_calcite' },
            { chance: 0.5, item: 'gtceu:calcium_dust' },
            { chance: 0.25, item: 'gtceu:raw_sodalite' }
        ]
    }).id('kubejs:crushing/calcite_processing');

    // 6. Granite Gravel to Red Sand
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: 'kubejs:granite_gravel' }],
        processingTime: 400,
        results: [{ item: 'minecraft:red_sand' }]
    }).id('kubejs:crushing/granite_gravel_to_red_sand');
});