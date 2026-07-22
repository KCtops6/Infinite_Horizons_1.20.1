//ignored: false
MoreJSEvents.villagerTrades((event) => {
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 3)], Item.of('minecraft:amethyst_shard', 7));
    event.addTrade("farmer", 2, [Item.of('minecraft:emerald', 2)], Item.of('minecraft:ink_sac', 16));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:blue_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:green_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:purple_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_nouveau:red_archwood_sapling', 5));
    event.addTrade("cleric", 2, [Item.of('minecraft:emerald', 1)], Item.of('ars_elemental:yellow_archwood_sapling', 5));
});