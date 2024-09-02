// for 1.18 pls use: onEvent("morejs.villager.trades", (event) => { ... })
// https://github.com/AlmostReliable/morejs/wiki/Villager-Trades 
MoreJSEvents.wandererTrades((event) => {
    /**
     * POTTERY SHERDS
     * 'minecraft:angler_pottery_sherd'
     * 'minecraft:archer_pottery_sherd'
     * 'minecraft:arms_up_pottery_sherd'
     * 'minecraft:blade_pottery_sherd'
     * 'minecraft:brewer_pottery_sherd'
     * 'minecraft:burn_pottery_sherd'
     * 'minecraft:danger_pottery_sherd'
     * 'minecraft:explorer_pottery_sherd'
     * 'minecraft:friend_pottery_sherd'
     * 'minecraft:shelter_pottery_sherd'
     * 'minecraft:skull_pottery_sherd'
     * 'minecraft:snort_pottery_sherd'
     * 'minecraft:sheaf_pottery_sherd'
     * 'minecraft:prize_pottery_sherd'
     * 'minecraft:plenty_pottery_sherd'
     * 'minecraft:mourner_pottery_sherd'
     * 'minecraft:miner_pottery_sherd'
     * 'minecraft:howl_pottery_sherd'
     * 'minecraft:heartbreak_pottery_sherd'
     * 'minecraft:heart_pottery_sherd'
     */
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:angler_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:archer_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:arms_up_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:blade_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:brewer_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:burn_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:danger_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:explorer_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:friend_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:shelter_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:skull_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:snort_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:sheaf_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:prize_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:plenty_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:mourner_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:miner_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:howl_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:heartbreak_pottery_sherd');
    event.addTrade(2, ['minecraft:emerald'], 'minecraft:heart_pottery_sherd');
    /**
     * VANILLA MUSIC DISCS
     * 'minecraft:music_disc_otherside'
     * 'minecraft:music_disc_relic'
     */
    event.addTrade(2, ['3x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')], 'minecraft:music_disc_otherside');
    event.addTrade(2, ['3x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')], 'minecraft:music_disc_relic');
    /**
     * SUSPICIOUS SAND TEMPLATES
     * 'minecraft:wayfinder_armor_trim_smithing_template'
     * 'minecraft:raiser_armor_trim_smithing_template'
     * 'minecraft:shaper_armor_trim_smithing_template'
     * 'minecraft:host_armor_trim_smithing_template'
     */
    event.addTrade(2, ['3x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')], 'minecraft:wayfinder_armor_trim_smithing_template');
    event.addTrade(2, ['3x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')], 'minecraft:raiser_armor_trim_smithing_template');
    event.addTrade(2, ['3x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')], 'minecraft:shaper_armor_trim_smithing_template');
    event.addTrade(2, ['3x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')], 'minecraft:host_armor_trim_smithing_template');
    /**
     * SNIFFER EGG
     * 'minecraft:sniffer_egg'
     */
    event.addTrade(2, ['5x minecraft:emerald', Item.of('minecraft:brush', '{Damage:0}')], 'minecraft:sniffer_egg');
    /**
     * DUNGEON KEYS
     * 'kubejs:desert_temple_dungeon_key'
     * 'kubejs:jungle_temple_dungeon_key'
     * 'kubejs:stronghold_dungeon_key'
     * '25x minecraft:emerald'
     */
    event.addTrade(2, ['25x minecraft:emerald'], 'kubejs:desert_temple_dungeon_key');
    event.addTrade(2, ['25x minecraft:emerald'], 'kubejs:jungle_temple_dungeon_key');
    event.addTrade(2, ['25x minecraft:emerald'], 'kubejs:stronghold_dungeon_key');
    /**
     * EXPLORER MAP
     * 'kubejs:explorer_map'
     * '25x minecraft:emerald'
     */
    event.addTrade(2, ['25x minecraft:emerald'], 'kubejs:explorer_map')
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
});