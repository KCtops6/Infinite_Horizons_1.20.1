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

    const apiaristTrades = [
        // Ashy Mining Bee
        {
            level: 1,
            input1: Item.of('productivebees:gravel_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_ashy_mining_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:sand_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_ashy_mining_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:coarse_dirt_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_ashy_mining_bee')
        },
        // Chocolate Mining Bee
        {
            level: 1,
            input1: Item.of('productivebees:gravel_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_chocolate_mining_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:sand_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_chocolate_mining_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:coarse_dirt_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_chocolate_mining_bee')
        },
        // Green Carpenter Bee
        {
            level: 1,
            input1: Item.of('productivebees:dark_oak_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_green_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:oak_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_green_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:mangrove_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_green_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:jungle_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_green_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:birch_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_green_carpenter_bee')
        },
        // Yellow Carpenter Bee
        {
            level: 1,
            input1: Item.of('productivebees:dark_oak_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_yellow_black_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:oak_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_yellow_black_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:birch_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_yellow_black_carpenter_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:spruce_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_yellow_black_carpenter_bee')
        },
        // Resin Bee
        {
            level: 1,
            input1: Item.of('productivebees:spruce_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_resin_bee')
        },
        // Blue Banded Bee
        {
            level: 1,
            input1: Item.of('productivebees:dark_oak_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_blue_banded_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:cherry_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_blue_banded_bee')
        },
        {
            level: 1,
            input1: Item.of('productivebees:acacia_wood_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_blue_banded_bee')
        },
        // Mason Bee
        {
            level: 2,
            input1: Item.of('productivebees:stone_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_mason_bee')
        },
        {
            level: 2,
            input1: Item.of('productivebees:sugar_cane_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_mason_bee')
        },
        // Digger Bee
        {
            level: 2,
            input1: Item.of('productivebees:stone_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_digger_bee')
        },
        {
            level: 2,
            input1: Item.of('productivebees:gravel_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_digger_bee')
        },
        // Leafcutter Bee
        {
            level: 1,
            input1: Item.of('productivebees:coarse_dirt_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_leafcutter_bee')
        },
        // Sweat Bee
        {
            level: 2,
            input1: Item.of('productivebees:snow_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_sweat_bee')
        },
        // Reed Bee
        {
            level: 2,
            input1: Item.of('productivebees:sugar_cane_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_reed_bee')
        },
        // Slimy Bee
        {
            level: 2,
            input1: Item.of('productivebees:slimy_nest'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:slimy"}}')
        },
        // Glowing Bee
        {
            level: 3,
            input1: Item.of('productivebees:glowstone_nest'),
            input2: Item.of('minecraft:glowstone_dust'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:glowing"}}')
        },
        // Ghostly Bee
        {
            level: 3,
            input1: Item.of('productivebees:soul_sand_nest'),
            input2: Item.of('minecraft:ghast_tear'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:ghostly"}}')
        },
        // Crystalline Bee
        {
            level: 3,
            input1: Item.of('productivebees:nether_quartz_nest'),
            input2: Item.of('minecraft:quartz'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:crystalline"}}')
        },
        // Gold Bee
        {
            level: 4,
            input1: Item.of('productivebees:nether_gold_nest'),
            input2: Item.of('minecraft:gold_ingot'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:gold"}}')
        },
        // Magmatic Bee
        {
            level: 5,
            input1: Item.of('productivebees:nether_brick_nest'),
            input2: Item.of('minecraft:magma_cream'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:magmatic"}}')
        },
        // Ender Bee
        {
            level: 5,
            input1: Item.of('productivebees:end_stone_nest'),
            input2: Item.of('minecraft:popped_chorus_fruit'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:ender"}}')
        },
        // Draconic Bee
        {
            level: 5,
            input1: Item.of('productivebees:end_stone_nest'),
            input2: Item.of('minecraft:dragon_breath'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:draconic"}}')
        },
        // Neon Cuckoo Bee
        {
            level: 2,
            input1: Item.of('productivebees:spawn_egg_blue_banded_bee'),
            input2: Item.of('minecraft:emerald', 3),
            output: Item.of('productivebees:spawn_egg_neon_cuckoo_bee')
        },
        // Nomad Bee
        {
            level: 2,
            input1: Item.of('productivebees:spawn_egg_ashy_mining_bee'),
            input2: Item.of('minecraft:emerald', 3),
            output: Item.of('productivebees:spawn_egg_nomad_bee')
        },
        // Oily Bee
        {
            level: 5,
            input1: Item.of('minecraft:fishing_rod', '{Damage:0}'),
            input2: Item.of('productivebees:honey_treat'),
            output: Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:oily"}}')
        },
    ];

    apiaristTrades.forEach(trade => {
        event.addTrade("spacecatcustomprofessions:apiarist", trade.level, [trade.input1, trade.input2], trade.output);
    });
});

