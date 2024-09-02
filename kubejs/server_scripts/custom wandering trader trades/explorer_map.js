// for 1.18 pls use: onEvent("morejs.villager.trades", (event) => { ... })
// https://github.com/AlmostReliable/morejs/wiki/Villager-Trades
MoreJSEvents.wandererTrades((event) => {
    event.addTrade(2, ['25x minecraft:emerald'], 'kubejs:explorer_map')
});