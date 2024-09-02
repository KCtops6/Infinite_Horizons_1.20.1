// for 1.18 pls use: onEvent("morejs.villager.trades", (event) => { ... })
// https://github.com/AlmostReliable/morejs/wiki/Villager-Trades
MoreJSEvents.wandererTrades((event) => {
    const musicDiscs = [
        'minecraft:music_disc_otherside',
        'minecraft:music_disc_relic'
    ];
    const tradeItems = ['3x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')];
    musicDiscs.forEach((disc) => {
        event.addTrade(2, tradeItems, disc);
    });
});