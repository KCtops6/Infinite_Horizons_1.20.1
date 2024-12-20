ServerEvents.recipes(event => {
    // simple crushing input to output mappings (no chanced outputs)
    const recipes = [
        { input: 'minecraft:andesite', output: 'kubejs:andesite_gravel'},
        { input: 'minecraft:diorite', output: 'kubejs:diorite_gravel'},
        { input: 'minecraft:granite', output: 'kubejs:granite_gravel'},
        { input: 'minecraft:gravel', output: 'minecraft:sand'},
        { input: 'minecraft:tuff', output: 'kubejs:tuff_gravel'},
        { input: 'minecraft:sand', output: 'createsifter:dust'},
        { input: 'minecraft:cobbled_deepslate', output: 'kubejs:deepslate_gravel'},
        { input: 'minecraft:basalt', output: 'kubejs:basalt_gravel'},
        { input: 'create:limestone', output: 'kubejs:limestone_gravel'},
        { input: 'forbidden_arcanus:darkstone', output: 'kubejs:darkstone_gravel'}
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

    // netherack and end stone
    const flours = [
        { input: 'minecraft:end_stone', output1: 'kubejs:end_stone_gravel', output2: 'kubejs:void_flour'},
        { input: 'minecraft:netherrack', output1: 'kubejs:netherrack_gravel', output2: 'create:cinder_flour'}
    ];
    flours.forEach(flour => {
        event.custom({
            type: "create:crushing",
            ingredients: [
                {
                    item: flour.input
                }
            ],
            processingTime: 400,
            results: [
                {
                    item: flour.output1
                },
                {
                    item: flour.output2
                },
                {
                    chance: 0.5,
                    item: flour.output2
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

    // calcite
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                item: 'minecraft:calcite'
            }
        ],
        processingTime: 400,
        results: [
            {
                item: 'gtceu:raw_calcite'
            },
            {
                chance: 0.5,
                item: 'gtceu:calcium_dust'
            },
            {
                chance: 0.25,
                item: 'gtceu:raw_sodalite'
            }
        ]
    });
});