MoreJSEvents.villagerTrades(event => {
    event.removeTrades({ 
        firstItem: 'minecraft:diamond',
        secondItem: null,
        outputItem: 'minecraft:emerald'
    });
    event.removeTrades({ 
        firstItem: null,
        secondItem: null,
        outputItem: 'ae2:meteorite_compass'
    });
});