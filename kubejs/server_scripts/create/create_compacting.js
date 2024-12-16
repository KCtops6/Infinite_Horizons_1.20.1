ServerEvents.recipes(event => {
    // iesnium ingot
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
});