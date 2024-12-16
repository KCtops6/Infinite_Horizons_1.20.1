ServerEvents.recipes(event => {
    // void cake
    event.custom({
        type: "create:filling",
        ingredients: [
            {
                item: 'create:void_cake_base'
            },
            {
                amount: 250,
                fluid: 'minecraft:liquid_ender_pearl', 
            }
        ],
        results: [
            {
                item: 'kubejs:void_cake'
            }
        ]
    });
    // honey treat
    event.custom({
        type: "create:filling",
        ingredients: [
            {
                item: 'minecraft:honeycomb'
            },
            {
                amount: 250,
                fluid: 'productivebees:honey', 
            }
        ],
        results: [
            {
                item: 'productivebees:honey_treat'
            }
        ]
    });
});