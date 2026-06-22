//ignored: false
MoreJSEvents.villagerTrades((event) => {
    const simpleTrades = 
    
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 3)], Item.of('minecraft:amethyst_shard', 7));
    event.addTrade("farmer", 2, [Item.of('minecraft:emerald', 2)], Item.of('minecraft:ink_sac', 16));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:blue_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:green_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:purple_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:red_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_elemental:yellow_archwood_sapling', 5));
    event.addTrade(
        "spacecatcustomprofessions:agronomancer", 1,
        [Item.of('minecraft:emerald', 3)],
        Item.of('mysticalagriculture:inferium_essence', 5)
    );
    const agronomancerTrades = [
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:air_essence', count: 7 }
        },
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:earth_essence', count: 7 }
        },
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:fire_essence', count: 7 }
        },
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:water_essence', count: 7 }
        },
        {
            level: 3,
            inputs: [
                { item: 'mysticalagriculture:inferium_essence', count: 3 },
                { item: 'mysticalagriculture:water_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:ice_essence', count: 7 }
        },
        { 
            level: 3, 
            inputs: [
                { item: 'mysticalagriculture:stone_essence', count: 5 },
                { item: 'mysticalagriculture:fire_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:deepslate_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:earth_essence', count: 5 },
                { item: 'mysticalagriculture:water_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:nature_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:deepslate_essence', count: 5 },
                { item: 'mysticalagriculture:fire_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:nether_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:nature_essence', count: 5 },
                { item: 'mysticalagriculture:water_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:coral_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:nature_essence', count: 5 },
                { item: 'mysticalagriculture:air_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:honey_essence', count: 7 } 
        },
        { 
            level: 3, 
            inputs: [
                { item: 'mysticalagriculture:stone_essence', count: 5 },
                { item: 'mysticalagriculture:air_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:limestone_essence', count: 7 } 
        },
        { 
            level: 5, 
            inputs: [
                { item: 'mysticalagriculture:nether_essence', count: 5 },
                { item: 'mysticalagriculture:air_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:end_essence', count: 7 } 
        },
        { 
            level: 5, 
            inputs: [
                { item: 'mysticalagriculture:nether_essence', count: 5 },
                { item: 'mysticalagriculture:fire_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:blaze_essence', count: 7 } 
        }
    ];

    agronomancerTrades.forEach((trade) => {
        event.addTrade(
            "spacecatcustomprofessions:agronomancer",
            trade.level,
            [
                Item.of(trade.inputs[0].item, trade.inputs[0].count),
                Item.of(trade.inputs[1].item, trade.inputs[1].count)
            ],
            Item.of(trade.output.item, trade.output.count)
        );
    });
});