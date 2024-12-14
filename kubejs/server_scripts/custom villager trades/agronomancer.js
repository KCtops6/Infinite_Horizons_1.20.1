// // https://github.com/AlmostReliable/morejs/wiki/Villager-Trades
// MoreJSEvents.villagerTrades((event) => {
//     event.addTrade( // Inferium essence.
//         "spacecatcustomprofessions:agronomancer", 1,    // Profession and level.
//         [TradeItem.of('minecraft:emerald', 1, 3)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:inferium_essence', 1, 5)  // Output item.
//     );
//     event.addTrade( // Air essence.
//         "spacecatcustomprofessions:agronomancer", 1,    // Profession and level.
//         [TradeItem.of('minecraft:emerald', 1, 3), TradeItem.of('mysticalagriculture:inferium_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:air_essence', 1, 7)   // Output item.
//     );
//     event.addTrade( // Earth essence.
//         "spacecatcustomprofessions:agronomancer", 1,    // Profession and level.
//         [TradeItem.of('minecraft:emerald', 1, 3), TradeItem.of('mysticalagriculture:inferium_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:earth_essence', 1, 7) // Output item.
//     );
//     event.addTrade( // Fire essence.
//         "spacecatcustomprofessions:agronomancer", 1,    // Profession and level.
//         [TradeItem.of('minecraft:emerald', 1, 3), TradeItem.of('mysticalagriculture:inferium_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:fire_essence', 1, 7)  // Output item.
//     );
//     event.addTrade( // Water essence.
//         "spacecatcustomprofessions:agronomancer", 1,    // Profession and level.
//         [TradeItem.of('minecraft:emerald', 1, 3), TradeItem.of('mysticalagriculture:inferium_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:water_essence', 1, 7) // Output item.
//     );
//     event.addTrade( // Ice essence.
//         "spacecatcustomprofessions:agronomancer", 2,    // Profession and level.
//         [TradeItem.of('mysticalagriculture:inferium_essence', 1, 3), TradeItem.of('mysticalagriculture:water_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:ice_essence', 1, 7)   // Output item.
//     );
//     event.addTrade( // Deepslate essence
//         "spacecatcustomprofessions:agronomancer", 2,    // Profession and level.
//         [TradeItem.of('mysticalagriculture:stone_essence', 1, 5), TradeItem.of('mysticalagriculture:fire_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:deepslate_essence', 1, 7)   // Output item.
//     );
//     event.addTrade( // Nature essence
//         "spacecatcustomprofessions:agronomancer", 3,    // Profession and level.
//         [TradeItem.of('mysticalagriculture:earth_essence', 1, 5), TradeItem.of('mysticalagriculture:water_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:nature_essence', 1, 7)   // Output item.
//     );
//     event.addTrade( // Nether essence
//         "spacecatcustomprofessions:agronomancer", 3,    // Profession and level.
//         [TradeItem.of('mysticalagriculture:deepslate_essence', 1, 5), TradeItem.of('mysticalagriculture:fire_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:nether_essence', 1, 7)   // Output item.
//     );
//     event.addTrade( // Coral essence
//         "spacecatcustomprofessions:agronomancer", 3,    // Profession and level.
//         [TradeItem.of('mysticalagriculture:nature_essence', 1, 5), TradeItem.of('mysticalagriculture:water_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:coral_essence', 1, 7)   // Output item.
//     );
//     event.addTrade( // Honey essence
//         "spacecatcustomprofessions:agronomancer", 3,    // Profession and level.
//         [TradeItem.of('mysticalagriculture:nature_essence', 1, 5), TradeItem.of('mysticalagriculture:air_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:honey_essence', 1, 7)   // Output item.
//     );
//     event.addTrade( // Limestone essence
//         "spacecatcustomprofessions:agronomancer", 2,    // Profession and level.
//         [TradeItem.of('mysticalagriculture:stone_essence', 1, 5), TradeItem.of('mysticalagriculture:air_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:limestone_essence', 1, 7)   // Output item.
//     );
//     event.addTrade( // End essence
//         "spacecatcustomprofessions:agronomancer", 5,    // Profession and level.
//         [TradeItem.of('mysticalagriculture:nether_essence', 1, 5), TradeItem.of('mysticalagriculture:air_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:end_essence', 1, 7)   // Output item.
//     );
//     event.addTrade( // Blaze essence
//         "spacecatcustomprofessions:agronomancer", 5,    // Profession and level.
//         [TradeItem.of('mysticalagriculture:nether_essence', 1, 5), TradeItem.of('mysticalagriculture:fire_essence', 1, 5)],  // Input item(s).
//         TradeItem.of('mysticalagriculture:blaze_essence', 1, 7)   // Output item.
//     );
// });

