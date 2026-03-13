MoreJSEvents.villagerTrades(event => {
    event.addTrade('minecraft:fisherman', 5, [
        TradeItem.of('minecraft:bucket'), TradeItem.of('minecraft:emerald', 3, 5)
    ], TradeItem.of('quark:crab_bucket'));
});