ServerEvents.recipes(event => {
    // iesnium ingot
    event.custom({
        type: "create:haunting",
        ingredients: [
            {
                item: 'minecraft:gold_ingot'
            }
        ],
        results: [
            {
                item: 'occultism:iesnium_ingot'
            }
        ]
    });
});