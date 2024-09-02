// for 1.18 pls use: onEvent("morejs.villager.trades", (event) => { ... })
// https://github.com/AlmostReliable/morejs/wiki/Villager-Trades
MoreJSEvents.wandererTrades((event) => {
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