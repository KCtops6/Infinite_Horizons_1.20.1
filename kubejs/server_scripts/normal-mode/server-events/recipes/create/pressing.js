ServerEvents.recipes(event => {
    const ingotToPlate = [
        'brass', 'constantan', 'electrum', 'enderium', 'infinitium', 
        'invar', 'lead', 'lumium', 'netherite', 'nickel', 'signalum', 'silver', 'tin'
    ];
    ingotToPlate.forEach(i => {
        const getIngredient = (name) => {
            const vanilla = ['iron', 'gold', 'copper', 'netherite'];
            return vanilla.includes(name) ? `minecraft:${name}_ingot` : `kubejs:${name}_ingot`;
        };
        const getPlate = (name) => {
            return `kubejs:${name}_plate`;
        };
        event.custom({
            type: "create:pressing",
            ingredients: [
                { item: getIngredient(i) }
            ],
            results: [
                { item: getPlate(i) }
            ]
        });
    });
});
