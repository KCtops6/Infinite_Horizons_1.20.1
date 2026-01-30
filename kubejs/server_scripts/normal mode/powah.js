ServerEvents.recipes(event => {
    // energized steel block
    event.custom({
        type: "powah:energizing",
        ingredients: [
            {
                item: "minecraft:gold_block"
            },
            {
                item: "minecraft:iron_block"
            }
        ],
        energy: 90000,
        result: {
            count: 2,
            item: "powah:energized_steel_block"
        }
    });

    // blazing crystal block
    event.custom({
        type: "powah:energizing",
        ingredients: [
            {
                item: "botania:blaze_block"
            }
        ],
        energy: 180000,
        result: {
            item: "powah:blazing_crystal_block"
        }
    });

    // niotic crystal block
    event.custom({
        type: "powah:energizing",
        ingredients: [
            {
                item: "minecraft:diamond_block"
            }
        ],
        energy: 2700000,
        result: {
            item: "powah:niotic_crystal_block"
        }
    });

    event.custom({
        type: "powah:energizing",
        ingredients: [
            {
                item: "minecraft:emerald_block"
            }
        ],
        energy: 9000000,
        result: {
            item: "powah:spirited_crystal_block"
        }
    });
});