// https://github.com/AlmostReliable/morejs/wiki/Villager-Trades
MoreJSEvents.villagerTrades((event) => {
    const trades = [
        { level: 1, inputs: [['minecraft:emerald', 1, 3]], output: ['mysticalagriculture:inferium_essence', 1, 5] },
        { level: 1, inputs: [['minecraft:emerald', 1, 3], ['mysticalagriculture:inferium_essence', 1, 5]], output: ['mysticalagriculture:air_essence', 1, 7] },
        { level: 1, inputs: [['minecraft:emerald', 1, 3], ['mysticalagriculture:inferium_essence', 1, 5]], output: ['mysticalagriculture:earth_essence', 1, 7] },
        { level: 1, inputs: [['minecraft:emerald', 1, 3], ['mysticalagriculture:inferium_essence', 1, 5]], output: ['mysticalagriculture:fire_essence', 1, 7] },
        { level: 1, inputs: [['minecraft:emerald', 1, 3], ['mysticalagriculture:inferium_essence', 1, 5]], output: ['mysticalagriculture:water_essence', 1, 7] },
        { level: 2, inputs: [['mysticalagriculture:inferium_essence', 1, 3], ['mysticalagriculture:water_essence', 1, 5]], output: ['mysticalagriculture:ice_essence', 1, 7] },
        { level: 2, inputs: [['mysticalagriculture:stone_essence', 1, 5], ['mysticalagriculture:fire_essence', 1, 5]], output: ['mysticalagriculture:deepslate_essence', 1, 7] },
        { level: 3, inputs: [['mysticalagriculture:earth_essence', 1, 5], ['mysticalagriculture:water_essence', 1, 5]], output: ['mysticalagriculture:nature_essence', 1, 7] },
        { level: 3, inputs: [['mysticalagriculture:deepslate_essence', 1, 5], ['mysticalagriculture:fire_essence', 1, 5]], output: ['mysticalagriculture:nether_essence', 1, 7] },
        { level: 3, inputs: [['mysticalagriculture:nature_essence', 1, 5], ['mysticalagriculture:water_essence', 1, 5]], output: ['mysticalagriculture:coral_essence', 1, 7] },
        { level: 3, inputs: [['mysticalagriculture:nature_essence', 1, 5], ['mysticalagriculture:air_essence', 1, 5]], output: ['mysticalagriculture:honey_essence', 1, 7] },
        { level: 2, inputs: [['mysticalagriculture:stone_essence', 1, 5], ['mysticalagriculture:air_essence', 1, 5]], output: ['mysticalagriculture:limestone_essence', 1, 7] },
        { level: 5, inputs: [['mysticalagriculture:nether_essence', 1, 5], ['mysticalagriculture:air_essence', 1, 5]], output: ['mysticalagriculture:end_essence', 1, 7] },
        { level: 5, inputs: [['mysticalagriculture:nether_essence', 1, 5], ['mysticalagriculture:fire_essence', 1, 5]], output: ['mysticalagriculture:blaze_essence', 1, 7] },
    ];

    trades.forEach(trade => {
        event.addTrade(
            "spacecatcustomprofessions:agronomancer", 
            trade.level,
            trade.inputs.map(item => TradeItem.of(...item)),
            TradeItem.of(...trade.output)
        );
    });
});
