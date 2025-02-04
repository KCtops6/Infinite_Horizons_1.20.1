ServerEvents.recipes(event => {
    // void cake base
    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                item: 'minecraft:egg'
            },
            {
                item: 'minecraft:sugar'
            },
            {
                item: 'kubejs:void_flour'
            }
        ],
        results: [
            {
                item: 'kubejs:void_cake_base'
            }
        ]
    });

    // void cake base
    event.custom({
        type: "create:compacting",
        heatRequirement: "superheated",
        ingredients: [
            {
                count: 4,
                item: 'kubejs:dark_matter'
            }
        ],
        results: [
            {
                item: 'minecraft:sculk'
            }
        ]
    });
});