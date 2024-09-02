LootJS.modifiers((event) => {
    /**
     * ['ars_nouveau:frostaya_pod', 'ars_nouveau:blue_archwood_leaves']
     */
    event.addBlockLootModifier('ars_nouveau:blue_archwood_leaves').randomChance(0.25).addLoot('ars_nouveau:frostaya_pod');
});