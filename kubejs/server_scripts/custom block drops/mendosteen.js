LootJS.modifiers((event) => {
    /**
     * ['ars_nouveau:mendosteen_pod', 'ars_nouveau:green_archwood_leaves']
     */
    event.addBlockLootModifier('ars_nouveau:green_archwood_leaves').randomChance(0.25).addLoot('ars_nouveau:mendosteen_pod');
});