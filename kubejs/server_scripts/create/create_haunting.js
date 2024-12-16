ServerEvents.recipes(event => {
    // iesnium ingot
    event.custom({
        type: "create:haunting",
        ingredients: [
            {
                tag: 'minecraft:gold_ingot'
            }
        ],
        results: [
            {
                item: 'occultism:iesnium_ingot'
            }
        ]
    });
});