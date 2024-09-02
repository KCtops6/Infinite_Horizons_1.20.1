// for 1.18 pls use: onEvent("morejs.villager.trades", (event) => { ... })
// https://github.com/AlmostReliable/morejs/wiki/Villager-Trades
MoreJSEvents.wandererTrades((event) => {
    const potterySherds = [
        'minecraft:angler_pottery_sherd',
        'minecraft:archer_pottery_sherd',
        'minecraft:arms_up_pottery_sherd',
        'minecraft:blade_pottery_sherd',
        'minecraft:brewer_pottery_sherd',
        'minecraft:burn_pottery_sherd',
        'minecraft:danger_pottery_sherd',
        'minecraft:explorer_pottery_sherd',
        'minecraft:friend_pottery_sherd',
        'minecraft:shelter_pottery_sherd',
        'minecraft:skull_pottery_sherd',
        'minecraft:snort_pottery_sherd',
        'minecraft:sheaf_pottery_sherd',
        'minecraft:prize_pottery_sherd',
        'minecraft:plenty_pottery_sherd',
        'minecraft:mourner_pottery_sherd',
        'minecraft:miner_pottery_sherd',
        'minecraft:howl_pottery_sherd',
        'minecraft:heartbreak_pottery_sherd',
        'minecraft:heart_pottery_sherd'
    ];
    potterySherds.forEach((sherd) => {
        event.addTrade(2, ['minecraft:emerald'], sherd);
    });
});