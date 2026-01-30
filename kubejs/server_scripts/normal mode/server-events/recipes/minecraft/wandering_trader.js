MoreJSEvents.wandererTrades((event) => {
    const dungeonKeys = [
        'kubejs:desert_temple_dungeon_key',
        'kubejs:jungle_temple_dungeon_key',
        'kubejs:stronghold_dungeon_key'
    ];
    dungeonKeys.forEach((key) => {
        event.addTrade(2, '25x minecraft:emerald', key);
    });
    event.addTrade(2, ['25x minecraft:emerald'], 'kubejs:explorer_map');
    const musicDiscs = [
        'minecraft:music_disc_otherside',
        'minecraft:music_disc_relic'
    ];
    const tradeItems = ['3x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')];
    musicDiscs.forEach((disc) => {
        event.addTrade(2, tradeItems, disc);
    });
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
    /**
     * DUNGEON SMITHING TEMPLATES
     * 'kubejs:desert_temple_dungeon_key'
     * 'kubejs:jungle_temple_dungeon_key'
     * 'kubejs:stronghold_dungeon_key'
     * 'kubejs:explorer_map'
     * 'minecraft:wild_armor_trim_smithing_template'
     * 'minecraft:dune_armor_trim_smithing_template'
     * 'minecraft:eye_armor_trim_smithing_template'
     */
    event.addTrade(2, ['kubejs:explorer_map', 'kubejs:desert_temple_dungeon_key'], 'minecraft:dune_armor_trim_smithing_template');
    event.addTrade(2, ['kubejs:explorer_map', 'kubejs:jungle_temple_dungeon_key'], 'minecraft:wild_armor_trim_smithing_template');
    event.addTrade(2, ['kubejs:explorer_map', 'kubejs:stronghold_dungeon_key'], 'minecraft:eye_armor_trim_smithing_template');
    event.addTrade(2, ['5x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')], 'minecraft:sniffer_egg');
    const sandTemplates = [
        'minecraft:wayfinder_armor_trim_smithing_template',
        'minecraft:raiser_armor_trim_smithing_template',
        'minecraft:shaper_armor_trim_smithing_template',
        'minecraft:host_armor_trim_smithing_template'
    ];
    const tradeItems2 = ['3x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')];
    sandTemplates.forEach((template) => {
        event.addTrade(2, tradeItems2, template);
    });
});
