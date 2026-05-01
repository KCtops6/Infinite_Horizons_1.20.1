MoreJSEvents.wandererTrades(event => {
    const EMERALD = 'minecraft:emerald'
    const ORDINARY_OUTPUTS_TO_REMOVE = [
        'minecraft:gunpowder', 'minecraft:oak_log', 'minecraft:dandelion',
        'minecraft:poppy', 'minecraft:wheat_seeds', 'minecraft:sand',
        'minecraft:oak_sapling'
    ];
    ORDINARY_OUTPUTS_TO_REMOVE.forEach(item => {
        event.removeTrades({ firstItem: EMERALD, secondItem: null, outputItem: item});
    });
});