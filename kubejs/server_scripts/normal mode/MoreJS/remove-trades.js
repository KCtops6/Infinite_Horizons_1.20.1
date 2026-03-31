MoreJSEvents.villagerTrades(event => {
    event.removeTrades({ 
        firstItem: 'minecraft:diamond',
        secondItem: null,
        outputItem: 'minecraft:emerald'
    });
});