ServerEvents.recipes(event => {
    // pebbles
    event.custom({
        type: "create:splashing",
        ingredients: [
            {
                item: "minecraft:dirt"
            }
        ],
        results: [
            {
                count: 3,
                item: 'infinite_horizons_tweaks:stone_pebble'
            }
        ]
    });
});