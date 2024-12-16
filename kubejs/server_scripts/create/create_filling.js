ServerEvents.recipes(event => {
    event.custom({
        type: "create:filling",
        ingredients: [
            {
                item: "minecraft:honeycomb"
            },
            {
                amount: 250,
                fluid: "productivebees:honey",
                nbt: {}
            }
        ],
        results: [
            {
                item: "productivebees:honey_treat"
            }
        ]
    });
});