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
    
});