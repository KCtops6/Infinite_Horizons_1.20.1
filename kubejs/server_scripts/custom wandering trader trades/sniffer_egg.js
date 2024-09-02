// for 1.18 pls use: onEvent("morejs.villager.trades", (event) => { ... })
// https://github.com/AlmostReliable/morejs/wiki/Villager-Trades
MoreJSEvents.wandererTrades((event) => {
    event.addTrade(2, ['5x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')], 'minecraft:sniffer_egg');
});