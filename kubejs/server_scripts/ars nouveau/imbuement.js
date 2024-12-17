ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.imbuement(
        "minecraft:sweet_berries", // input item
        "ars_nouveau:sourceberry_bush", // output
        1000, // source cost
        []
    )
    event.custom({
        type: "ars_nouveau:imbuement",
        input: {
            item: "minecraft:sweet_berries"
        },
        output: {
            count: 1,
            id: "ars_nouveau:sourceberry_bush"
        },
        pedestalItems: [],
        source: 500
    });
});