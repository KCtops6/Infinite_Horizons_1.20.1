ServerEvents.recipes(event => {
    // Create pressing plates
    const ingotToPlate = [
        'brass', 'constantan', 'electrum',
        'enderium', 
        'infinitium', 'invar', 'lead',
        'lumium', 'manasteel', 'netherite',
        'nickel', 'signalum', 'silver', 'terrasteel', 'tin'
    ]
    ingotToPlate.forEach(i => {
        event.custom({
            type: "create:pressing",
            ingredients: [
                {
                    item: `kubejs:${i}_ingot`
                }
            ],
            results: [
                {
                    item: `kubejs:${i}_plate`
                }
            ]
        });
    });
    event.custom({
        type: "create:pressing",
        ingredients: [{ item: 'kubejs:raw_rubber' }],
        results: [{ item: 'kubejs:rubber_sheet'}]
    }).id('raw_rubber_to_rubber_sheet');
});